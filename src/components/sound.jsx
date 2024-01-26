"use client";
import { useState } from "react";

const Sound = () => {
  const [mod, setMod] = useState(false);

  return (
    <button
      className="white fixed bottom-0 right-0 mb-12 mr-12 z-50 uppercase text-xs"
      onClick={() => setMod((prev) => !prev)}
    >
      Sound {mod ? "on" : "off"}
    </button>
  );
};

export default Sound;
