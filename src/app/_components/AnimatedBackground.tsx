'use client';

import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!interactiveRef.current) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    const interBubble = interactiveRef.current;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <svg className="fixed top-0 left-0 w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div 
        className="w-full h-full"
        style={{
          filter: 'url(#goo) blur(40px)',
          background: 'linear-gradient(40deg, rgb(108, 0, 162), rgb(0, 17, 82))'
        }}
      >
        {/* Gradient circles */}
        <div 
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(18, 113, 255, 0.8) 0, rgba(18, 113, 255, 0) 50%)',
            mixBlendMode: 'hard-light',
            width: '80%',
            height: '80%',
            top: '10%',
            left: '10%',
            animation: 'moveVertical 30s ease infinite'
          }}
        ></div>
        
        <div 
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(221, 74, 255, 0.8) 0, rgba(221, 74, 255, 0) 50%)',
            mixBlendMode: 'hard-light',
            width: '80%',
            height: '80%',
            top: '10%',
            left: '10%',
            transformOrigin: 'calc(50% - 400px)',
            animation: 'moveInCircle 20s reverse infinite'
          }}
        ></div>
        
        <div 
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(100, 220, 255, 0.8) 0, rgba(100, 220, 255, 0) 50%)',
            mixBlendMode: 'hard-light',
            width: '80%',
            height: '80%',
            top: 'calc(10% + 200px)',
            left: 'calc(10% - 500px)',
            transformOrigin: 'calc(50% + 400px)',
            animation: 'moveInCircle 40s linear infinite'
          }}
        ></div>
        
        <div 
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(200, 50, 50, 0.7) 0, rgba(200, 50, 50, 0) 50%)',
            mixBlendMode: 'hard-light',
            width: '80%',
            height: '80%',
            top: '10%',
            left: '10%',
            transformOrigin: 'calc(50% - 200px)',
            animation: 'moveHorizontal 40s ease infinite'
          }}
        ></div>
        
        <div 
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(180, 180, 50, 0.8) 0, rgba(180, 180, 50, 0) 50%)',
            mixBlendMode: 'hard-light',
            width: '160%',
            height: '160%',
            top: '-30%',
            left: '-30%',
            transformOrigin: 'calc(50% - 800px) calc(50% + 200px)',
            animation: 'moveInCircle 20s ease infinite'
          }}
        ></div>
        
        {/* Interactive bubble */}
        <div 
          ref={interactiveRef}
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(140, 100, 255, 0.7) 0, rgba(140, 100, 255, 0) 50%)',
            mixBlendMode: 'hard-light',
            width: '100%',
            height: '100%',
            top: '-50%',
            left: '-50%'
          }}
        ></div>
      </div>

      <style jsx global>{`
        @keyframes moveInCircle {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes moveVertical {
          0% { transform: translateY(-50%); }
          50% { transform: translateY(50%); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes moveHorizontal {
          0% { transform: translateX(-50%) translateY(-10%); }
          50% { transform: translateX(50%) translateY(10%); }
          100% { transform: translateX(-50%) translateY(-10%); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;