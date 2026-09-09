function DuplicateTap() {
  const handleClick = () => {
    window.open(window.location.href, "_blank", "noopener, noreferrer");
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        탭 복제
      </button>
    </>
  );
}

type TopbarProps = {
  sidebarOpen: boolean;
  onMenuClick: () => void;
};

function Topbar({ sidebarOpen, onMenuClick }: TopbarProps) {
  return (
    <header className="topbar">
      <button
        type="button"
        className="menu-button"
        aria-label={sidebarOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-controls="site-sidebar"
        aria-expanded={sidebarOpen}
        onClick={onMenuClick}
      >
        ☰
      </button>
      <div className="toolbar" role="toolbar" aria-label="페이지 도구">
        <DuplicateTap />
      </div>
    </header>
  );
}

export default Topbar;
