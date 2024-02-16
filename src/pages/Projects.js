import React from "react";
import { projectList } from "../components/ProjectList";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";

function Project() {
  return (
    <div className="Projects">
      {/* <ProjectList /> */}
      <div className="projectl">
        {projectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.title} image={project.imgUrl} />
          );
        })}
      </div>
    </div>
  );
}

export default Project;
{
  /* <ProjectItem name="MERN" image={projImg1} />
        <ProjectItem name="NPL" image={projImg2} />
        <ProjectItem name="Gorcery" image={projImg3} /> */
}
