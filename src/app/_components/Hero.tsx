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
import { BsPlayFill } from "react-icons/bs";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 64); // half of button size
      cursorY.set(e.clientY - 64);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <div className="relative h-screen w-full overflow-hidden text-white"  onClick={() => setShowVideo(true)}>
      <AnimatedBackground />

      {/* Rotating Play Button Cursor */}
      <AnimatePresence>
        {showCursor && (
          <motion.button
            style={{ x: springX, y: springY }}
            className="fixed w-32 h-32 pointer-events-none z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 rounded-full bg-white z-0" />

            {/* Rotating Text */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full flex items-center justify-center z-10"
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                </defs>
                <text fontSize="11" fill="black">
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    PLAY SHOWREEL • PLAY SHOWREEL • PLAY SHOWREEL •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Center Play Icon */}
            <div className="absolute inset-8 bg-black rounded-full z-20 flex items-center justify-center">
              <BsPlayFill className="text-yellow-400 w-6 h-6" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[1100] bg-black/80 flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video">
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-full rounded-lg"
              src="https://ik.imagekit.io/msmrd69gi/all%20website.mp4?updatedAt=1748864437246"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded cursor-pointer"
              onClick={(e) => {
              e.stopPropagation();
              setShowVideo(false);
            }}
          >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Text Content */}
      <div
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        className="relative z-50 px-5 lg:px-10 pt-40"
      >
        <h1 className="text-3xl md:text-5xl lg:text-7xl uppercase font-[600] max-md:text-center">
          We build
        </h1>
        <h1 className="text-6xl md:text-7xl lg:text-9xl uppercase font-bold py-1 max-md:text-center">
          Digital
        </h1>
        <h1 className="text-[52px] md:text-7xl lg:text-9xl uppercase font-bold">
          Experiences
        </h1>

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

      {/* Floating Images */}
      <div className="absolute lg:right-[4.5rem] top-0 h-full overflow-hidden z-40">
        <motion.div
          className="flex gap-5"
          animate={{ y: ["-31%", "-31%"] }}
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
              "https://ik.imagekit.io/msmrd69gi/0I9OXKFwQY8NzxtZyoeJZRtY.avif?updatedAt=1751109183654",
            ],
            [
              "https://ik.imagekit.io/msmrd69gi/8Ou7m6Tc0flZz3yhClXwGhA8U.avif?updatedAt=1751107534201",
              "https://ik.imagekit.io/msmrd69gi/5kkmtIf0TPYac8MJsDrCXhyIb0c.png?updatedAt=1750951146664",
              "https://ik.imagekit.io/msmrd69gi/2006-glennon-wagner-charleston-backdrop-high-fashion-editorial-warmth-00006_web.jpg?updatedAt=1750947987875",
              "https://ik.imagekit.io/msmrd69gi/L7AHuVIdi7CVQYRWpBHlTYdVPsc.png?updatedAt=1750330502343",
              "https://ik.imagekit.io/msmrd69gi/L7AHuVIdi7CVQYRWpBHlTYdVPsc.png?updatedAt=1750330502343",
            ],
            [
              "https://ik.imagekit.io/msmrd69gi/a6yHdu1OMuJ0monBsX1wo7Qo5pM.png?updatedAt=1750947953183f",
              "https://ik.imagekit.io/msmrd69gi/zoimqmwmPzQCsx9m3c9GwJ1A0XU.png?updatedAt=1751096411867",
              "https://ik.imagekit.io/msmrd69gi/80QJvYM3h4nosjsXGKDyoxZ2RU.png?updatedAt=1751100339228",
              "https://ik.imagekit.io/msmrd69gi/rzbPtCB0tgIXOz1ypbASf10eVU.png?updatedAt=1751096412159",
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
