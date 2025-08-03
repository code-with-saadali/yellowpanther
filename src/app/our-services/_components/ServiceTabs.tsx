"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "website",
    title: "Website",
    number: "01.",
    description:
      "We craft high-performance websites with cutting-edge technology, optimized for speed, SEO, and conversion. Every pixel serves a purpose in our bespoke digital solutions.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "mobile App",
    title: "Mobile App",
    number: "02.",
    description:
      "Native and cross-platform apps built with Flutter and React Native for seamless performance across iOS and Android devices with elegant interfaces.",
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    number: "03.",
    description:
      "Complete online store solutions with secure payment gateways, inventory management, and conversion-optimized shopping experiences that scale with your business.",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    number: "04.",
    description:
      "Human-centered design processes that create intuitive, accessible, and beautiful digital experiences backed by user research and testing.",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "gamification",
    title: "Gamification",
    number: "05.",
    description:
      "We transform user engagement through strategic game mechanics, reward systems, and interactive experiences that boost participation, loyalty, and business metrics across your digital platforms.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
  },
];

export default function ServiceTabs() {
  const [active, setActive] = useState("website");
  const activeService = services.find((s) => s.id === active);

  return (
    <div className="bg-black text-white min-h-screen py-16 overflow-hidden">
      {/* Tabs */}
      <div>
        <h1 className="flex flex-wrap font-bold gap-4 md:gap-6 text-xl md:text-2xl lg:text-2xl border-b border-white/20 pb-4 px-5 lg:px-20">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`relative px-1 py-2 transition-all duration-300 cursor-pointer ${
                active === s.id
                  ? "text-white"
                  : "text-[#808080] hover:text-white"
              }`}
            >
              {s.title}
              {active === s.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                  layoutId="underline"
                />
              )}
            </button>
          ))}
        </h1>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService?.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid md:grid-cols-2 gap-12 items-center relative px-5 lg:px-20"
        >
          {/* Left Text */}
          <div className="space-y-6 z-20">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
              {activeService?.number}
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {activeService?.title}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {activeService?.description}
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
              View Case Studies →
            </button>
          </div>

          <div className="absolute w-4xl -right-30 z-0 -top-6">
            <Image
              src={activeService!.image}
              alt={activeService!.title}
              width={600}
              height={300}
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
            <div className="absolute inset-y-0 left-0 w-1/3 -translate-x-[40%] bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
