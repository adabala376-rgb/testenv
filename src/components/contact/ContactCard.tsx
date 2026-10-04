import React from "react";
import { Mail, Phone, MessageSquare, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Card } from "@/components/ui/Card";

export function ContactCards() {
  const cards = [
    {
      id: "email",
      title: "Email Us",
      value: siteConfig.contact.email,
      href: siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : "",
      icon: Mail,
      isExternal: false,
    },
    {
      id: "phone",
      title: "Call Us",
      value: siteConfig.contact.phone,
      href: siteConfig.contact.phone ? `tel:${siteConfig.contact.phone}` : "",
      icon: Phone,
      isExternal: false,
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      value: siteConfig.contact.phone ? "Chat directly on WhatsApp" : "",
      href: siteConfig.contact.whatsappNumber
        ? `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
            siteConfig.contact.whatsappMessage
          )}`
        : "",
      icon: MessageSquare,
      isExternal: true,
    },
    {
      id: "location",
      title: "Location",
      value: siteConfig.contact.location,
      href: "",
      icon: MapPin,
      isExternal: false,
    },
  ];

  // Hide any card whose value is empty
  const activeCards = cards.filter((c) => Boolean(c.value));

  return (
    <div className="space-y-4">
      {activeCards.map((card) => {
        const Icon = card.icon;
        const innerContent = (
          <Card className="p-5 flex items-center justify-between group cursor-pointer transition-all duration-200 hover:-translate-y-0.5 border-white/[0.08] hover:border-[#E31E24]/60">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#E31E24]/10 border border-[#E31E24]/30 flex items-center justify-center text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-[0_0_12px_rgba(227,30,36,0.2)]">
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs uppercase tracking-[0.14em] text-[#9BA1AD] font-semibold">
                  {card.title}
                </div>
                <div className="text-sm sm:text-base font-semibold text-white">
                  {card.value}
                </div>
              </div>
            </div>
            {card.href && (
              <ArrowRight className="w-4 h-4 text-[#BDBDBD] group-hover:text-[#E31E24] group-hover:translate-x-1 transition-all" />
            )}
          </Card>
        );

        if (!card.href) {
          return <div key={card.id}>{innerContent}</div>;
        }

        return (
          <a
            key={card.id}
            href={card.href}
            target={card.isExternal ? "_blank" : undefined}
            rel={card.isExternal ? "noopener noreferrer" : undefined}
            className="block"
          >
            {innerContent}
          </a>
        );
      })}
    </div>
  );
}
