import type { Metadata } from "next";
import "./globals.css";
import SiteExperience from '@/components/SiteExperience';

export const metadata: Metadata = {
  metadataBase: new URL("https://fahampesa.com"),
  title: "POS Software Kenya & Nairobi | Fahampesa",
  description:
    "POS software and inventory management for Kenyan businesses. KSh 2,000/month, software only. Request a demo in Parklands, Nairobi. Hardware sold separately.",
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
    title: "POS Software Kenya & Nairobi | Fahampesa",
    description:
      "POS software and inventory management for Kenyan businesses. KSh 2,000/month, software only. Visit our Parklands, Nairobi showroom for a demo.",
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
    title: "POS Software Kenya & Nairobi | Fahampesa",
    description:
      "POS software, inventory and reports for Kenyan businesses. KSh 2,000/month, software only. Request a demo in Parklands, Nairobi.",
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
