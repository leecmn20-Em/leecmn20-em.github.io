import styles from "../projects.module.css";

function theSensors() {
  return (
    <>
      <header className={styles.projectHeader}>
        <h1>theSensors</h1>
      </header>
      <div className={styles.projectDescription}>
        <p>theSensors 프로젝트 내용</p>
      </div>
      <div className={styles.projectLinks}>
        <a
          href="https://github.com/leecmn20-Em/MyApplication"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </div>
    </>
  );
}

export default theSensors;
