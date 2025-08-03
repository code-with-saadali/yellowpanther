'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => {
      setAnimating(false);
      document.body.style.overflow = '';
    }, 1000);
    return () => clearTimeout(t);
  }, [pathname]);

  const panelCount = 5;

  return (
    <>
      <AnimatePresence mode="wait">
        {animating && (
          <div className="fixed inset-0 z-[199999] pointer-events-none flex">
            {Array.from({ length: panelCount }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                animate={{ y: '-100%' }}
                exit={{ y: 0 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.7,
                  ease: 'easeInOut',
                }}
                className="h-full"
                style={{
                  width: `${100 / panelCount}%`,
                  backgroundColor: 'black',
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
