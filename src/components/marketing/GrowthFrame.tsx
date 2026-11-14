import PlatformFrame from './PlatformFrame';
import './growth.css';
export default function GrowthFrame({children}:{children:React.ReactNode}){return <PlatformFrame><div className="growth" id="main-content">{children}</div></PlatformFrame>;}
