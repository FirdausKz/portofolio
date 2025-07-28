"use client"

import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiCodeigniter } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { SiGooglegemini } from "react-icons/si";

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Mail, 
  Instagram, 
  Linkedin, 
  MessageCircle,
  Code,
  Database,
  Smartphone,
  Server,
  Globe,
  Cpu,
  ExternalLink,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  User,
  MapPin,
  Clock
} from 'lucide-react'
import { Dither } from '@/components/ui/dither'
import { RotatingText } from '@/components/ui/rotating-text'
import { Timeline, TimelineEntry } from '@/components/ui/timeline'
import { BlurText, BlurIn } from '@/components/ui/blur-text'
import { Navigation } from '@/components/ui/navigation'

export default function Home() {
  const skills = [
    { 
      name: 'HTML5', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 18.178l4.62-1.256.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866L12 15.888l-2.52-.665-.162-1.849H7.06l.317 3.539L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2z"/>
        </svg>
      ), 
      color: 'from-orange-500 to-red-500' 
    },
    { 
      name: 'Tailwind CSS', 
      icon: <SiTailwindcss className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600' 
    },
    { 
      name: 'JavaScript', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.77l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/>
        </svg>
      ), 
      color: 'from-yellow-400 to-yellow-600' 
    },
    { 
      name: 'MySQL', 
      icon: <GrMysql className="w-8 h-8" /> ,
      color: 'from-blue-600 to-orange-500' 
    },
    { 
      name: 'Java', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.384-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.091-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
        </svg>
      ), 
      color: 'from-red-600 to-orange-500' 
    },
    { 
      name: 'C++', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79z"/>
        </svg>
      ), 
      color: 'from-blue-700 to-purple-600' 
    },
    { 
      name: 'CodeIgniter', 
      icon: <DiCodeigniter className="w-8 h-8" /> ,
      color: 'from-red-500 to-orange-500' 
    },
    { 
      name: 'Python', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/>
        </svg>
      ), 
      color: 'from-blue-500 to-yellow-500' 
    },
    { 
      name: 'PHP', 
      icon: <SiPhp className="w-8 h-8" />,
      color: 'from-purple-600 to-indigo-600' 
    },
    { 
      name: 'React/TSX', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
        </svg>
      ), 
      color: 'from-cyan-400 to-blue-500' 
    }
  ]

  const projects = [
    {
      title: 'Machine Learning-Powered Diabetes Classification Application',
      description: 'This web app classifies diabetes using patient input data (pregnancies, glucose, etc.). It leverages a backend machine learning model for analysis and predictions, showcasing intuitive UI development and predictive model integration.',
      technologies: ['Python', 'Streamlit',],
      link: 'https://diabetes-classificationn.streamlit.app/',
      image: '/images/diabetes.png'
    },
    {
      title: 'Dapur AI Bot - Automated Cooking Assistant',
      description: 'Dapur AI Bot is a chatbot-based cooking assistant integrated with a member management system. It offers automated culinary tips, cooking time estimates, and calorie advice. Features include user management, message broadcasting, and keyword-triggered replies via a Telegram bot, all managed through a desktop interface.',
      technologies: ['Java', 'Netbeans', 'MySql', 'Gemini-API'],
      link: 'https://github.com/FirdausKz/Projek-Telegram-Bot-.git',
      image: '/images/bot.png'
    },
    {
      title: 'E-Commerce Admin Dashboard - Laptop Store',
      description: [
        'A modern e-commerce dashboard built using PHP CodeIgniter and Bootstrap, designed for both users and admin to manage product transactions seamlessly. The platform allows users to browse a catalog of laptops, add items to the cart, proceed to checkout, and view their transaction history. The system integrates with a shipping cost API to dynamically calculate total payment including delivery fees.',
        
      ],
      technologies: ['PHP', 'CodeIgniter', 'Html', 'Bootsrap', 'MySql'],
      link: 'https://github.com/FirdausKz/belajar-ci',
      image: '/images/codeigniter.png'
    }
  ]

  const timelineData: TimelineEntry[] = [
    {
      title: 'Participant – DNCC Basic Training',
      content: (
        <p>
          Gained practical experience in cross-platform mobile app development using Flutter and Dart. Developed foundational understanding of app lifecycle and UI/UX principles.
        </p>
      ),
      date: 'ISSUED 2023',
      icon: <Code className="w-6 h-6 text-white" />
    },
    {
      title: 'Google Developer Student Club – Universitas Dian Nuswantoro',
      content: (
        <p>
          Actively involved in developer community events and workshops. Collaborated on tech projects while enhancing skills in mobile, web, and cloud development.
        </p>
      ),
      date: '2023 – Present',
      icon: <Globe className="w-6 h-6 text-white" />
    },
    {
      title: 'Lab Assistant – Programming Lab, Universitas Dian Nuswantoro',
      content: (
        <p>
       Assisting in academic lab sessions, mentoring junior students, and supporting curriculum delivery in programming and software development courses.
        </p>
      ),
      date: '2025 – Present',
      icon: <SiGooglegemini className="w-6 h-6 text-white" />
    },
    {
      title: 'ASAH Program Participant – Dicoding Indonesia',
      content: (
        <p>
          Selected for an exclusive talent development program focused on machine learning. Engaging in intensive study of supervised learning, model deployment, and data science using Python and TensorFlow.
        </p>
      ),
      date: '2025 – Present',
      icon: <Code className="w-6 h-6 text-white" />
    },
    
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/firdauskz',
      color: 'hover:bg-blue-600/30 hover:border-blue-400'
    },
    {
      name: 'Gmail',
      icon: <Mail className="w-6 h-6" />,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=firdauskhotibulzickrian@gmail.com&su=Portfolio Contact&body=Hi Firdaus, I would like to discuss...',
      color: 'hover:bg-cyan-600/30 hover:border-cyan-400'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      href: 'https://www.instagram.com/zickriann/',
      color: 'hover:bg-indigo-600/30 hover:border-indigo-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/firdaus-khotibul-zickrian-061623284/?profileId=ACoAAEUlvokBZwLRhAjftG0Pul50c46i8puoyr4',
      color: 'hover:bg-blue-700/30 hover:border-blue-500'
    },
    {
      name: 'Discord',
      icon: <FaDiscord className="w-6 h-6" />,
      href: 'https://discord.com/users/zickrian',
      color: 'hover:bg-cyan-700/30 hover:border-cyan-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Background */}
      <Dither
      
       />
      
      {/* Hero Section */}
      <section id="about" className="relative z-10 min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden pt-28 md:pt-24">
        <div className="max-w-7xl mx-auto w-full">
           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left"
            >
              <BlurIn variant="blur-up" delay={0.2} duration={1.0}>
          <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent leading-tight">
            Firdaus Khotibul Z
          </h1>
        </BlurIn>
        
        <BlurIn variant="blur-left" delay={0.4} duration={1.0}>
          <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2">
              <span>specialized in</span>
              <RotatingText
                texts={["Machine Learning Enthusiast", "Web Developer"]}
                className="text-xl sm:text-2xl font-bold text-blue-400"
              />
            </div>
          </div>
        </BlurIn>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-lg mx-auto lg:mx-0"
        >
          <BlurText
            text="Combining the power of artificial intelligence and modern web technologies to create innovative, efficient, and human-centered solutions that address real-world challenges."
            className="text-base lg:text-lg text-gray-400 leading-relaxed"
            delay={0.8}
            duration={1.2}
          />
        </motion.div>
        
        <BlurIn variant="blur-scale" delay={1.0} duration={0.8}>
          <div className="flex flex-row sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
            <a href="#Projectfield" className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 text-center">
              View My Work
            </a>
            <a 
              href="#contact"
              className="px-6 sm:px-8 py-3 border border-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 hover:border-cyan-400 transition-all duration-300 text-center"
            >
              Get In Touch
            </a>
          </div>
        </BlurIn>
      </motion.div>
      
      {/* Right Side - Profile Photo Frame */}
      <BlurIn variant="blur-right" delay={0.6} duration={1.0}>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative">
            {/* Profile Photo Frame */}
            <div className="mr-30 w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-blue-400 shadow-2xl shadow-blue-500/30 bg-gray-900/50 flex items-center justify-center relative overflow-hidden hover:shadow-blue-400/50 transition-all duration-300">
              {/* Placeholder for photo */}
               <img 
                  src="/images/profilelinked.jfif" 
                  alt="Firdaus Khotibul Z - Profile Photo"
                  className="w-full h-full object-cover rounded-full"
                />
              
              {/* Online Status Indicator */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-gray-900 animate-pulse shadow-lg"></div>
            </div>
          </div>
        </div>
      </BlurIn>
    </div>
  </div>
</section>

      {/* Timeline Section */}
      <section id="myjourney" className="relative z-10 py-20 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <BlurIn variant="blur-up" delay={0.2} duration={1.0}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                My Journey
              </h2>
            </BlurIn>
            <BlurText
              text="From curious beginner to passionate developer - here's how my technical journey unfolded"
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              delay={0.5}
              duration={1.0}
            />
          </motion.div>
          
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <BlurIn variant="blur-scale" delay={0.2} duration={1.0}>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Skills & Technologies
              </h1>
            </BlurIn>
            <BlurText
              text="Technologies I work with to bring ideas to life"
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              delay={0.5}
              duration={1.0}
            />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-cyan-400/60 transition-all duration-300 text-center hover:shadow-lg hover:shadow-blue-500/20">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-300">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <BlurIn variant="blur-left" delay={0.2} duration={1.0}>
              <h2 id="Projectfield" className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </BlurIn>
            <BlurText
              text="Some of my recent work showcasing different aspects of my skills"
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              delay={0.5}
              duration={1.0}
            />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-cyan-900/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover relative z-1"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="relative z-10 py-20 px-4 overflow-hidden ">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <BlurIn variant="blur-up" delay={0.2} duration={1.0}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Certificates & Achievements
              </h2>
            </BlurIn>
            <BlurText
              text="Professional certifications and achievements that showcase my learning journey"
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              delay={0.5}
              duration={1.0}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.a
              href="https://drive.google.com/drive/folders/1N1AAKywxIr3EQlqNuXqT1RThkfRie_LR?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 text-center min-w-[300px]">
                {/* Google Drive Icon */}
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <LiaCertificateSolid className="w-12 h-12" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  View My Certificates
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Access my complete collection of professional certificates, course completions, and achievement badges in one organized Google Drive folder.
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="font-semibold">Open Drive Folder</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                
                {/* Decorative badges */}
                <div className="flex justify-center space-x-2 mt-4">
                  <div className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-500/30">
                    <Award className="w-4 h-4 inline mr-1" />
                    Verified
                  </div>
                  <div className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                    <GraduationCap className="w-4 h-4 inline mr-1" />
                    Updated
                  </div>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.a>
          </motion.div>
          
          {/* Certificate categories preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mx-10"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-5 border border-blue-500/20 text-center">
              <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Programming</h4>
              <p className="text-gray-400 text-sm">Web Development, Mobile Apps, Backend</p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 text-center">
              <Database className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Machine Learning</h4>
              <p className="text-gray-400 text-sm">AI, Deep Learning, Data Science</p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 text-center">
              <Globe className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Professional</h4>
              <p className="text-gray-400 text-sm">Workshops, Conferences, Training</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <BlurIn variant="blur-down" delay={0.2} duration={1.0}>
              <h2 id="contact" className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                You can contact me
              </h2>
            </BlurIn>
            <BlurText
              text="Let's connect and discuss opportunities, collaborations, or just have a chat about technology"
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              delay={0.5}
              duration={1.0}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 px-6 py-3 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 ${link.color}`}
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      
    </div>
  )
}
