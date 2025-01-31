"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Clock, ChartBar, Brain } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center bg-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-violet-400/20 rounded-full filter blur-[80px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-40 left-20 w-72 h-72 bg-[#F8F8F9]/20 rounded-full filter blur-[80px]"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-40 left-1/3 w-64 h-64 bg-purple-300/20 rounded-full filter blur-[70px]"
        />
        
        <div className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container relative z-10 mx-auto px-4 pt-32 lg:pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8 lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-6 lg:space-y-8 max-w-xl lg:max-w-none lg:pr-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#F8F8F9] border border-[#E5E7EB]">
                <Brain className="w-4 h-4 mr-2 text-[#25272A]" />
                <span className="text-sm font-medium text-[#25272A]">Smart Recruiting Platform</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-center lg:text-left">
                <span className="text-[#25272A]">Revolutionize Your</span>{' '}
                <span className="text-[#25272A]">Recruitment</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed text-center lg:text-left">
                Streamline your hiring with intelligent automation. Find better candidates{' '}
                <span className="text-[#25272A] font-semibold">3x faster</span> while building meaningful connections through data-driven insights.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-4">
              <Button 
                size="lg" 
                className="h-14 px-8 bg-[#25272A] hover:bg-[#404348] text-white rounded-lg shadow-sm transition-all duration-300 text-lg font-medium flex items-center gap-3"
                onClick={() => window.open('https://hiremode-ats.vercel.app', '_blank')}
              >
                Get Started For Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 pt-4"
            >
              {[
                { icon: Clock, label: "Hiring Speed", value: "3x Faster" },
                { icon: Users, label: "Response Rate", value: "85% Better" },
                { icon: CheckCircle, label: "Placement Rate", value: "95% Success" },
                { icon: ChartBar, label: "Candidate Quality", value: "2x Better" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-[#F8F8F9]">
                    <stat.icon className="w-5 h-5 text-[#25272A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#25272A]">{stat.value}</p>
                    <p className="text-sm text-[#6B7280]">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 w-full max-w-md lg:max-w-none relative mt-8 lg:mt-0"
          >
            <div className="relative w-full aspect-[4/3] px-4 lg:px-0">
              <Image
                src="/images/herosection.jpeg"
                alt="AI Recruitment Platform"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="eager"
                quality={85}
              />
              
              {/* Floating UI Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 p-4 rounded-xl bg-white shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#F8F8F9] flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#25272A]" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-gray-900">New Match</div>
                    <div className="text-xs text-gray-500">Perfect candidate found</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 p-3 rounded-xl bg-[#F8F8F9] shadow-lg"
              >
                <CheckCircle className="w-6 h-6 text-[#25272A]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
