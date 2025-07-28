"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = "",
  delay = 0,
  duration = 0.8
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  const words = text.split(' ')

  return (
    <div className={`${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ 
            filter: "blur(10px)",
            opacity: 0,
            y: 20
          }}
          animate={isVisible ? { 
            filter: "blur(0px)",
            opacity: 1,
            y: 0
          } : {}}
          transition={{
            duration: duration,
            delay: index * 0.1 + delay,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

interface BlurInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  variant?: 'blur-up' | 'blur-down' | 'blur-left' | 'blur-right' | 'blur-scale'
}

export const BlurIn: React.FC<BlurInProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  variant = 'blur-up'
}) => {
  const variants = {
    'blur-up': {
      initial: { filter: "blur(10px)", opacity: 0, y: 20 },
      animate: { filter: "blur(0px)", opacity: 1, y: 0 }
    },
    'blur-down': {
      initial: { filter: "blur(10px)", opacity: 0, y: -20 },
      animate: { filter: "blur(0px)", opacity: 1, y: 0 }
    },
    'blur-left': {
      initial: { filter: "blur(10px)", opacity: 0, x: 20 },
      animate: { filter: "blur(0px)", opacity: 1, x: 0 }
    },
    'blur-right': {
      initial: { filter: "blur(10px)", opacity: 0, x: -20 },
      animate: { filter: "blur(0px)", opacity: 1, x: 0 }
    },
    'blur-scale': {
      initial: { filter: "blur(10px)", opacity: 0, scale: 0.9 },
      animate: { filter: "blur(0px)", opacity: 1, scale: 1 }
    }
  }

  const selectedVariant = variants[variant]

  return (
    <motion.div
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
