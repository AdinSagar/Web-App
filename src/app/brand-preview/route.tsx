import {ImageResponse} from 'next/og';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';

export const runtime='nodejs';
export const dynamic='force-static';

// A code-rendered brand card, with the existing logo and no invented app screens.
export async function GET(){
 const [logo,regular,semibold]=await Promise.all([readFile(join(process.cwd(),'public/assets/brand/fahampesa-f-192.png')),readFile(join(process.cwd(),'public/assets/fonts/inter-share-400.ttf')),readFile(join(process.cwd(),'public/assets/fonts/inter-share-600.ttf'))]);
 return new ImageResponse(
  <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:'54px 64px',background:'#101c30',color:'#fff',fontFamily:'Inter'}}>
   <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
    <div style={{display:'flex',alignItems:'center',gap:16}}><img src={'data:image/png;base64,'+logo.toString('base64')} width="62" height="62" style={{borderRadius:14}}/><span style={{fontSize:35,fontWeight:600,letterSpacing:-1}}>FahamPesa<span style={{color:'#ff9b4f'}}>.</span></span></div>
    <span style={{fontSize:17,letterSpacing:3,color:'#ffb780'}}>BUILT FOR KENYA</span>
   </div>
   <div style={{display:'flex',flexDirection:'column',marginTop:52,fontSize:74,fontWeight:600,lineHeight:1.08,letterSpacing:-3}}><span>Business. Property.</span><span style={{color:'#ffb780'}}>Local commerce.</span></div>
   <div style={{display:'flex',fontSize:25,color:'#d2d9e4',marginTop:28}}>Run your business. Sell online. Shop local.</div>
   <div style={{display:'flex',justifyContent:'space-between',marginTop:'auto',borderTop:'1px solid #344055',paddingTop:24,fontSize:18,color:'#d2d9e4'}}><span>Business tools · Rental management · Seller &amp; Shopper apps</span><span>fahampesa.com</span></div>
  </div>,{width:1200,height:630,fonts:[{name:'Inter',data:regular,weight:400,style:'normal'},{name:'Inter',data:semibold,weight:600,style:'normal'}],headers:{'Cache-Control':'public, max-age=86400'}}
 );
}
