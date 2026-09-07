import styles from "./WIP.module.css";

function WorkInProgress() {
  return (
    <main className={styles.page}>
      <section className={styles.panel} aria-labelledby="wip-title">
        <h1 className={styles.title} id="wip-title">
          Work in Progress
        </h1>
        <p className={styles.description}>페이지를 개설중입니다. 곧 만나요!</p>
      </section>
    </main>
  );
}

export default WorkInProgress;
