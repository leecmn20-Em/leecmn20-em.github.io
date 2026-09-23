import styles from "@projects/projectDetail.module.css";
import Title1 from "./sikcook-code";
import Title2 from "./RCcar";
import ReturnBack from "@/components/ReturnBack";

function OpensourcesPage() {
  return (
    <>
      <ReturnBack href="@projects" />
      <div className={styles.projectPage}>
        <Title1 />
        <Title2 />
      </div>
    </>
  );
}

export default OpensourcesPage;
