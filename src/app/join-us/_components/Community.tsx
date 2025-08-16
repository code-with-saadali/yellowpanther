"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    id: "01",
    title: "Be Creative",
    desc: "At Yellow Panther we are fearless, relentless, creative, adventurous and diverse.",
    img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&h=600&fit=crop",
  },
  {
    id: "02",
    title: "Work Together",
    desc: "We collaborate and respect each other’s ideas to build better solutions.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=600&fit=crop",
  },
  {
    id: "03",
    title: "Stay Bold",
    desc: "We take bold steps, embrace challenges, and grow stronger every day.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop",
  },
  {
    id: "04",
    title: "Make Impact",
    desc: "Our mission is to create lasting impact with meaningful ideas and work.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop",
  },
];

const Community = () => {
  return (
    <section className="bg-black text-white py-16 px-5 lg:px-20 space-y-20">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-10 lg:gap-20`}
        >
          <motion.div
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/2"
          >
            <Image
              src={item.img}
              width={600}
              height={600}
              alt={item.title}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-start gap-6 lg:w-1/2"
          >
            {/* Line */}
            <div className="h-16 w-1.5 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>

            {/* Text */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">
                {item.id}. {item.title}
              </h1>
              <p className="text-gray-300 leading-relaxed text-lg max-w-lg">
                {item.desc}
              </p>
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Community;
