import styles from "./css/services.module.scss";
import React from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "../services/smoothScroll";
import Projects from "../services/projects";

const Earth = dynamic(() => import("../services/earth"), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png"></img>,
});

export default function Home() {
  return (
    <SmoothScroll>
      <main className={styles.main}>
        <Earth />
        <Projects />
      </main>
    </SmoothScroll>
  );
}
