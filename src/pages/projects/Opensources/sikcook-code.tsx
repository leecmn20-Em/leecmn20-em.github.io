import styles from "../projectDetail.module.css";

function Title() {
  return (
    <div className={styles.projectHeader}>
      <h1>Arduino PWM 제어 예제</h1>
    </div>
  );
}

function Description() {
  return (
    <div className={styles.projectDescription}>
      <p>Arduino PWM 제어 예제 상세 내용</p>
    </div>
  );
}

function RepositoryLink() {
  return (
    <div className={styles.projectLink}>
      <a
        href="https://github.com/leecmn20-Em/Sikcook-code"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository
      </a>
    </div>
  );
}

function SikcookCode() {
  return (
    <>
      <Title />
      <Description />
      <RepositoryLink />
    </>
  );
}

export default SikcookCode;
