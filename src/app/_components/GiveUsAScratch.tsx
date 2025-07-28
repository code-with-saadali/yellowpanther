"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
    <div className="bg-gradient-to-r to-[yellow] from-black text-white py-20 text-center relative overflow-hidden">
      <p className="text-white/80 text-lg md:text-3xl mb-2">
        On the prowl for a new platform?
      </p>
      <AnimatePresence>
        {showCursor && (
          <motion.div
            className="fixed z-[9999] pointer-events-none"
            style={{
              top: springY,
              left: springX,
              width: 56,
              height: 56,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              className="w-20 h-20 bg-black text-white text-[15px] font-semibold rounded-full flex items-center justify-center shadow-xl ring-4 ring-gray-300 select-none tracking-wide"
              style={{
                fontFamily: "'Poppins', sans-serif",
                textShadow: "0 0 8px rgba(0,0,0,0.2), 0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              Explore
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <h1
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide mb-10 flex justify-center items-center gap-2"
      >
        GIVE
        <span className="relative group flex items-center">
          US
          <Image src="https://ik.imagekit.io/msmrd69gi/e9e16a41870703.5607091e53b51.jpg?updatedAt=1750949958488" alt="" width={200} height={120} className="rounded-full hidden group-hover:flex transition-all"/>
        </span>
        A SCRATCH
      </h1>
      <div className="w-full h-[0.5px] bg-white"></div>

      {/* Timezones */}
      <div className="flex justify-between gap-6 mt-8 px-5 lg:px-24">
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
