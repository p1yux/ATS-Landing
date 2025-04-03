"use client";
import React, { useState } from 'react';
import NavBar from "@/components/custom/Navigation/NavBar";
import Footer from "@/components/custom/Navigation/Footer";
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, User, Edit2, Download, CheckCircle, ArrowRight, Building, Network, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function ClairePage() {
  const [activeTab, setActiveTab] = useState('guide');

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 w-full overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient blobs */}
          <div className="absolute top-20 right-10 w-60 md:w-80 h-60 md:h-80 bg-yellow-400/10 rounded-full filter blur-[80px]" />
          <div className="absolute -bottom-20 left-10 w-60 md:w-80 h-60 md:h-80 bg-yellow-400/10 rounded-full filter blur-[80px]" />
          <div className="absolute top-40 left-1/4 w-40 h-40 bg-yellow-400/5 rounded-full filter blur-[60px]" />
          
          {/* Modern dotted pattern */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(circle at center, #c9a227 1px, transparent 1px),
                radial-gradient(circle at center, #c9a227 0.5px, transparent 0.5px)
              `,
              backgroundSize: '40px 40px, 30px 30px',
              backgroundPosition: '0 0, 20px 20px',
              opacity: 0.05
            }}>
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, index) => (
              <motion.div 
                key={index}
                className="absolute w-2 h-2 rounded-full bg-yellow-500/20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:w-1/2 text-left"
              >
                {/* Tag line */}
                <span className="inline-block bg-yellow-900/30 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-medium border border-yellow-800/50 shadow-sm mb-6">
                  ✨ A Smarter Way to Get Hired
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">Your Personal</span>
                  <br />
                  <span className="text-white relative inline-block">
                    Career Assistant
                    <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full w-24"></span>
                  </span>
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed max-w-lg mt-6 mb-8">
                  Tired of applying for jobs and getting no response? Claire helps you build your profile, enhance your resume, and prepare for interviews
                  with AI-powered guidance tailored to your career goals.
                </p>

                <Button 
                  size="lg" 
                  className="bg-yellow-600 hover:bg-yellow-700 text-black font-medium px-8 h-12 rounded-lg shadow-md transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">Join The Platform</span>
                  <ArrowRight className="ml-2 relative z-10 w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:w-1/2"
              >
                <div className="relative">
                  {/* <div className="absolute -top-10 -left-10 w-24 h-24 bg-yellow-900/30 rounded-lg shadow-lg flex items-center justify-center z-10 transform rotate-12">
                    <MessageSquare className="w-10 h-10 text-yellow-400" />
                  </div> */}
                  <div className="relative z-0 rounded-2xl overflow-hidden border-4 border-yellow-900/30 shadow-2xl">
                    <video
                      src="/images/claire/hero.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  {/* <div className="absolute -bottom-8 -right-8 bg-yellow-900/30 backdrop-blur-sm rounded-lg shadow-lg p-4 z-10 border border-yellow-800/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-yellow-900/50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-yellow-300">85% Better</p>
                        <p className="text-xs text-yellow-200/60">Response Rate</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-16 bg-black/50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block text-yellow-400">
                Career Development Tools
                {/* <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span> */}
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto">
                Explore our comprehensive suite of tools designed to accelerate your career growth
              </p>
            </div>
          
            {/* Tabs Navigation - Modern Pill Style */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                { id: 'guide', label: 'AI Career Guide', icon: MessageSquare },
                { id: 'profile', label: 'Candidate Profile', icon: User },
                { id: 'resume', label: 'Resume Builder', icon: FileText },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-yellow-600 to-yellow-800 text-white shadow-md' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab Content - Modern Design without Cards */}
            <div>
              {/* AI Career Guide */}
              {activeTab === 'guide' && (
                <div className="md:px-6">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <span className="inline-block bg-yellow-900/30 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium mb-4">
                        AI-POWERED GUIDANCE
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Your Personal Career Coach
                      </h2>
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        Claire analyzes your skills, experience, and career goals to provide 
                        personalized guidance and support throughout your job search journey.
                      </p>
                      <div className="space-y-5 mb-10">
                        {[
                          "Get answers to your career questions 24/7",
                          "Receive personalized job search strategies",
                          "Practice interviews with AI simulation",
                          "Get feedback on application materials"
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3 group">
                            <div className="h-6 w-6 rounded-full bg-yellow-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-600 transition-colors duration-300">
                              <CheckCircle className="w-3.5 h-3.5 text-yellow-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-500 hover:to-yellow-700 text-white px-8 rounded-md">
                        Start Chatting with Claire
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-gray-900 to-black p-1 border border-yellow-900/20">
                        <div className="rounded-xl overflow-hidden w-full h-full">
                          <Image
                            src="/images/claire/guid.jpeg"
                            alt="AI Career Assistant"
                            width={600}
                            height={400}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        </div>
                      </div>
                      <div className="absolute -bottom-6 right-8 backdrop-blur-md bg-black/60 rounded-xl shadow-sm p-4 max-w-xs border border-yellow-900/30">
                        <div className="flex items-start gap-3">
                          <div className="mt-1">
                            <MessageSquare className="w-5 h-5 text-yellow-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-yellow-300">Claire says:</p>
                            <p className="text-xs text-gray-300">
                              "How can I help with your career goals today?"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Candidate Profile */}
              {activeTab === 'profile' && (
                <div className="md:px-6">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <span className="inline-block bg-yellow-900/30 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium mb-4">
                        PROFESSIONAL PRESENCE
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Stand Out With Your Profile
                      </h2>
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        Create a comprehensive profile that showcases your skills, experience, and career
                        aspirations to potential employers. Claire will help optimize your profile
                        for maximum visibility.
                      </p>
                      <div className="space-y-5 mb-10">
                        {[
                          "Highlight your key skills and expertise",
                          "Showcase your professional experience",
                          "Display educational background and certifications",
                          "Set your career preferences and goals"
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3 group">
                            <div className="h-6 w-6 rounded-full bg-yellow-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-600 transition-colors duration-300">
                              <CheckCircle className="w-3.5 h-3.5 text-yellow-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-500 hover:to-yellow-700 text-white px-8 rounded-md">
                        Create Your Profile
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="w-full aspect-video bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 flex items-center justify-center border border-yellow-900/20">
                        <div className="relative z-10 text-center space-y-4">
                          <div className="mx-auto w-20 h-20 bg-yellow-900/30 rounded-full shadow-sm flex items-center justify-center">
                            <User className="w-10 h-10 text-yellow-400" />
                          </div>
                          <h3 className="text-xl font-medium text-yellow-300">Your Profile</h3>
                          <div className="max-w-xs mx-auto">
                            <p className="text-sm text-gray-300 mb-4">
                              Create your candidate profile to showcase your professional experience
                            </p>
                          </div>
                          <Button variant="outline" className="gap-2 border-yellow-900/50 text-yellow-400">
                            <Edit2 className="w-4 h-4" />
                            Start Building
                          </Button>
                        </div>
                        
                        {/* Background Elements */}
                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-900/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/4"></div>
                          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-yellow-900/20 to-transparent rounded-full translate-y-1/2 -translate-x-1/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Resume Builder */}
              {activeTab === 'resume' && (
                <div className="md:px-6">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <span className="inline-block bg-yellow-900/30 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium mb-4">
                        DOCUMENT CREATION
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Craft the Perfect Resume
                      </h2>
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        Create a standout resume with Claire's intelligent assistance. Our AI will help you
                        highlight your strengths, optimize your content, and tailor your resume for 
                        specific job applications.
                      </p>
                      <div className="space-y-5 mb-10">
                        {[
                          "Select from professional templates",
                          "Receive AI-powered content suggestions",
                          "Customize for different job applications",
                          "Download in multiple formats (PDF, DOCX)"
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3 group">
                            <div className="h-6 w-6 rounded-full bg-yellow-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-600 transition-colors duration-300">
                              <CheckCircle className="w-3.5 h-3.5 text-yellow-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-500 hover:to-yellow-700 text-white px-8 rounded-md">
                        Build Your Resume
                      </Button>
                    </div>
                    <div className="relative aspect-video">
                      <div className="absolute -inset-10 z-0">
                        <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-yellow-900/10"></div>
                        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-yellow-900/10"></div>
                      </div>
                      <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="bg-gray-900 shadow-md rounded-lg p-6 w-2/3 h-4/5 transform rotate-3 transition-transform duration-500 hover:rotate-0 border border-yellow-900/30">
                          <div className="w-1/2 h-2 bg-yellow-700/50 rounded mb-4"></div>
                          <div className="w-full h-1 bg-gray-700 rounded mb-3"></div>
                          <div className="w-full h-1 bg-gray-700 rounded mb-3"></div>
                          <div className="w-3/4 h-1 bg-gray-700 rounded mb-6"></div>
                          
                          <div className="w-1/3 h-2 bg-yellow-700/50 rounded mb-4"></div>
                          <div className="w-full h-1 bg-gray-700 rounded mb-3"></div>
                          <div className="w-full h-1 bg-gray-700 rounded mb-3"></div>
                          <div className="w-5/6 h-1 bg-gray-700 rounded mb-6"></div>
                          
                          <div className="w-1/3 h-2 bg-yellow-700/50 rounded mb-4"></div>
                          <div className="w-full h-1 bg-gray-700 rounded mb-3"></div>
                          <div className="w-2/3 h-1 bg-gray-700 rounded"></div>
                          
                          <div className="absolute bottom-4 right-4">
                            <div className="bg-yellow-900/30 rounded-full p-2">
                              <Download className="w-4 h-4 text-yellow-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Section - Modern Redesign */}
      <section className="py-20 bg-[#0c0c0c] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block bg-yellow-900/30 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-4">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
                Tired of Applying for Jobs and Getting No Response?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto text-center leading-relaxed">
              Many skilled professionals spend months applying for jobs, only to face constant 
              rejection or silence. Traditional hiring platforms are dominated by large corporations that 
              receive thousands of applications per role, making it nearly impossible to get noticed.
            </p>
            
            <div className="mb-16 text-center">
              <h3 className="inline-block text-2xl font-bold py-2 px-6 bg-yellow-600 text-black rounded-lg">
                Claire Changes the Game
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
              {[
                {
                  icon: User,
                  title: "Get Discovered",
                  description: "Create your profile once and let employers come to you. Claire optimizes your visibility to recruiters.",
                },
                {
                  icon: CheckCircle,
                  title: "No More Guesswork",
                  description: "Our AI-powered matching connects you with jobs that align with your skills and experience.",
                },
                {
                  icon: Network,
                  title: "Grow Your Network",
                  description: "Connect with hiring managers through personalized introductions and networking suggestions.",
                },
                {
                  icon: BookOpen,
                  title: "Free Career Resources",
                  description: "Access training, soft skills development, resume building, and industry insights.",
                },
                {
                  icon: Building,
                  title: "Employer Connections",
                  description: "Get direct connections to employers actively looking for candidates with your skillset.",
                },
                {
                  icon: MessageSquare,
                  title: "AI Interview Preparation",
                  description: "Practice with Claire's AI interview simulator tailored to your target roles.",
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-600 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-yellow-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-yellow-300 group-hover:text-yellow-400 transition-colors">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-900/10 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-900/10 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* About Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                About Claire
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Your AI-powered career companion designed to help candidates put their best foot forward
              </p>
            </div>
            
            {/* About Content */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-6 rounded-2xl bg-gray-900/80 border border-yellow-900/30 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Our Mission</h3>
                <p className="text-gray-300 mb-4">
                  Claire was built with a simple mission: to help candidates navigate the complex world of job searching and stand out from the competition.
                </p>
                <p className="text-gray-300">
                  We believe everyone deserves access to tools that help them present their best selves to potential employers, regardless of their background or experience level.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-gray-900/80 border border-yellow-900/30 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">How Claire Works</h3>
                <ul className="space-y-3">
                  {[
                    "Advanced AI analyzes your skills and experience",
                    "Personalized feedback on your resume and application materials",
                    "Interactive mock interviews with real-time feedback",
                    "Career guidance tailored to your specific goals",
                    "Continuous learning to improve your job search strategy"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1 text-yellow-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Team or Values */}
            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-yellow-900/30">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Our Values</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Accessibility",
                    description: "Career tools should be available to everyone, regardless of background or experience level."
                  },
                  {
                    title: "Empowerment",
                    description: "We give candidates the knowledge and confidence to take control of their job search."
                  },
                  {
                    title: "Innovation",
                    description: "Our AI-driven approach constantly evolves to stay ahead of hiring trends and technologies."
                  }
                ].map((value, i) => (
                  <div key={i} className="text-center p-6">
                    <h4 className="text-lg font-semibold mb-3 text-yellow-400">{value.title}</h4>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      {/* <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block">
              Success Stories
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-[#25272A] rounded-full w-24"></span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center z-10">
                  <span className="text-4xl text-[#25272A]">"</span>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative z-0">
                  <p className="text-lg text-gray-600 mb-6 italic">
                    I came with over 10 years of experience in software development, but I struggled to even get interviews. 
                    Through Claire, I got connected with TechVision, and within weeks, I was hired as a Senior Developer. 
                    Today, I'm leading a major project. Without Claire, I might still be sending out applications and waiting for a response.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                      <Image
                        src="/images/testimonial-1.jpg"
                        alt="Michael"
                        width={50}
                        height={50}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Michael Chen</p>
                      <p className="text-sm text-gray-500">Senior Developer at TechVision</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative mt-10 md:mt-20">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center z-10">
                  <span className="text-4xl text-[#25272A]">"</span>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative z-0">
                  <p className="text-lg text-gray-600 mb-6 italic">
                    Claire's AI interview practice helped me prepare for questions I never thought would come up. 
                    The personalized feedback on my responses was invaluable. I felt much more confident during 
                    my actual interviews, and I'm happy to say I landed my dream job!
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                      <Image
                        src="/images/testimonial-2.jpg"
                        alt="Sarah"
                        width={50}
                        height={50}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">UX Designer at CreativeMinds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Community Partners */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
              Our Employer Partners
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-[#25272A] rounded-full w-24"></span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="h-20 w-40 bg-gray-100 rounded-lg flex items-center justify-center p-4">
                  <div className="text-gray-400 font-semibold">Partner {num}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <Button 
                className="bg-[#25272A] hover:bg-gray-800 text-white px-6"
              >
                Join Our Network
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Call to Action */}
      {/* <section className="py-16 bg-gradient-to-r from-[#25272A] to-[#464A4F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(circle at center, #fff 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
              backgroundPosition: '0 0'
            }}>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of job seekers who are using Claire to navigate their career journey and land their dream jobs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#25272A] hover:bg-gray-100">
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section id="faq" className="w-full py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* FAQ Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Everything you need to know about Claire and how it can help you in your job search
              </p>
            </div>
            
            {/* FAQ Items */}
            <div className="space-y-6">
              {[
                {
                  question: "What is Claire?",
                  answer: "Claire is an AI-powered career companion designed to help job seekers optimize their resumes, prepare for interviews, and present themselves in the best possible light to potential employers."
                },
                {
                  question: "Is Claire free to use?",
                  answer: "Claire offers both free and premium features. Basic resume analysis and job search guidance are available for free, while advanced features like personalized coaching and mock interviews are part of our premium plan."
                },
                {
                  question: "How does Claire's AI work?",
                  answer: "Claire uses advanced natural language processing and machine learning to analyze your resume, job descriptions, and interview responses. It compares your materials against industry standards and provides tailored recommendations for improvement."
                },
                {
                  question: "Can Claire help me with specific industries?",
                  answer: "Yes! Claire is trained on data from a wide range of industries and job types. Whether you're in tech, healthcare, finance, or creative fields, Claire can provide relevant guidance tailored to your industry's expectations."
                },
                {
                  question: "How secure is my data with Claire?",
                  answer: "We take data security very seriously. All personal information is encrypted, and we never share your data with third parties without your explicit permission. You can delete your data at any time from your account settings."
                },
                {
                  question: "Can Claire write my resume for me?",
                  answer: "While Claire can't write your entire resume from scratch, it can provide specific suggestions for improvements, help you highlight relevant skills, and optimize your content to better match job descriptions you're targeting."
                }
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gray-900/80 border border-yellow-900/30 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-6">Still have questions?</p>
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-medium rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl" onClick={() => window.location.href = 'https://calendly.com/aryanjainak/'} target="_blank">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for job opportunities, career tips, and updates on Claire's new features.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Button className="bg-[#25272A] hover:bg-gray-800 text-white whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      
      <Footer />
    </main>
  );
} 