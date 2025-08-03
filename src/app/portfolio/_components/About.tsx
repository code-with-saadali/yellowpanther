"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const categories = [
  "ALL",
  "WEBSITE",
  "MOBILE APP",
  "E-COMMERCE",
  "UI/UX DESIGN",
  "GAMIFICATION",
];

const projects = [
  {
    title: "PREMIER PADEL",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFkZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    overlayTitle: "QATAR AIRWAYS PREMIER PADEL TOUR",
    overlayDesc: "We service the world's biggest padel tour by bringing to life their fan-facing platforms and also provide a technology solution to administrate their 30 global events.",
    tags: ["MOBILE APP", "WEBSITE", "UI/UX DESIGN"],
  },
  {
    title: "TEAM GB",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    overlayTitle: "TEAM GB ATHLETICS",
    overlayDesc: "Team GB brings together elite athletes, combining style and strength to represent Britain at the highest level of international competition.",
    tags: ["WEBSITE", "PHOTOGRAPHY", "UI/UX DESIGN"],
  },
  {
    title: "SHOP MASTER",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZS1jb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    overlayTitle: "E-commerce Excellence",
    overlayDesc: "An online store tailored for modern shoppers with integrated payment, inventory, and user experience optimization.",
    tags: ["E-COMMERCE", "UI/UX DESIGN"],
  },
  {
    title: "PLAYZONE",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    overlayTitle: "Gamification App",
    overlayDesc: "This platform motivates users through game mechanics and reward systems integrated in mobile and web platforms.",
    tags: ["GAMIFICATION", "MOBILE APP"],
  },
  {
    title: "DESIGN HUB",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    overlayTitle: "UI/UX Design System",
    overlayDesc: "Comprehensive design system for creating consistent user interfaces across multiple products.",
    tags: ["UI/UX DESIGN", "WEBSITE"],
  },
  {
    title: "FITNESS TRACKER",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzcyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    overlayTitle: "Mobile Fitness App",
    overlayDesc: "Track your workouts, nutrition, and progress with this all-in-one fitness application.",
    tags: ["MOBILE APP", "GAMIFICATION"],
  },
];

const Card = ({
  title,
  image,
  overlayTitle,
  overlayDesc,
  tags,
}: {
  title: string;
  image: string;
  overlayTitle: string;
  overlayDesc: string;
  tags: string[];
}) => {
  return (
    <div className="relative rounded-[3rem] overflow-hidden bg-black text-white w-full max-w-[650px] group transition-all duration-500 shadow-lg border">
      <Image
        src={image}
        alt={title}
        width={800}
        height={500}
        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-center">
        <div className="mb-4">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
            {overlayTitle}
          </h3>
          <p className="text-white text-sm md:text-base">{overlayDesc}</p>
        </div>
        <div className="flex gap-4 flex-wrap mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white text-black text-sm px-4 py-2 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-6 z-10">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black rotate-45 group-hover:rotate-0 transition-transform duration-300">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((proj) =>
          proj.tags
            .map((tag) => tag.toLowerCase())
            .includes(selectedCategory.toLowerCase())
        );

  // Duplicate projects to create seamless loop
  const duplicatedProjects = [...filteredProjects, ...filteredProjects];

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || filteredProjects.length <= 3 || isHovering) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    let animationFrameId: number;

    const scroll = () => {
      if (!container) return;

      scrollAmount += scrollSpeed;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = scrollAmount;
      }

      if (isAutoScrolling && !isHovering) {
        animationFrameId = requestAnimationFrame(scroll);
      }
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoScrolling, filteredProjects, isHovering]);

  return (
    <main className="bg-black text-white py-16 px-5 lg:px-20">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setIsAutoScrolling(category === "ALL");
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollLeft = 0;
              }
            }}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
              selectedCategory === category
                ? "bg-white text-black font-semibold"
                : "text-white border-white hover:bg-white hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards with horizontal scroll */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 pb-4 whitespace-nowrap overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {duplicatedProjects.map((proj, idx) => (
          <div key={idx} className="inline-block w-[650px] flex-shrink-0">
            <Card {...proj} />
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="pt-20 lg:flex justify-between items-center">
        <h1 className="text-3xl max-lg:text-center max-lg:text-2xl">
          Consciously creative and crafted for you. We deliver with <br />
          precision and purpose — no fluff, just fierce results.
        </h1>
        <button className="uppercase border px-5 py-3 rounded-full flex gap-2 items-center hover:bg-white duration-500 cursor-pointer hover:text-black max-lg:mx-auto max-lg:mt-5">
          View Case Studies <FaArrowRight />
        </button>
      </div>
    </main>
  );
}
