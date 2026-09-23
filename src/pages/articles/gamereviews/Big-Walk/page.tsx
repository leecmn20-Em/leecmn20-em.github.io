import main from "./main.md?raw";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import styles from "@articles/articleDetail.module.css";
import discordicon from "@/resources/Discord/Discord-Symbol-Blurple.svg";
import ReturnBack from "@/components/ReturnBack";
import WIP from "@/pages/WIP";

function Header() {
  return (
    <header className={styles.articleHeader}>
      <p>
        플레이 파트너:{" "}
        <img
          className="inlineIcon"
          src={discordicon}
          alt=""
          aria-hidden="true"
        />
        @jsj90909
      </p>
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
      <ReturnBack href="@articles" />
      <div className={styles.articlePage}>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default Page;
//export default WIP;
