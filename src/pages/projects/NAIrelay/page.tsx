import styles from "../projectDetail.module.css";
import Markdown from "react-markdown";
import description from "./description.md?raw";
import release from "./NAIrelay-1.1.1.zip?url";

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
          NAIrelay v1.1.1 Release
        </a>
      </p>
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
