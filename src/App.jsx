import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Calendar,
  Code,
  Database,
  Cloud,
  Palette,
  Monitor,
  Server,
  ChevronDown,
  ExternalLink,
  Download,
  Menu,
  X
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['hero', 'about', 'experience', 'skills', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    frontend: [
      'React.js', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 
      'HTML5', 'CSS3', 'Tailwind CSS', 'SASS', 'Bootstrap'
    ],
    backend: [
      'Node.js', 'Express.js', 'Python', 'Java', 'Spring', 'GraphQL', 
      'REST APIs', 'Docker', 'Kubernetes'
    ],
    database: [
      'MongoDB', 'PostgreSQL', 'MySQL', 'Redis'
    ],
    cloud: [
      'AWS (S3, EC2, Lambda)', 'Azure', 'CloudFront', 'Docker'
    ],
    tools: [
      'Git', 'Webpack', 'Gulp', 'Grunt', 'JIRA', 'Figma', 'Jest', 'Karma'
    ]
  }

  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'JC Penney',
      location: 'Plano, Texas',
      period: '05/2023 – Present',
      description: 'Leading full-stack development with React, Next.js, and Node.js. Implemented microservice architecture and optimized applications for maximum performance.',
      highlights: [
        'Designed scalable frontend components using React and Next.js',
        'Implemented frontend microservice architecture',
        'Built RESTful APIs with Node.js and Express.js',
        'Collaborated with product managers using Figma for UI/UX design'
      ]
    },
    {
      title: 'Senior Software Developer',
      company: 'Toyota Financial Services',
      location: 'Plano, Texas',
      period: '05/2021 – 05/2023',
      description: 'Developed high-performance web and mobile applications using React, Next.js, and React Native. Enhanced application performance with modern optimization techniques.',
      highlights: [
        'Built Progressive Web Applications (PWAs)',
        'Developed cross-platform mobile apps with React Native',
        'Implemented authentication with JWT and OAuth2',
        'Deployed applications using AWS services'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Cisco Systems',
      location: 'San Francisco, California',
      period: '11/2019 – 03/2021',
      description: 'Designed GraphQL APIs and built accessible web applications with React. Focused on performance optimization and cross-browser compatibility.',
      highlights: [
        'Developed scalable GraphQL APIs with TypeGraphQL',
        'Created reusable UI components with Storybook',
        'Optimized performance with lazy loading and efficient resource management',
        'Resolved cross-browser compatibility issues'
      ]
    }
  ]

  return (
    <div className="min-h-screen hero-bg">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/logo.png" 
                alt="Priyanka Reddy Logo" 
                className="h-10 w-auto"
              />
              <div className="text-2xl font-bold elegant-gradient name-font">
                Priyanka Reddy
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-700 nav-accent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-2 space-y-1">
                {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-gray-700 nav-accent"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 name-font">
              <span className="elegant-gradient">
                Priyanka Sudhakar Reddy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Full Stack Developer with 11+ years of experience
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Passionate about building scalable, high-performance web and mobile applications 
              using modern technologies like React, Node.js, and cloud platforms.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-white hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('experience')}
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ChevronDown className="h-8 w-8 mx-auto text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced Full Stack Developer with over 11 years of expertise in building scalable, 
              high-performance web and mobile applications for retail and banking industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 accent-teal" />
                    <span>priyankasudhakarreddy@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 accent-teal" />
                    <span>+1 (510) 556-7849</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 accent-teal" />
                    <a 
                      href="https://www.linkedin.com/in/priyankasreddy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="accent-teal hover:accent-orange transition-colors"
                    >
                      linkedin.com/in/priyankasreddy
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 accent-teal" />
                    <span>Texas, United States</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-600 leading-relaxed">
                I specialize in modern frameworks and technologies including ReactJS, NextJS, 
                AngularJS, NodeJS, and cloud platforms. My expertise spans from creating 
                responsive, user-centric designs to building robust backend systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Throughout my career, I've successfully delivered solutions for major companies 
                like JC Penney, Toyota Financial Services, and Cisco Systems, always focusing 
                on performance, scalability, and user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">11+ Years Experience</Badge>
                <Badge variant="secondary">Full Stack Development</Badge>
                <Badge variant="secondary">Team Leadership</Badge>
                <Badge variant="secondary">Agile Methodologies</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600">
              A journey through my career in software development
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl accent-teal">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-gray-700">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-gray-500">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 mt-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="h-5 w-5 accent-teal" />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5 accent-orange" />
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 accent-red" />
                    Database
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.database.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 accent-orange" />
                    Cloud & DevOps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 accent-red" />
                    Tools & Others
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600">
              Ready to bring your ideas to life? Let's connect and discuss your next project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 accent-teal" />
                        <a 
                          href="mailto:priyankasudhakarreddy@gmail.com"
                          className="accent-teal hover:accent-orange transition-colors"
                        >
                          priyankasudhakarreddy@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 accent-teal" />
                        <a 
                          href="tel:+15105567849"
                          className="accent-teal hover:accent-orange transition-colors"
                        >
                          +1 (510) 556-7849
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 accent-teal" />
                        <a 
                          href="https://www.linkedin.com/in/priyankasreddy" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="accent-teal hover:accent-orange transition-colors flex items-center gap-1"
                        >
                          LinkedIn Profile
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">What I Can Help With</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Full Stack Web Development</li>
                      <li>• Mobile App Development</li>
                      <li>• System Architecture & Design</li>
                      <li>• Performance Optimization</li>
                      <li>• Team Leadership & Mentoring</li>
                      <li>• Technical Consulting</li>
                    </ul>
                  </div>
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    I'm always interested in new opportunities and exciting projects.
                  </p>
                  <Button 
                    size="lg"
                    className="btn-primary text-white hover:shadow-lg transition-all duration-300"
                    onClick={() => window.open('mailto:priyankasudhakarreddy@gmail.com', '_blank')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Priyanka Sudhakar Reddy. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

