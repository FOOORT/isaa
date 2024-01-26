"use client";
import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.h1
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-red-500 fixed left-0 top-0 mt-4 md:mt-12 ml-4 md:ml-12 z-50 flex items-center gap-2 duration-150"
    >
      <span className="hidden md:block duration-200">NSABIMANA</span> Isaa
    </motion.h1>
  );
};

export default Logo;
