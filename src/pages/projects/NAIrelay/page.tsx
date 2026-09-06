import styles from "../projectDetail.module.css";

function Title() {
  return (
    <div className={styles.projectHeader}>
      <h1>NAIrelay</h1>
    </div>
  );
}

function Summary() {
  return (
    <div className={styles.projectSummary}>
      <p>NAIrelay 프로젝트 내용</p>
    </div>
  );
}

function Description() {
  return (
    <div className={styles.projectDescription}>
      <p>NAIrelay 프로젝트 상세 내용</p>
    </div>
  );
}

function RepositoryLink() {
  return (
    <div className={styles.projectLink}>
      <a
        href="https://github.com/leecmn20-Em/NAIrelay"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository
      </a>
    </div>
  );
}

function NAIrelayPage() {
  return (
    <div className={styles.projectPage}>
      <Title />
      <Summary />
      <Description />
      <RepositoryLink />
    </div>
  );
}

export default NAIrelayPage;
