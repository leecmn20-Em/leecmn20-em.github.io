import type { ComponentType } from "react";
import styles from "./projects.module.css";

const entryModules = import.meta.glob<ComponentType>("./entries/*.tsx", {
  eager: true,
  import: "default",
});

const projectComponents = Object.fromEntries(
  Object.entries(entryModules).map(([path, component]) => {
    const name = path
      .split("/")
      .pop()
      ?.replace(/\.tsx$/, "");
    return [name, component];
  }),
) as Record<string, ComponentType>;

function Project({ project }: { project: string }) {
  const ProjectComponent = projectComponents[project];

  if (!ProjectComponent) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <section className={styles.project}>
      <ProjectComponent />
    </section>
  );
}

function ProjectsPage() {
  return (
    <main>
      <Project project="NAIrelay" />
    </main>
  );
}

export default ProjectsPage;
