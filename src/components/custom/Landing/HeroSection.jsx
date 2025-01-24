"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            scale: [0.8, 1, 0.8],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-violet-200/40 rounded-full blur-2xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 0.8, 1],
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-100/40 to-blue-200/40 rounded-full blur-2xl"
        />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 text-sm font-medium text-blue-600"
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

            {/* Main Content */}
            <div className="text-center w-full relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mx-auto"
              >
                <div className="flex flex-col items-center justify-center">
                  <h1 className="relative inline-block">
                    <div className="flex flex-col -space-y-1">
                      <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-gray-900">
                        Find & Hire the Best
                      </span>
                      <div className="flex items-center justify-center">
                        <motion.span 
                          className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent inline-block"
                          animate={{ 
                            backgroundPosition: ['0%', '100%', '0%'],
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          style={{ backgroundSize: '200% auto' }}
                        >
                          With AI-Powered Magic
                        </motion.span>
                      </div>
                    </div>
                  </h1>
                  
                  {/* Subtle gradient glow effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-violet-100/20 via-blue-100/20 to-violet-100/20 blur-3xl -z-10 rounded-[100%]" 
                    style={{ transform: 'translateY(-10%)' }}
                  />
                  
                  <p className="text-base md:text-lg text-gray-600 max-w-xl mt-6 relative z-10">
                    Say goodbye to endless resume screening. Our AI helps you 
                    <span className="text-blue-600 font-medium"> find perfect candidates in minutes</span>, not months.
                  </p>

                  {/* Quick Stats */}
                  <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="text-blue-600">✓</span> 85% Faster Hiring
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-blue-600">✓</span> 90% Better Matches
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-blue-600">✓</span> AI-Powered Insights
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="h-14 px-10 bg-gray-900 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-medium"
                  >
                    Schedule Demo
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            >
              {[
                {
                  title: 'Lightning Fast',
                  description: '85% reduction in hiring time',
                  icon: '⚡',
                  color: 'from-yellow-500/20 to-orange-500/20'
                },
                {
                  title: 'AI-Powered Match',
                  description: 'Perfect candidate alignment',
                  icon: '🎯',
                  color: 'from-blue-500/20 to-violet-500/20'
                },
                {
                  title: 'Smart Analytics',
                  description: 'Data-driven decisions',
                  icon: '📊',
                  color: 'from-green-500/20 to-emerald-500/20'
                },
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                       style={{ background: `linear-gradient(to bottom right, ${feature.color})` }}
                  />
                  <div className="relative p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                        {feature.icon}
                      </span>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
