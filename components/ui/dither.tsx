"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface DitherProps {
  className?: string
  opacity?: number
}

export const Dither: React.FC<DitherProps> = ({ 
  className = "", 
  opacity = 0.15 
}) => {
  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {/* Much darker veil background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 70%),
            radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.08) 0%, transparent 70%),
            radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.08) 0%, transparent 70%),
            radial-gradient(circle at 0% 100%, rgba(99, 102, 241, 0.06) 0%, transparent 70%),
            radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.06) 0%, transparent 70%)
          `
        }}
      />
      
      {/* Subtle animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(59, 130, 246, 0.04) 0%,
              rgba(147, 51, 234, 0.04) 25%,
              rgba(6, 182, 212, 0.04) 50%,
              rgba(99, 102, 241, 0.04) 75%,
              rgba(59, 130, 246, 0.04) 100%
            )
          `,
          backgroundSize: '400% 400%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Very subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* More subtle floating particles effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, rgba(59, 130, 246, 0.6), transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(147, 51, 234, 0.5), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(6, 182, 212, 0.6), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(99, 102, 241, 0.5), transparent),
            radial-gradient(1px 1px at 160px 30px, rgba(59, 130, 246, 0.6), transparent),
            radial-gradient(0.5px 0.5px at 70px 10px, rgba(6, 182, 212, 0.4), transparent),
            radial-gradient(0.5px 0.5px at 110px 60px, rgba(147, 51, 234, 0.4), transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px'
        }}
        animate={{
          backgroundPosition: [
            '0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px',
            '200px 100px, -200px 100px, 200px -100px, -200px -100px, 200px 100px, -200px -100px, 200px -100px'
          ]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Very subtle pulsing effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 60%),
            radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.05) 0%, transparent 60%)
          `
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
