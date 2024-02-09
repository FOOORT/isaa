"use client";
import { useState } from "react";

const Sound = () => {
  const [mod, setMod] = useState(false);

  return (
    <button
      className="white fixed bottom-0 right-0 mb-4 md:mb-12 mr-4 md:mr-12 z-30 uppercase text-xs duration-150"
      onClick={() => setMod((prev) => !prev)}
    >
      Sound {mod ? "on" : "off"}
    </button>
  );
};

export default Sound;
