"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const AnimatedCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  // Removed cursor text to eliminate 'Click' text
  const [cursorVariant, setCursorVariant] = useState('default');
  // Removed trail and particles to eliminate black shapes
  const [isMoving, setIsMoving] = useState(false);
  const moveTimeoutRef = useRef(null);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 20, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      // Set moving state
      setIsMoving(true);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      moveTimeoutRef.current = setTimeout(() => setIsMoving(false), 100);
      
      // Trail and particles removed to eliminate black shapes
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      
      // Check for different element types
      if (target.tagName === 'A' || target.closest('a')) {
        setCursorVariant('link');
      } else if (target.tagName === 'BUTTON' || target.closest('button')) {
        setCursorVariant('button');
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorVariant('text');
      } else if (target.closest('.gradient_text')) {
        setCursorVariant('text');
      } else if (target.closest('.magnetic')) {
        setCursorVariant('magnetic');
      } else if (target.closest('.cursor-glow')) {
        setCursorVariant('glow');
      } else if (target.closest('.cursor-ripple')) {
        setCursorVariant('ripple');
      } else if (target.closest('.cursor-magic')) {
        setCursorVariant('magic');
      } else if (target.closest('.cursor-fire')) {
        setCursorVariant('fire');
      } else if (target.closest('.cursor-ice')) {
        setCursorVariant('ice');
      } else {
        setCursorVariant('default');
      }
      
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners
    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY]);

  const cursorVariants = {
    default: {
      width: 24,
      height: 24,
      backgroundColor: 'rgba(74, 161, 255, 0.9)',
      border: '1px solid rgba(181, 217, 215, 0.8)',
      mixBlendMode: 'normal',
    },
    link: {
      width: 50,
      height: 50,
      backgroundColor: 'rgba(74, 161, 255, 0.4)',
      border: '2px solid rgba(181, 217, 215, 0.9)',
      mixBlendMode: 'normal',
    },
    button: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(181, 217, 215, 0.4)',
      border: '2px solid rgba(74, 161, 255, 0.9)',
      mixBlendMode: 'normal',
    },
    text: {
      width: 16,
      height: 16,
      backgroundColor: 'rgba(74, 161, 255, 0.9)',
      border: '1px solid rgba(181, 217, 215, 0.9)',
      mixBlendMode: 'normal',
    },
    magnetic: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(74, 161, 255, 0.3)',
      border: '2px solid rgba(181, 217, 215, 0.8)',
      mixBlendMode: 'normal',
    },
    glow: {
      width: 70,
      height: 70,
      backgroundColor: 'rgba(74, 161, 255, 0.2)',
      border: '2px solid rgba(181, 217, 215, 0.9)',
      mixBlendMode: 'normal',
      boxShadow: '0 0 15px rgba(74, 161, 255, 0.6)',
    },
    ripple: {
      width: 50,
      height: 50,
      backgroundColor: 'rgba(181, 217, 215, 0.4)',
      border: '2px solid rgba(74, 161, 255, 0.9)',
      mixBlendMode: 'normal',
    },
    magic: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(138, 43, 226, 0.3)',
      border: '2px solid rgba(255, 20, 147, 0.9)',
      mixBlendMode: 'normal',
      boxShadow: '0 0 20px rgba(138, 43, 226, 0.7)',
    },
    fire: {
      width: 70,
      height: 70,
      backgroundColor: 'rgba(255, 69, 0, 0.4)',
      border: '2px solid rgba(255, 140, 0, 0.9)',
      mixBlendMode: 'normal',
      boxShadow: '0 0 15px rgba(255, 69, 0, 0.8)',
    },
    ice: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(0, 191, 255, 0.3)',
      border: '2px solid rgba(135, 206, 250, 0.9)',
      mixBlendMode: 'normal',
      boxShadow: '0 0 15px rgba(0, 191, 255, 0.7)',
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full cursor-optimized"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20
        }}
      >
        {/* Cursor text - removed to eliminate 'Click' text */}
        
        {/* Clicking animation */}
        {isClicking && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 cursor-optimized"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          width: isHovering ? 50 : 15,
          height: isHovering ? 50 : 15,
          opacity: isHovering ? 0.5 : 0.2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20
        }}
      />

      {/* Outer ring - removed to eliminate black circles */}

      {/* Cursor Trail - removed to eliminate black shapes */}

      {/* Floating Particles - removed to eliminate black shapes */}

      {/* Sound Wave Effect - removed to eliminate black circles */}

      {/* Energy Rings - removed to eliminate black circles */}

      {/* Simple Ripple effect on click */}
      {isClicking && (
        <motion.div
          className="fixed pointer-events-none z-[9995] rounded-full bg-primary/30"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ 
            width: 0, 
            height: 0, 
            opacity: 0.8 
          }}
          animate={{ 
            width: 60, 
            height: 60, 
            opacity: 0 
          }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut"
          }}
        />
      )}

      {/* Magic Sparkles */}
      {cursorVariant === 'magic' && (
        <>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed pointer-events-none z-[9991] w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              style={{
                x: cursorXSpring + (Math.cos(i * 60 * Math.PI / 180) * 60),
                y: cursorYSpring + (Math.sin(i * 60 * Math.PI / 180) * 60),
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </>
      )}

      {/* Fire Particles */}
      {cursorVariant === 'fire' && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed pointer-events-none z-[9991] w-1 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
              style={{
                x: cursorXSpring + (Math.random() - 0.5) * 40,
                y: cursorYSpring + (Math.random() - 0.5) * 40,
              }}
              animate={{
                y: [0, -100],
                opacity: [1, 0],
                scale: [0.5, 1, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}

      {/* Ice Crystals */}
      {cursorVariant === 'ice' && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed pointer-events-none z-[9991] w-3 h-3 border border-cyan-300 rotate-45"
              style={{
                x: cursorXSpring + (Math.cos(i * 90 * Math.PI / 180) * 50),
                y: cursorYSpring + (Math.sin(i * 90 * Math.PI / 180) * 50),
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                rotate: [0, 180]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </>
      )}
    </>
  );
};

export default AnimatedCursor;
