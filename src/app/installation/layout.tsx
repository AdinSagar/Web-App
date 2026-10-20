import type { ReactNode } from "react";
import { publicPageMetadata } from "@/lib/public-page-metadata";

export const metadata = publicPageMetadata(
  "/installation",
  "Install Fahampesa Business on Windows | Setup Guide",
  "Follow the Fahampesa Business installation guide for Windows using Microsoft Edge or Google Chrome. Review setup steps, requirements and support options.",
);

export default function PublicPageLayout({ children }: { children: ReactNode }) {
  return children;
}
