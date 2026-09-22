import type { NextConfig } from "next";

const businessWebOrigin = "https://fahampesa-business-web-production.up.railway.app";

const businessAppRoutes = [
  "/access-unavailable",
  "/accounting",
  "/appointments",
  "/branches",
  "/dashboard",
  "/debtors",
  "/expenses",
  "/hotel",
  "/inventory",
  "/invoices",
  "/kitchen",
  "/orders",
  "/pos",
  "/products",
  "/purchases",
  "/reports",
  "/restaurant",
  "/sales",
  "/salon",
  "/services",
  "/settings",
  "/shopping-sheets",
  "/staff",
  "/subscription",
  "/suppliers",
];

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/login", destination: `${businessWebOrigin}/?intent=login` },
        { source: "/signup", destination: `${businessWebOrigin}/?intent=signup` },
        ...businessAppRoutes.map((source) => ({
          source,
          destination: `${businessWebOrigin}${source}`,
        })),
        { source: "/api/v1/:path*", destination: `${businessWebOrigin}/api/v1/:path*` },
        { source: "/runtime-config.js", destination: `${businessWebOrigin}/runtime-config.js` },
        { source: "/manifest.webmanifest", destination: `${businessWebOrigin}/manifest.webmanifest` },
        { source: "/sw.js", destination: `${businessWebOrigin}/sw.js` },
        { source: "/index.html", destination: `${businessWebOrigin}/index.html` },
        { source: "/app.bundle.v1.js", destination: `${businessWebOrigin}/app.bundle.v1.js` },
        { source: "/app.bundle.v2.js", destination: `${businessWebOrigin}/app.bundle.v2.js` },
        { source: "/app.bundle.v3.js", destination: `${businessWebOrigin}/app.bundle.v3.js` },
        { source: "/src/:path*", destination: `${businessWebOrigin}/src/:path*` },
        { source: "/packages/:path*", destination: `${businessWebOrigin}/packages/:path*` },
        { source: "/assets/fahampesa-business-logo.svg", destination: `${businessWebOrigin}/assets/fahampesa-business-logo.svg` },
        { source: "/assets/fahampesa-business-logo.png", destination: `${businessWebOrigin}/assets/fahampesa-business-logo.png` },
        { source: "/assets/access-approved-reference.webp", destination: `${businessWebOrigin}/assets/access-approved-reference.webp` },
        { source: "/assets/icon-192.png", destination: `${businessWebOrigin}/assets/icon-192.png` },
        { source: "/assets/icon-512.png", destination: `${businessWebOrigin}/assets/icon-512.png` },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
};

export default nextConfig;
