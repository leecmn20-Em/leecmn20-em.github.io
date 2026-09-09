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
          <summary>제어 이야기</summary>
          <Article name="PID" />
        </details>
      </div>
    </div>
  );
}

//export default ArticlesPage;
export default WIP;
