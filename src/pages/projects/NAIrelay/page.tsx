import styles from "@/pages/projects/projectDetail.module.css";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import description from "./description.md?raw";

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
      <p>
        정해진 양식의 url이 NovelAI API를 호출하도록 연결하는 로컬 서버를
        실행하여, html 이미지 url 랜더링({"<img>"})이 즉석 생성 이미지로 나타날
        수 있도록 도와줍니다.
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
      <p>
        다운로드:
        <a
          href="https://github.com/leecmn20-Em/Public-Releases/releases/download/nairelay-1.1.1/NAIrelay-1.1.1.zip"
          rel="noopener noreferrer"
        >
          {" "}
          NAIrelay v1.1.1 Release
        </a>
      </p>
      <p>현재 빌드된 앱이 아닌 실행 가능한 소스 코드임을 양해해주세요.</p>
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
