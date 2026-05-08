import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !category) return;

    addProject({
      title,
      description,
      category,
    });

    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* CATEGORY INPUT */}
      <input
        type="text"
        placeholder="Category (e.g React, JavaScript)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;