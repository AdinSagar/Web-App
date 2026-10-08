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
  title: "FahamPesa - Lightweight Sales & Inventory App for Small Business",
  description: "A native Android app designed for small business owners in Kenya. Track inventory, record sales, and manage your business with sunlight-optimized design and offline-first functionality.",
  keywords: "sales app, inventory management, small business, Kenya, offline app, business tools",
  authors: [{ name: "FahamPesa Team" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/brand/fahampesa-logo-180.png",
  },
  openGraph: {
    title: "FahamPesa - Lightweight Sales & Inventory App",
    description: "Track inventory, record sales, and manage your business with our sunlight-optimized mobile app.",
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
