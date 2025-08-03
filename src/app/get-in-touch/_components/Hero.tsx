"use client";
import AnimatedBackground from "@/app/_components/AnimatedBackground";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsPlayFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

const email = "Give Us A Scratch";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative overflow-hidden px-5 lg:px-20 h-[90vh] max-lg:h-full">
      <AnimatedBackground />

      {/* MODAL OVERLAY */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
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
              onClick={() => setIsVideoOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex max-lg:flex-col justify-between lg:items-center h-full max-lg:pt-36">
        <div className="relative z-10">
          <h1 className="text-white max-md:text-2xl max-lg:text-5xl text-7xl font-bold uppercase leading-tight">
            Your Challenge Is Our <br /> Playground
          </h1>
          <h1 className="text-2xl flex flex-wrap gap-[1px] h-full overflow-hidden cursor-pointer pt-10 items-center">
            {email.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 0, color: "#ffffff" }}
                whileHover={{
                  y: -8,
                  color: "#facc15",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            <motion.span
              initial={{ x: 0 }}
              whileHover={{
                x: 5,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                },
              }}
              className="ml-2 mt-1 text-yellow-400"
            >
              <HiArrowRight size={22} />
            </motion.span>
          </h1>
        </div>

        {/* CIRCULAR BUTTON */}
        <button
          onClick={() => setIsVideoOpen(true)}
          className="relative w-32 h-32 focus:outline-none cursor-pointer max-lg:my-10 max-md:mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-white z-0" />

          {/* Rotating Text Circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full flex items-center justify-center z-10"
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="
                  M 50, 50
                  m -35, 0
                  a 35,35 0 1,1 70,0
                  a 35,35 0 1,1 -70,0
                "
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
        </button>
      </div>
       <div className="absolute bottom-0 left-0 w-full h-22 bg-gradient-to-t from-black to-transparent z-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-50 pointer-events-none" />
    </div>
  );
};

export default Hero;
