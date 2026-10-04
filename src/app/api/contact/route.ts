import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Basic in-memory rate limiting map: ip -> timestamps
const ipRequests = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(40).optional(),
  projectType: z.string().min(1, "Project type is required"),
  message: z.string().min(5, "Message must be at least 5 characters").max(4000),
  referenceLink: z.string().max(500).optional(),
  // Honeypot field for bot protection: must be empty
  company_fax_website: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    // 1. IP-based rate limiting
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const timestamps = ipRequests.get(ip) || [];
    const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

    if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }
    validTimestamps.push(now);
    ipRequests.set(ip, validTimestamps);

    // 2. Parse body
    const body = await req.json();

    // Honeypot check: bots fill hidden fields
    if (body.company_fax_website) {
      // Silently accept to fool the bot without sending email
      return NextResponse.json({
        success: true,
        message: "Message received.",
      });
    }

    // 3. Zod validation
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, projectType, message, referenceLink } = parsed.data;

    // 4. Verify Resend configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@airmix.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!resendApiKey) {
      console.warn(
        "[AirMix Contact API] RESEND_API_KEY is not configured in environment variables. Email could not be sent automatically."
      );
      return NextResponse.json(
        {
          success: false,
          missingConfig: true,
          message:
            "Email service is currently awaiting API configuration. Please message us directly on WhatsApp or email us directly.",
        },
        { status: 503 }
      );
    }

    // 5. Send email via Resend
    const resend = new Resend(resendApiKey);

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[AirMix Inquiry] ${projectType} from ${name}`,
      text: `New project inquiry received via AirMix website:\n\nName: ${name}\nEmail: ${email}\nPhone/WhatsApp: ${phone || "Not provided"}\nProject Type: ${projectType}\nReference Link: ${referenceLink || "None"}\n\nMessage:\n${message}`,
    });

    if (emailResponse.error) {
      console.error("[AirMix Contact API] Resend error:", emailResponse.error);
      return NextResponse.json(
        {
          error: "Failed to dispatch email. Please try WhatsApp or email directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thanks! We'll get back to you within 24 hours.",
    });
  } catch (err) {
    console.error("[AirMix Contact API] Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
