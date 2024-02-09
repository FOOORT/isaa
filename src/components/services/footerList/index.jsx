"use client";
import { useState } from "react";
import Titles from "./titles";
import Descriptions from "./descriptions";

const Projects = ({ datas }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="relative z-[1] w-full">
      <Titles data={datas} setSelectedProject={setSelectedProject} />
      <Descriptions data={datas} selectedProject={selectedProject} />
    </div>
  );
};

export default Projects;
