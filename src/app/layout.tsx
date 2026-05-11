import type { Metadata } from "next";
import { AnimationProvider } from "@/components/providers/AnimationProvider";
import { Navbar } from "@/components/navigation/Navbar";
import { notoSans, patrickHand } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Engineer Portfolio",
  description: "Ghibli-inspired AI Engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${patrickHand.variable} ${notoSans.variable}`}>
      <body className="bg-background font-body text-foreground">
        <Navbar />
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
