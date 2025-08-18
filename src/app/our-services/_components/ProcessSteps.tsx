"use client";
import { useState } from "react";

const steps = ["DISCOVERY", "DEFINE", "DESIGN", "DEVELOPMENT"];

export default function ProcessSteps() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="bg-black px-5 lg:px-20 min-h-screen">
      <p className="text-white text-6xl max-lg:text-4xl max-md:text-3xl max-md:text-center uppercase font-bold max-md:pt-10">take a look at our 4d process</p>
      <div className="flex justify-around pt-28 max-md:flex-col">
        {steps.map((step, index) => (
        <div
          key={index}
          onMouseEnter={() => setHovered(step)}
          onMouseLeave={() => setHovered(null)}
          className="relative flex items-center max-md:items-start md:justify-center md:h-[400px] md:w-[140px] transition-transform duration-300 hover:scale-110"
        >
          {/* Yellow Glow Background */}
          <div
            className={`absolute w-44 h-44 rounded-full bg-yellow-500 blur-2xl transition-all duration-500 ${
              hovered === step ? "opacity-60 scale-110" : "opacity-0"
            }`}
          />

          {/* Vertical Gradient Text */}
          <p className="text-transparent bg-clip-text bg-gradient-to-b from-white cursor-pointer via-white to-white text-5xl sm:text-7xl font-extrabold max-md:rotate-0 -rotate-90 tracking-tight z-10 transition-all duration-300">
            {step}
          </p>
        </div>
      ))}
      </div>
    </div>
  );
}
