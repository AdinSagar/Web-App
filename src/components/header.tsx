import { Bell } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" aria-label="FahamPesa home" className="flex items-center gap-2">
          <Image src="/assets/brand/fahampesa-f-512.png" alt="FahamPesa" width={40} height={40} className="h-10 w-10 rounded-[10px]" />
        </Link>
        <div className="text-lg font-semibold text-gray-900">Get started with FahamPesa</div>
        <Bell className="w-6 h-6 text-gray-400" />
      </div>
    </header>
  )
}
