import { Noto_Sans, Patrick_Hand } from "next/font/google";

export const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-patrick-hand",
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});
