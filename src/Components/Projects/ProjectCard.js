import React from "react";
import "./Projectcard.css";

export default function ProjectCard({ project }) {
  const techused = project.tech;
  console.log(techused, project, "techused");
  return (
    <div className="project-card">
      <div className="card-img">
        <img
          // src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8zN2Q2OTk4ZTJlMTkxNWUyYjVkNzNhZWQwODIwNTVhOT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.VkUXSIHSruJI0d3316x6cbOYJiE9azT7pFeITxvX5eU"
          src={project.imglink}
          alt=""
        />
      </div>
      <div className="card-main">
        <h2 className="card-heading">{project.name}</h2>

        <p className="card-description">{project.description}</p>

        <div className="tecdiv">
          {techused.map((e) => (
            <span className="tectused">{e}</span>
          ))}
        </div>
        
        <div className="card-btn">
          <a className="card-git" href={project.github} target="_blank">
            Github
          </a>
          <a className="card-live" href={project.livelink} target="_blank">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
