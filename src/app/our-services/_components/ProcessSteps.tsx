"use client";
import { useState } from "react";

const steps = ["DISCOVERY", "DEFINE", "DESIGN", "DEVELOPMENT"];

export default function ProcessSteps() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex justify-around bg-black px-5">
      {steps.map((step, index) => (
        <div
          key={index}
          onMouseEnter={() => setHovered(step)}
          onMouseLeave={() => setHovered(null)}
          className="relative flex items-center justify-center h-[300px] w-[120px] sm:h-[400px] sm:w-[140px] transition-transform duration-300 hover:scale-110"
        >
          {/* Yellow Glow Background */}
          <div
            className={`absolute w-44 h-44 rounded-full bg-yellow-500 blur-2xl transition-all duration-500 ${
              hovered === step ? "opacity-60 scale-110" : "opacity-0"
            }`}
          />

          {/* Vertical Gradient Text */}
          <p className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white text-5xl sm:text-7xl font-extrabold -rotate-90 tracking-tight z-10 transition-all duration-300">
            {step}
          </p>
        </div>
      ))}
    </div>
  );
}
