import styles from "./projects.module.css";
import type { ProjectInfo } from "./projectTypes";

const projectModules = import.meta.glob<ProjectInfo>("./**/project.ts", {
  eager: true,
  import: "projectInfo",
});

const projects = Object.entries(projectModules).map(
  ([modulePath, project]) => ({
    ...project,
    href: `/projects/${modulePath
      .replace(/^\.\//, "")
      .replace(/\/project\.ts$/, "")}/`,
  }),
);

function Project({ name }: { name: string }) {
  const project = projects.find((p) => p.name === name);
  if (!project) {
    return null;
  }
  return (
    <div className={styles.projectCard}>
      <a href={project.href} rel="noopener noreferrer">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={`${project.name} thumbnail`} />
        ) : (
          <div className={styles.textThumbnail}>{project.name}</div>
        )}
      </a>
      <p>{project.summary}</p>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className={styles.project}>
      <h1>Projects</h1>
      <div className={styles.projectGrid}>
        <Project name="theSensors" />
        <Project name="NAIrelay" />
        <Project name="Bachelor" />
        <Project name="Open projects sources" />
      </div>
    </div>
  );
}

export default ProjectsPage;
