"use client";
import { useState } from "react";
import Home from "./pages/home";
import useMousePosition from "./utils/useMousePosition";

const Page = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <Home
      isHovered={isHovered}
      setIsHovered={setIsHovered}
      x={x}
      y={y}
      size={size}
    />
  );
};

export default Page;
