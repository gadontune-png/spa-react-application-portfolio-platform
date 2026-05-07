import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import "./styles/App.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "Description of the project",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of the project",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of the project",
    },
       {
      id: 4,
      title: "Project 4",
      description: "Description of the project",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <div className="container">
        <Header />

        <ProjectForm addProject={addProject} />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}

export default App;