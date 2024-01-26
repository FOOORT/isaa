import styles from "./css/services.module.scss";
import React from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "../services/smoothScroll";
import Projects from "../services/projects";
import Image from "next/image";

const Earth = dynamic(() => import("../services/earth"), {
  ssr: false,
  loading: () => (
    <Image
      src="/assets/placeholder.png"
      width={300}
      height={300}
      alt="earth Pic"
    />
  ),
});

export default function Services() {
  return (
    <SmoothScroll>
      <main className={styles.main}>
        <Earth />
        <Projects />
      </main>
    </SmoothScroll>
  );
}
