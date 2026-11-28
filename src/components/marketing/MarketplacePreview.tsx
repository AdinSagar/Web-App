'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {ArrowRight,ArrowUpRight,Package,Store} from 'lucide-react';
import type {ShowcaseItem} from '@/lib/published-showcase';

export default function MarketplacePreview({limit=4}:{limit?:number}){
 const root=useRef<HTMLDivElement>(null);
 const [items,setItems]=useState<ShowcaseItem[]>([]),[state,setState]=useState<'loading'|'ready'|'empty'>('loading');
 useEffect(()=>{
  const controller=new AbortController();let started=false;
  async function load(){if(started)return;started=true;try{const res=await fetch('/api/public-showcase',{signal:controller.signal,cache:'no-store'});if(!res.ok)throw Error('Unavailable');const data=await res.json();if(!Array.isArray(data.items))throw Error('Invalid data');setItems(data.items.slice(0,Math.max(1,Math.min(48,limit))));setState(data.items.length?'ready':'empty');}catch{if(!controller.signal.aborted)setState('empty');}}
  if(typeof IntersectionObserver==='undefined'){void load();return ()=>controller.abort();}
  const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){void load();observer.disconnect();}},{rootMargin:'350px'});
  if(root.current)observer.observe(root.current);
  return ()=>{controller.abort();observer.disconnect();};
 },[limit]);
 return <div ref={root} className="fp-marketplace-preview" aria-busy={state==='loading'}>{state==='loading'?<div className="fp-listing-grid" role="status" aria-label="Loading published listings">{[0,1,2,3].map(i=><div key={i} className="fp-listing-skeleton"><div/><span/><span/></div>)}</div>:state==='empty'?<div className="fp-marketplace-empty"><Store size={29}/><h3>Start with a local business.</h3><p>Explore published stores, view their listings and choose your next step.</p><Link href="/business/shop">Browse businesses <ArrowRight size={16}/></Link></div>:<div className="fp-listing-grid">{items.map(item=><Link prefetch={false} href={item.href} className="fp-live-listing" key={item.href}><div className="fp-live-photo"><Package className="fp-photo-fallback" size={32} aria-hidden="true"/><img src={item.imageUrl} alt={item.name} width={360} height={360} loading="lazy" decoding="async" onError={event=>{event.currentTarget.style.visibility='hidden';}}/><span>{item.category}</span><span className="fp-live-arrow"><ArrowUpRight size={17}/></span></div><div className="fp-live-details"><p>{item.storeName}</p><h3>{item.name}</h3><strong>{new Intl.NumberFormat('en-KE',{style:'currency',currency:item.currency,maximumFractionDigits:item.priceMinor%100?2:0}).format(item.priceMinor/100)}</strong></div></Link>)}</div>}<p className="fp-marketplace-note">Published seller listings. Confirm availability and fulfilment with the seller. <Link href="/trust">Buyer information <ArrowUpRight size={12}/></Link></p></div>;
}
