'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight,Check,Share2,Smartphone} from 'lucide-react';

export function ShareButton({url,title}:{url:string;title:string}){
  const [message,setMessage]=useState('');
  const [copied,setCopied]=useState(false);
  async function share(){
    try{
      if(navigator.share){await navigator.share({title,url});return;}
      await navigator.clipboard.writeText(url);setCopied(true);setMessage('Link copied');
    }catch(error){if((error as Error).name!=='AbortError')setMessage('Copy the link from your address bar.');}
  }
  return <div className="share-control"><button className="share-secondary" onClick={share}>{copied?<Check size={17}/>:<Share2 size={17}/>} {copied?'Copied':'Share'}</button><span role="status" className="share-status">{message}</span></div>;
}
export function AppActions({openAppUrl,installUrl,qrImage}:{openAppUrl:string|null;installUrl:string|null;qrImage:string}){
  const [device,setDevice]=useState<'desktop'|'android'|'ios'>('desktop');
  useEffect(()=>{setDevice(/Android/i.test(navigator.userAgent)?'android':/iPhone|iPad|iPod/i.test(navigator.userAgent)?'ios':'desktop');},[]);
  return <div className="share-app-actions">
    {device==='android'?(openAppUrl?<a className="share-primary" href={openAppUrl}><Smartphone size={19}/>Open in FahamPesa Shop<ArrowUpRight size={18}/></a>:<p className="share-note">App access is temporarily unavailable. Please try again later.</p>):<div className="share-qr"><img src={qrImage} width="132" height="132" alt="Scan to open this listing on your phone"/><p>{device==='ios'?'FahamPesa Shop is available for Android.':'Scan with your Android phone'}<small>Open this same listing on your phone.</small></p></div>}
    <Link className="share-install" href="/apps/shopper">Get the Shopper app for Android <ArrowUpRight size={15}/></Link>
    {!installUrl&&openAppUrl&&device==='android'&&<p className="share-hint">Requires the FahamPesa Shop app on your phone.</p>}
    <p className="share-hint">Orders and bookings continue in the Shop app.</p>
  </div>;
}
