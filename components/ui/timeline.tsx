"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export interface TimelineEntry {
  title: string
  content: React.ReactNode
  date: string
  icon?: React.ReactNode
}

interface TimelineProps {
  data: TimelineEntry[]
  className?: string
}

export const Timeline: React.FC<TimelineProps> = ({ data, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })
  
  // Transform scroll progress to line height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Background timeline line */}
      <div className="absolute left-[19px] md:left-[23px] top-6 bottom-6 w-1 bg-gray-700/50 rounded-full"></div>
      
      {/* Animated progress line */}
      <motion.div 
        className="absolute left-[19px] md:left-[23px] top-6 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-cyan-400 shadow-lg shadow-blue-500/50 rounded-full"
        style={{ height: lineHeight }}
      />
      
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="relative flex items-start space-x-4 md:space-x-6 pb-8 md:pb-12 last:pb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline dot with pulse animation when in view */}
          <motion.div
            className="relative z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 shadow-lg shadow-blue-500/25 flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ 
              scale: 1, 
              opacity: 1,
              boxShadow: [
                "0 10px 20px -3px rgba(59, 130, 246, 0.25)",
                "0 10px 30px -3px rgba(59, 130, 246, 0.4)",
                "0 10px 20px -3px rgba(59, 130, 246, 0.25)"
              ]
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 10,
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            viewport={{ once: true }}
          >
            {item.icon || (
              <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full"></div>
            )}
          </motion.div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <motion.div
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                borderColor: "rgba(59, 130, 246, 0.6)",
                boxShadow: "0 10px 25px -3px rgba(59, 130, 246, 0.1)",
                y: -5
              }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                <motion.h3 
                  className="text-lg md:text-xl font-semibold text-white leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>
                <motion.span 
                  className="text-xs md:text-sm text-blue-400 font-medium bg-blue-500/10 px-2 md:px-3 py-1 rounded-full border border-blue-500/20 self-start"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {item.date}
                </motion.span>
              </div>
              <motion.div 
                className="text-sm md:text-base text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {item.content}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
