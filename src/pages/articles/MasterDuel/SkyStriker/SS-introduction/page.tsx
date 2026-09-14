import main from "./main.md?raw";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import styles from "@/pages/articles/articleDetail.module.css";
import ReturnBack from "@/components/ReturnBack";
import WIP from "@/pages/WIP";

function Header() {
  return (
    <header className={styles.articleHeader}>
      <h1>섬도에 대하여 알아보자</h1>
    </header>
  );
}

function Main() {
  return (
    <main className={styles.articleMain}>
      <MarkdownRenderer>{main}</MarkdownRenderer>
    </main>
  );
}

function Page() {
  return (
    <>
      <ReturnBack href="../../" />
      <div className={styles.articlePage}>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default Page;
//export default WIP;
