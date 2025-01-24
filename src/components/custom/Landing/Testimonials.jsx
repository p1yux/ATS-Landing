"use client";
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Chen",
    position: "HR Director",
    company: "TechCorp Inc.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "Hiremode has revolutionized our hiring process. We've reduced our time-to-hire by 75% while finding better-qualified candidates.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    position: "Talent Acquisition Lead",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "The AI-powered screening is a game-changer. It's like having an expert recruiter working 24/7. Absolutely worth the investment.",
    rating: 5
  },
  {
    name: "Emily Thompson",
    position: "Recruitment Manager",
    company: "Global Solutions",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "We've seen a significant improvement in candidate quality since using Hiremode. The AI matching is incredibly accurate.",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
           style={{ 
             background: `linear-gradient(to bottom right, 
               ${index === 0 ? 'from-blue-500/20 to-violet-500/20' : 
                 index === 1 ? 'from-violet-500/20 to-purple-500/20' : 
                 'from-purple-500/20 to-blue-500/20'})` 
           }}
      />
      <div className="relative p-6 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Rating Stars */}
        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
        </div>

        {/* Testimonial Content */}
        <p className="text-gray-700 mb-6 text-lg">
          "{testimonial.content}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.position}</p>
            <p className="text-sm text-blue-600">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            See how Hiremode is transforming recruitment for companies worldwide
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
