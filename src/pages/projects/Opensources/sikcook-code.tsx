import styles from "../projectDetail.module.css";

function Title() {
  return (
    <div className={styles.projectHeader}>
      <h1>Arduino 모터 PWM 제어 {"(1)"}</h1>
    </div>
  );
}

function Description() {
  return (
    <div className={styles.projectDescription}>
      <p>프로젝트 당시 작성한 Arduino UNO R3 PWM PID 제어</p>
      <p>
        (프로젝트 당시 사용한 기기를 시뮬레이션할 방법이 있지 않는 한 코드는
        실행이 불가능하며, 내용만 참고하시기 바랍니다.)
      </p>
    </div>
  );
}

function RepositoryLink() {
  return (
    <div className={styles.projectLink}>
      <a
        href="https://github.com/leecmn20-Em/Sikcook-code"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository
      </a>
    </div>
  );
}

function SikcookCode() {
  return (
    <>
      <Title />
      <Description />
      <RepositoryLink />
    </>
  );
}

export default SikcookCode;
