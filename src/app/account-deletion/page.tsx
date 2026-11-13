import PlatformFrame from '@/components/marketing/PlatformFrame'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delete your account | Fahampesa',
  description: 'Request deletion of your FahamPesa Parking, FanPesa seller or Fahampesa account and associated personal data.',
  alternates: { canonical: 'https://fahampesa.com/account-deletion' },
}

const requestEmail = 'mailto:privacy@fahampesa.com?subject=' + encodeURIComponent('Fahampesa account and data deletion request')

export default function AccountDeletionPage() {
  return (
    <PlatformFrame><main id="main-content" className="min-h-screen bg-[#f8f8f9] px-6 py-12 text-[#001223] font-dm-sans">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-xl font-bold">Fahampesa</a>
        <article className="mt-8 rounded-2xl bg-white p-6 sm:p-10 shadow-sm space-y-8 leading-relaxed">
          <header className="space-y-3">
            <p className="text-sm font-semibold text-[#004aad]">ACCOUNT AND DATA DELETION</p>
            <h1 className="text-3xl sm:text-4xl font-bold">Request account deletion</h1>
            <p>For FanPesa seller, Fahampesa Seller, Fahampesa Shop, Fahampesa Business and FahamPesa Parking accounts operated by Fahampesa Limited.</p>
            <p>You do not need the app installed or an active paid account to make a request.</p>
          </header>
          <section aria-labelledby="request-title" className="space-y-4">
            <h2 id="request-title" className="text-xl font-bold">Send your request</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Email privacy@fahampesa.com from the email registered to your account. Use the subject “Fahampesa account and data deletion request”.</li>
              <li>Include your app name and business name. If you registered with a phone number, include the number with its country code.</li>
              <li>Tell us whether to delete your entire account and associated data, or only specific personal data.</li>
            </ol>
            <a href={requestEmail} className="inline-flex min-h-12 items-center rounded-xl bg-[#004aad] px-6 py-3 font-semibold text-white">Email deletion request</a>
            <p className="text-sm">This opens your email app. Review and send the email to submit your request. If an email app is unavailable, email <a className="underline break-all" href="mailto:privacy@fahampesa.com">privacy@fahampesa.com</a> using your preferred mail service. Do not send passwords, PINs, payment credentials or identity document images.</p>
            <p className="text-sm">If you no longer have access to your registered email or phone, contact <a href="mailto:support@fahampesa.com" className="underline">support@fahampesa.com</a> for help verifying ownership.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-bold">Parking staff and vehicle records</h2>
            <p>Parking guards do not need a registered email address to request deletion. Email privacy@fahampesa.com with your staff name, property name and a way to contact you. Ask for deletion of your staff account and associated personal data, or identify the parking records you want removed. Do not send your guard PIN.</p>
            <p>For a vehicle record, identify the property, number plate and approximate visit date. We verify your relationship to the record before making changes. You may also ask your property manager to help. Removing a guard's access does not automatically erase historical tickets, receipts or shift records. Any necessary retention is explained as part of the request.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-bold">What happens next</h2>
            <p>Our privacy team verifies account ownership before removing information. We explain any records that must be retained and confirm when the request is completed. Sending an email starts a support request. It does not immediately delete the account.</p>
            <p>For a shared business, tell us whether you are requesting deletion of your own account or the entire business workspace. We verify authority before deleting another person's data. Account deletion must include associated personal data, not only disabling sign-in.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-bold">Data covered by account deletion</h2>
            <p>The request covers your sign-in account, profile and contact details, notification tokens, uploaded profile and business images, messages and other personal information associated with your account. For an authorized business closure, it also covers the workspace's listings, inventory, orders, bookings and customer records, subject to the exceptions below.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-bold">Records and retention exceptions</h2>
            <p>Records needed for a legal obligation, an unresolved transaction or dispute, fraud prevention, or security are retained only for that purpose. We identify any exception, its reason and the applicable retention period in our response. Other participants' lawful copies of invoices, orders or messages are not removed from their accounts by deleting yours.</p>
            <p>Website journey analytics has a maximum retention of 180 days. Firebase Crashlytics retains crash reports and associated installation identifiers for 90 days before beginning removal from its live and backup systems. Deleting an account does not instantly erase these separate diagnostic records or anonymized aggregate statistics.</p>
            <p>To request removal of specific data while keeping your account, use the same email route and identify the data concerned.</p>
          </section>
          <footer className="border-t pt-6 text-sm">
            <a href="/privacy" className="font-semibold text-[#004aad] underline">Read the privacy policy</a>
          </footer>
        </article>
      </div>
    </main></PlatformFrame>
  )
}
