import styles from "./not-found.module.css";

function NotFoundPage() {
  return (
    <main className={styles.page}>
      <p className={styles.code}>404</p>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p className={styles.description}>
        주소가 잘못되었거나 페이지가 이동 또는 삭제되었을 수 있습니다.
        <br />
        주소를 다시 확인하거나 홈으로 이동해 주세요.
      </p>
      <a className={styles.homeLink} href="/">
        홈으로 돌아가기
      </a>
    </main>
  );
}

export default NotFoundPage;
