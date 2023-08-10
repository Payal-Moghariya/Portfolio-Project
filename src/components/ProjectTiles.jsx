import projects from "../projects";
import { Route, Routes } from "react-router-dom";
import ToDoApp from "./ToDoApp";

function ProjectTiles() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {projects.map((project, index) => (
          <div className="col" key={index}>
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text">{project.description}</p>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    {/* <a href="/todo"> */}
                    <a href={project.route.path}>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Explore
                      </button>
                    </a>
                  </div>
                  <small className="text-body-secondary">{project.name}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTiles;
