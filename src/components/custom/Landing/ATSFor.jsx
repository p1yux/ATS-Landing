"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Clock, CheckCircle, Zap } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    id: 'quick-start',
    title: "Launch Your Pipeline Fast",
    description: "Get your recruitment process up and running in minutes. Our streamlined setup means you can start hiring right away.",
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    image: "/images/img2.jpg"
  },
  {
    id: 'ai-scoring',
    title: "Smart Candidate Matching",
    description: "Our AI engine evaluates and ranks candidates automatically, matching them perfectly with your requirements.",
    icon: Brain,
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    image: "/images/img3.jpg"
  },
  {
    id: 'automation',
    title: "Automated Follow-ups",
    description: "Keep candidates engaged with smart automated responses. Never miss an opportunity to connect.",
    icon: CheckCircle,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    image: "/images/img4.jpg"
  },
  {
    id: 'engagement',
    title: "Boost Engagement Rates",
    description: "Maintain high candidate engagement with timely communications and personalized interactions.",
    icon: Zap,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    image: "/images/img6.jpg"
  }
];

const ATSFor = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const activeFeatureData = features.find(f => f.id === activeFeature);

  return (
    <section className="py-8 lg:py-16 w-full flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Updated Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-gradient-to-r from-violet-600/10 to-blue-600/10 text-violet-600 rounded-full"
          >
            Features & Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-3 tracking-tight"
          >
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              The ATS for Organizations
            </span>
            <span className="block text-2xl md:text-3xl text-gray-600 mt-4 font-normal">
              that want to{' '}
              <span className="relative inline-block">
                scale faster
                <motion.svg
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 w-full"
                  width="100%"
                  height="6"
                  viewBox="0 0 100 6"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0 5.5Q25 0 50 5.5Q75 11 100 5.5"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                  />
                </motion.svg>
              </span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Streamline your recruitment process with AI-powered tools and automation that help you find the perfect candidates faster.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto items-center">
          {/* Feature List */}
          <div className="w-full lg:w-1/2 space-y-2 order-2 lg:order-1 lg:pr-4">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeFeature === feature.id 
                    ? `${feature.bgColor} shadow-sm border border-${feature.color}/20` 
                    : 'hover:bg-gray-50'
                }`}
                whileHover={{ x: activeFeature === feature.id ? 0 : 4 }}
              >
                <div className="flex items-start gap-3">
                  <feature.icon className={`w-5 h-5 ${feature.color} mt-1`} />
                  <div>
                    <h3 className={`text-base font-semibold mb-1 ${
                      activeFeature === feature.id ? feature.color : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Visual Display */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-gray-50 to-white shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/5 to-gray-900/0" />
                <div className="relative h-full">
                  <Image
                    src={activeFeatureData.image}
                    alt={activeFeatureData.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <activeFeatureData.icon className={`w-16 h-16 ${activeFeatureData.color} opacity-20`} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      </div>
    </section>
  );
};

export default ATSFor;
