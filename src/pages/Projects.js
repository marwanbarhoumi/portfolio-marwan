import React from "react";
import projects from "../data/projects";
import "../style/Project.css";

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">
        🚀 Mes Projets
      </h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-content">
              <h5 className="project-name">{project.title}</h5>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags?.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn github"
                >
                  <i className="bi bi-github"></i> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn demo"
                >
                  <i className="bi bi-box-arrow-up-right"></i> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
