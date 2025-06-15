"use client"

import type React from "react"

import { useState } from "react"
import { Github, Mail, ExternalLink, Download, Menu, X, MapPin, GraduationCap, Code, Palette, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, product catalog, shopping cart, and secure payment processing.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/mediapowers13",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features for improved productivity.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/mediapowers13",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "University Portal Clone",
      description:
        "A student portal system inspired by university management systems, featuring course registration, grade tracking, and academic calendar integration.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Firebase", "Material-UI", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/mediapowers13",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that displays current conditions and forecasts with beautiful data visualizations and location-based services.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "https://github.com/mediapowers13",
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
      category: "Backend",
      items: ["Node.js", "Express.js", "Python", "PHP", "MySQL", "MongoDB", "PostgreSQL", "Firebase"],
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-green-500 to-teal-600",
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Docker", "Vercel", "Netlify"],
      icon: <Palette className="h-6 w-6" />,
      gradient: "from-orange-500 to-pink-600",
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
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="inline-block p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Mohammed Nurudeen Bolarinwa
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto font-medium">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Software Developer & Computer Science Student
              </span>
            </p>
            <div className="flex items-center justify-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Federal University of Ilorin</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="font-medium">Ilorin, Nigeria</span>
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Passionate about creating innovative web solutions and building user-friendly applications that solve
              real-world problems with beautiful, modern designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg"
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
                className="w-full sm:w-auto border-2 border-purple-200 hover:bg-purple-50 shadow-lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/60 backdrop-blur-sm hover:bg-white/80 shadow-lg"
                asChild
              >
                <a href="https://github.com/mediapowers13" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 text-gray-700" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/60 backdrop-blur-sm hover:bg-white/80 shadow-lg"
                asChild
              >
                <a href="mailto:nurudeenbolaman@gmail.com">
                  <Mail className="h-5 w-5 text-gray-700" />
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
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm Mohammed Nurudeen Bolarinwa, a dedicated Computer Science student at the Federal University of
                Ilorin with a passion for software development. I specialize in building modern web applications using
                cutting-edge technologies.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My journey in software development has equipped me with strong problem-solving skills and the ability to
                work with various programming languages and frameworks. I'm always eager to learn new technologies and
                take on challenging projects that push my boundaries.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When I'm not coding, I enjoy contributing to open-source projects, participating in coding competitions,
                and sharing knowledge with fellow developers in the tech community.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2">
                  Problem Solver
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2">
                  Team Collaborator
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-4 py-2">
                  Continuous Learner
                </Badge>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2">
                  Open Source Contributor
                </Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                        MN
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Software Developer</div>
                    </div>
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
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <span className="text-white font-bold text-xl z-10 drop-shadow-lg">{project.title}</span>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-gray-800">
                    {project.title}
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-purple-100" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 text-purple-600" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-blue-100" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 text-blue-600" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors"
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
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${skillGroup.gradient} mb-4 mx-auto`}>
                    <div className="text-white">{skillGroup.icon}</div>
                  </div>
                  <CardTitle className="text-gray-800">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className={`bg-gradient-to-r ${skillGroup.gradient} text-white border-0 hover:scale-105 transition-transform cursor-default`}
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
                      <a href="mailto:nurudeenbolaman@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        nurudeenbolaman@gmail.com
                      </a>
                    </Button>
                    <Button variant="outline" className="border-blue-200 hover:bg-blue-50 text-blue-700" asChild>
                      <a href="https://github.com/mediapowers13" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        mediapowers13
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
                <a href="https://github.com/mediapowers13" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white" asChild>
                <a href="mailto:nurudeenbolaman@gmail.com">
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
