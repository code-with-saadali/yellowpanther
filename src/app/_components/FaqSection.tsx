'use client';

import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'How do I request a quote?',
    answer: 'You can request a quote through our contact form or email.',
  },
  {
    question: 'Do you offer consultations before starting a project?',
    answer: 'Yes, we offer strategy consultation to understand your needs.',
  },
  {
    question: 'How will we stay updated on project progress?',
    answer: 'We provide weekly updates and direct communication channels.',
  },
  {
    question: 'Can you integrate existing systems or tools?',
    answer: 'Absolutely, we specialize in integration with third-party tools and APIs.',
  },
  {
    question: 'What industries do you typically work with?',
    answer: 'We work across multiple industries including tech, e-commerce, education, and healthcare.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer: 'Yes, we offer various support plans to keep your project running smoothly after launch.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary, but most are completed within 4 to 8 weeks.',
  },
  {
    question: 'Can I request revisions during the project?',
    answer: 'Absolutely. We welcome feedback and offer revision rounds during key phases.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'Our stack includes React, Next.js, Tailwind CSS, Node.js, and various CMS platforms.',
  },
  {
    question: 'Is there a contract or agreement involved?',
    answer: 'Yes, we provide a clear proposal and agreement to ensure transparency and alignment.',
  },
];


const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white px-5 lg:px-20 py-26">
      <div className="space-y-10">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-white/20 pb-6">
            <div
              onClick={() => toggle(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-xl md:text-4xl font-semibold">
                {item.question}
              </h3>
              <span className="text-4xl">
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </div>

            {/* Animated Answer */}
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p className="text-sm md:text-lg text-white/80 mt-6 overflow-hidden">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
