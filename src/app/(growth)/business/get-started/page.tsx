import SolutionPage from '@/components/marketing/SolutionPage';
import {platformPages} from '@/lib/platform-content';
import {publicPageMetadata} from '@/lib/public-page-metadata';
const page=platformPages['get-started'];
export const metadata=publicPageMetadata('/business/get-started',page.title,page.description);
export default function Page(){return <SolutionPage name="get-started"/>;}
