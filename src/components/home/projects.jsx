"use client";
import { useEffect, useRef } from "react";
import styles from "./css/page.module.scss";
import Projects from "../static/projects";
import Card from "../common/card";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const Works = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main ref={container} className={styles.mainworks}>
      {Projects.map((project, index) => {
        const targetScale = 1 - (Projects.length - index) * 0.05;
        return (
          <Card
            key={`p_${index}`}
            i={index}
            {...project}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default Works;
