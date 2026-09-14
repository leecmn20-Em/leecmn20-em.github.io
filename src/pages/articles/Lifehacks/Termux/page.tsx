import main from "./main.md?raw";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import styles from "../../articleDetail.module.css";
import ReturnBack from "@/components/ReturnBack";
import WIP from "@/pages/WIP";

function Header() {
  return (
    <header className={styles.articleHeader}>
      <h1>안드로이드에서 리눅스 환경 구성하기</h1>
    </header>
  );
}

function Introduction() {
  return (
    <section className={styles.articleMain}>
      <p>
        안드로이드 환경에서도 PC와 동일하게 python 등 프로그래밍 언어를 다룰 수
        있다. 안드로이드 환경에서 터미널을 제공하는 Termux 앱을 이용해 리눅스
        환경을 만드는 방법을 알아보자.
      </p>
    </section>
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
        <Introduction />
        <Main />
      </div>
    </>
  );
}

export default Page;
//export default WIP;
