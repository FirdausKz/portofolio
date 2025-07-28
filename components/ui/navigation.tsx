"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PiPathBold } from "react-icons/pi";
import { User, Code, Briefcase, Mail, Award, MapPin, Clock, Menu, X } from 'lucide-react'

interface NavigationProps {
  className?: string
}

export function Navigation({ className = "" }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('about')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about', icon: <User className="w-6 h-6" />, id: 'about' },
    { name: 'Journey', href: '#myjourney', icon: <PiPathBold className="w-6 h-6" />, id: 'myjourney' },
    { name: 'Skills', href: '#skills', icon: <Code className="w-6 h-6" />, id: 'skills' },
    { name: 'Projects', href: '#Projectfield', icon: <Briefcase className="w-6 h-6" />, id: 'Projectfield' },
    { name: 'Certificates', href: '#certificates', icon: <Award className="w-6 h-6" />, id: 'certificates' },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-6 h-6" />, id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 150
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're at the bottom of the page
      if (window.scrollY + windowHeight >= documentHeight - 50) {
        setActiveSection('contact')
        return
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          const sectionBottom = sectionTop + sectionHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[i])
            break
          }
        }
      }

      // Default to about section when at the very top
      if (window.scrollY < 300) {
        setActiveSection('about')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id)
    setIsMobileMenuOpen(false) // Close mobile menu when item is clicked
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 right-6 z-50 md:hidden bg-gray-900/90 backdrop-blur-xl border border-blue-500/30 rounded-full p-3 shadow-xl shadow-blue-500/20"
      >
        <motion.div
          animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-blue-500/30 shadow-xl"
            >
              <div className="pt-20 px-6">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href, item.id)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-blue-500/20'
                      }`}
                    >
                      <span className={`transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'text-white' 
                          : 'text-cyan-400'
                      }`}>
                        {item.icon}
                      </span>
                      <span className="text-lg font-medium">{item.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Fixed Sidebar Navigation - Hidden on Mobile */}
      <motion.nav
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-1/4 left-0 transform -translate-y-1/4 z-50 hidden md:block ${className}`}
      >
        <div className="bg-gray-900/90 backdrop-blur-xl border-r border-blue-500/30 rounded-r-2xl shadow-xl shadow-blue-500/20 p-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative p-3 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-blue-500/20'
                }`}
                title={item.name}
              >
                <span className={`transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'group-hover:text-cyan-400'
                }`}>
                  {item.icon}
                </span>
                
                {/* Tooltip */}
                <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-gray-900/95 backdrop-blur-xl border border-blue-500/30 rounded-lg px-3 py-2 shadow-xl">
                    <span className="text-white text-sm font-medium">{item.name}</span>
                  </div>
                  {/* Arrow */}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2">
                    <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900/95"></div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  )
}
