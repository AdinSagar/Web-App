import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { StaffProvider } from "@/contexts/StaffContext";
import { AdminAccessProvider } from "@/contexts/AdminAccessContext";
import { NotificationsProvider } from "@/contexts/NotificationsContext";
import { OnboardingProvider } from "@/components/onboarding/OnboardingProvider";
import ErrorHandler from "@/components/ErrorHandler";
import ChatwootWidget from "@/components/ChatwootWidget";

export const metadata: Metadata = {
  title: "POS System in Kenya for Shops | Fahampesa",
  description: "Fahampesa helps Kenyan shops track sales, inventory, and reports. Use the POS in a browser or on Windows, with offline support. Request a demo in Nairobi.",
  keywords: "POS system Kenya, retail POS software Kenya, inventory software for shops, Nairobi POS",
  authors: [{ name: "FahamPesa Team" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/brand/fahampesa-logo-180.png",
  },
  openGraph: {
    title: "POS System in Kenya for Shops | Fahampesa",
    description: "Track shop sales, inventory, and reports with Fahampesa. Use it in a browser or on Windows, with offline support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="antialiased" 
        suppressHydrationWarning={true}
      >
        <ErrorHandler />
        <ChatwootWidget />
        <AuthProvider>
          <StaffProvider>
            <AdminAccessProvider>
              <NotificationsProvider>
                <OnboardingProvider>
                  {children}
                </OnboardingProvider>
              </NotificationsProvider>
            </AdminAccessProvider>
          </StaffProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
