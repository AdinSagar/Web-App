'use client'

import { useState } from 'react'
import { Monitor, Download, Rocket, ShieldCheck, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react'
import { DownloadModal } from '@/components/DownloadModal'
import Footer from '@/components/footer'
import PageHeader from '@/components/PageHeader'
import PublicHeader from '@/components/public-header'
import { BUSINESS_INSTALL_URL } from '@/lib/business-app'

const steps = [
  {
    number: 1,
    icon: Monitor,
    title: 'Open the FahamPesa installer',
    description: 'Use the Install FahamPesa button below. It opens the current FahamPesa Business app on its secure app domain.',
  },
  {
    number: 2,
    icon: Download,
    title: 'Click Install FahamPesa',
    description: 'In Microsoft Edge or Google Chrome, click Install FahamPesa. If the button is not ready yet, wait a few seconds or use the browser menu and choose Install app.',
  },
  {
    number: 3,
    icon: ShieldCheck,
    title: 'Approve the browser install',
    description: 'Confirm the install prompt. FahamPesa is added to Windows as a standalone app and keeps its offline workspace on this computer.',
  },
  {
    number: 4,
    icon: Rocket,
    title: 'Launch from Windows',
    description: 'Open FahamPesa from the Start menu or taskbar. The first setup lets an owner connect the business, then staff can use their saved profile and PIN.',
  },
]

const requirements = [
  'Windows 10 or Windows 11',
  'Microsoft Edge or Google Chrome',
  'Internet connection for first setup and account verification',
  'Browser storage enabled for offline business data',
]

const faqs = [
  {
    question: 'Is this the current FahamPesa Windows app?',
    answer: 'Yes. The Windows install opens the current FahamPesa Business PWA, so the installed app stays aligned with the live Web and Windows release instead of using an old ZIP build.',
  },
  {
    question: 'Does the installed app work offline?',
    answer: 'Supported POS and business workflows use local browser storage and continue offline. Cloud updates sync again after the connection returns.',
  },
  {
    question: 'Do I need a Microsoft Store account?',
    answer: 'No. FahamPesa installs directly from Microsoft Edge or Google Chrome. A Microsoft Store account is not required.',
  },
  {
    question: 'How do updates work?',
    answer: 'The installed app checks the current FahamPesa web release. You do not need to download a new ZIP for normal updates.',
  },
  {
    question: 'Can one computer remember more than one business?',
    answer: 'Yes. Approved businesses can be remembered on the same computer. Staff choose the business, choose their name, and enter their PIN.',
  },
]

export default function InstallationPage() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-[#f8f8f9] font-dm-sans">
      <DownloadModal open={downloadModalOpen} onOpenChange={setDownloadModalOpen} />
      <PublicHeader onOpenDownload={() => setDownloadModalOpen(true)} />

      <main>
        <PageHeader title="Installation Guide" />

        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] py-12 lg:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#E6F0FF] text-[#004AAD] px-4 py-2 rounded-full text-[14px] font-medium mb-6">
              <Monitor className="w-4 h-4" />
              Windows offline-ready app
            </div>
            <h2 className="text-[#001031] text-[28px] sm:text-[38px] font-semibold font-archivo leading-tight mb-4">
              Install the current FahamPesa Business app
            </h2>
            <p className="text-[#64748b] text-[16px] sm:text-[18px] leading-relaxed mb-8">
              Install directly from the FahamPesa app domain. No old ZIP, no Microsoft Store search,
              and no separate legacy login system.
            </p>
            <a
              href={BUSINESS_INSTALL_URL}
              className="inline-flex items-center gap-2 bg-[#004AAD] hover:bg-[#003a8c] text-white px-7 py-3.5 rounded-[12px] text-[16px] font-semibold transition-colors"
            >
              <Download className="w-5 h-5" />
              Install FahamPesa
            </a>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] pb-12 lg:pb-20">
          <h3 className="text-[#001031] text-[24px] sm:text-[30px] font-semibold font-archivo text-center mb-12">
            Install in 4 simple steps
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="bg-white border border-gray-100 rounded-[16px] p-6 sm:p-8 flex gap-5 items-start shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#004AAD] text-white flex items-center justify-center text-[18px] font-semibold">
                    {step.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-[#004AAD]" />
                      <h4 className="text-[#001031] text-[18px] sm:text-[20px] font-semibold">{step.title}</h4>
                    </div>
                    <p className="text-[#64748b] text-[15px] sm:text-[16px] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-white border-y border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-[10px] bg-[#E6F0FF] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#004AAD]" />
                </div>
                <h3 className="text-[#001031] text-[24px] sm:text-[30px] font-semibold font-archivo">Requirements</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {requirements.map((req) => (
                  <div key={req} className="flex items-start gap-3 bg-[#f8f8f9] rounded-[12px] p-4">
                    <CheckCircle2 className="w-5 h-5 text-[#004AAD] flex-shrink-0 mt-0.5" />
                    <span className="text-[#001031] text-[15px]">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] py-12 lg:py-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-[#001031] text-[24px] sm:text-[30px] font-semibold font-archivo text-center mb-10">
              First time setup
            </h3>
            <div className="grid gap-4">
              {[
                ['1', 'Owner account', 'Create or sign in to the owner account with email and password. New accounts verify email once.'],
                ['2', 'Business setup', 'Choose the business type, branch, country, and business details. Kenya automatically uses KES.'],
                ['3', 'Staff access', 'Create staff and set PINs. On remembered computers, staff choose their name and enter the PIN.'],
                ['4', 'Start working', 'Open the correct POS or business workspace and continue working online or offline where supported.'],
              ].map(([number, title, copy], index) => (
                <div key={number} className="bg-white border border-gray-100 rounded-[16px] p-6 flex gap-4 items-start shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E6F0FF] flex items-center justify-center text-[14px] font-semibold text-[#004AAD]">{number}</div>
                  <div>
                    <h4 className="text-[#001031] text-[18px] font-semibold mb-2">{title}</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">{copy}</p>
                  </div>
                  {index < 3 ? <ArrowRight className="hidden sm:block ml-auto w-4 h-4 text-[#94a3b8]" /> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-[10px] bg-[#E6F0FF] flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-[#004AAD]" />
                </div>
                <h3 className="text-[#001031] text-[24px] sm:text-[30px] font-semibold font-archivo">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={faq.question} className="border border-gray-100 rounded-[12px] overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f8f8f9] transition-colors"
                    >
                      <span className="text-[#001031] text-[15px] sm:text-[16px] font-medium pr-4">{faq.question}</span>
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#004AAD] flex items-center justify-center text-[#004AAD] transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    {openFaq === i ? (
                      <div className="px-5 pb-5">
                        <p className="text-[#64748b] text-[15px] leading-relaxed">{faq.answer}</p>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] py-12 lg:py-20">
          <div className="max-w-3xl mx-auto text-center bg-[#001031] rounded-[24px] p-8 sm:p-12">
            <h3 className="text-white text-[24px] sm:text-[30px] font-semibold font-archivo mb-4">Ready to install?</h3>
            <p className="text-[#94a3b8] text-[16px] leading-relaxed mb-8">Open the current FahamPesa installer and add the app directly to Windows.</p>
            <a
              href={BUSINESS_INSTALL_URL}
              className="inline-flex items-center gap-2 bg-[#004AAD] hover:bg-[#003a8c] text-white px-7 py-3.5 rounded-[12px] text-[16px] font-semibold transition-colors"
            >
              <Download className="w-5 h-5" />
              Install FahamPesa
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
