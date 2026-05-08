import { useState } from "react";

function ProjectForm({ addProject }) {

  // LOCAL STATE
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 

  // FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description ) {
      return;
    }

    const newProject = {
      title,
      description,
      
    };

    addProject(newProject);

    // CLEAR FORM
    setTitle("");
    setDescription("");
   
  };

  return (
    <div className="form-container">

      <h2>Add New Project</h2>

      <form onSubmit={handleSubmit}>

        <label>Project Title</label>
        <input
          className="placeholder-title"
          type="text"
          placeholder="Enter project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <div className="spacer">
        <label >Project Description</label>
        <textarea
          className="placeholder-description"
          placeholder="Enter project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </div>
       

        <div className="button-container">
        <button
        className="submit-button"
         type="submit">
          Add Project
        </button>
        </div>

      </form>
    </div>
  );
}

export default ProjectForm;