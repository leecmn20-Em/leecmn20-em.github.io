import styles from "./articles.module.css";
import type { ArticleInfo } from "./articleTypes";
import WIP from "@/pages/WIP";

const articleModules = import.meta.glob<ArticleInfo>("./**/article.ts", {
  eager: true,
  import: "articleInfo",
});

const articles = Object.entries(articleModules).map(
  ([modulePath, article]) => ({
    ...article,
    href: `/articles/${modulePath
      .replace(/^\.\//, "")
      .replace(/\/article\.ts$/, "")}/`,
  }),
);

function Article({ name }: { name: string }) {
  const article = articles.find((p) => p.name === name);
  if (!article) {
    return null;
  }
  return (
    <div className={styles.articleLink}>
      <a href={article.href} rel="noopener noreferrer">
        {article.headline}
      </a>
    </div>
  );
}

function ArticlesPage() {
  return (
    <div className={styles.article}>
      <h1>Articles</h1>
      <div className={styles.articleGrid}>
        <details>
          <summary>제어 이론 이야기</summary>
          <Article name="PID" />
          <Article name="FEP" />
        </details>
        <details>
          <summary>몬헌 이야기</summary>
          <p> Coming Soon </p>
        </details>
        <details>
          <summary>마듀 이야기</summary>
          <Article name="SS-introduction" />
          <Article name="SS-basic" />
        </details>
        <details>
          <summary>게임 리뷰</summary>
          <Article name="Big Walk" />
        </details>
      </div>
    </div>
  );
}

export default ArticlesPage;
//export default WIP;
