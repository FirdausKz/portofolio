"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface RotatingTextProps {
  texts: string[]
  className?: string
  interval?: number
}

export const RotatingText: React.FC<RotatingTextProps> = ({ 
  texts, 
  className = "", 
  interval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
      >
        {texts[currentIndex]}
      </motion.span>
    </div>
  )
}
