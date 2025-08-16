"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Web Developer",
      description: [
        "Be responsible for designing and developing back-end and front-end activities",
        "Develop new or enhance existing user-facing features using React.js and implement them following well-known React.js workflows",
      ],
      requirements: [
        "Experience as a Full-stack Web Developer and integration of Frontend and backend technologies using Angular/ReactJS",
        "A sound understanding of Front Technologies HTML, CSS & Javascript",
        "Experience with frontend Framework like React/Angular",
        "Demonstrate an understanding of responsive web design principles.",
        "Familiarity with browser testing and debugging",
      ],
    },
    {
      title: "UX/UI Designer",
      description: [
        "Create user-friendly designs, wireframes, and prototypes.",
        "Work closely with developers to ensure designs are implemented correctly.",
      ],
      requirements: [
        "Experience in Figma, Adobe XD, or Sketch.",
        "Understanding of design systems and accessibility principles.",
        "Strong problem-solving and creative skills.",
      ],
    },
    {
      title: "Digital Project Executive",
      description: [
        "Manage and oversee digital projects, ensuring deadlines and quality standards are met.",
      ],
      requirements: [
        "Strong project management skills.",
        "Good communication between technical and non-technical teams.",
        "Experience with Agile methodology is a plus.",
      ],
    },
    {
      title: "Finance Manager",
      description: ["Oversee financial planning, budgeting, and reporting."],
      requirements: [
        "Strong background in finance and accounting.",
        "Experience in cost optimization and reporting tools.",
        "Excellent analytical and problem-solving skills.",
      ],
    },
  ];

  return (
    <div className="bg-black text-white">
      {data.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-800/70 hover:border-yellow-500/40 transition-colors duration-300"
        >
          {/* Header */}
          <div
            className="flex justify-between items-center cursor-pointer px-5 lg:px-20 py-8 group"
            onClick={() => toggle(index)}
          >
            <h2 className="text-2xl lg:text-5xl font-bold group-hover:text-yellow-400 transition-colors duration-300">
              {item.title}
            </h2>
            <motion.div
              transition={{ duration: 0.4 }}
              className="text-xl text-gray-400 group-hover:text-yellow-400"
            >
              {openIndex === index ? (
                <FaMinus className="text-white text-2xl group-hover:text-yellow-400" />
              ) : (
                <FaPlus className="text-white text-2xl group-hover:text-yellow-400" />
              )}
            </motion.div>
          </div>

          {/* Content */}
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0, y: -10 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden bg-gradient-to-b from-[#111] to-[#1a1a1a]"
              >
                <div className="mt-6 text-gray-300 space-y-6 px-5 lg:px-20 pb-10">
                  <div>
                    <h3 className="text-yellow-400 font-bold text-lg mb-2">
                      JOB DESCRIPTION
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-yellow-400 font-bold text-lg mb-2">
                      THIS ROLE MAY BE FOR YOU IF YOU HAVE:
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      {item.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#eab308",
                      color: "#000",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-8 py-3 border border-yellow-400 rounded-full text-white font-semibold transition-colors"
                  >
                    APPLY NOW →
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
