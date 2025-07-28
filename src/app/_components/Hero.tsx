"use client";
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

const Hero = () => {
  const [showCursor, setShowCursor] = useState(false);

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

  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
     <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-50" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-20"
      >
        <source src="https://ik.imagekit.io/msmrd69gi/4.mp4?updatedAt=1753711900872" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Animated Cursor */}
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

      {/* Text Content */}
      <div
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        className="relative z-50 px-10 pt-40"
      >
        <h1 className="text-7xl uppercase font-[600]">We build</h1>
        <h1 className="text-9xl uppercase font-bold py-1">Digital</h1>
        <h1 className="text-9xl uppercase font-bold">Experiences</h1>

        <h1 className="text-4xl leading-tight py-3 font-bold">
          CRAFTING MODERN <br /> WEB SOLUTIONS FOR BRANDS
        </h1>

        <h2 className="text-xl md:text-2xl font-bold mb-6 max-lg:text-center">
          <Typewriter
            words={[
              "Responsive Web Design",
              "Next.js Applications",
              "UI/UX Interfaces",
              "Performance Optimization",
              "SEO-Friendly Development",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            cursorColor="yellow"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </div>
    </div>
  );
};

export default Hero;
