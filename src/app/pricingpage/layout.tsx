import type { ReactNode } from "react";
import { publicPageMetadata } from "@/lib/public-page-metadata";

export const metadata = publicPageMetadata(
  "/pricingpage",
  "Fahampesa POS Software Pricing in Kenya | Subscription Plans",
  "Review Fahampesa software subscription plans for your business in Kenya. Software and POS hardware are sold separately. Contact our Nairobi team for a demonstration.",
);

export default function PublicPageLayout({ children }: { children: ReactNode }) {
  return children;
}
