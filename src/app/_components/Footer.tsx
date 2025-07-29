"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowUp, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

const email = "saadali78135@gmail.com";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="pt-16 px-5 lg:px-20 bg-black text-white">
      <div className="flex justify-between">
        <div className="row1">
          <h1 className="text-5xl flex flex-wrap gap-[1px] h-16 overflow-hidden cursor-pointer">
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
          </h1>

          {/* Location Info */}
          <div className="loaction flex flex-col md:flex-row gap-10 py-10">
            <Link className="hover:underline" href="">
              The Fold, Spencer St, <br /> Leamington Spa, CV31 3NE
            </Link>
            <Link className="hover:underline" href="">
              A 910, Navratna Corporate Park, Ashok Vatika, Ambli- <br />
              Bopal Road, Ahmedabad 380058.
            </Link>
          </div>
        </div>
        <div className="row2">
          <div className="icons flex items-center gap-3 text-2xl">
            <FaLinkedin className="hover:text-[yellow] cursor-pointer hover:scale-110 duration-400" />
            <FaGithub className="hover:text-[yellow] cursor-pointer hover:scale-110 duration-400" />
            <FaInstagram className="hover:text-[yellow] cursor-pointer hover:scale-110 duration-400" />
            <FaXTwitter className="hover:text-[yellow] cursor-pointer hover:scale-110 duration-400" />
          </div>
         <div className="coulm flex items-center gap-10">
           <div className="coulm1 py-10">
            <h1 className="text-xl text-white/50 pb-5">Company</h1>
            <p className="hover:underline">About us</p>
            <p className="py-2 hover:underline">Services</p>
            <p className="hover:underline">Our Team</p>
          </div>
          <div className="coulm2 py-10">
            <h1 className="text-xl text-white/50 pb-5">Work</h1>
            <p className="hover:underline">Our Work</p>
            <p className="py-2 hover:underline">Join Us</p>
            <p className="hover:underline">Contact Us</p>
          </div>
         </div>
        </div>
      </div>

       <div className="flex justify-center items-center flex-1 relative overflow-hidden border-y mt-16">
        <motion.h1
          className="text-8xl max-lg:text-6xl font-semibold whitespace-nowrap py-10"
          animate={{ x: ["-25%", "25%"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
         From Code to Creation – Web Experiences by Saad Ali.
        </motion.h1>
      </div>
      <div className="policy flex justify-between py-10">
        <h1 className="text-2xl">© 2025 <span className="text-yellow-400">Saad Ali</span>. All rights reserved</h1>
        <button
          onClick={scrollToTop}
          className="hover:text-yellow-400 transition-colors duration-600 flex items-center gap-2 cursor-pointer text-xl"
        >
          Back to Top
          <FaArrowUp className="border rounded-full p-2 text-3xl"/>
        </button>
      </div>
    </div>
  );
};

export default Footer;
