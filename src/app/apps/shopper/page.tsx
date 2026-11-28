import AppDownloadPage from '@/components/marketing/AppDownloadPage';
import {publicApps} from '@/lib/public-apps';
import {publicPageMetadata} from '@/lib/public-page-metadata';
const app=publicApps.shopper;
export const metadata=publicPageMetadata(app.path,app.title,app.description);
export default function Page(){return <AppDownloadPage role="shopper"/>}
