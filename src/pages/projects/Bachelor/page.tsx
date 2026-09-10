import styles from "@/pages/projects/projectDetail.module.css";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import description from "./description.md?raw";

function Title() {
  return (
    <div className={styles.projectHeader}>
      <h1>기계학습 및 학습용 데이터 가공 예제</h1>
    </div>
  );
}

function Summary() {
  return (
    <div className={styles.projectSummary}>
      <p>
        학사논문연구 당시 개발했던 데이터 라벨링 및 소규모 모델 학습 코드를
        공개하고 있습니다.
      </p>
    </div>
  );
}

function Description() {
  return (
    <div className={styles.projectDescription}>
      <MarkdownRenderer>{description}</MarkdownRenderer>
    </div>
  );
}

function RepositoryLink() {
  return (
    <div className={styles.projectLink}>
      <a
        href="https://github.com/leecmn20-Em/IMU-human-gait-classification"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Github Repository
      </a>
    </div>
  );
}

function NAIrelayPage() {
  return (
    <div className={styles.projectPage}>
      <Title />
      <Summary />
      <RepositoryLink />
      <Description />
    </div>
  );
}

export default NAIrelayPage;
