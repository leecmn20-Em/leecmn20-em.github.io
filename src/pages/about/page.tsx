import styles from "./about.module.css";
import { useState } from "react";

type CopyButtonProps = {
  value: string;
};

function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" onClick={handleCopy}>
      {copied ? "복사됨!" : "복사"}
    </button>
  );
}

function AboutPage() {
  return (
    <main className={styles.about}>
      <section>
        <h2>E.m's Blog</h2>
        <p>개인 활동을 자유롭게 기록한 블로그입니다.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Phone: 010-5645-7946 <CopyButton value="01056457946" />
        </p>
        <p>
          Email: leecmn20@gmail.com <CopyButton value="leecmn20@gmail.com" />
        </p>
        <p>
          Github:{" "}
          <a
            href="https://github.com/leecmn20-Em"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/leecmn20-Em
          </a>
        </p>
        <p>Discord: @elemental_master</p>
      </section>
    </main>
  );
}

export default AboutPage;
