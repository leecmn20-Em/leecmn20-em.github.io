import styles from "./projects.module.css";
import type { ProjectInfo } from "./projectTypes";

const projectModules = import.meta.glob<ProjectInfo>("./*/project.ts", {
  eager: true,
  import: "projectInfo",
});

const projects: ProjectInfo[] = Object.values(projectModules);

function Project({ name }: { name: string }) {
  const project = projects.find((p) => p.name === name);
  if (!project) {
    return null;
  }
  return (
    <div className={styles.projectCard}>
      <a href={project.href} target="_blank" rel="noopener noreferrer">
        <img src={project.thumbnail} alt={`${project.name} thumbnail`} />
      </a>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className={styles.project}>
      <h1>Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Project key={project.name} name={project.name} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
