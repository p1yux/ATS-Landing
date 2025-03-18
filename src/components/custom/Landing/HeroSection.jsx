"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Clock, ChartBar, Brain } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {WorldMap} from '@/components/ui/world-map'

const HeroSection = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative pt-16 md:pt-0 min-h-screen w-full flex items-center bg-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-48 md:w-96 h-48 md:h-96 bg-violet-400/20 rounded-full filter blur-[80px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-10 md:left-20 w-36 md:w-72 h-36 md:h-72 bg-[#F8F8F9]/20 rounded-full filter blur-[80px]"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 left-1/4 md:left-1/3 w-32 md:w-64 h-32 md:h-64 bg-purple-300/20 rounded-full filter blur-[70px]"
        />
        
        <div className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.15) 1px, transparent 0)',
            backgroundSize: '20px 20px',
            '@media (min-width: 768px)': {
              backgroundSize: '40px 40px'
            }
          }}>
        </div>
        
        {/* WorldMap positioned as background - hidden on mobile */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pt-10 z-0 opacity-50">
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container relative z-10 mx-auto px-4 py-8 md:py-16 lg:pt-20">
        <div className="flex flex-col items-center justify-between max-w-7xl mx-auto gap-6 md:gap-8 lg:gap-16">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full space-y-4 md:space-y-6 lg:space-y-8 text-center"
          >
            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-3 md:space-y-4 lg:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-center">
                <span className="text-[#25272A]">Talent Intellegence Platform</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-xl text-gray-600 leading-relaxed text-center max-w-2xl mx-auto px-4">
                Recruiters talk to your data and make hiring deciosns - World's first Recruiter Agents{' '}
                Your peronalized Digital recruiter can automate your tasks.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="flex justify-center gap-4">
              <Button 
                size="lg" 
                className="h-12 md:h-14 px-6 md:px-8 bg-[#25272A] hover:bg-[#404348] text-white rounded-lg shadow-sm transition-all duration-300 text-base md:text-lg font-medium flex items-center gap-2 md:gap-3"
                onClick={() => window.open('https://calendly.com/aryanjainak/30min', '_blank')}
              >
                Get Started For Free
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4 pt-4 max-w-4xl mx-auto"
            >
              {[
                { icon: Clock, label: "Hiring Speed", value: "3x Faster" },
                { icon: Users, label: "Response Rate", value: "85% Better" },
                { icon: CheckCircle, label: "Candidate Analysis", value: "95% Accurate" },
                { icon: ChartBar, label: "Candidate Quality", value: "2x Better" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="flex items-start space-x-2 md:space-x-3 p-3 md:p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-1.5 md:p-2 rounded-lg bg-[#F8F8F9]">
                    <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-[#25272A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#25272A] text-sm md:text-base">{stat.value}</p>
                    <p className="text-xs md:text-sm text-[#6B7280]">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
