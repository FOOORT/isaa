"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Titles from "./titles";
import Descriptions from "./descriptions";

const Projects = ({ datas }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className={styles.container}>
      <Titles data={datas} setSelectedProject={setSelectedProject} />
      <Descriptions data={datas} selectedProject={selectedProject} />
    </div>
  );
};

export default Projects;
