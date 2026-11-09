import SolutionPage from '@/components/marketing/SolutionPage';
import {platformPages} from '@/lib/platform-content';
import {publicPageMetadata} from '@/lib/public-page-metadata';
const page=platformPages['sellers'];
export const metadata=publicPageMetadata('/business/sellers',page.title,page.description);
export default function Page(){return <SolutionPage name="sellers"/>;}
