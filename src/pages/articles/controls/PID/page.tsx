import main from "./main.md?raw";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import styles from "@articles/articleDetail.module.css";
import { ReturnBack } from "@ui";
import WIP from "@/pages/WIP";

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
      <ReturnBack href="@articles" />
      <div className={styles.articlePage}>
        <Main />
      </div>
    </>
  );
}

//export default Page;
export default WIP;
