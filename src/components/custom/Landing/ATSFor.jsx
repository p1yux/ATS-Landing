"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Clock, CheckCircle, Zap } from 'lucide-react';

const features = [
  {
    id: 'quick-start',
    title: "Launch Your Pipeline Fast",
    description: "Get your recruitment process up and running in minutes. Our streamlined setup means you can start hiring right away.",
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: 'ai-scoring',
    title: "Smart Candidate Matching",
    description: "Our AI engine evaluates and ranks candidates automatically, matching them perfectly with your requirements.",
    icon: Brain,
    color: "text-violet-600",
    bgColor: "bg-violet-50"
  },
  {
    id: 'automation',
    title: "Automated Follow-ups",
    description: "Keep candidates engaged with smart automated responses. Never miss an opportunity to connect.",
    icon: CheckCircle,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    id: 'engagement',
    title: "Boost Engagement Rates",
    description: "Maintain high candidate engagement with timely communications and personalized interactions.",
    icon: Zap,
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  }
];

const ATSFor = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const activeFeatureData = features.find(f => f.id === activeFeature);

  return (
    <section className="min-h-[85vh] w-full flex items-center justify-center relative overflow-hidden py-16">
      <div className="container mx-auto px-4 lg:px-8 my-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            The ATS for Organizations
            <span className="block text-xl md:text-2xl text-gray-600 mt-1">
              and startups that want to scale
            </span>
          </motion.h2>
        </div>

        {/* Main Content */}
        <div className="flex gap-12 max-w-7xl mx-auto">
          {/* Feature List */}
          <div className="w-1/2 space-y-2 pr-4">
            {features.map((feature) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
                  activeFeature === feature.id 
                    ? `${feature.bgColor} shadow-sm border border-${feature.color}/20` 
                    : 'hover:bg-gray-50'
                }`}
                whileHover={{ x: activeFeature === feature.id ? 0 : 4 }}
              >
                <div className="flex items-start gap-4">
                  <feature.icon className={`w-6 h-6 ${feature.color} mt-1`} />
                  <div>
                    <h3 className={`text-lg font-semibold mb-1.5 ${
                      activeFeature === feature.id ? feature.color : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Visual Display */}
          <div className="w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-tr from-gray-50 to-white shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/5 to-gray-900/0" />
                <div className="relative h-full flex items-center justify-center p-10">
                  <activeFeatureData.icon className={`w-28 h-28 ${activeFeatureData.color}`} />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
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
