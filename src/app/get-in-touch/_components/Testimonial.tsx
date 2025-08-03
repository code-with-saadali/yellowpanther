"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "GlowTech Solutions",
    text: "If you’re looking for a web developer who listens, understands, and delivers quality — this is the guy. I was struggling to find someone who could really understand my brand's identity and translate it into a responsive, elegant, and high-performing website. He took the time to learn about our goals, asked all the right questions, and executed a design that reflects our core values. Every pixel, every interaction feels deliberate. The final result exceeded all expectations, both visually and functionally. Highly recommended!",
    imageUrl:
      "https://ik.imagekit.io/msmrd69gi/8rlG4yox0w8UXpoOaYWvFzPZTs.avif?updatedAt=1753266531708",
  },
  {
    name: "David Kim",
    company: "NovaWare",
    text: "Working with him was a breath of fresh air. From our first meeting, he demonstrated a deep understanding of modern web technologies and a strong grasp on design principles. He redesigned our entire website from scratch — every section optimized for mobile, lightning-fast load times, and incredibly smooth UI/UX transitions. What stood out the most was his commitment to open communication and iteration; he welcomed feedback at every stage and implemented changes efficiently. The end product has not only impressed our internal team but significantly improved user engagement metrics.",
    imageUrl:
      "https://ik.imagekit.io/msmrd69gi/8rlG4yox0w8UXpoOaYWvFzPZTs.avif?updatedAt=1753266531708",
  },
  {
    name: "Amina Ali",
    company: "PixelBloom",
    text: "He turned our vision into a digital reality better than we imagined. We had a complex layout in mind that required both creative design and technical precision. He carefully planned each step, developed a visually striking front-end, and made sure the backend was scalable and secure. His work on performance optimization — image compression, lazy loading, and smooth animations — significantly enhanced the browsing experience. What impressed us most was his ability to simplify complex problems and present elegant solutions quickly. We’re already planning our next project with him.",
    imageUrl:
      "https://ik.imagekit.io/msmrd69gi/8rlG4yox0w8UXpoOaYWvFzPZTs.avif?updatedAt=1753266531708",
  },
  {
    name: "Zeeshan Raza",
    company: "Visionary Lab",
    text: "A true professional who understands both design aesthetics and development performance. We hired him for a complete redesign of our website, and the results were game-changing. Not only did he deliver a pixel-perfect, visually appealing interface, but he also restructured our codebase for better maintainability and SEO optimization. Our bounce rate dropped drastically, conversions improved, and our brand finally had a platform that felt premium and on par with our vision. He's not just a developer; he’s a strategic partner in digital growth.",
    imageUrl:
      "https://ik.imagekit.io/msmrd69gi/8rlG4yox0w8UXpoOaYWvFzPZTs.avif?updatedAt=1753266531708",
  },
];

const TestimonialSlider = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalWidth = testimonials.length * 320;
  const animatedX = useTransform(x, (value) => -value % totalWidth);

  useEffect(() => {
    const controls = animate(x, Infinity, {
      type: "inertia",
      velocity: 50,
      min: 0,
      max: Infinity,
      restDelta: 0.001,
      power: 0.8,
      bounceStiffness: 200,
      bounceDamping: 30,
      timeConstant: 300,
    });

    return () => controls.stop();
  }, [x]);

  return (
    <div className="w-full overflow-hidden py-10 px-10 bg-black text-white">
      <h1 className="text-7xl py-10 uppercase font-semibold">Testimonials</h1>
      <div ref={containerRef} className="cursor-grab active:cursor-grabbing">
        <motion.div
          className="flex gap-2"
          style={{ x: animatedX }}
          drag="x"
          dragConstraints={{ left: -totalWidth, right: 0 }}
          dragElastic={0.05}
        >
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="w-[800px] min-w-[800px] text-white px-5 py-5 border"
              transition={{ duration: 0.3 }}
            >
              <p className="text-[14px] text-gray-300 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex justify-between items-center pt-20">
                <div className="flex flex-col gap-4">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-3xl">{testimonial.name}</h3>
                    <p className="text-[10px] py-2">{testimonial.company}</p>
                  </div>
                </div>
                <Image
                  src="https://ik.imagekit.io/msmrd69gi/qoute-icon.webp?updatedAt=1754129559252"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
