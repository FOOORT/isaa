"use client";
import React from "react";
import { motion } from "framer-motion";

const Menus = () => {
  return (
    <motion.ul
      initial={({ y: -100, opacity: 0 }, "hidden")}
      animate={({ y: 0, opacity: 1 }, "visible")}
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 1 } },
      }}
      className="white fixed mt-4 md:mt-12 mr-4 md:mr-12 top-0 right-0 flex flex-col items-end gap-2 z-50 text-sm md:text-base duration-150"
    >
      <li>About</li>
      <li>Work</li>
      <li>Contact</li>
    </motion.ul>
  );
};

export default Menus;
