"use client";

import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { TbMenuDeep } from "react-icons/tb";
import Image from "next/image";

const menuItems = [
  "Portfolio",
  "Services",
  "About Us",
  "Join Us",
  "Contact",
];

const overlayVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};
const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const text = typeof children === "string" ? children : "";

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-white hover:text-yellow-400 text-4xl font-[600] uppercase sm:text-5xl md:text-6xl lg:text-7xl transition-colors duration-300"
      style={{ lineHeight: 0.85 }}
    >
      <div>
        {text.split("").map((l, i) => (
          <motion.h1
            variants={{ initial: { y: 0 }, hovered: { y: "-125%" } }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.h1>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((l, i) => (
          <motion.h1
            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.h1>
        ))}
      </div>
    </motion.a>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#000000a6] text-white flex justify-between items-center px-5 py-4 z-[100]">
      {/* Logo */}
      <div className="logo">
        <Image src="/header-logo.svg" alt="" width={190} height={70} className="cursor-pointer"/>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-white rounded-full px-6 py-2 font-bold text-sm hover:bg-white hover:text-black transition max-md:hidden"
        >
          START A PROJECT?
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(true)}
          className="w-20 h-12 bg-white text-black rounded-full hover:scale-110 duration-300 font-extrabold flex items-center justify-center cursor-pointer"
        >
          <TbMenuDeep size={25}/>
        </motion.button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            className="fixed inset-0 z-[999] overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0">
              {/* Animated gradient background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#333]"
              />
              
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Floating particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    opacity: 0,
                    scale: 0.5
                  }}
                  animate={{
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    opacity: 0.3,
                    scale: 1,
                    transition: {
                      duration: 20 + Math.random() * 20,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                  className="absolute rounded-full bg-yellow-400"
                  style={{
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
              
              
            </div>

            {/* Content */}
            <div className="relative z-10 h-full w-full">
              {/* Close button */}
              <div className="flex justify-end px-6 py-4">
                <motion.button
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMenuOpen(false)}
                  className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center cursor-pointer"
                >
                  <FaTimes size={20} />
                </motion.button>
              </div>

              {/* Menu Content */}
              <div className="flex flex-col md:flex-row h-[calc(100%-80px)] px-6 md:px-16 pb-10">
                {/* Left: Menu Links */}
                <nav className="flex-1 flex flex-col justify-center gap-6 md:gap-10">
                  {menuItems.map((text) => (
                    <motion.div variants={itemVariants} key={text}>
                      <FlipLink href="#">{text}</FlipLink>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Right: Contact Info */}
                <motion.aside
                  variants={itemVariants}
                  className="mt-12 md:mt-0 md:w-[320px] text-white md:flex flex-col justify-end md:justify-center gap-8 hidden"
                >
                  <div>
                    <h4 className="text-yellow-400 font-semibold mb-4 tracking-wide text-lg">
                      Contact
                    </h4>
                    <p className="text-base opacity-80 leading-relaxed">
                      hello@yellowpanther.io
                      <br />
                      +00 123 456 789
                    </p>
                  </div>

                  <div>
                    <h4 className="text-yellow-400 font-semibold mb-4 tracking-wide text-lg">
                      Social
                    </h4>
                    <ul className="flex flex-col gap-3 text-base opacity-80">
                      {['LinkedIn', 'Twitter / X', 'Instagram', 'Dribbble'].map((social) => (
                        <li key={social}>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <Link href="#" className="hover:text-yellow-400 transition">
                              {social}
                            </Link>
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.div 
                    className="text-sm opacity-70 mt-4"
                    whileHover={{ opacity: 1 }}
                  >
                    © {new Date().getFullYear()} Yellow Panther
                  </motion.div>
                </motion.aside>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}