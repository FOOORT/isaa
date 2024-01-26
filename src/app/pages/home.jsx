import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import React from "react";

const Home = ({ isHovered, setIsHovered, x, y, size }) => {
  return (
    <div>
      <Hero
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        x={x}
        y={y}
        size={size}
      />
      <About
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        x={x}
        y={y}
        size={size}
      />
      <Services />
      <About
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        x={x}
        y={y}
        size={size}
      />
      <Services />
    </div>
  );
};

export default Home;
