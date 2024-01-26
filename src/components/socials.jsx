"use client";
import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { GrDribbble } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import MagnetIcon from "./common/MagneticIcon";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <motion.ul
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="white fixed mb-4 md:mb-12 ml-4 md:ml-12 left-0 bottom-0 flex flex-col items-start gap-1 duration-150 z-50"
    >
      <MagnetIcon icon={<RiGithubLine />} />
      <MagnetIcon icon={<TiSocialLinkedinCircular />} />
      <MagnetIcon icon={<GrDribbble />} />
      <MagnetIcon icon={<AiFillInstagram />} />
    </motion.ul>
  );
};

export default Socials;
