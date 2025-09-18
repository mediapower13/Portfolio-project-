"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Github, Mail, ExternalLink, Download, Menu, X, MapPin, GraduationCap, Code, Palette, Zap, Award, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Enhanced animation on scroll effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          entry.target.classList.remove('card-entrance')
          console.log('Element animated:', entry.target.className)
        }
      })
    }, observerOptions)

    // Multiple animation observers for different effects
    const fadeUpObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
            console.log('Fade up animated:', entry.target.className)
          }, index * 100) // Stagger the animations
        }
      })
    }, observerOptions)

    const slideInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
            entry.target.classList.remove('opacity-0', 'translate-y-12')
            console.log('Slide in animated:', entry.target.className)
          }, index * 150) // Stagger the animations
        }
      })
    }, observerOptions)

    const scaleInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
            entry.target.classList.remove('opacity-0', 'scale-90')
            console.log('Scale in animated:', entry.target.className)
          }, index * 100)
        }
      })
    }, observerOptions)

    // Wait for DOM to be ready
    setTimeout(() => {
      // Observe different elements with different animations
      const cardElements = document.querySelectorAll('.card-entrance, .card-entrance-up, .card-entrance-left, .card-entrance-right')
      const fadeUpElements = document.querySelectorAll('.fade-up-on-scroll')
      const slideInElements = document.querySelectorAll('.slide-in-on-scroll, .slide-left-on-scroll, .slide-right-on-scroll')
      const scaleInElements = document.querySelectorAll('.scale-in-on-scroll')
      const staggerElements = document.querySelectorAll('.stagger-children')

      console.log('Found elements:', {
        cards: cardElements.length,
        fadeUp: fadeUpElements.length,
        slideIn: slideInElements.length,
        scaleIn: scaleInElements.length,
        stagger: staggerElements.length
      })

      cardElements.forEach(el => observer.observe(el))
      fadeUpElements.forEach(el => fadeUpObserver.observe(el))
      slideInElements.forEach(el => slideInObserver.observe(el))
      scaleInElements.forEach(el => scaleInObserver.observe(el))
      staggerElements.forEach(el => observer.observe(el))
    }, 100)

    return () => {
      observer.disconnect()
      fadeUpObserver.disconnect()
      slideInObserver.disconnect()
      scaleInObserver.disconnect()
    }
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, product catalog, shopping cart, and secure payment processing.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/mediapower13",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features for improved productivity.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/mediapower13",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Unilorin Blockchain Voting System",
      description:
        "A decentralized voting system built for university elections using blockchain technology. Features secure authentication, transparent voting, real-time results, and immutable vote records.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Solidity", "Web3.js", "Ethereum", "Node.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/mediapower13",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that displays current conditions and forecasts with beautiful data visualizations and location-based services.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "https://github.com/mediapower13",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      icon: <Code className="h-6 w-6" />,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      category: "Backend & Web3",
      items: ["Node.js", "Express.js", "Python", "PHP", "MySQL", "MongoDB", "PostgreSQL", "Solidity", "Web3.js", "Ethereum"],
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-green-500 to-teal-600",
    },
    {
      category: "Tools & Certifications",
      items: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Docker", "Vercel", "Netlify", "Huawei Datacom"],
      icon: <Palette className="h-6 w-6" />,
      gradient: "from-orange-500 to-pink-600",
    },
  ]

  const certificates = [
    {
      title: "HCIA-Datacom V1.0",
      issuer: "Huawei Technologies",
      date: "February 2025",
      description: "Certified Huawei Datacom Engineer with expertise in network fundamentals, routing, switching, and enterprise network solutions.",
      image: "/images/certificates/Huawei certificate.png",
      verificationUrl: "#",
      skills: ["Network Engineering", "Routing & Switching", "Enterprise Networks", "Datacom"],
      gradient: "from-red-500 to-orange-500",
      certificateImage: "/images/certificates/Huawei certificate.png"
    },
    {
      title: "JavaScript Practicals Crash Course",
      issuer: "Udemy - Proper Dot Institute",
      date: "November 2023",
      description: "Comprehensive hands-on JavaScript course covering practical programming concepts and real-world applications.",
      image: "/images/certificates/cerificate udemy.jpg",
      verificationUrl: "#",
      skills: ["JavaScript", "DOM Manipulation", "ES6+", "Practical Programming"],
      gradient: "from-yellow-500 to-amber-500",
      certificateImage: "/images/certificates/cerificate udemy.jpg"
    },
    {
      title: "Microsoft Excel - Basic/Advanced Formulas",
      issuer: "Udemy - Yassin Marco",
      date: "June 2024",
      description: "Advanced Excel skills including complex formulas, data analysis, and spreadsheet optimization techniques.",
      image: "/images/certificates/excel certificate udemy.jpg",
      verificationUrl: "#",
      skills: ["Excel", "Data Analysis", "Advanced Formulas", "Spreadsheet Management"],
      gradient: "from-green-500 to-teal-500",
      certificateImage: "/images/certificates/excel certificate udemy.jpg"
    },
    {
      title: "CSS, Bootstrap, JavaScript, PHP Full Stack",
      issuer: "Udemy - Proper Dot Institute",
      date: "June 2024",
      description: "Complete full-stack web development course covering frontend and backend technologies for modern web applications.",
      image: "/images/certificates/udemy cert full-stack.jpg",
      verificationUrl: "#",
      skills: ["CSS", "Bootstrap", "JavaScript", "PHP", "Full Stack Development"],
      gradient: "from-blue-500 to-purple-500",
      certificateImage: "/images/certificates/udemy cert full-stack.jpg"
    }
  ]

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-white/20 z-50 shadow-lg animate-slide-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-slide-right">
              Mohammed Nurudeen
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 animate-slide-left stagger-1">
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors font-medium hover-smooth hover-bounce">
                About
              </a>
              <a href="#projects" className="text-gray-600 hover:text-purple-600 transition-colors font-medium hover-smooth hover-bounce stagger-1">
                Projects
              </a>
              <a href="#skills" className="text-gray-600 hover:text-purple-600 transition-colors font-medium hover-smooth hover-bounce stagger-2">
                Skills
              </a>
              <a href="#certificates" className="text-gray-600 hover:text-purple-600 transition-colors font-medium hover-smooth hover-bounce stagger-3">
                Certificates
              </a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors font-medium hover-smooth hover-bounce stagger-4">
                Contact
              </a>
              <button 
                onClick={() => window.open('/MNB Resume.pdf', '_blank')}
                className="text-purple-600 hover:text-purple-800 transition-colors font-medium hover-smooth hover-bounce stagger-5 border border-purple-200 px-3 py-1 rounded-md hover:bg-purple-50"
              >
                Resume
              </button>
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                <a
                  href="#about"
                  className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#certificates"
                  className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Certificates
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <button
                  onClick={() => {
                    window.open('/MNB Resume.pdf', '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-purple-600 hover:text-purple-800 transition-colors font-medium border border-purple-200 px-3 py-2 rounded-md hover:bg-purple-50"
                >
                  Resume
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12 lg:py-20">
            <div className="mb-6 lg:mb-8 animate-zoom-in">
              <div className="inline-block p-3 lg:p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4 lg:mb-6 animate-pulse-soft hover-shine">
                <Code className="h-6 w-6 lg:h-8 lg:w-8 text-white animate-bounce" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 px-4 animate-slide-up stagger-1">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent text-focus-in">
                Mohammed Nurudeen Bolarinwa
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-3 lg:mb-4 max-w-3xl mx-auto font-medium px-4 animate-slide-up stagger-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Software Developer, Web3 Developer & Certified Datacom Engineer
              </span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-6 mb-6 lg:mb-8 text-gray-600 px-4 animate-slide-up stagger-3">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2 shadow-lg text-sm lg:text-base hover-lift hover-shine card-entrance">
                <GraduationCap className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600 animate-heartbeat" />
                <span className="font-medium">Federal University of Ilorin</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2 shadow-lg text-sm lg:text-base hover-lift hover-shine card-entrance">
                <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-green-600 animate-pulse" />
                <span className="font-medium">Lagos State, Nigeria</span>
              </div>
            </div>
            <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 max-w-2xl mx-auto px-4 animate-slide-up stagger-4">
              Passionate Information Technology student and certified Datacom Engineer creating innovative Web3 solutions 
              and building user-friendly applications that solve real-world problems with beautiful, modern designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center mb-6 lg:mb-8 px-4 animate-slide-up stagger-5">
              <Button
                size="lg"
                className="w-full sm:w-auto btn-professional hover-smooth hover-tada shadow-lg text-sm lg:text-base"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-purple-200 hover:bg-purple-50 shadow-lg text-sm lg:text-base hover-smooth hover-bounce"
                onClick={() => window.open('/MNB Resume.pdf', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            
            {/* Work Availability Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-in-up animation-delay-300">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                🌍 Remote Worldwide
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                🏢 Hybrid Ready
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                💼 Full-time
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                ✈️ Open to Relocation
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 lg:space-x-6 animate-slide-up stagger-6">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/60 backdrop-blur-sm hover:bg-white/80 shadow-lg hover-smooth hover-rotate"
                asChild
              >
                <a href="https://github.com/mediapower13" target="_blank" rel="noopener noreferrer" title="Visit my GitHub profile">
                  <Github className="h-4 w-4 lg:h-5 lg:w-5 text-gray-700" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/60 backdrop-blur-sm hover:bg-white/80 shadow-lg hover-smooth hover-rotate"
                asChild
              >
                <a href="mailto:mediapowers13@gmail.com" title="Send me an email">
                  <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-gray-700" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 relative slide-in-on-scroll"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-blue-100/20"></div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent fade-up-on-scroll">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 slide-left-on-scroll">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed fade-up-on-scroll">
                I'm Mohammed Nurudeen Bolarinwa, a dedicated Information Technology student at the Federal University of
                Ilorin, now based in Lagos State, with a passion for software development and Web3 technologies. I'm also a certified 
                Datacom Engineer from Huawei, specializing in building modern web applications and blockchain solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed fade-up-on-scroll">
                My journey in technology has equipped me with strong problem-solving skills and expertise in various 
                programming languages, frameworks, and blockchain technologies. I'm passionate about creating decentralized 
                applications and contributing to the future of web development.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed fade-up-on-scroll">
                When I'm not coding, I enjoy contributing to open-source projects, exploring new blockchain protocols,
                participating in coding competitions, and sharing knowledge with fellow developers in the tech community.
              </p>
              <div className="flex flex-wrap gap-3 stagger-children">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2 hover-smooth hover-bounce">
                  Problem Solver
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2 hover-smooth hover-bounce">
                  Huawei Certified
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-4 py-2 hover-smooth hover-bounce">
                  Web3 Developer
                </Badge>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2 hover-smooth hover-bounce">
                  Blockchain Enthusiast
                </Badge>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center mb-8 md:mb-0 slide-right-on-scroll">
              <div className="relative group scale-in-on-scroll">
                {/* Outer gradient ring */}
                <div className="w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full flex items-center justify-center shadow-2xl p-2 group-hover:scale-105 transition-transform duration-500 hover-shine">
                  {/* Inner white container */}
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden shadow-inner">
                    {!imageError ? (
                      <img 
                        src="/profile-photo.jpg" 
                        alt="Mohammed Nurudeen Bolarinwa - Profile" 
                        className="w-full h-full object-cover object-center rounded-full transition-transform duration-300 group-hover:scale-110"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="text-center p-8">
                        <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                          Mohammed Nurudeen
                        </div>
                        <div className="text-lg text-gray-600 font-medium">Software Developer</div>
                        <div className="text-sm text-gray-500 mt-2">Web3 & Blockchain</div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Floating elements with scroll animations */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce shadow-lg flex items-center justify-center rotate-in-on-scroll">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse shadow-lg flex items-center justify-center scale-in-on-scroll">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div className="absolute top-8 -left-8 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-float shadow-lg fade-up-on-scroll"></div>
                <div className="absolute bottom-8 -right-8 w-6 h-6 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-pulse shadow-lg fade-up-on-scroll"></div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 rounded-full blur-xl -z-10 group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-purple-50 slide-in-on-scroll">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent fade-up-on-scroll">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 stagger-children">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover-smooth hover-shine card-entrance-up`}
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <span className="text-white font-bold text-lg lg:text-xl z-10 drop-shadow-lg text-center px-4 animate-fade-in">{project.title}</span>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
                </div>
                <CardHeader className="p-4 lg:p-6">
                  <CardTitle className="flex items-center justify-between text-gray-800 text-lg lg:text-xl">
                    <span className="truncate pr-2">{project.title}</span>
                    <div className="flex space-x-2 flex-shrink-0">
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-purple-100 hover-smooth hover-rotate" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="View live project">
                          <ExternalLink className="h-4 w-4 text-purple-600" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-blue-100 hover-smooth hover-rotate" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="View project on GitHub">
                          <Github className="h-4 w-4 text-blue-600" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm lg:text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 lg:p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors text-xs hover-smooth hover-bounce"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 slide-in-on-scroll"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent fade-up-on-scroll">
            Skills & Technologies
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover-smooth hover-shine card-entrance-up`}
              >
                <CardHeader className="text-center p-4 lg:p-6">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${skillGroup.gradient} mb-4 mx-auto hover-smooth hover-tada animate-pulse-soft scale-in-on-scroll`}>
                    <div className="text-white">{skillGroup.icon}</div>
                  </div>
                  <CardTitle className="text-gray-800 text-lg lg:text-xl fade-up-on-scroll">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 lg:p-6 pt-0">
                  <div className="flex flex-wrap gap-2 justify-center stagger-children">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className={`bg-gradient-to-r ${skillGroup.gradient} text-white border-0 hover:scale-105 transition-transform cursor-default text-xs lg:text-sm hover-smooth hover-glow`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 slide-in-on-scroll">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent fade-up-on-scroll">
            Certifications & Achievements
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 stagger-children">
            {certificates.map((certificate, index) => (
              <Card
                key={index}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover-smooth hover-shine card-entrance-${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="relative">
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${certificate.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                    <div className="text-center z-10 p-6">
                      <Award className="h-16 w-16 text-white mx-auto mb-4 drop-shadow-lg" />
                      <h3 className="text-white font-bold text-xl mb-2 drop-shadow-lg">{certificate.title}</h3>
                      <p className="text-white/90 font-medium drop-shadow">{certificate.issuer}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 left-4 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-gray-800 text-lg mb-1">{certificate.title}</CardTitle>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <span className="font-medium">{certificate.issuer}</span>
                        <span className="mx-2">•</span>
                        <span>{certificate.date}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 hover:bg-purple-100 group-hover:scale-110 transition-all hover-glow" 
                        onClick={() => window.open(certificate.certificateImage, '_blank')}
                        title="View certificate"
                      >
                        <Eye className="h-4 w-4 text-purple-600" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 hover:bg-blue-100 group-hover:scale-110 transition-all hover-glow" 
                        onClick={() => window.open(certificate.certificateImage, '_blank')}
                        title="View certificate"
                      >
                        <Download className="h-4 w-4 text-blue-600" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {certificate.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {certificate.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            className={`bg-gradient-to-r ${certificate.gradient} text-white border-0 hover:scale-105 transition-transform cursor-default text-xs`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievement Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group animate-fade-in-up animation-delay-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg hover-glow animate-pulse-soft">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{certificates.length}</div>
              <div className="text-sm text-gray-600 font-medium">Certificates</div>
            </div>
            
            <div className="text-center group animate-fade-in-up animation-delay-400">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg hover-glow animate-pulse-soft animation-delay-200">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">15+</div>
              <div className="text-sm text-gray-600 font-medium">Skills Acquired</div>
            </div>
            
            <div className="text-center group animate-fade-in-up animation-delay-500">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg hover-glow animate-pulse-soft animation-delay-400">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">20+</div>
              <div className="text-sm text-gray-600 font-medium">Hours Learning</div>
            </div>
            
            <div className="text-center group animate-fade-in-up animation-delay-600">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg hover-glow animate-pulse-soft animation-delay-600">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">1</div>
              <div className="text-sm text-gray-600 font-medium">Professional Cert</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 slide-in-on-scroll">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent fade-up-on-scroll">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-up-on-scroll">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email Me</h3>
                      <p className="text-sm text-gray-600">Quick response guaranteed</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a href="mailto:mediapowers13@gmail.com" className="block text-purple-600 hover:text-purple-800 transition-colors">
                      mediapowers13@gmail.com
                    </a>
                    <a href="mailto:nurudeenbolaman@gmail.com" className="block text-purple-600 hover:text-purple-800 transition-colors">
                      nurudeenbolaman@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Location</h3>
                      <p className="text-sm text-gray-600">Based in Nigeria</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Lagos State, Nigeria</p>
                  <p className="text-sm text-gray-600 mt-1">Available for remote work worldwide • Hybrid • Full-time • Open to relocation</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                      <Github className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">GitHub</h3>
                      <p className="text-sm text-gray-600">Check out my projects</p>
                    </div>
                  </div>
                  <a 
                    href="https://github.com/mediapower13" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    github.com/mediapower13
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm scale-in-on-scroll hover-smooth">
                <CardHeader className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 text-white rounded-t-lg slide-down-on-scroll">
                  <CardTitle className="text-xl font-bold text-white fade-up-on-scroll">Let's Start a Conversation</CardTitle>
                  <CardDescription className="text-purple-100 fade-up-on-scroll">
                    Whether you have a project in mind, need technical consultation, or want to discuss opportunities, 
                    I'm here to help. Fill out the form below and I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 stagger-children">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
                        <Input 
                          id="name"
                          placeholder="Enter your full name" 
                          required 
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-200 hover-smooth transition-all" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-200 hover-smooth transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject *</label>
                        <Input 
                          id="subject"
                          placeholder="What's this about?" 
                          required 
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-200 hover-smooth transition-all" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-gray-700">Company/Organization</label>
                        <Input 
                          id="company"
                          placeholder="Your company (optional)" 
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-200 hover-smooth transition-all" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">Message *</label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project, ideas, or how I can help you..."
                        className="min-h-[140px] border-purple-200 focus:border-purple-500 focus:ring-purple-200 hover-smooth transition-all resize-none"
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="updates" className="rounded border-purple-300 text-purple-600 focus:ring-purple-200" />
                      <label htmlFor="updates" className="text-sm text-gray-600">
                        I'd like to receive updates about your latest projects and blog posts
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-smooth hover-bounce"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-purple-100">
                    <div className="text-center">
                      <p className="text-gray-600 mb-4 font-medium">Prefer a direct approach?</p>
                      <div className="flex flex-wrap gap-3 justify-center">
                        <Button 
                          variant="outline" 
                          className="border-purple-200 hover:bg-purple-50 text-purple-700 hover:border-purple-300 transition-all hover-smooth" 
                          asChild
                        >
                          <a href="mailto:mediapowers13@gmail.com">
                            <Mail className="mr-2 h-4 w-4" />
                            Primary Email
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-blue-200 hover:bg-blue-50 text-blue-700 hover:border-blue-300 transition-all hover-smooth" 
                          asChild
                        >
                          <a href="https://github.com/mediapower13" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View GitHub
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-green-200 hover:bg-green-50 text-green-700 hover:border-green-300 transition-all hover-smooth" 
                          asChild
                        >
                          <a href="/MNB Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Professional Touch - Response Time Banner */}
          <div className="text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">24h</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Quick Response</p>
                      <p className="text-sm text-gray-600">I typically respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Work Flexible</p>
                      <p className="text-sm text-gray-600">Remote • Hybrid • Full-time • Open to relocation</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Quality Assured</p>
                      <p className="text-sm text-gray-600">Professional & reliable service</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Mohammed Nurudeen
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Full-Stack Developer & Web3 Enthusiast crafting innovative digital solutions 
                with modern technologies and blockchain integration.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-white/10 text-purple-300 hover:text-white transition-all" asChild>
                  <a href="https://github.com/mediapower13" target="_blank" rel="noopener noreferrer" title="Visit my GitHub profile">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10 text-purple-300 hover:text-white transition-all" asChild>
                  <a href="mailto:mediapowers13@gmail.com" title="Send me an email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10 text-purple-300 hover:text-white transition-all" asChild>
                  <a href="/MNB Resume.pdf" target="_blank" rel="noopener noreferrer" title="Download my resume">
                    <Download className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-purple-400 transition-colors text-sm">About Me</a>
                <a href="#projects" className="block text-gray-300 hover:text-purple-400 transition-colors text-sm">Projects</a>
                <a href="#skills" className="block text-gray-300 hover:text-purple-400 transition-colors text-sm">Skills</a>
                <a href="#certificates" className="block text-gray-300 hover:text-purple-400 transition-colors text-sm">Certificates</a>
                <a href="#contact" className="block text-gray-300 hover:text-purple-400 transition-colors text-sm">Contact</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                  Lagos State, Nigeria
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Mail className="h-4 w-4 mr-2 text-purple-400" />
                  mediapowers13@gmail.com
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <GraduationCap className="h-4 w-4 mr-2 text-purple-400" />
                  Federal University of Ilorin
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs text-gray-400">
                  Available for remote work worldwide • Hybrid arrangements • Full-time positions • Open to relocation
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 Mohammed Nurudeen Bolarinwa. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Built with Next.js & Tailwind CSS</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Deployed on Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
