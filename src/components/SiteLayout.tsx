import type { ReactNode } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

type SiteLayoutProps = {
    children: ReactNode
}

function SiteLayout({children}: SiteLayoutProps){
    return (
        <div className="site-layout">
            <Topbar />
            <Sidebar />
            <div className="site-content">{children}</div>
        </div>
    )
}

export default SiteLayout
