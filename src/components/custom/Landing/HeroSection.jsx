"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Clock, ChartBar } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { motion } from 'framer-motion';

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 w-full bg-white overflow-hidden mt-3">
      {/* Modern dotted background */}
      <div className="absolute inset-0">
        {/* Gradient blobs */}
        <div className="absolute top-20 right-10 w-60 md:w-80 h-60 md:h-80 bg-violet-400/20 rounded-full filter blur-[80px]" />
        <div className="absolute -bottom-20 left-10 w-60 md:w-80 h-60 md:h-80 bg-blue-400/20 rounded-full filter blur-[80px]" />
        
        {/* Modern dotted pattern */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at center, #6366f1 1px, transparent 1px),
              radial-gradient(circle at center, #8b5cf6 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 30px 30px',
            backgroundPosition: '0 0, 20px 20px',
            opacity: 0.08
          }}>
        </div>
        
        {/* Additional subtle line pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), 
                             linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}>
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Text Content */}
          <div className="text-center mb-10">
            {/* Tag line */}
            <div className="mb-6 flex justify-center">
              <span className="inline-block bg-[#F8F8F9] text-[#25272A] px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                🚀 World's First Recruiter Agents
              </span>
            </div>
            
            {/* Headline */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center leading-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#25272A] via-purple-800 to-purple-700">Talent Intelligence</span>
                <br />
                <span className="text-[#25272A] relative">
                  Platform
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-600 rounded-full"></span>
                </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-xl text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mt-8">
                Talk to your data and make smarter hiring decisions. 
                Your personalized digital recruiter automates tasks while delivering superior candidates.
              </p>
            </div>

            {/* CTA Button - Ensuring it's centered */}
            <div className="mb-12 flex justify-center">
              <Button 
                size="lg" 
                className="h-12 md:h-14 px-6 md:px-8 bg-[#25272A] hover:bg-gray-700 text-white rounded-lg shadow-md transition-all duration-300 text-base md:text-lg font-medium flex items-center gap-2 md:gap-3 relative overflow-hidden group"
                onClick={() => window.open('https://calendly.com/aryanjainak/30min', '_blank')}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Get Started For Free</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Video Player */}
          <div className="w-full max-w-6xl mx-auto mb-16">
            <div className="relative px-4 md:px-0">
              <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/8NoDeGIvlW0"
                thumbnailSrc="https://img.youtube.com/vi/8NoDeGIvlW0/maxresdefault.jpg"
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {[
              { icon: Clock, label: "Hiring Speed", value: "3x Faster" },
              { icon: Users, label: "Response Rate", value: "85% Better" },
              { icon: CheckCircle, label: "Candidate Analysis", value: "95% Accurate" },
              { icon: ChartBar, label: "Candidate Quality", value: "2x Better" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 md:p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-2 md:p-3 rounded-lg bg-[#F8F8F9] mb-2 md:mb-3">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                </div>
                <p className="font-bold text-[#25272A] text-base md:text-lg">{stat.value}</p>
                <p className="text-xs md:text-sm text-[#6B7280]">{stat.label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Floating Features */}
      {/* <div className="absolute -bottom-6 left-0 right-0 mx-auto w-full max-w-4xl px-4 hidden md:block">
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Clock, label: "Hiring Speed", value: "3x Faster" },
            { icon: Users, label: "Response Rate", value: "85% Better" },
            { icon: ChartBar, label: "Candidate Quality", value: "2x Better" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-[#F8F8F9]">
                <stat.icon className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-bold text-[#25272A] text-lg">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
