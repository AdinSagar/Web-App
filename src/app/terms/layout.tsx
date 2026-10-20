import type { ReactNode } from "react";
import { publicPageMetadata } from "@/lib/public-page-metadata";

export const metadata = publicPageMetadata(
  "/terms",
  "Fahampesa Terms of Service | Software and Account Terms",
  "Read the terms governing Fahampesa software, accounts, subscriptions and services. Review your responsibilities before using the platform.",
);

export default function PublicPageLayout({ children }: { children: ReactNode }) {
  return children;
}
