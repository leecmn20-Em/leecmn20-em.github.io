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

function Topbar() {
  return (
    <header className="topbar">
      <div className="toolbar" role="toolbar" aria-label="페이지 도구">
        <DuplicateTap />
      </div>
    </header>
  );
}

export default Topbar;
