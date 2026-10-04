# AirMix Intro Video & Media Assets

Place the official AirMix video assets in this directory:

- `intro.mp4`: H.264 encoded video (recommended 1080p or 720p, 24/30fps, 2-4 Mbps bitrate, under 15MB for fast Vercel edge delivery).
- `intro.webm`: Optional WebM format for high-efficiency browser playback.
- `intro-poster.jpg`: High-resolution video poster frame shown while video loads or when `prefers-reduced-motion` is enabled.

### FFmpeg Compression Command
If your video file is too large, run:
```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -preset slow -acodec aac -b:a 192k -movflags +faststart intro.mp4
ffmpeg -ss 00:00:01 -i intro.mp4 -vframes 1 -q:v 2 intro-poster.jpg
```
Until `intro.mp4` is provided, the website automatically displays an animated CSS/SVG studio waveform brand intro.
