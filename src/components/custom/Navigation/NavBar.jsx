"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import throttle from 'lodash/throttle';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollPos = window.scrollY;
      
      // Determine scroll direction and visibility
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);

      // Handle background change
      setScrolled(currentScrollPos > 100);
    }, 150);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  // Smooth scroll handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // Close mobile menu first
    setMobileMenuOpen(false);
    
    // Check if we're on the /try page
    const isOnTryPage = window.location.pathname === '/try';
    
    if (isOnTryPage) {
      // Navigate to home page with hash
      window.location.href = `/#${targetId}`;
      return;
    }
    
    // If on home page, scroll to section
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 300);
  };

  return (
    <div className={`w-full flex justify-center fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`max-w-[83rem] w-full rounded-lg transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border border-gray-100' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center group">
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#25272A] to-[#444] transition-all duration-300 group-hover:to-purple-600">
                Hiremod
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/"
                className="text-[#6B7280] hover:text-[#25272A] transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#25272A] after:transition-all hover:after:w-full"
              >
                Home
              </Link>
              <a 
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-[#6B7280] hover:text-[#25272A] transition-colors font-medium cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#25272A] after:transition-all hover:after:w-full"
              >
                About
              </a>
              <a 
                href="#faq"
                onClick={(e) => handleNavClick(e, 'faq')}
                className="text-[#6B7280] hover:text-[#25272A] transition-colors font-medium cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#25272A] after:transition-all hover:after:w-full"
              >
                FAQ
              </a>
              <Link 
                href="/claire"
                className="text-purple-600 hover:text-purple-700 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-600 after:transition-all hover:after:w-full"
              >
                Claire
              </Link>
              <Button 
                className="bg-[#25272A] text-white hover:bg-gray-800 rounded-lg px-6 h-11 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                onClick={() => window.open('https://calendly.com/aryanjainak/30min', '_blank')}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Book a Demo</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#F8F8F9] hover:bg-[#E5E7EB] transition-all duration-300 hover:shadow-md"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#25272A]" />
              ) : (
                <Menu className="w-6 h-6 text-[#25272A]" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden border-t border-gray-100 mt-2"
              >
                <div className="py-4 space-y-3">
                  <Link 
                    href="/"
                    className="block px-4 py-3 text-[#6B7280] hover:text-[#25272A] hover:bg-gray-50 rounded-lg transition-all font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/claire"
                    className="block px-4 py-3 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Claire
                  </Link>
                  <a 
                    href="#about"
                    onClick={(e) => handleNavClick(e, 'about')}
                    className="block px-4 py-3 text-[#6B7280] hover:text-[#25272A] hover:bg-gray-50 rounded-lg transition-all font-medium"
                  >
                    About
                  </a>
                  <a 
                    href="#faq"
                    onClick={(e) => handleNavClick(e, 'faq')}
                    className="block px-4 py-3 text-[#6B7280] hover:text-[#25272A] hover:bg-gray-50 rounded-lg transition-all font-medium"
                  >
                    FAQ
                  </a>
                  <div className="px-4 pt-3">
                    <Button 
                      className="w-full bg-[#25272A] text-white hover:bg-gray-800 rounded-lg h-12 shadow-md transition-all duration-300 relative overflow-hidden group"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        window.open('https://calendly.com/aryanjainak/30min', '_blank');
                      }}
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative z-10">Get Started</span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
};

export default NavBar;
