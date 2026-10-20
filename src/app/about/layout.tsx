import type { ReactNode } from "react";
import { publicPageMetadata } from "@/lib/public-page-metadata";

export const metadata = publicPageMetadata(
  "/about",
  "About Fahampesa | POS Software Company in Kenya",
  "Learn about Fahampesa, POS and business management software for Kenyan retail, hospitality and service businesses. Visit our showroom in Parklands, Nairobi.",
);

export default function PublicPageLayout({ children }: { children: ReactNode }) {
  return children;
}
