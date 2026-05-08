import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import "./styles/App.css";

function App() {

  // GLOBAL STATE
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React.",
      category: "React",
    },
    {
      id: 2,
      title: "Currency Converter",
      description: "Currency converter using API integration.",
      category: "JavaScript",
    },
    {
      id: 3,
      title: "Eye Clinic Website",
      description: "Modern healthcare website for an eye clinic.",
      category: "Healthcare",
    },
  ]);

  // SEARCH STATE
  const [searchTerm, setSearchTerm] = useState("");

  // ADD PROJECT
  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now(),
    };

    setProjects((prevProjects) => [
      ...prevProjects,
      newProject,
    ]);
  };

  // DELETE PROJECT
  const deleteProject = (id) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    );
  };

  // FILTER PROJECTS
  const filteredProjects = projects.filter((project) =>
    project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <div className="container">

       <div className="app-header"> 
        <Header 
          title="Personal Portfolio Platform"
          subtitle="Manage and showcase your projects"
        />
        </div>

        <div className="form">
        <ProjectForm addProject={addProject} />
        </div>

        <SearchBar className="search-bar"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <ProjectList
          projects={filteredProjects}
          deleteProject={deleteProject}
        />

        {filteredProjects.length === 0 && (
          <p className="no-projects">
            No projects found.
          </p>
        )}

      </div>
    </div>
  );
}

export default App;