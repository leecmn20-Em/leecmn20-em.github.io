import { useEffect, useState, type ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type SiteLayoutProps = {
  children: ReactNode;
};

function SiteLayout({ children }: SiteLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!sidebarOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [sidebarOpen]);

  return (
    <div className="site-layout">
      <Topbar
        sidebarOpen={sidebarOpen}
        onMenuClick={() => setSidebarOpen((open) => !open)}
      />
      <Sidebar open={sidebarOpen} />
      <button
        type="button"
        className="sidebar-backdrop"
        data-open={sidebarOpen}
        aria-label="메뉴 닫기"
        tabIndex={sidebarOpen ? 0 : -1}
        onClick={() => setSidebarOpen(false)}
      />
      <div className="site-content">{children}</div>
    </div>
  );
}

export default SiteLayout;
