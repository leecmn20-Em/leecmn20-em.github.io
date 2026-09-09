import styles from "../projectDetail.module.css";

function Title() {
  return (
    <div className={styles.projectHeader}>
      <h1>Arduino 제어 예제 2</h1>
    </div>
  );
}

function Description() {
  return (
    <div className={styles.projectDescription}>
      <p>Arduino UNO PWM 증분형 PID 제어</p>
      <p>
        (시뮬레이션이 아니므로 코드는 실행이 불가능하며, 내용만 참고하시기
        바랍니다.)
      </p>
    </div>
  );
}

function RepositoryLink() {
  return (
    <div className={styles.projectLink}>
      <a
        href="https://github.com/leecmn20-Em/RCcar/tree/main/ino"
        target="_blank"
        rel="noopener noreferrer"
      >
        코드 보기 (GitHub Repository)
      </a>
    </div>
  );
}

function RCcarCode() {
  return (
    <>
      <Title />
      <Description />
      <RepositoryLink />
    </>
  );
}

export default RCcarCode;
