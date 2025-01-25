"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { User, CheckCircle, Brain, Sparkles, ChartBar, Clock } from 'lucide-react';

const headlines = [
  {
    main: "Find & Hire the Best",
    sub: "With AI-Powered Magic"
  },
  {
    main: "Transform Recruitment",
    sub: "With Smart Technology"
  },
  {
    main: "Hire Smarter",
    sub: "With AI Matching"
  },
  {
    main: "Future of Hiring",
    sub: "Is Here Today"
  }
];

const HeroSection = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-1rem)] w-full flex items-center bg-gradient-to-b from-gray-50 to-white overflow-hidden pt-20">
      {/* Keynote Style Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
      </div>

      {/* 3D Grid Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      </div>

      {/* Main Content Container */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          {/* Text Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 lg:flex-auto">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20 text-sm font-medium text-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  ✦
                </motion.span>
                Introducing Next-Gen Recruitment
              </motion.span>
            </motion.div>

            {/* Headlines */}
            <div className="mt-10">
              <h1 className="relative inline-block">
                <div className="flex flex-col -space-y-1">
                  <motion.span 
                    key={headlines[currentHeadline].main}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-gray-900 tracking-tight"
                  >
                    {headlines[currentHeadline].main}
                  </motion.span>
                  <motion.span 
                    key={headlines[currentHeadline].sub}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent"
                  >
                    {headlines[currentHeadline].sub}
                  </motion.span>
                </div>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Say goodbye to endless resume screening. Our AI helps you 
                <span className="text-blue-600 font-medium"> find perfect candidates in minutes</span>, not months.
              </p>

              <div className="mt-8 flex items-center gap-x-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="h-14 px-10 bg-blue-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:bg-blue-700 transition-all duration-300 text-lg font-medium"
                  >
                    Schedule Demo
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* 3D Visual Element */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative isolate"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl blur opacity-20 transition group-hover:opacity-30" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-violet-50 opacity-50" />
                <div className="p-8 relative">
                  {/* AI Recruitment Process Visualization */}
                  <div className="h-full flex flex-col space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Brain className="w-6 h-6 text-blue-600" />
                        <span className="font-semibold text-gray-900">AI Recruitment Process</span>
                      </div>
                      <motion.div
                        animate={{ rotate: isHovered ? 360 : 0 }}
                        transition={{ duration: 1 }}
                      >
                        <Sparkles className="w-6 h-6 text-violet-600" />
                      </motion.div>
                    </div>

                    {/* Process Steps */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: User, title: "Profile Analysis", value: "98% Accuracy" },
                        { icon: CheckCircle, title: "Smart Matching", value: "85% Faster" },
                        { icon: ChartBar, title: "Skill Assessment", value: "90% Better" },
                        { icon: Clock, title: "Time Saved", value: "75% Reduced" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex flex-col space-y-2">
                            <item.icon className="w-5 h-5 text-blue-600" />
                            <h3 className="font-medium text-gray-900">{item.title}</h3>
                            <p className="text-sm text-blue-600 font-semibold">{item.value}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Live Stats */}
                    <motion.div 
                      className="mt-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100"
                      animate={{ scale: isHovered ? 1.02 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Live Processing</span>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-green-500"
                        />
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-gray-200 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
                          initial={{ width: "0%" }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
