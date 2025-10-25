"use client";
import React, { useState, useEffect } from 'react';

const AnimatedSpeedMeter = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);

  // Helper function to generate SVG path for a filled sector
  const getPathD = (currentProgress) => {
    const centerX = 100;
    const centerY = 100; // Center of the circle
    const radius = 80;

    // Start from right side (0 degrees) and sweep counter-clockwise
    const startAngle = 0; // 0 degrees (right side)
    const endAngle = (currentProgress / 100) * Math.PI; // Convert to radians

    const startX = centerX + radius * Math.cos(startAngle);
    const startY = centerY + radius * Math.sin(startAngle);

    const endX = centerX + radius * Math.cos(endAngle);
    const endY = centerY + radius * Math.sin(endAngle);

    // Create a filled sector from center to arc
    return `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 0 0 ${endX} ${endY} Z`;
  };

  useEffect(() => {
    // Start animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Step-by-step progress animation from 1% to 10%
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 10) {
          return prev + 1;
        }
        return prev;
      });
    }, 200); // Each step takes 200ms

    // Glow animation
    const glowInterval = setInterval(() => {
      setGlowIntensity(prev => prev === 1 ? 0 : 1);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="relative w-[140px] lg:w-[180px] xl:w-[275px] 2xl:w-[366px] h-[140px] lg:h-[180px] xl:h-[275px] 2xl:h-[366px]">
      {/* Outer Glow Ring */}
      <div 
        className="absolute inset-0 rounded-full border-2 border-[#4aa1ff] opacity-20 animate-ping"
        style={{
          opacity: 0.1 + (glowIntensity * 0.3),
          transform: `scale(${1 + glowIntensity * 0.1})`,
        }}
      />
      
      {/* Background Arc */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 200 200"
      >
        {/* Background Arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Progress Arc Glow - Outer */}
        <path
          d={getPathD(progress)}
          fill="url(#gradientGlow)"
          className="transition-all duration-300 ease-out"
          style={{
            opacity: 0.2,
            filter: 'blur(3px)',
          }}
        />
        
        {/* Progress Arc Glow - Middle */}
        <path
          d={getPathD(progress)}
          fill="url(#gradientGlow)"
          className="transition-all duration-300 ease-out"
          style={{
            opacity: 0.4,
            filter: 'blur(1px)',
          }}
        />
        
        {/* Progress Arc - Main Filled Sector */}
        <path
          d={getPathD(progress)}
          fill="url(#gradient)"
          className="transition-all duration-300 ease-out"
          style={{
            filter: `drop-shadow(0 0 12px rgba(74, 161, 255, ${0.6 + glowIntensity * 0.4}))`,
          }}
        />
        
        {/* Progress Arc - Inner Glow */}
        <path
          d={getPathD(progress)}
          fill="url(#gradientInner)"
          className="transition-all duration-300 ease-out"
          style={{
            opacity: 0.8,
            filter: 'blur(0.5px)',
          }}
        />
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4aa1ff" />
            <stop offset="50%" stopColor="#b5d9d7" />
            <stop offset="100%" stopColor="#4aa1ff" />
          </linearGradient>
          
          <linearGradient id="gradientGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4aa1ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#b5d9d7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4aa1ff" stopOpacity="0.8" />
          </linearGradient>
          
          <linearGradient id="gradientInner" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#b5d9d7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4aa1ff" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Tick Marks */}
        {[0, 25, 50, 75, 100].map((tick, index) => {
          const angle = (tick / 100) * Math.PI;
          const x1 = 100 + 70 * Math.cos(angle);
          const y1 = 100 + 70 * Math.sin(angle);
          const x2 = 100 + 85 * Math.cos(angle);
          const y2 = 100 + 85 * Math.sin(angle);
          
          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
      
      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Percentage Display */}
        <div className="relative">
          {/* Background Glow - Subtle */}
          <div 
            className="absolute inset-0 text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#4aa1ff] blur-lg"
            style={{
              opacity: 0.15,
              transform: `scale(1.05)`,
            }}
          >
            {progress}%
          </div>
          
          {/* Main Text */}
          <span 
            className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4aa1ff] to-[#b5d9d7] transition-all duration-300 ease-out"
            style={{
              filter: `drop-shadow(0 0 8px rgba(74, 161, 255, 0.3))`,
              transform: `scale(${progress > 0 ? 1 + (progress / 100) * 0.1 : 0.8})`,
            }}
          >
            {progress}%
          </span>
          
          {/* Outer Glow Ring - Subtle */}
          <div 
            className="absolute inset-0 text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#4aa1ff] opacity-20 blur-sm"
            style={{
              opacity: 0.2,
              transform: `scale(1.1)`,
            }}
          >
            {progress}%
          </div>
        </div>
        
        {/* Secure ROI Text */}
        <p 
          className="text-white text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium mt-2 animate-fade-in-up"
          style={{
            textShadow: `0 0 6px rgba(74, 161, 255, 0.3)`,
          }}
        >
          Secure ROI
        </p>
      </div>
      
      {/* Subtle Glow Ring */}
      <div className="absolute inset-0 rounded-full border border-[#4aa1ff] opacity-10"></div>
      
      {/* Water Drop Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#4aa1ff] rounded-full animate-water-drop"
            style={{
              width: `${1 + (i % 2)}px`,
              height: `${3 + (i % 2) * 2}px`,
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i * 6)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + (i * 0.5)}s`,
              opacity: 0.4 + (i % 3) * 0.2,
              boxShadow: `0 0 ${2 + i}px rgba(74, 161, 255, 0.6)`,
              transform: `scaleY(${0.5 + (i % 2) * 0.3})`,
            }}
          />
        ))}
      </div>
      
      {/* Water Drop Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={`drop-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-[#4aa1ff] to-transparent animate-water-drop-line"
            style={{
              height: `${15 + i * 8}px`,
              left: `${25 + i * 15}%`,
              top: `${35 + i * 12}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + i * 0.8}s`,
              opacity: 0.2 + (i % 2) * 0.3,
              transform: `scaleY(${0.3 + (i % 2) * 0.4})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedSpeedMeter;
