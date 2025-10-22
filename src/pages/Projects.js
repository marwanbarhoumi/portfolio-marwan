import projects from "../data/projects";

function Projects() {
  return (
    <div className="container py-5">
      <h2 className="mb-5 text-center">
        <span role="img" aria-label="rocket">
          🚀
        </span>{" "}
        Mes Projets
      </h2>
      <div className="row">
        {projects.map((project, i) => (
          <div className="col-md-6 col-lg-4 mb-4" key={i}>
            <div className="card h-100 shadow-sm border-0 project-card">
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top project-image"
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="mt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark btn-sm me-2 project-btn"
                  >
                    <i className="bi bi-github"></i> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm project-btn"
                  >
                    <i className="bi bi-box-arrow-up-right"></i> Demo
                  </a>
                  <div className="mt-2">
                    {project.tags?.map((tag, i) => (
                      <span key={i} className="badge bg-secondary me-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
