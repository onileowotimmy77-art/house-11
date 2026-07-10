import {
  Geist,
  Geist_Mono,
  Cormorant_Garamond,
} from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});