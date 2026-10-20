import type { ReactNode } from "react";
import { publicPageMetadata } from "@/lib/public-page-metadata";

export const metadata = publicPageMetadata(
  "/privacy",
  "Fahampesa Privacy Policy | Data and Privacy Information",
  "Read the Fahampesa privacy policy for information about personal data, business information and privacy when using Fahampesa services.",
);

export default function PublicPageLayout({ children }: { children: ReactNode }) {
  return children;
}
