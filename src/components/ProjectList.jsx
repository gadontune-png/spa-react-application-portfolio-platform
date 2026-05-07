import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))
      ) : (
        <p className="no-projects">
          No projects match your search.
        </p>
      )}
    </div>
  );
}

export default ProjectList;