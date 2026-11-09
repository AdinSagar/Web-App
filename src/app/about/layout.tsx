import type { ReactNode } from "react";
import { publicPageMetadata } from "@/lib/public-page-metadata";

export const metadata = publicPageMetadata(
  "/about",
  "About FahamPesa | Business, Property & Local Commerce in Kenya",
  "FahamPesa connects business software, rental property management, online sellers and local shoppers in Kenya. Meet our team in Parklands, Nairobi.",
);

export default function PublicPageLayout({ children }: { children: ReactNode }) {
  return children;
}
