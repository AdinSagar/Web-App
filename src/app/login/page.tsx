import { redirect } from 'next/navigation'
import { BUSINESS_LOGIN_URL } from '@/lib/business-app'

export default function LoginPage() {
  redirect(BUSINESS_LOGIN_URL)
}
