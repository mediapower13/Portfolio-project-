"use client"

import type React from "react"

import { useState } from "react"
import { Github, Mail, ExternalLink, Download, Menu, X, MapPin, GraduationCap, Code, Palette, Zap, Award, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

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
      image: "/images/certificates/huawei-datacom-certificate.jpg",
      verificationUrl: "#",
      skills: ["Network Engineering", "Routing & Switching", "Enterprise Networks", "Datacom"],
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "JavaScript Practicals Crash Course",
      issuer: "Udemy - Proper Dot Institute",
      date: "November 2023",
      description: "Comprehensive hands-on JavaScript course covering practical programming concepts and real-world applications.",
      image: "/images/certificates/javascript-crash-course.jpg",
      verificationUrl: "#",
      skills: ["JavaScript", "DOM Manipulation", "ES6+", "Practical Programming"],
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      title: "Microsoft Excel - Basic/Advanced Formulas",
      issuer: "Udemy - Yassin Marco",
      date: "June 2024",
      description: "Advanced Excel skills including complex formulas, data analysis, and spreadsheet optimization techniques.",
      image: "/images/certificates/microsoft-excel.jpg",
      verificationUrl: "#",
      skills: ["Excel", "Data Analysis", "Advanced Formulas", "Spreadsheet Management"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "CSS, Bootstrap, JavaScript, PHP Full Stack",
      issuer: "Udemy - Proper Dot Institute",
      date: "June 2024",
      description: "Complete full-stack web development course covering frontend and backend technologies for modern web applications.",
      image: "/images/certificates/fullstack-crash-course.jpg",
      verificationUrl: "#",
      skills: ["CSS", "Bootstrap", "JavaScript", "PHP", "Full Stack Development"],
      gradient: "from-purple-500 to-indigo-500",
    },
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
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-white/20 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Mohammed Nurudeen
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                About
              </a>
              <a href="#projects" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                Projects
              </a>
              <a href="#skills" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                Skills
              </a>
              <a href="#certificates" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                Certificates
              </a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                Contact
              </a>
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
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12 lg:py-20">
            <div className="mb-6 lg:mb-8">
              <div className="inline-block p-3 lg:p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4 lg:mb-6">
                <Code className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 px-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Mohammed Nurudeen Bolarinwa
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-3 lg:mb-4 max-w-3xl mx-auto font-medium px-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Software Developer, Web3 Developer & Certified Datacom Engineer
              </span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-6 mb-6 lg:mb-8 text-gray-600 px-4">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2 shadow-lg text-sm lg:text-base">
                <GraduationCap className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600" />
                <span className="font-medium">Federal University of Ilorin</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2 shadow-lg text-sm lg:text-base">
                <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-green-600" />
                <span className="font-medium">Kwara State, Nigeria</span>
              </div>
            </div>
            <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
              Passionate Information Technology student and certified Datacom Engineer creating innovative Web3 solutions 
              and building user-friendly applications that solve real-world problems with beautiful, modern designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center mb-6 lg:mb-8 px-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg text-sm lg:text-base"
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
                className="w-full sm:w-auto border-2 border-purple-200 hover:bg-purple-50 shadow-lg text-sm lg:text-base"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div className="flex justify-center space-x-4 lg:space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/60 backdrop-blur-sm hover:bg-white/80 shadow-lg"
                asChild
              >
                <a href="https://github.com/mediapower13" target="_blank" rel="noopener noreferrer" title="Visit my GitHub profile">
                  <Github className="h-4 w-4 lg:h-5 lg:w-5 text-gray-700" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/60 backdrop-blur-sm hover:bg-white/80 shadow-lg"
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
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-blue-100/20"></div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm Mohammed Nurudeen Bolarinwa, a dedicated Information Technology student at the Federal University of
                Ilorin, Kwara State, with a passion for software development and Web3 technologies. I'm also a certified 
                Datacom Engineer from Huawei, specializing in building modern web applications and blockchain solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My journey in technology has equipped me with strong problem-solving skills and expertise in various 
                programming languages, frameworks, and blockchain technologies. I'm passionate about creating decentralized 
                applications and contributing to the future of web development.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When I'm not coding, I enjoy contributing to open-source projects, exploring new blockchain protocols,
                participating in coding competitions, and sharing knowledge with fellow developers in the tech community.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2">
                  Problem Solver
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2">
                  Huawei Certified
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-4 py-2">
                  Web3 Developer
                </Badge>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2">
                  Blockchain Enthusiast
                </Badge>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    {!imageError ? (
                      <img 
                        src="/images/mediapower.jpg" 
                        alt="Mohammed Nurudeen Bolarinwa - Mediapower" 
                        className="w-full h-full object-cover rounded-full"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                          MN
                        </div>
                        <div className="text-sm text-gray-600 font-medium">Mediapower</div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <span className="text-white font-bold text-lg lg:text-xl z-10 drop-shadow-lg text-center px-4">{project.title}</span>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
                </div>
                <CardHeader className="p-4 lg:p-6">
                  <CardTitle className="flex items-center justify-between text-gray-800 text-lg lg:text-xl">
                    <span className="truncate pr-2">{project.title}</span>
                    <div className="flex space-x-2 flex-shrink-0">
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-purple-100" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="View live project">
                          <ExternalLink className="h-4 w-4 text-purple-600" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-blue-100" asChild>
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
                        className="border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors text-xs"
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
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center p-4 lg:p-6">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${skillGroup.gradient} mb-4 mx-auto`}>
                    <div className="text-white">{skillGroup.icon}</div>
                  </div>
                  <CardTitle className="text-gray-800 text-lg lg:text-xl">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 lg:p-6 pt-0">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className={`bg-gradient-to-r ${skillGroup.gradient} text-white border-0 hover:scale-105 transition-transform cursor-default text-xs lg:text-sm`}
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
      <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {certificates.map((certificate, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm"
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
                        className="h-8 w-8 hover:bg-purple-100 group-hover:scale-110 transition-all" 
                        asChild
                      >
                        <a href={certificate.verificationUrl} target="_blank" rel="noopener noreferrer" title="View certificate">
                          <Eye className="h-4 w-4 text-purple-600" />
                        </a>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 hover:bg-blue-100 group-hover:scale-110 transition-all" 
                        asChild
                      >
                        <a href={certificate.image} target="_blank" rel="noopener noreferrer" title="Download certificate">
                          <Download className="h-4 w-4 text-blue-600" />
                        </a>
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
            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{certificates.length}</div>
              <div className="text-sm text-gray-600 font-medium">Certificates</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">15+</div>
              <div className="text-sm text-gray-600 font-medium">Skills Acquired</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">20+</div>
              <div className="text-sm text-gray-600 font-medium">Hours Learning</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">1</div>
              <div className="text-sm text-gray-600 font-medium">Professional Cert</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle className="text-white">Let's work together</CardTitle>
              <CardDescription className="text-purple-100">
                I'm always interested in hearing about new opportunities, interesting projects, and collaborations. Feel
                free to reach out if you'd like to discuss potential work or just want to connect!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Your Name" required className="border-purple-200 focus:border-purple-500" />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>
                </div>
                <div>
                  <Input placeholder="Subject" required className="border-purple-200 focus:border-purple-500" />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[120px] border-purple-200 focus:border-purple-500"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg"
                >
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-purple-100">
                <div className="text-center">
                  <p className="text-gray-600 mb-4 font-medium">Or reach me directly:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" className="border-purple-200 hover:bg-purple-50 text-purple-700" asChild>
                      <a href="mailto:mediapowers13@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        mediapowers13@gmail.com
                      </a>
                    </Button>
                    <Button variant="outline" className="border-purple-200 hover:bg-purple-50 text-purple-700" asChild>
                      <a href="mailto:nurudeenbolaman@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        nurudeenbolaman@gmail.com
                      </a>
                    </Button>
                    <Button variant="outline" className="border-blue-200 hover:bg-blue-50 text-blue-700" asChild>
                      <a href="https://github.com/mediapower13" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        mediapower13
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-purple-900 py-8 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-purple-200 mb-4 md:mb-0">© 2025 Mohammed Nurudeen Bolarinwa. All rights reserved.</div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white" asChild>
                <a href="https://github.com/mediapower13" target="_blank" rel="noopener noreferrer" title="Visit my GitHub profile">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white" asChild>
                <a href="mailto:mediapowers13@gmail.com" title="Send me an email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
