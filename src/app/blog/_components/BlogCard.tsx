"use client";
import React from "react";
import blogData from "../_components/blogs.json";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const BlogCard = () => {
  return (
    <div className="bg-black text-white px-5 lg:px-20 py-16 space-y-34">
      {blogData.map((item, index) => (
        <motion.div
          key={item.id}
          className="flex flex-col md:flex-row gap-6 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[40%] overflow-hidden rounded-md">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="rounded-md overflow-hidden"
            >
              <Image
                src={item.image}
                alt=""
                width={400}
                height={250}
                className="object-cover w-full h-full rounded-md"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-[55%]">
            <div>
              <p className="text-lg font-bold">{item.date}</p>
              <h1 className="text-3xl font-bold my-10">{item.description}</h1>
            </div>

            <Link href={`/project/${item.slug}`}>
              <button className="relative flex items-center gap-1 px-9  py-2 border border-white text-base rounded-full font-semibold text-white cursor-pointer overflow-hidden transition-all duration-700 ease-in-out group group-hover:text-black">
                <FaArrowRight className="absolute left-[-25%] w-5 z-10 transition-all duration-700 group-hover:left-4 group-hover:fill-black" />

                <span className="z-10 uppercase tracking-wider transition-all duration-700 -translate-x-3 group-hover:translate-x-3 group-hover:text-black">
                  Read More
                </span>

                <span className="absolute top-1/2 left-1/2 w-6 h-6 bg-white rounded-full opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

                <FaArrowRight className="absolute right-4 w-5 z-10 transition-all duration-700 group-hover:right-[-25%] group-hover:fill-black" />
              </button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogCard;
