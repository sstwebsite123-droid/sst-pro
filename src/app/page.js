
"use client";
import React, { useEffect } from 'react'
import Homewrap from './Components/Pagecomponents/Homewrap'
// import AnimatedCursor from './Components/Uiux/AnimatedCursor' // Removed
import { motion } from 'framer-motion'

function Page() {
  useEffect(() => {
    // Enhanced smooth scrolling with performance optimization
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.overflowX = 'hidden';
    
    // Add custom scrollbar styles with better performance
    const style = document.createElement('style');
    style.textContent = `
      * {
        scroll-behavior: smooth;
      }
      ::-webkit-scrollbar {
        width: 6px;
      }
      ::-webkit-scrollbar-track {
        background: #000;
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #4aa1ff, #b5d9d7);
        border-radius: 3px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #b5d9d7, #4aa1ff);
      }
      
      /* Performance optimizations */
      * {
        will-change: auto;
      }
      
      .gpu-accelerated {
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
    `;
    document.head.appendChild(style);
    
    // Add performance optimizations
    document.body.style.overflowX = 'hidden';
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      {/* Animated Cursor - removed */}
      
      {/* Animated background particles - removed to eliminate light background */}
      
      <Homewrap />
    </motion.div>
  )
}

export default Page
