"use client";
import React, { useState, useEffect, useRef } from 'react';

const AnimatedSpeedMeter = () => {
  const containerRef = useRef(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [displayValue, setDisplayValue] = useState(0.1);
  const [isVisible, setIsVisible] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const hasAnimatedRef = useRef(false);

  // Modern arc path for stroke-based progress
  const getArcPath = (currentProgress) => {
    const centerX = 100;
    const centerY = 100;
    const radius = 70;
    const startAngle = -Math.PI / 2; // Start from top (-90°)
    const endAngle = startAngle + (currentProgress / 100) * Math.PI; // Sweep clockwise

    const startX = centerX + radius * Math.cos(startAngle);
    const startY = centerY + radius * Math.sin(startAngle);
    const endX = centerX + radius * Math.cos(endAngle);
    const endY = centerY + radius * Math.sin(endAngle);

    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
    return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
  };

  useEffect(() => {
    // IntersectionObserver to start animation only when visible
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;

    const startValue = 0.1; // start at 0.1
    const endValue = 8.8; // end at 8.8
    const durationMs = 9000; // ~8 seconds to reach 8.8

    let rafId = 0;
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (now) => {
      const elapsed = now - startTime;
      const clamped = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(clamped);

      const currentValue = startValue + (endValue - startValue) * eased;
      setDisplayValue(Number(currentValue.toFixed(1)));

      // Map 0-10 scale to 0-100% for arc; value 8.8 → 88%
      const percentForArc = Math.min(100, (currentValue / 10) * 100);
      setProgressPercent(percentForArc);

      if (clamped < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="relative w-[140px] lg:w-[180px] xl:w-[275px] 2xl:w-[366px] h-[140px] lg:h-[180px] xl:h-[275px] 2xl:h-[366px]">
      {/* Subtle Background Glow */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0642e7] via-[#065fe6] to-[#083deb] opacity-10"
        style={{
          transform: `scale(${1.02 + glowIntensity * 0.02})`,
          filter: 'blur(20px)',
        }}
      />
      
      {/* Minimal Outer Ring */}
      <div 
        className="absolute inset-0 rounded-full border border-[#0c62ec] opacity-20"
      />
      
      {/* Main SVG */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 200 200"
      >
        {/* Background Track */}
        <path
          d="M 30 100 A 70 70 0 0 1 170 100"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Progress Track */}
        <path
          d={getArcPath(progressPercent)}
          stroke="url(#progressGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          style={{
            filter: `drop-shadow(0 0 15px rgba(59, 130, 246, ${0.6 + glowIntensity * 0.3}))`,
          }}
        />

        {/* Progress Glow */}
        <path
          d={getArcPath(progressPercent)}
          stroke="url(#glowGradient)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
          style={{ filter: 'blur(3px)' }}
        />

        {/* Modern Needle */}
        {(() => {
          const angle = -Math.PI / 2 + (progressPercent / 100) * Math.PI;
          const centerX = 100;
          const centerY = 100;
          const needleLength = 55;
          const needleEndX = centerX + needleLength * Math.cos(angle);
          const needleEndY = centerY + needleLength * Math.sin(angle);
          
          return (
            <g>
              {/* Needle Shadow */}
              <line
                x1={centerX}
                y1={centerY}
                x2={needleEndX + 2}
                y2={needleEndY + 2}
                stroke="rgba(0, 0, 0, 0.3)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Main Needle */}
              <line
                x1={centerX}
                y1={centerY}
                x2={needleEndX}
                y2={needleEndY}
                stroke="url(#needleGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))',
                }}
              />
              {/* Center Hub */}
              <circle
                cx={centerX}
                cy={centerY}
                r="8"
                fill="url(#centerGradient)"
                style={{
                  filter: 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.6))',
                }}
              />
              <circle
                cx={centerX}
                cy={centerY}
                r="4"
                fill="#ffffff"
                opacity="0.9"
              />
            </g>
          );
        })()}
        
        {/* Modern Tick Marks */}
        {[0, 20, 40, 60, 80, 100].map((tick, index) => {
          const angle = -Math.PI / 2 + (tick / 100) * Math.PI;
          const x1 = 100 + 60 * Math.cos(angle);
          const y1 = 100 + 60 * Math.sin(angle);
          const x2 = 100 + 75 * Math.cos(angle);
          const y2 = 100 + 75 * Math.sin(angle);
          
          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
        
        {/* Modern Labels */}
        {[0, 2, 4, 6, 8, 10].map((value, index) => {
          const angle = -Math.PI / 2 + (index * 20 / 100) * Math.PI;
          const x = 100 + 85 * Math.cos(angle);
          const y = 100 + 85 * Math.sin(angle);
          
          return (
            <text
              key={`label-${index}`}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="rgba(255, 255, 255, 0.7)"
              fontSize="12"
              fontWeight="500"
            >
              {value}
            </text>
          );
        })}
        
        {/* Gradients */}
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
          </linearGradient>
          
          <linearGradient id="needleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </radialGradient>
        </defs>
      </svg>
      
      {/* Enhanced Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="relative">
          {/* Remove white glow behind text; keep only crisp value */}
          <span 
            className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white transition-all duration-300 ease-out"
            style={{
              filter: `drop-shadow(0 0 20px rgba(255, 255, 255, 1)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 60px rgba(59, 130, 246, 0.4))`,
              transform: `scale(${progressPercent > 0 ? 1 + (progressPercent / 100) * 0.15 : 0.9})`,
              textShadow: '0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(59, 130, 246, 0.8)',
            }}
          >
            {displayValue}
          </span>
        </div>
        
        {/* Enhanced Label */}
        <p 
          className="text-white text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold mt-3"
          style={{
            textShadow: `0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)`,
            filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))',
          }}
        >
          Secure ROI
        </p>
      </div>
      
      {/* Modern Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#3b82f6] rounded-full animate-pulse"
            style={{
              width: `${1 + (i % 2)}px`,
              height: `${1 + (i % 2)}px`,
              left: `${20 + i * 10}%`,
              top: `${30 + i * 8}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + i * 0.3}s`,
              opacity: 0.4 + (i % 2) * 0.2,
              boxShadow: `0 0 ${3 + i}px rgba(59, 130, 246, 0.6)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedSpeedMeter;
