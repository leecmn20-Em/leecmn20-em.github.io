import styles from "../projectDetail.module.css";
import Markdown from "react-markdown";
import description from "./description.md?raw";
import release from "./theSensors.apk?url";

function Title() {
  return (
    <div className={styles.projectHeader}>
      <h1>theSensors</h1>
    </div>
  );
}

function Summary() {
  return (
    <div className={styles.projectSummary}>
      <p>theSensors 프로젝트 내용</p>
    </div>
  );
}

function Description() {
  return (
    <div className={styles.projectDescription}>
      <Markdown>{description}</Markdown>
    </div>
  );
}

function RepositoryLink() {
  return (
    <div className={styles.projectLink}>
      <p>
        다운로드:
        <a href={release} rel="noopener noreferrer">
          {" "}
          theSensors APK 설치 파일
        </a>
      </p>
    </div>
  );
}

function TheSensorsPage() {
  return (
    <div className={styles.projectPage}>
      <Title />
      <Summary />
      <RepositoryLink />
      <Description />
    </div>
  );
}

export default TheSensorsPage;
