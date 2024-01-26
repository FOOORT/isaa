import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { GrDribbble } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";

const Socials = () => {
  return (
    <ul className="white fixed mb-12 ml-12 left-0 bottom-0 flex flex-col items-start gap-8 duration-150 z-50">
      <RiGithubLine />
      <TiSocialLinkedinCircular />
      <GrDribbble />
      <AiFillInstagram />
    </ul>
  );
};

export default Socials;
