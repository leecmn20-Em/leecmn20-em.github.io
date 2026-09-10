import styles from "@/pages/projects/projectDetail.module.css";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import description from "./description.md?raw";

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
      <p>
        사용자의 휴대폰에 설치된 센서들의 작동을 확인해보고, 센서 값을 .csv
        파일로 로깅할 수 있도록 돕습니다.
      </p>
      <p>이 앱을 통해 휴대폰을 임시로 부착형 센서로 활용할 수 있습니다.</p>
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
      <p>
        다운로드:
        <a
          href="https://github.com/leecmn20-Em/Public-Releases/releases/download/theSensors-1.0.0/theSensors.apk"
          rel="noopener noreferrer"
        >
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
