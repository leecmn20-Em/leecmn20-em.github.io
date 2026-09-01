import styles from "../projects.module.css";

function NAIrelay() {
  return (
    <>
      <header className={styles.projectHeader}>
        <h1>NAIrelay</h1>
      </header>
      <div className={styles.projectDescription}>
        <p>NAIrelay 프로젝트 내용</p>
      </div>
      <div className={styles.projectLinks}>
        <a
          href="https://github.com/leecmn20-Em/NAIrelay/releases/tag/1.0.1"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Release
        </a>
      </div>
    </>
  );
}

export default NAIrelay;
