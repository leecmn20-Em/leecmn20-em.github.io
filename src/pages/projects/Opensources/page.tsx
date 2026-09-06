import styles from "../projectDetail.module.css";

function Title1() {
  return (
    <div className={styles.projectHeader}>
      <h1>Arduino PWM 제어 예제</h1>
    </div>
  );
}

function Description1() {
  return (
    <div className={styles.projectDescription}>
      <p>Arduino PWM 제어 예제 상세 내용</p>
    </div>
  );
}

function RepositoryLink1() {
  return (
    <div className={styles.projectLink}>
      <a
        href="https://github.com/leecmn20-Em/theSensors"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository
      </a>
    </div>
  );
}

function OpensourcesPage() {
  return (
    <div className={styles.projectPage}>
      <Title1 />
      <Description1 />
      <RepositoryLink1 />
    </div>
  );
}

export default OpensourcesPage;
