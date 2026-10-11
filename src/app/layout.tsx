import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { StaffProvider } from "@/contexts/StaffContext";
import { AdminAccessProvider } from "@/contexts/AdminAccessContext";
import { NotificationsProvider } from "@/contexts/NotificationsContext";
import { OnboardingProvider } from "@/components/onboarding/OnboardingProvider";
import ErrorHandler from "@/components/ErrorHandler";
import ChatwootWidget from "@/components/ChatwootWidget";
import MetaMeasurementConsent from "@/components/consent/MetaMeasurementConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://fahampesa.com"),
  title: "Fahampesa | Business Management & POS Software in Kenya",
  description:
    "Manage sales, inventory, expenses, staff, and reports in one system. Fahampesa supports retail, wholesale, restaurants, hotels, salons, and service businesses in Kenya.",
  applicationName: "Fahampesa",
  alternates: {
    canonical: "/",
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/assets/brand/fahampesa-logo-180.png" },
  openGraph: {
    title: "Fahampesa | Business Management & POS Software in Kenya",
    description:
      "Manage sales, inventory, expenses, staff, and reports in one system for Kenyan retail, wholesale, hospitality, and service businesses.",
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
    title: "Fahampesa | Business Management & POS Software in Kenya",
    description:
      "Manage sales, inventory, expenses, staff, and reports for your business in Kenya.",
    images: ["/assets/figma/landing/fahampesa-business-showcase.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning={true}>
        <ErrorHandler /><ChatwootWidget /><MetaMeasurementConsent />
        <AuthProvider><StaffProvider><AdminAccessProvider><NotificationsProvider><OnboardingProvider>{children}</OnboardingProvider></NotificationsProvider></AdminAccessProvider></StaffProvider></AuthProvider>
      </body>
    </html>
  );
}
