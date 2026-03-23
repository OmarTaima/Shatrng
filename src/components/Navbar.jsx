// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "../i18n/hooks/useTranslation";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "/auth-logo.png";
const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { id: "home", label: t("navigation:home") || "Home", href: "/" },
    { id: "join", label: t("joinUs:title") || "Join Us", href: "/join-us" },
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
    else setActiveLink('home');
  }, [location.pathname]);

  const scrollToSection = (href) => {
    setIsOpen(false);
    // If internal route (starts with /) navigate client-side
    if (href && href.startsWith('/')) {
      navigate(href);
      setActiveLink('join');
      return;
    }

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveLink("home");
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveLink(href.replace("#", ""));
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/5 py-4"
          : "bg-transparent py-10"
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 max-w-400">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => { setActiveLink('home'); }}
            className="flex items-center gap-4 group"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-primary flex items-center justify-center font-serif font-black text-2xl text-black transition-all duration-700 group-hover:rotate-360 shadow-[0_0_30px_rgba(121,85,72,0.3)]">S</div>
              <div className="absolute -inset-2 border border-primary/20 scale-0 group-hover:scale-100 transition-transform duration-700" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif font-bold tracking-[0.2em] text-2xl leading-none uppercase">SHTARNG</span>
              <span className="text-primary text-[10px] uppercase tracking-[0.6em] font-black mt-1">STUDIO</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-16">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.href)}
                className={`group relative text-[10px] uppercase tracking-[0.5em] font-black transition-all duration-500 ${
                  activeLink === link.id ? 'text-primary' : 'text-stone-500 hover:text-white'
                }`}
              >
                {link.label}
                <motion.div 
                  initial={false}
                  animate={{ 
                    width: activeLink === link.id ? "100%" : "0%",
                    opacity: activeLink === link.id ? 1 : 0
                  }}
                  className="absolute -bottom-4 left-0 h-px bg-primary"
                />
                <div className="absolute -bottom-4 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500 opacity-20" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <button className="hidden sm:flex items-center gap-3 group">
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-2 group"
            >
              <div className={`w-8 h-px bg-white transition-all duration-500 ${isOpen ? "rotate-45 translate-y-1.25 bg-primary" : ""}`} />
              <div className={`w-8 h-px bg-white transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-1.25 bg-primary" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;