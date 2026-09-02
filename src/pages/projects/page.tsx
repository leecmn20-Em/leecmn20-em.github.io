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
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.name} className={styles.projectCard}>
            <img src={project.thumbnail} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ProjectsPage;
