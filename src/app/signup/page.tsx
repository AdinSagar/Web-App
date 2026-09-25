import { redirect } from 'next/navigation'
import { BUSINESS_SIGNUP_URL } from '@/lib/business-app'

export default function SignupPage() {
  redirect(BUSINESS_SIGNUP_URL)
}
