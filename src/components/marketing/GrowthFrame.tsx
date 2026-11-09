import Link from 'next/link';
import PublicBusinessSchema from './PublicBusinessSchema';
import {ArrowUpRight} from 'lucide-react';
import {BUSINESS_SIGNUP_URL} from '@/lib/business-app';
import './growth.css';

const links=[['Business Growth','/business'],['Search & AI','/business/search-and-ai'],['Food & grocery','/business/food-and-grocery'],['Trust','/trust']];
export default function GrowthFrame({children}:{children:React.ReactNode}){
  return <div className="growth"><PublicBusinessSchema/><a href="#growth-main" className="growth-skip">Skip to content</a><header className="growth-header"><Link className="growth-brand" href="/" aria-label="FahamPesa home"><img src="/assets/figma/landing/logo-icon.svg" alt="" width="32" height="32"/>FahamPesa</Link><nav className="growth-nav" aria-label="Business navigation">{links.map(([name,path])=><Link href={path} key={path}>{name}</Link>)}</nav><details className="growth-menu"><summary>Menu</summary><nav aria-label="Mobile business navigation">{links.map(([name,path])=><Link href={path} key={path}>{name}</Link>)}<Link href="/business/sell-online">Sell online</Link></nav></details><Link className="growth-start" href={BUSINESS_SIGNUP_URL}>For sellers <ArrowUpRight size={15}/></Link></header>{children}<footer className="growth-footer"><div><Link className="growth-brand" href="/">FahamPesa</Link><p>Business tools. Clear information. Local connections.</p></div><nav aria-label="Footer"><Link href="/business">Business Growth</Link><Link href="/trust">Trust & support</Link><Link href="/contact-information">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav></footer></div>;
}
