import type { ReactNode } from "react";
import { publicPageMetadata } from "@/lib/public-page-metadata";

export const metadata = publicPageMetadata(
  "/contact-information",
  "Contact FahamPesa | Business Software & Nairobi Showroom",
  "Explore business software, property management and online selling with FahamPesa. Visit Diamond Plaza 1, 4th floor, Parklands, Nairobi. Call 0716 908 595 or WhatsApp +254 117 154 195.",
);

export default function PublicPageLayout({ children }: { children: ReactNode }) {
  return children;
}
