'use client';
import {useSelectedLayoutSegment} from 'next/navigation';
import dynamic from 'next/dynamic';
const BusinessExperience=dynamic(()=>import('./BusinessExperience'));
export default function SiteExperience({children}:{children:React.ReactNode}){
  const segment=useSelectedLayoutSegment();
  return (segment===null||['apps','about','contact-information','privacy','terms','account-deletion','installation'].includes(segment||'')||segment==='pos-system-kenya'||segment==='inventory-management-software-kenya'||segment==='industries'||segment==='pricingpage'||segment==='(shared)'||segment==='(growth)')?<>{children}</>:<BusinessExperience>{children}</BusinessExperience>;
}
