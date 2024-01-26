"use client";
import { useState } from "react";
import Logo from "../logo";
import Menus from "../menus";
import Socials from "../socials";
import Sound from "../sound";
import styles from "./css/about.module.scss";
import { motion } from "framer-motion";
import useMousePosition from "@/app/utils/useMousePosition";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    <main className={styles.main}>
      <Logo />
      <Menus />
      <Socials />
      <Sound />
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Hidding bad shit since 2009
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          Making <span>Good Shit</span> Since 2009
        </p>
      </div>
    </main>
  );
};

export default Hero;
