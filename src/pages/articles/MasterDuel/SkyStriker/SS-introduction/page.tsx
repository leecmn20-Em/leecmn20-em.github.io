import main from "./main.md?raw";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import styles from "@/pages/articles/articleDetail.module.css";
import discordicon from "@/resources/Discord/Discord-Symbol-Blurple.svg";
import WIP from "@/pages/WIP";

function Header() {
  return (
    <header className={styles.articleHeader}>
      <p>섬도에 대하여 알아보자</p>
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
    <div className={styles.articlePage}>
      <Header />
      <Main />
    </div>
  );
}

export default Page;
//export default WIP;
