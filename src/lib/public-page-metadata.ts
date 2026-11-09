import type { Metadata } from "next";
import {PUBLIC_BRAND} from "./public-brand";

/** Keep supporting public pages distinct from the homepage in search and shares. */
export function publicPageMetadata(path: string, title: string, description: string): Metadata {
  const url = `https://fahampesa.com${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: PUBLIC_BRAND.name,
      locale: "en_KE",
      type: "website",
      images: [{url: PUBLIC_BRAND.image, width: 1200, height: 630, alt: PUBLIC_BRAND.imageAlt}],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [PUBLIC_BRAND.image],
    },
  };
}
