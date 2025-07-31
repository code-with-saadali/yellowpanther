"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import React, { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";

const getTime = (timeZone: string) =>
  new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone,
  });

const GiveUsAScratch = () => {
  const [pakTime, setPakTime] = useState(getTime("Asia/Karachi"));
  const [ukTime, setUkTime] = useState(getTime("Europe/London"));
  const [showCursor, setShowCursor] = useState(false);

  // Motion values for smooth cursor
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 28);
      cursorY.set(e.clientY - 28);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPakTime(getTime("Asia/Karachi"));
      setUkTime(getTime("Europe/London"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white py-20 text-center relative overflow-hidden">
      <AnimatedBackground />
      <p className="text-white/80 text-lg md:text-3xl mb-2">
        On the prowl for a new platform?
      </p>
      <AnimatePresence>
        {showCursor && (
          <motion.div
            className="fixed z-[9999] pointer-events-none w-28 h-28"
            style={{ top: springY, left: springX }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.15 } }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 20,
              mass: 0.5,
            }}
          >
            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_2px_rgba(255,255,255,0.3)]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: `calc(${Math.cos((i * 45 * Math.PI) / 180)} * 1.8rem)`,
                  y: `calc(${Math.sin((i * 45 * Math.PI) / 180)} * 1.8rem)`,
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: i * 0.1,
                  repeatDelay: 0.5,
                }}
              />
            ))}

            {/* Main Cursor */}
            <div className="relative w-full h-full">
              {/* Subtle glow background */}
              <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-sm" />

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-full border-[2px] border-white"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(255,255,255,0.2)",
                    "0 0 15px rgba(255,255,255,0.3)",
                    "0 0 10px rgba(255,255,255,0.2)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Inner Circle */}
              <div className="absolute inset-2 rounded-full bg-black backdrop-blur-md flex items-center justify-center">
                {/* Rotating Text */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear",
                  }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                      />
                    </defs>
                    <text
                      fill="white"
                      fontSize="7"
                      fontFamily="'Poppins', sans-serif"
                      fontWeight="600"
                      letterSpacing="2"
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        ✦ PLAY SHOWREEL ✦ PORTFOLIO ✦ SAAD ALI ✦
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Center Pulse */}
                <motion.div
                  className="w-3 h-3 bg-white rounded-full z-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <h1
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide mb-10 flex justify-center items-center gap-2"
      >
        GIVE US A SCRATCH
      </h1>
      <div className="w-full h-[0.5px] bg-white"></div>

      {/* Timezones */}
      <div className="flex max-lg:flex-col justify-between gap-6 mt-8 px-5 lg:px-24">
        <div className="px-6 py-3 border rounded-full border-white text-lg font-semibold">
          <span className="text-white/70">PAKISTAN:</span> {pakTime}
        </div>
        <div className="px-6 py-3 border rounded-full border-white text-lg font-semibold">
          <span className="text-white/70">UK:</span> {ukTime}
        </div>
      </div>
    </div>
  );
};

export default GiveUsAScratch;
