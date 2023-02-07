import { Overpass, Ubuntu } from "@next/font/google";

export const OverpassFont = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
});

export const UbuntuFont = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});
