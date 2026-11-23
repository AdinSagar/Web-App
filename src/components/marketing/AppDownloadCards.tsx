import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {PUBLIC_BRAND} from '@/lib/public-brand';
import {publicApps} from '@/lib/public-apps';
export default function AppDownloadCards() {
 return <div className="fp-app-cards">{Object.entries(publicApps).map(([role,app])=>
  <article className="fp-app-card" key={role}>
   <Link href="/" className="fp-app-icon" aria-label="FahamPesa home"><img src={PUBLIC_BRAND.mark} width="44" height="44" alt=""/></Link>
   <span className="fp-eyebrow">{app.audience}</span>
   <h3>{app.name}</h3>
   <p>{role==='seller'?'Create your free online store, share your listings and manage supported customer orders.':'Browse local products, food, stays and services with FahamPesa Shop.'}</p>
   <Link className="fp-button" href={app.path}>{role==='seller'?'Get the free Seller app':'Get the free Shopper app'}<ArrowUpRight size={16}/></Link>
   <span className="fp-app-status">{app.cardStatus}</span>
  </article>
 )}</div>;
}

