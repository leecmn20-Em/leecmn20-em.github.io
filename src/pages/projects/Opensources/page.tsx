import styles from "@/pages/projects/projectDetail.module.css";
import Title1 from "./sikcook-code";
import Title2 from "./RCcar";
import ReturnBack from "@/components/ReturnBack";

function OpensourcesPage() {
  return (
    <>
      <ReturnBack />
      <div className={styles.projectPage}>
        <Title1 />
        <Title2 />
      </div>
    </>
  );
}

export default OpensourcesPage;
