"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

interface ThemeToggleProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function ThemeToggle({ className = "", size = 'md' }: ThemeToggleProps) {
  const { isDarkMode, toggleTheme } = useTheme()

  const sizeClasses = {
    sm: 'w-12 h-6',
    md: 'w-14 h-7',
    lg: 'w-16 h-8'
  }

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative ${sizeClasses[size]} bg-gray-700/50 backdrop-blur-sm border border-blue-500/20 rounded-full p-1 transition-all duration-300 hover:border-blue-400/40 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background Track */}
      <div className="absolute inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full" />
      
      {/* Toggle Thumb */}
      <motion.div
        className="relative z-10 w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg flex items-center justify-center"
        animate={{
          x: isDarkMode ? 0 : '100%'
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        <motion.div
          animate={{
            rotate: isDarkMode ? 0 : 180,
            scale: isDarkMode ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? (
            <Moon className={`${iconSizes[size]} text-white`} />
          ) : (
            <Sun className={`${iconSizes[size]} text-white`} />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  )
}
