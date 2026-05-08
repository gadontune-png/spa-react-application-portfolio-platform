function ProjectCard({ project, deleteProject }) {

  return (
    <div className="project-card">

      <div className="image-placeholder">
        {/* Future image upload feature */} 
      </div>

      <div className="project-content">

        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <span className="category">
          {project.category}
        </span>

      </div>

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