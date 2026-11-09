'use client';
import {useSelectedLayoutSegment} from 'next/navigation';
import dynamic from 'next/dynamic';
const BusinessExperience=dynamic(()=>import('./BusinessExperience'));
export default function SiteExperience({children}:{children:React.ReactNode}){
  const segment=useSelectedLayoutSegment();
  return segment==='(shared)'?<>{children}</>:<BusinessExperience>{children}</BusinessExperience>;
}
