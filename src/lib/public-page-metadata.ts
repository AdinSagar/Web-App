import type { Metadata } from "next";

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
      siteName: "Fahampesa",
      locale: "en_KE",
      type: "website",
      images: ["/assets/figma/landing/fahampesa-business-showcase.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/figma/landing/fahampesa-business-showcase.webp"],
    },
  };
}
