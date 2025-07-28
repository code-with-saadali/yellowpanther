'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const ScrollMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const x = useTransform(
  scrollYProgress,
  [0, 1],
  isMobile ? ['0%', '-100%'] : ['0%', '-135%']
);

const y = useTransform(
  scrollYProgress,
  [0, 3],
  ['0%', isMobile ? '140%' : '140%']
);

 const scale = useTransform(
  scrollYProgress,
  [0, 2, 3],
  [1, isMobile ? 1.2 : 1.4, isMobile ? 1.3 : 1.6]
);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const getFontSize = useCallback(() => {
  return isMobile ? '8vw' : '15vw';
}, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="h-[75vh] relative overflow-hidden"
    >
      <motion.div
        className="absolute font-extrabold whitespace-nowrap pointer-events-none"
        style={{
          x,
          y,
          scale,
          opacity,
          fontSize: getFontSize(),
          top: '10%',
          right: '-100%',
          textShadow: '0px 5px 15px rgba(0,0,0,0.1)',
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 28,
          mass: 1,
        }}
      >
        <h1>OUR SERVICES</h1>
      </motion.div>
    </div>
  );
};

export default ScrollMarquee;
