'use client';
import { AuthProvider } from "@/contexts/AuthContext";
import { StaffProvider } from "@/contexts/StaffContext";
import { AdminAccessProvider } from "@/contexts/AdminAccessContext";
import { NotificationsProvider } from "@/contexts/NotificationsContext";
import { OnboardingProvider } from "@/components/onboarding/OnboardingProvider";
import ErrorHandler from "@/components/ErrorHandler";
import ChatwootWidget from "@/components/ChatwootWidget";
import MetaMeasurementConsent from "@/components/consent/MetaMeasurementConsent";
import WhatsAppContact from "@/components/marketing/WhatsAppContact";
import PublicBusinessSchema from "@/components/marketing/PublicBusinessSchema";

export default function BusinessExperience({children}:{children:React.ReactNode}){
  return <><PublicBusinessSchema/><ErrorHandler/><ChatwootWidget/><MetaMeasurementConsent/><WhatsAppContact/>
    <AuthProvider><StaffProvider><AdminAccessProvider><NotificationsProvider><OnboardingProvider>{children}</OnboardingProvider></NotificationsProvider></AdminAccessProvider></StaffProvider></AuthProvider></>;
}
