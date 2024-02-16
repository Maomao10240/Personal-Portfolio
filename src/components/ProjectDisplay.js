import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "./ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1>
        <b>{project.title}</b>
      </h1>
      <img src={project.imgUrl} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <b>Description:</b>
        {project.description}
      </p>
    </div>
  );
}

export default ProjectDisplay;
