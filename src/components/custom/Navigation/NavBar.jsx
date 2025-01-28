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
        className={`max-w-[83rem] w-full rounded-xl transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 shadow-lg border border-gray-200/50 backdrop-blur-lg' 
            : 'bg-white/80 shadow-md backdrop-blur-md hover:shadow-lg'
        }`}
      >
        <div className="px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Hiremode
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </Link>
              <a 
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                About
              </a>
              <a 
                href="#faq"
                onClick={(e) => handleNavClick(e, 'faq')}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                FAQ
              </a>
              <Button 
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 h-11 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
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
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <a 
                    href="#about"
                    onClick={(e) => handleNavClick(e, 'about')}
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    About
                  </a>
                  <a 
                    href="#faq"
                    onClick={(e) => handleNavClick(e, 'faq')}
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    FAQ
                  </a>
                  <div className="px-4 pt-2">
                    <Button 
                      className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-full h-11 shadow-xl hover:shadow-2xl transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Schedule Demo
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
