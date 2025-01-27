"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Brain, Calendar } from 'lucide-react';
import Image from 'next/image';

const Pills = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Job Requirements",
      description: "Simply upload your requirements and let our AI handle the heavy lifting.",
      color: "blue",
      delay: 0.2
    },
    {
      icon: Brain,
      title: "Smart AI Screening",
      description: "Our AI matches and ranks candidates based on your specific criteria.",
      color: "violet",
      delay: 0.4
    },
    {
      icon: Calendar,
      title: "Schedule & Hire",
      description: "Seamlessly schedule interviews and make data-driven hiring decisions.",
      color: "indigo",
      delay: 0.6
    }
  ];

  const benefitSteps = [
    {
      icon: Brain,
      title: "Data-Driven Decisions",
      description: "Make informed hiring choices backed by AI-powered analytics and insights.",
      color: "emerald",
      delay: 0.2
    },
    {
      icon: Upload,
      title: "Time Efficiency",
      description: "Reduce hiring time by up to 75% with automated screening and matching.",
      color: "teal",
      delay: 0.4
    },
    {
      icon: Calendar,
      title: "Quality Matches",
      description: "Find candidates who truly align with your company culture and requirements.",
      color: "cyan",
      delay: 0.6
    }
  ];

  // Memoize static content
  const MemoizedBackground = React.memo(() => (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-gray-50/50"></div>
    </div>
  ));

  return (
    <section className="py-6 relative overflow-hidden min-h-[35vh] bg-gray-50/80">
      {/* Shared Background Elements */}
      <MemoizedBackground />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* First Part Content */}
        <div className="mb-6 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 via-violet-600 to-indigo-600"
          />
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-violet-600 uppercase tracking-wider pl-4 mb-2 block"
          >
            Our Process
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 pl-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold relative"
            >
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Three Steps to
              </span>
              <span className="relative ml-2 text-gray-900">
                Perfect Hiring
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-[0.2em] bg-gradient-to-r from-blue-600/40 via-violet-600/40 to-indigo-600/40 rounded-full"
                />
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base pl-4 mt-3 max-w-2xl"
          >
            Experience our streamlined recruitment process that combines AI intelligence with human expertise
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-full">
          {/* Left Side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[38%]"
          >
            <div className="relative max-w-[400px] mx-auto">
              {/* Blob Shape */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-violet-100 to-indigo-100 rounded-[40%_60%_70%_30%/40%_40%_60%_50%] transform rotate-12"></div>
              
              {/* Image Container */}
              <div className="relative rounded-[40%_60%_70%_30%/40%_40%_60%_50%] overflow-hidden shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/img5.jpg"
                  alt="AI Hiring System Dashboard"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 p-3 rounded-xl bg-white/90 shadow-xl border border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">AI Processing</div>
                      <div className="text-xs text-gray-600">Analyzing profiles...</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Steps */}
          <div className="lg:w-[62%] space-y-3 relative">
            {/* Vertical Line */}
            <div className="absolute left-[21px] top-[48px] bottom-[48px] w-[2px] bg-gradient-to-b from-blue-200 via-violet-200 to-indigo-200"></div>
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay }}
                className="flex gap-4 relative group"
              >
                {/* Step Number */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-white border-2 border-${step.color}-400 flex items-center justify-center text-lg font-bold text-${step.color}-600 shadow-lg`}>
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className={`w-11 h-11 rounded-lg bg-${step.color}-100 flex items-center justify-center mb-3`}>
                      <step.icon className={`w-6 h-6 text-${step.color}-600`} />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second Part Content */}
        <div className="mt-20">
          {/* Second part header - now right aligned */}
          <div className="mb-6 relative flex justify-end">
            <div className="w-full max-w-2xl relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 via-violet-600 to-indigo-600"
              />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-sm font-semibold text-violet-600 uppercase tracking-wider pr-4 mb-2 block text-right"
              >
                Why Choose Us
              </motion.span>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 pr-4 justify-end">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold relative text-right"
                >
                  <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Transform Your
                  </span>
                  <span className="relative ml-2 text-gray-900">
                    Hiring Process
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="absolute -bottom-2 left-0 h-[0.2em] bg-gradient-to-r from-blue-600/40 via-violet-600/40 to-indigo-600/40 rounded-full"
                    />
                  </span>
                </motion.h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-base pr-4 mt-3 text-right"
              >
                Discover how our AI-powered platform revolutionizes recruitment and delivers exceptional results
              </motion.p>
            </div>
          </div>

          {/* Second part main content - Reduced heights */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mt-6"> {/* Reduced gap and top margin */}
            {/* Left Side - Enhanced Content */}
            <div className="lg:w-[55%] space-y-6"> {/* Reduced space-y */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg"
              >
                <p className="text-gray-600 leading-relaxed text-lg font-medium">
                  Experience the future of recruitment with our cutting-edge AI platform. We've revolutionized the hiring process by combining advanced machine learning with human expertise.
                </p>
                
                {/* Enhanced Feature Grid - Reduced padding */}
                <div className="grid grid-cols-2 gap-6 mt-6"> {/* Reduced gap and margin */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg p-5 hover:shadow-xl transition-all duration-300"> {/* Reduced padding */}
                    <div className="flex flex-col gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center">
                        <Brain className="w-6 h-6 text-violet-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Smart Matching</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our AI analyzes thousands of data points to find the perfect candidate-role fit, reducing mismatches by 90%.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg p-5 hover:shadow-xl transition-all duration-300"> {/* Reduced padding */}
                    <div className="flex flex-col gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
                        <Upload className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Bias Elimination</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Advanced algorithms ensure fair evaluation, focusing purely on skills and qualifications.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Stats Section - Reduced padding */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-6 mt-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg p-6" /* Reduced padding, gap, and margin */
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold text-2xl">95%</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Hiring Success</p>
                    <p className="text-xs text-gray-600 mt-1">Rate</p>
                  </div>
                  <div className="text-center border-x border-gray-100">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center mx-auto mb-3">
                      <span className="text-violet-600 font-bold text-2xl">75%</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Time Saved</p>
                    <p className="text-xs text-gray-600 mt-1">On Average</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center mx-auto mb-3">
                      <span className="text-indigo-600 font-bold text-2xl">2x</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Retention</p>
                    <p className="text-xs text-gray-600 mt-1">Improvement</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side - Larger Square Image Design - Reduced height */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-[45%] flex items-center"
            >
              <div className="relative max-w-[520px] mx-auto">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 via-violet-100/60 to-indigo-100/60 rounded-3xl transform rotate-6"></div>
                
                {/* Main Image Container - Reduced height */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500">
                  <Image
                    src="/images/img6.jpg"
                    alt="AI Recruitment Analytics"
                    width={800}
                    height={800}
                    className="w-full h-[480px] object-cover transform hover:scale-105 transition-transform duration-500" /* Reduced height from 580px to 480px */
                  />
                  {/* Enhanced Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-transparent to-indigo-600/30"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/30"></div>
                </div>

                {/* Floating Elements - Adjusted positions */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 p-3 rounded-2xl bg-white/95 shadow-2xl border border-gray-100 backdrop-blur-sm" /* Reduced padding and position */
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center">
                      <Brain className="w-7 h-7 text-violet-600" />
                    </div>
                    <div>
                      <div className="text-base font-medium text-gray-900">AI Analytics</div>
                      <div className="text-sm text-gray-600">Processing data</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -top-4 -right-4 p-3 rounded-2xl bg-white/95 shadow-2xl border border-gray-100 backdrop-blur-sm" /* Reduced padding and position */
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-bold text-xl">95%</span>
                    </div>
                    <div>
                      <div className="text-base font-medium text-gray-900">Success Rate</div>
                      <div className="text-sm text-gray-600">Hiring matches</div>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-blue-100/40 via-violet-100/40 to-indigo-100/40 rounded-3xl transform -rotate-6 blur-lg opacity-60"></div>
                <div className="absolute -z-20 -top-8 -left-8 w-full h-full bg-gradient-to-tr from-indigo-100/30 via-violet-100/30 to-blue-100/30 rounded-3xl transform rotate-12 blur-xl opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Third Part Content */}
        <div className="mt-20">
          <div className="mb-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 via-violet-600 to-indigo-600"
            />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-violet-600 uppercase tracking-wider pl-4 mb-2 block"
            >
              Our Workflow
            </motion.span>
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 pl-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold relative"
              >
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Streamlined
                </span>
                <span className="relative ml-2 text-gray-900">
                  Recruitment Process
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-[0.2em] bg-gradient-to-r from-blue-600/40 via-violet-600/40 to-indigo-600/40 rounded-full"
                  />
                </span>
              </motion.h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
            {/* Left Side - Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-[45%]"
            >
              <div className="relative max-w-[400px] mx-auto">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-violet-100 to-indigo-100 rounded-[40%_60%_70%_30%/40%_40%_60%_50%] transform rotate-12"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-[40%_60%_70%_30%/40%_40%_60%_50%] overflow-hidden shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/images/img7.jpg"
                    alt="AI Workflow Process"
                    width={600}
                    height={450}
                    className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 p-3 rounded-xl bg-white/95 shadow-xl border border-gray-100 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-violet-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Smart Process</div>
                      <div className="text-xs text-gray-600">AI-driven workflow</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -top-6 -right-6 p-3 rounded-xl bg-white/95 shadow-xl border border-gray-100 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Automated</div>
                      <div className="text-xs text-gray-600">24/7 Processing</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <div className="lg:w-[55%] space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg"
              >
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our advanced workflow system automates and streamlines every step of the recruitment process, from initial screening to final selection. By leveraging AI technology, we ensure consistent, unbiased, and efficient candidate evaluation.
                </p>
                
                <div className="grid grid-cols-1 gap-6 mt-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Upload className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Automated Workflow</h3>
                    </div>
                    <p className="text-gray-600">
                      Our system handles everything from resume parsing to skill matching, reducing manual work and accelerating the hiring process significantly.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center">
                        <Brain className="w-6 h-6 text-violet-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Intelligent Matching</h3>
                    </div>
                    <p className="text-gray-600">
                      Advanced algorithms analyze both hard and soft skills, ensuring the perfect match between candidates and your company's unique requirements.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pills;
