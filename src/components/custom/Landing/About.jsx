"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-12 relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-4"
        >
          <div className="h-[1px] w-8 bg-blue-600/30"></div>
          <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">About Us</span>
          <div className="h-[1px] w-8 bg-blue-600/30"></div>
        </motion.div>

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-3"
            >
              <span className="text-[#4146B5]">Reimagining</span>{' '}
              <span className="text-gray-900">recruitment</span>{' '}
              <span className="text-[#4146B5]">for the</span>{' '}
              <span className="text-gray-900">modern era</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-gray-600"
            >
              We're building the future of hiring by combining human expertise with cutting-edge AI technology.
            </motion.p>
          </div>

          {/* Content Grid with Overlapping Design */}
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 relative group"
            >
              <div className="relative h-[350px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-blue-900/10 to-transparent"></div>
              </div>
              {/* Stats Badge */}
              <div className="absolute -right-3 -bottom-3 bg-white shadow-xl rounded-xl p-4 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-blue-600 to-gray-900 bg-clip-text text-transparent">85%</p>
                <p className="text-sm text-gray-600">Hiring Success Rate</p>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 space-y-8"
            >
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold">
                      <span className="text-blue-600">Built by recruiters,</span>{' '}
                      <span className="text-gray-900">powered by AI</span>
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our team combines decades of recruiting expertise with advanced AI technology to create a platform that understands the nuances of hiring.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold">
                      <span className="text-gray-900">Focused on</span>{' '}
                      <span className="text-blue-600">what matters</span>
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in cutting through the noise. Our platform focuses on meaningful metrics and actionable insights.
                  </p>
                </div>

                <Button 
                  size="lg"
                  className="group bg-gradient-to-r from-[#4146B5] to-[#363994] hover:from-[#363994] hover:to-[#2D307D] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn more about us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
