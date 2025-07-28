"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";

const services = [
  {
    title: "WEBSITE",
    content: "We craft responsive, high-performance websites tailored to your brand.",
    image: "https://ik.imagekit.io/msmrd69gi/MmOC8qMI4qYY95fzQgazYpkw.png?updatedAt=1750321544063",
  },
  {
    title: "MOBILE APP",
    content: "We build intuitive mobile apps for both iOS and Android platforms.",
    image: "https://ik.imagekit.io/msmrd69gi/NrX2Ytxl4H8toVEyviJXd07dyE.png?updatedAt=1750328730807",
  },
  {
    title: "E-COMMERCE",
    content: "We develop seamless online stores with smooth shopping experiences.",
    image: "https://ik.imagekit.io/msmrd69gi/0pyIyZeEMmj75LffprppnoSi9AY.webp?updatedAt=1750242834133",
  },
  {
    title: "E-COMMERCE",
    content: "We develop seamless online stores with smooth shopping experiences.",
    image: "https://ik.imagekit.io/msmrd69gi/0pyIyZeEMmj75LffprppnoSi9AY.webp?updatedAt=1750242834133",
  },
  {
    title: "MOBILE APP",
    content: "We build intuitive mobile apps for both iOS and Android platforms.",
    image: "https://ik.imagekit.io/msmrd69gi/NrX2Ytxl4H8toVEyviJXd07dyE.png?updatedAt=1750328730807",
  },
  {
    title: "WEBSITE",
    content: "We craft responsive, high-performance websites tailored to your brand.",
    image: "https://ik.imagekit.io/msmrd69gi/MmOC8qMI4qYY95fzQgazYpkw.png?updatedAt=1750321544063",
  },
];

const ServiceAccordion = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-black text-white px-5 lg:px-34 py-16 flex flex-col gap-6 items-center justify-center">
      {services.map((item, index) => (
        <div
          key={index}
          className={`w-full border border-[#333] transition-all overflow-hidden cursor-pointer 
            ${
              hoveredIndex === index
                ? "rounded-[10px_60px_0px_60px]"
                : "rounded-[0px_120px_0px_60px]"
            }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex justify-between items-center px-6 py-5">
            <h2 className="text-xl md:text-4xl font-bold text-white/50">
              {item.title}
            </h2>
            <motion.div
              initial={false}
              animate={{ rotate: hoveredIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaPlus className="text-white text-lg" />
            </motion.div>
          </div>

          <AnimatePresence initial={false}>
            {hoveredIndex === index && (
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { height: "auto", opacity: 1 },
                  collapsed: { height: 0, opacity: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="px-6 overflow-hidden text-white text-sm md:text-lg pb-4 flex justify-between gap-6 items-center"
              >
                <p className="w-full lg:max-w-xl">{item.content}</p>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={120}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ServiceAccordion;
