'use client';

import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);
  const blobRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let currentX1 = 0, currentY1 = 0;
    let currentX2 = 0, currentY2 = 0;
    let currentX3 = 0, currentY3 = 0;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      currentX1 = lerp(currentX1, mouseX, 0.02);
      currentY1 = lerp(currentY1, mouseY, 0.02);
      currentX2 = lerp(currentX2, mouseX, 0.015);
      currentY2 = lerp(currentY2, mouseY, 0.015);
      currentX3 = lerp(currentX3, mouseX, 0.01);
      currentY3 = lerp(currentY3, mouseY, 0.01);

      if (blobRef1.current)
        blobRef1.current.style.transform = `translate(${currentX1}px, ${currentY1}px)`;
      if (blobRef2.current)
        blobRef2.current.style.transform = `translate(${currentX2}px, ${currentY2}px)`;
      if (blobRef3.current)
        blobRef3.current.style.transform = `translate(${currentX3}px, ${currentY3}px)`;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - window.innerWidth / 2;
      mouseY = e.clientY - window.innerHeight / 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute w-[80vw] h-[80vw] bg-black opacity-[0.1] rounded-full blur-[200px] animate-blackMove z-[-1] top-[10%] left-[10%]" />
      <div
        ref={blobRef1}
        className="absolute w-[50vw] h-[50vw] rounded-full opacity-50 blur-[100px] mix-blend-screen bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-400 animate-pulseBlob1 saturate-150 brightness-110"
      />
      <div
        ref={blobRef2}
        className="absolute w-[50vw] h-[50vw] rounded-full opacity-45 blur-[120px] mix-blend-overlay bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-600 animate-pulseBlob2 saturate-150"
      />
      <div
        ref={blobRef3}
        className="absolute w-[50vw] h-[50vw] rounded-full opacity-50 blur-[150px] mix-blend-lighten bg-gradient-to-tr from-amber-600 via-yellow-500 to-orange-400 animate-pulseBlob3 brightness-125"
      />

      <style jsx global>{`
        @keyframes pulseBlob1 {
          0% { scale: 1; }
          50% { scale: 1.2; }
          100% { scale: 1; }
        }

        @keyframes pulseBlob2 {
          0% { scale: 1; }
          50% { scale: 1.3; }
          100% { scale: 1; }
        }

        @keyframes pulseBlob3 {
          0% { scale: 1; }
          50% { scale: 1.15; }
          100% { scale: 1; }
        }

        .animate-pulseBlob1 {
          animation: pulseBlob1 18s ease-in-out infinite;
          top: -20%;
          left: -10%;
        }

        .animate-pulseBlob2 {
          animation: pulseBlob2 25s ease-in-out infinite;
          bottom: -25%;
          right: -20%;
        }

        .animate-pulseBlob3 {
          animation: pulseBlob3 35s ease-in-out infinite;
          top: 20%;
          right: 0%;
        }

        @keyframes blackMove {
          0% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-20%, 10%) scale(1.1);
          }
          50% {
            transform: translate(15%, -10%) scale(0.9);
          }
          75% {
            transform: translate(-10%, 20%) scale(1.05);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .animate-blackMove {
          animation: blackMove 40s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
