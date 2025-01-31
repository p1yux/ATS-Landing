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
            ? 'bg-white shadow-sm border border-gray-100' 
            : 'bg-white'
        }`}
      >
        <div className="px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-[#25272A]">
                Hiremod
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/"
                className="text-[#6B7280] hover:text-[#25272A] transition-colors font-medium"
              >
                Home
              </Link>
              <a 
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-[#6B7280] hover:text-[#25272A] transition-colors font-medium cursor-pointer"
              >
                About
              </a>
              <a 
                href="#faq"
                onClick={(e) => handleNavClick(e, 'faq')}
                className="text-[#6B7280] hover:text-[#25272A] transition-colors font-medium cursor-pointer"
              >
                FAQ
              </a>
              <Button 
                className="bg-[#25272A] text-white hover:bg-[#404348] rounded-lg px-6 h-11 shadow-sm transition-all duration-300"
                onClick={() => window.open('https://calendly.com/aryanjainak/30min', '_blank')}
              >
                Book a Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#F8F8F9] hover:bg-[#E5E7EB] transition-colors"
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
                <div className="py-4 space-y-4">
                  <Link 
                    href="/"
                    className="block px-4 py-2 text-[#6B7280] hover:text-[#25272A] transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <a 
                    href="#about"
                    onClick={(e) => handleNavClick(e, 'about')}
                    className="block px-4 py-2 text-[#6B7280] hover:text-[#25272A] transition-colors font-medium"
                  >
                    About
                  </a>
                  <a 
                    href="#faq"
                    onClick={(e) => handleNavClick(e, 'faq')}
                    className="block px-4 py-2 text-[#6B7280] hover:text-[#25272A] transition-colors font-medium"
                  >
                    FAQ
                  </a>
                  <div className="px-4 pt-2">
                    <Button 
                      className="w-full bg-[#25272A] text-white hover:bg-[#404348] rounded-full h-11 shadow-sm transition-all duration-300"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        window.open('https://calendly.com/aryanjainak/30min', '_blank');
                      }}
                    >
                      Get Started
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
