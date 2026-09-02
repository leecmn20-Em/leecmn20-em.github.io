import type { ComponentType } from "react";
import styles from "./projects.module.css";
import type { ProjectInfo } from "./projectTypes";

const projectModules = import.meta.glob<ProjectInfo>("./*/project.ts", {
  eager: true,
  import: "default",
});

const projects: ProjectInfo[] = Object.values(projectModules);

function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div key={project.name} className={styles.projectItem}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ProjectsPage;
