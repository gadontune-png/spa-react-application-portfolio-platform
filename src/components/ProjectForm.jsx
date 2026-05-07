import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    addProject(newProject);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="form-container">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <label>Title</label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description</label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ProjectForm;