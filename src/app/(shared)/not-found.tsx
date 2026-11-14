import Link from 'next/link';
import {SharedFrame} from '@/components/shared/SharedPage';
export default function NotFound(){return <SharedFrame><main className="share-empty"><span className="share-eyebrow">Listing unavailable</span><h1>This link is no longer available.</h1><p>The business might have removed this listing. Ask the seller for their latest link.</p><Link href="/" className="share-secondary">Visit FahamPesa</Link></main></SharedFrame>;}
