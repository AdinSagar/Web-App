import type { Metadata } from "next";
import "./globals.css";
import SiteExperience from '@/components/SiteExperience';

export const metadata: Metadata = {
  metadataBase: new URL("https://fahampesa.com"),
  title: "FahamPesa | Business, Property Management & Online Selling in Kenya",
  description:
    "Manage businesses and rental properties, sell online and explore local stores with FahamPesa. Practical tools and support in Kenya.",
  applicationName: "Fahampesa",
  verification: {
    google: "_AdKkqlOgla5oUdDrE-t0OEE1av9CFEUvC24Fnb-BOg",
    other: { "msvalidate.01": "FFDDA27B1C8D5C0D6681293A62D030ED" },
  },
  alternates: {
    canonical: "/",
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/assets/brand/fahampesa-logo-180.png" },
  openGraph: {
    title: "FahamPesa | Business, Property Management & Online Selling in Kenya",
    description:
      "Business and property management, online selling and shopper discovery in Kenya. Explore FahamPesa and arrange a demonstration in Nairobi.",
    url: "/",
    siteName: "Fahampesa",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/assets/figma/landing/fahampesa-business-showcase.webp",
        alt: "Fahampesa business management and point of sale product screens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FahamPesa | Business, Property Management & Online Selling in Kenya",
    description:
      "Run your business, manage properties and reach local shoppers with FahamPesa. Explore the platform before downloading an app.",
    images: ["/assets/figma/landing/fahampesa-business-showcase.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning={true}>
        <SiteExperience>{children}</SiteExperience>
      </body>
    </html>
  );
}
