"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine scroll direction and visibility
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);

      // Handle background change
      setScrolled(currentScrollPos > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`w-full flex justify-center fixed top-0 left-0 right-0 z-50 px-6 pt-4 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`max-w-[83rem] w-full rounded-xl transition-all duration-300 ${
          scrolled 
            ? 'bg-gradient-to-r from-gray-900/90 to-gray-800/90 shadow-[0_2px_8px_rgba(0,0,0,0.2)] border border-gray-700/50 backdrop-blur-lg' 
            : 'bg-gradient-to-r from-gray-900/80 to-gray-800/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)] backdrop-blur-md hover:shadow-[0_2px_16px_rgba(0,0,0,0.25)] hover:from-gray-900/85 hover:to-gray-800/85'
        }`}
      >
        <div className="px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Hiremode
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-10">
              <Link 
                href="/"
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                href="/about"
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                About
              </Link>
              <Link 
                href="/contact"
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Contact
              </Link>
              <Button 
                className="bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-600 hover:to-violet-600 rounded-full px-6 h-11 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/80 transition-colors">
              <svg 
                className="w-6 h-6 text-gray-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default NavBar;
