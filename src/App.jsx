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
     {
      id: 4,
      title: "React hooks and states",
      description: "understanding react hooks and states.",
      category: "React",
    },
     {
      id: 5,
      title: "Flatiron bookstore",
      description: "A simple bookstore application.",
      category: "JavaScript",
    },
    {
      id: 6,
      title: "API and Fetch",
      description: "A simple API integration project.",
      category: "JavaScript",
    },
    {
      id: 7,
      title: "CSS Grid Layout",
      description: "A simple CSS Grid Layout project.",
      category: "CSS",
    },
  ]);

  // SEARCH STATE
  const [searchTerm, setSearchTerm] = useState("");

  // CATEGORY FILTER STATE
  const [categoryFilter, setCategoryFilter] = useState("All");

  // ADD PROJECT
  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now(),
    };

    setProjects((prev) => [...prev, newProject]);
  };

  // DELETE PROJECT
  const deleteProject = (id) => {
    setProjects((prev) =>
      prev.filter((project) => project.id !== id)
    );
  };
// FILTER + SEARCH + CATEGORY
const filteredProjects = projects
  .filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((project) =>
    categoryFilter === "All"
      ? true
      : project.category === categoryFilter
  );

  // UNIQUE CATEGORIES
  const categories = [
    "All",
    ...new Set(projects.map((p) => p.category)),
  ];

  return (
    <div className="app">
      <div className="container">

        <Header
          title="Personal Portfolio Platform"
          subtitle="Manage and showcase your projects"
        />

        <ProjectForm addProject={addProject} />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* CATEGORY FILTER */}
        <div className="category-filter">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <ProjectList
          projects={filteredProjects}
          deleteProject={deleteProject}
        />

        {filteredProjects.length === 0 && (
          <p className="no-projects">No projects found.</p>
        )}

      </div>
    </div>
  );
}

export default App;