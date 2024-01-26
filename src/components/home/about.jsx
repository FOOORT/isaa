"use client";
import { useState } from "react";
import styles from "./css/about.module.scss";
import { motion } from "framer-motion";
import useMousePosition from "../../app/utils/useMousePosition";

const About = ({ title, body, masked }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <h2 className="uppercase tracking-widest text-black text-sm">
          {title}
        </h2>
        <p
          className=" text-3xl md:text-7xl font-black"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {body}
        </p>
      </motion.div>

      <div className={styles.body}>
        <h2 className="uppercase tracking-widest text-sm text-left">{title}</h2>
        <p className=" text-3xl md:text-7xl font-black">{masked}</p>
      </div>
    </main>
  );
};

export default About;
