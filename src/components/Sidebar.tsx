import { sideNavItems } from "../sidenav"

function Sidebar() {
    return (
        <aside className="sidebar">
            <nav aria-label="주요 메뉴">
                <ul>
                    {sideNavItems.map((item)=>(
                        <li key={item.href}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar