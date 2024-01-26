"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Titles from "./titles";
import Descriptions from "./descriptions";

const data = [
  {
    title: "Klab",
    description:
      "Working on the Next-Generation HMI Experience without no driving experience.",
    speed: 0.5,
  },
  {
    title: "Andela",
    description:
      "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
    speed: 0.52,
  },
  {
    title: "CodeHill",
    description:
      "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
    speed: 0.54,
  },
  {
    title: "CodeLand",
    description:
      "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
    speed: 0.56,
  },
  {
    title: "Awesomity",
    description:
      "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
    speed: 0.58,
  },
  {
    title: "UNIVERSITY OF RWANDA",
    description:
      "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
    speed: 0.9,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className={styles.container}>
      <Titles data={data} setSelectedProject={setSelectedProject} />
      <Descriptions data={data} selectedProject={selectedProject} />
    </div>
  );
}
