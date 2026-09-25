import { redirect } from 'next/navigation'
import { BUSINESS_SIGNUP_URL } from '@/lib/business-app'

export default function OnboardingPage() {
  redirect(BUSINESS_SIGNUP_URL)
}
