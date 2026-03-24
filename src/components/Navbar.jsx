// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "../i18n/hooks/useTranslation";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import logo from "/auth-logo.png";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [hoveredLink, setHoveredLink] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.85)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(20px)"]
  );

  const navLinks = [
    { id: "home", label: t("navigation:home") || "Home", href: "/", icon: "♔" },
    { id: "about", label: t("navigation:about") || "About", href: "/#about", icon: "♕" },
    { id: "locations", label: t("navigation:locations") || "Locations", href: "/#locations", icon: "♖" },
    { id: "team", label: t("navigation:team") || "Team", href: "/#team", icon: "♘" },
    { id: "join", label: t("joinUs:title") || "Join Us", href: "/join-us", icon: "♙" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track route changes and update active link accordingly
  useEffect(() => {
    const path = location.pathname || '/';
    if (path.startsWith('/join-us')) setActiveLink('join');
    else if (path === '/') {
      // Check which section is in view
      const sections = ['home', 'about', 'locations', 'team'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    }
  }, [location.pathname, scrollY]);

  const scrollToSection = (href, id) => {
    setIsOpen(false);
    setActiveLink(id);
    
    // If internal route (starts with /join-us) navigate client-side
    if (href === '/join-us') {
      navigate(href);
      return;
    }

    if (href === '/') {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Handle hash links
    const hash = href.split('#')[1];
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Mobile Menu Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.nav
        style={{ 
          backgroundColor: isScrolled ? backgroundColor : "transparent",
          backdropFilter: isScrolled ? backdropBlur : "none"
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "border-b border-white/10 shadow-2xl"
            : "border-b border-white/5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => { 
                setActiveLink('home');
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group relative flex items-center gap-4"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-linear-to-br from-primary to-amber-600 flex items-center justify-center font-serif font-black text-xl lg:text-2xl text-black shadow-lg">
                  S
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute -inset-1 border border-primary/30 rounded-sm"
                />
              </motion.div>
              
              <div className="flex flex-col">
                <motion.span 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white font-serif font-bold tracking-[0.2em] text-xl lg:text-2xl leading-none uppercase"
                >
                  SHTARNG
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary text-[8px] lg:text-[10px] uppercase tracking-[0.5em] font-black mt-1"
                >
                  STUDIO
                </motion.span>
              </div>

              {/* Animated underline on logo hover */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute -bottom-2 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent origin-left"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.href, link.id)}
                  onHoverStart={() => setHoveredLink(link.id)}
                  onHoverEnd={() => setHoveredLink(null)}
                  className="group relative"
                >
                  <div className="flex flex-col items-center gap-1">
                    <motion.span 
                      animate={{ 
                        opacity: hoveredLink === link.id ? 1 : 0,
                        y: hoveredLink === link.id ? -5 : 0
                      }}
                      className="text-primary text-xs"
                    >
                      {link.icon}
                    </motion.span>
                    <span className={`text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-500 ${
                      activeLink === link.id 
                        ? 'text-primary' 
                        : 'text-stone-400 group-hover:text-white'
                    }`}>
                      {link.label}
                    </span>
                  </div>
                  
                  {/* Active Indicator */}
                  {activeLink === link.id && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-3 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover Indicator */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredLink === link.id ? 1 : 0 }}
                    className="absolute -bottom-3 left-0 right-0 h-px bg-white/30 origin-left"
                  />
                </motion.button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6">
              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('/join-us', 'join')}
                className="hidden md:flex items-center gap-3 px-6 py-2.5 bg-primary text-black text-xs font-black uppercase tracking-wider rounded-full hover:bg-white transition-all duration-500 shadow-lg hover:shadow-primary/30"
              >
                <span>Strategic Alliance</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                  className={`w-6 h-px transition-all duration-500 ${
                    isOpen ? 'bg-primary' : 'bg-white group-hover:bg-primary'
                  }`} 
                />
                <motion.div 
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className={`w-6 h-px transition-all duration-500 ${
                    isOpen ? 'bg-primary' : 'bg-white group-hover:bg-primary'
                  }`} 
                />
                <motion.div 
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                  className={`w-6 h-px transition-all duration-500 ${
                    isOpen ? 'bg-primary' : 'bg-white group-hover:bg-primary'
                  }`} 
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Animated Border Bottom */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center justify-center h-full"
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Navigation Links */}
              <div className="space-y-8 text-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    variants={menuItemVariants}
                    custom={index}
                    className="overflow-hidden"
                  >
                    <button
                      onClick={() => {
                        scrollToSection(link.href, link.id);
                        setIsOpen(false);
                      }}
                      className="group relative text-4xl md:text-5xl font-serif font-bold text-white hover:text-primary transition-colors duration-300"
                    >
                      <span className="relative inline-block">
                        {link.label}
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          className="absolute -bottom-2 left-0 w-full h-px bg-primary origin-left"
                        />
                      </span>
                      <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        {link.icon}
                      </span>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Chess Pattern */}
              <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.3, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className={`w-1.5 h-1.5 ${i % 2 === 0 ? 'bg-primary' : 'bg-white/30'}`}
                  />
                ))}
              </div>

              {/* Social Links in Mobile Menu */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-24 flex gap-6 text-stone-500 text-xs tracking-wider"
              >
                <a href="#" className="hover:text-primary transition-colors">INSTAGRAM</a>
                <span className="text-stone-700">|</span>
                <a href="#" className="hover:text-primary transition-colors">LINKEDIN</a>
                <span className="text-stone-700">|</span>
                <a href="#" className="hover:text-primary transition-colors">BEHANCE</a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;