import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://fahampesa.com"

  return [
    { url: origin },
    { url: `${origin}/pos-system-kenya` },
    { url: `${origin}/pricingpage` },
    { url: `${origin}/about` },
    { url: `${origin}/contact-information` },
    { url: `${origin}/installation` },
  ]
}
