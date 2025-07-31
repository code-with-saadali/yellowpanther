"use client";
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import Image from "next/image";

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
      <AnimatedBackground />
      <AnimatePresence>
        {showCursor && (
          <motion.div
            className="fixed z-[9999] pointer-events-none w-28 h-28 hidden lg:block"
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

      {/* Text Content */}
      <div
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        className="relative z-50 px-5 lg:px-10 pt-40"
      >
        <h1 className="text-3xl md:text-5xl lg:text-7xl uppercase font-[600] max-md:text-center">We build</h1>
        <h1 className="text-6xl md:text-7xl lg:text-9xl uppercase font-bold py-1 max-md:text-center">Digital</h1>
        <h1 className="text-[52px] md:text-7xl lg:text-9xl uppercase font-bold">Experiences</h1>

        <h1 className="text-2xl lg:text-4xl leading-tight py-3 font-bold max-md:text-center">
          CRAFTING MODERN <br /> WEB SOLUTIONS FOR BRANDS
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl text-yellow-400 uppercase font-bold mb-6 max-lg:text-center">
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
      <div className="absolute lg:right-[4.5rem] top-0 h-full overflow-hidden z-40">
        <motion.div
          className="flex gap-5"
          animate={{ y: ["-10%", "-10%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {[
            [
              "https://ik.imagekit.io/msmrd69gi/6PwRr1stmtvVieqWosE8Dk1Jz6g.avif?updatedAt=1751374392490",
              "https://ik.imagekit.io/msmrd69gi/7aIt5C65gWrogDgGG1mWPFyzsM.avif?updatedAt=1751374392792",
              "https://ik.imagekit.io/msmrd69gi/cfe4SQhxMtcArNzRWNEh6mklwxE.avif?updatedAt=1751110645452",
              "https://ik.imagekit.io/msmrd69gi/0I9OXKFwQY8NzxtZyoeJZRtY.avif?updatedAt=1751109183654",
            ],
            [
              "https://ik.imagekit.io/msmrd69gi/8Ou7m6Tc0flZz3yhClXwGhA8U.avif?updatedAt=1751107534201",
              "https://ik.imagekit.io/msmrd69gi/5kkmtIf0TPYac8MJsDrCXhyIb0c.png?updatedAt=1750951146664",
              "https://ik.imagekit.io/msmrd69gi/2006-glennon-wagner-charleston-backdrop-high-fashion-editorial-warmth-00006_web.jpg?updatedAt=1750947987875",
              "https://ik.imagekit.io/msmrd69gi/L7AHuVIdi7CVQYRWpBHlTYdVPsc.png?updatedAt=1750330502343",
            ],
            [
              "https://ik.imagekit.io/msmrd69gi/a6yHdu1OMuJ0monBsX1wo7Qo5pM.png?updatedAt=1750947953183f",
              "https://ik.imagekit.io/msmrd69gi/zoimqmwmPzQCsx9m3c9GwJ1A0XU.png?updatedAt=1751096411867",
              "https://ik.imagekit.io/msmrd69gi/80QJvYM3h4nosjsXGKDyoxZ2RU.png?updatedAt=1751100339228",
              "https://ik.imagekit.io/msmrd69gi/rzbPtCB0tgIXOz1ypbASf10eVU.png?updatedAt=1751096412159",
            ],
          ].map((imageSet, i) => (
            <motion.div
              key={i}
              animate={{
                y: i === 1 ? ["30%", "-10%"] : ["-10%", "30%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="flex flex-col gap-5"
            >
              {imageSet.map((imgSrc, j) => (
                <div
                  key={j}
                  className="w-[145px] h-[290px] overflow-hidden rounded-full"
                >
                  <Image
                    src={imgSrc}
                    alt={`img-${i}-${j}`}
                    width={160}
                    height={120}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-22 bg-gradient-to-t from-black to-transparent z-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-50 pointer-events-none" />
    </div>
  );
};

export default Hero;
