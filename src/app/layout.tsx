import type { Metadata } from "next";
import { AnimationProvider } from "@/components/providers/AnimationProvider";
import { Navbar } from "@/components/navigation/Navbar";
import { notoSans, patrickHand } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | AI Engineer Portfolio",
    default: "AI Engineer Portfolio — Ghibli-Inspired",
  },
  description:
    "AI Engineer portfolio with Studio Ghibli-inspired design. Explore AI/ML projects, skills, and experience through an immersive animated storytelling experience.",
  metadataBase: new URL("https://username.github.io/Portfolio"),
  openGraph: {
    type: "website",
    title: "AI Engineer Portfolio",
    description:
      "AI Engineer portfolio with Studio Ghibli-inspired design. Explore AI/ML projects, skills, and experience through an immersive animated storytelling experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Engineer Portfolio",
      },
    ],
    siteName: "AI Engineer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineer Portfolio",
    description:
      "AI Engineer portfolio with Studio Ghibli-inspired design. Explore AI/ML projects, skills, and experience through an immersive animated storytelling experience.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${patrickHand.variable} ${notoSans.variable}`}>
      <body className="bg-background font-body text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
