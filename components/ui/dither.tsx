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
      {/* Dark Veil Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              135deg,
              transparent 0%,
              rgba(59, 130, 246, 0.03) 25%,
              rgba(147, 51, 234, 0.03) 50%,
              rgba(6, 182, 212, 0.03) 75%,
              transparent 100%
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
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Floating particles effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, rgba(59, 130, 246, 0.8), transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(147, 51, 234, 0.6), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(6, 182, 212, 0.8), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(99, 102, 241, 0.6), transparent),
            radial-gradient(1px 1px at 160px 30px, rgba(59, 130, 246, 0.8), transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px'
        }}
        animate={{
          backgroundPosition: [
            '0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px',
            '200px 100px, -200px 100px, 200px -100px, -200px -100px, 200px 100px'
          ]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}
