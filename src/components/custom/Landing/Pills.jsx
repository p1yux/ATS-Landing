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

  return (
    <section className="py-6 relative overflow-hidden min-h-[35vh] bg-gray-50/80">
      {/* Background Elements with darker overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-gray-50/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header - Left Aligned */}
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
      </div>
    </section>
  );
};

export default Pills;
