"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Midsection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-100/30 to-violet-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* How It Works Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Hiremode Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform streamlines every step of your recruitment process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Candidate Screening",
                description: "AI analyzes resumes and matches candidates to your requirements with 95% accuracy",
                icon: "🎯",
                delay: 0.1
              },
              {
                title: "Automated Scheduling",
                description: "Seamlessly coordinate interviews with automated calendar integration",
                icon: "📅",
                delay: 0.2
              },
              {
                title: "Data-Driven Insights",
                description: "Get real-time analytics and predictions for better hiring decisions",
                icon: "📊",
                delay: 0.3
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hiremode
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of recruitment with our cutting-edge features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Reduce Time-to-Hire",
                description: "Cut your hiring time by up to 85% with automated screening and scheduling",
                stats: "85% Faster",
                color: "from-blue-500/10 to-violet-500/10"
              },
              {
                title: "Better Quality Hires",
                description: "AI-powered matching ensures you find the perfect candidates every time",
                stats: "90% Match Rate",
                color: "from-violet-500/10 to-purple-500/10"
              },
              {
                title: "Cost Efficient",
                description: "Reduce recruitment costs while improving the quality of your hires",
                stats: "60% Savings",
                color: "from-purple-500/10 to-blue-500/10"
              },
              {
                title: "Enhanced Candidate Experience",
                description: "Provide a smooth, professional experience for all applicants",
                stats: "95% Satisfaction",
                color: "from-blue-500/10 to-violet-500/10"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative p-8 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                    <span className="text-blue-600 font-semibold">{benefit.stats}</span>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Midsection;
