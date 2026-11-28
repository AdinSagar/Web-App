'use client';
import {useEffect,useRef} from 'react';
export default function VisitTracker({storeId,itemId}:{storeId:string;itemId?:string}){
  const recorded=useRef('');
  useEffect(()=>{
    const key=storeId+'/'+(itemId||'');
    if(recorded.current===key||(!itemId&&!storeId.startsWith('bs_')))return;
    recorded.current=key;
    try{
      const storageKey='fahampesa_share_session_v1';
      let session=sessionStorage.getItem(storageKey);
      if(!session||!/^[a-f0-9-]{36}$/i.test(session)){session=crypto.randomUUID();sessionStorage.setItem(storageKey,session);}
      const path=storeId.startsWith('bs_')?(itemId?'bookings/visits':'bookings/store-visits'):'visits';
      void fetch('/api/v1/shop/public/'+path,{method:'POST',headers:{'content-type':'application/json','x-shop-session':session},body:JSON.stringify({storeId,...(itemId?{catalogItemId:itemId}:{}),eventId:crypto.randomUUID()}),keepalive:true}).catch(()=>{});
    }catch{/* Browsing still works when session storage is unavailable. */}
  },[storeId,itemId]);
  return null;
}
