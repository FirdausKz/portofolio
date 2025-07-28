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
    { name: 'About', href: '#about', icon: <User className="w-5 h-5" />, id: 'about' },
    { name: 'Journey', href: '#myjourney', icon: <PiPathBold className="w-5 h-5" />, id: 'myjourney' },
    { name: 'Skills', href: '#skills', icon: <Code className="w-5 h-5" />, id: 'skills' },
    { name: 'Projects', href: '#Projectfield', icon: <Briefcase className="w-5 h-5" />, id: 'Projectfield' },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5" />, id: 'contact' },
  ]

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = navItems.map(item => item.id)
          const scrollPosition = window.scrollY + 100 // Reduced offset for better accuracy
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight

          // Check if we're at the bottom of the page
          if (window.scrollY + windowHeight >= documentHeight - 100) {
            setActiveSection('contact')
            ticking = false
            return
          }

          let activeFound = false
          
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i])
            if (section) {
              const sectionTop = section.offsetTop - 80 // Account for navbar height
              const sectionHeight = section.offsetHeight
              const sectionBottom = sectionTop + sectionHeight

              // More precise detection: section is active when viewport center is within it
              if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                setActiveSection(sections[i])
                activeFound = true
                break
              }
            }
          }

          // Default to about section when at the very top
          if (window.scrollY < 100 && !activeFound) {
            setActiveSection('about')
          }
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id)
    setIsMobileMenuOpen(false) // Close mobile menu when item is clicked
    const element = document.querySelector(href) as HTMLElement
    if (element) {
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - 80 // Account for navbar height
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Top Floating Navbar - Desktop */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 w-full z-50 hidden md:block"
      >
        <div className="flex justify-center w-full">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full shadow-2xl shadow-white/10 px-8 py-3">
            <div className="flex items-center space-x-4">
              {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-white/25 text-white shadow-lg shadow-white/20'
                    : 'text-white/80 hover:text-white hover:bg-white/15'
                }`}
              >
                <span className={`transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'group-hover:text-cyan-300'
                } w-5 h-5 flex items-center justify-center`}>
                  {item.icon}
                </span>
                <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
              </motion.button>
            ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 right-6 z-50 md:hidden bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full p-3 shadow-2xl shadow-white/10"
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
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content - iOS-style Glass morphism */}
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="absolute top-16 left-4 right-4 bg-white/[0.08] backdrop-blur-3xl border border-white/[0.12] rounded-3xl shadow-2xl shadow-black/25 overflow-hidden"
              style={{
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              }}
            >
              {/* Header with profile info */}
             

              {/* Navigation Menu */}
              <div className="px-4 py-4">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href, item.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-white/[0.15] text-white border border-white/[0.1] shadow-lg backdrop-blur-sm'
                          : 'text-white/70 hover:text-white hover:bg-white/[0.08]'
                      }`}
                    >
                      <span className={`transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'text-blue-400' 
                          : 'text-white/60'
                      }`}>
                        {item.icon}
                      </span>
                      <span className="text-base font-medium">{item.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
