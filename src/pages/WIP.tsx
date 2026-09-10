import styles from "./WIP.module.css";

function WorkInProgress() {
  return (
    <main className={styles.page}>
      <section className={styles.panel} aria-labelledby="wip-title">
        <h1 className={styles.title} id="wip-title">
          Work in Progress
        </h1>
        <p className={styles.description}>
          현재 페이지는 개설 혹은 수정중에 있습니다. 아쉽지만 다른 페이지부터
          확인해주세요!
        </p>
      </section>
    </main>
  );
}

export default WorkInProgress;
