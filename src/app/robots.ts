import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/", "/super-admin/", "/dashboard/", "/staff-dashboard/", "/onboarding/"] },
    sitemap: "https://fahampesa.com/sitemap.xml",
  }
}
