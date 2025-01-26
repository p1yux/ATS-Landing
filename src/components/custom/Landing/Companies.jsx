"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Companies = () => {
  // Updated company logos with more reliable sources
  const companies = [
    { 
      name: 'Google', 
      logo: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg'
    },
    { 
      name: 'Microsoft', 
      logo: 'https://img.icons8.com/color/480/microsoft.png'
    },
    { 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    },
    { 
      name: 'Facebook',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'
    },
    { 
      name: 'Twitter',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg'
    },
    { 
      name: 'Slack', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg'
    },
    { 
      name: 'LinkedIn', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg'
    },
    { 
      name: 'Salesforce',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg'
    },
    // Duplicate for seamless loop
    { 
      name: 'Google', 
      logo: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg'
    },
    { 
      name: 'Microsoft', 
      logo: 'https://img.icons8.com/color/480/microsoft.png'
    },
    { 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    },
    { 
      name: 'Facebook', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'
    },
    { 
      name: 'Twitter', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg'
    },
    { 
      name: 'Slack', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg'
    },
    { 
      name: 'LinkedIn', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg'
    },
    { 
      name: 'Salesforce', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg'
    }
  ];

  return (
    <section className="py-8 bg-white relative overflow-hidden">
      {/* Gradient Overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Section Header */}
      <div className="text-center mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-2"
        >
          Trusted By Industry Leaders
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-bold text-gray-900"
        >
          Empowering Global Enterprises
        </motion.h2>
      </div>

      {/* Scrolling Logos Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-75 hover:opacity-100"
            >
              <div className="w-32 h-16 relative">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;
