"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop", 
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop", 
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop", 
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556760544-74068565f05c?w=400&h=400&fit=crop", 
  "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=400&h=400&fit=crop", 
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop", 
  "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=400&fit=crop", 
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=400&fit=crop" 
];

const FollowUs = () => {
  return (
    <div className="bg-black text-white py-20">
      {/* Header */}
      <div className="flex items-center justify-between px-6 lg:px-20 mb-10">
        <h2 className="text-4xl font-extrabold tracking-wide uppercase">
          FOLLOW US
        </h2>
        <a
          href="#"
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition"
        >
          GO TO FEED
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {posts.map((src, index) => (
          <motion.div
            key={index}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden cursor-pointer group"
          >
            <Image
              src={src}
              alt={`post-${index}`}
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-xl font-bold">
              <span className="text-white">★</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;