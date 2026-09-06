import { sideNavItems } from "../sidenav";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav aria-label="주요 메뉴">
        <ul className="sidebar-list">
          {sideNavItems.map((item) => (
            <li key={item.href}>
              <a className="sidebar-link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
