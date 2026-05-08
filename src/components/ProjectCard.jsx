function ProjectCard({ project, deleteProject }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3>{project.title}</h3>
      </div>

      <p className="project-description">
        {project.description}
      </p>

      <span className="project-category">
        {project.category}
      </span>

      <button
        className="delete-btn"
        onClick={() => deleteProject(project.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ProjectCard;