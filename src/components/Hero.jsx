import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n/hooks/useTranslation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Hero = () => {
  const { t, isArabic } = useTranslation();
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.95]), {
    stiffness: 100,
    damping: 30
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingPieces = [
    { type: "Knight", icon: "♞", top: "15%", left: "10%", delay: 0, size: "4xl md:text-8xl", floatRange: 60, rotateRange: 15 },
    { type: "Queen", icon: "♛", top: "70%", left: "85%", delay: 1.5, size: "5xl md:text-9xl", floatRange: 80, rotateRange: 20 },
    { type: "Bishop", icon: "♝", top: "30%", right: "15%", delay: 2, size: "4xl md:text-7xl", floatRange: 50, rotateRange: 10 },
    { type: "Pawn", icon: "♟", bottom: "20%", left: "85%", delay: 2.5, size: "3xl md:text-6xl", floatRange: 45, rotateRange: 12 },
    { type: "Rook", icon: "♜", top: "80%", left: "5%", delay: 3, size: "4xl md:text-7xl", floatRange: 55, rotateRange: 8 },
    { type: "King", icon: "♚", bottom: "10%", right: "20%", delay: 3.5, size: "5xl md:text-8xl", floatRange: 70, rotateRange: 18 },
  ];

  const chessCoordinates = Array.from({ length: 64 }, (_, i) => ({
    x: (i % 8) * 12.5,
    y: Math.floor(i / 8) * 12.5,
    isBlack: (Math.floor(i / 8) + (i % 8)) % 2 === 1
  }));

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[120vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0908] text-white py-20 px-4"
    >
      {/* Brown Gradient Veil - Intense Cinematic Depth */}
      <div className="absolute inset-0 z-1 bg-linear-to-b from-[#3e2723]/30 via-transparent to-[#3e2723]/40 pointer-events-none" />

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-125 h-125 bg-primary/40 rounded-full blur-[180px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute bottom-20 right-10 w-150 h-150 bg-primary/30 rounded-full blur-[200px]"
        />
      </div>

      {/* Enhanced Chess Grid with 3D Perspective */}
      <div className="absolute inset-0 z-0 overflow-hidden perspective-1000">
        <motion.div 
          style={{ rotateX: 45, rotateZ: -15, scale: 1.2, y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]"
        >
          <div className="relative w-full h-full">
            {chessCoordinates.map((coord, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: coord.isBlack ? 0.12 : 0.06, scale: 1 }}
                transition={{ delay: i * 0.002, duration: 0.5 }}
                className="absolute w-[12.5%] h-[12.5%] border border-white/5"
                style={{
                  left: `${coord.x}%`,
                  top: `${coord.y}%`,
                  backgroundColor: coord.isBlack ? 'rgba(197, 137, 64, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  boxShadow: coord.isBlack ? 'inset 0 0 20px rgba(197, 137, 64, 0.2)' : 'none'
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Parallax Floating Pieces with Mouse Tracking */}
      {/* {floatingPieces.map((piece, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0.08, 0.2, 0.08], 
            scale: [1, 1.1, 1],
            y: [0, -piece.floatRange, 0],
            rotate: [0, piece.rotateRange, -piece.rotateRange, 0]
          }}
          transition={{ 
            duration: 10 + i * 1.5, 
            repeat: Infinity, 
            delay: piece.delay,
            ease: "easeInOut" 
          }}
          style={{
            x: mousePosition.x * (0.5 + i * 0.1),
            y: mousePosition.y * (0.3 + i * 0.05),
            top: piece.top,
            left: piece.left,
            right: piece.right,
            bottom: piece.bottom
          }}
          className={`absolute z-0 text-${piece.size} pointer-events-none select-none font-serif transition-all duration-300`}
        >
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full" />
            <span className="relative block text-primary/20 drop-shadow-2xl">
              {piece.icon}
            </span>
          </div>
        </motion.div>
      ))} */}

      {/* Hero Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className={`flex flex-col items-center ${isArabic ? "rtl" : "ltr"}`}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center max-w-7xl relative pt-12 md:pt-0"
          >
            {/* Luxury Ornamental Frame */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none hidden md:block">
              <svg className="absolute top-0 left-0 w-32 h-32 text-primary/10" viewBox="0 0 100 100">
                <path d="M10,10 L30,10 M10,10 L10,30" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M90,10 L70,10 M90,10 L90,30" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M10,90 L30,90 M10,90 L10,70" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M90,90 L70,90 M90,90 L90,70" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              <svg className="absolute bottom-0 right-0 w-32 h-32 text-primary/10 rotate-180" viewBox="0 0 100 100">
                <path d="M10,10 L30,10 M10,10 L10,30" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>

            {/* Elegant Pre-title Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 mb-8 md:mb-12 px-4 md:px-6 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
            >
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary font-medium">
                {t("hero:badge") || "Est. 2024 · Creative Studio"}
              </span>
              <span className="w-px h-3 md:h-4 bg-primary/30" />
              <span className="text-[10px] md:text-xs uppercase tracking-wide text-stone-400">
                Chess Philosophy
              </span>
            </motion.div>

            {/* Main Headline with Split Animation */}
            <h1 className="text-5xl md:text-8xl lg:text-[11rem] font-cinzel font-bold text-white leading-[0.85] mb-8 md:mb-12">
              <motion.span 
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="block relative"
              >
                MASTER
                <span className="absolute -top-4 md:-top-6 -right-4 md:-right-8 text-2xl md:text-4xl text-primary/30">✦</span>
              </motion.span>
              <motion.span 
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="block relative mt-2 md:mt-6"
              >
                YOUR 
                <span className="text-primary italic ml-2 md:ml-8 relative inline-block">
                  MOVE
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                    className="absolute -bottom-1 md:-bottom-3 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary to-transparent origin-left"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 text-[6px] md:text-[8px] tracking-[0.5em] text-primary/50 uppercase whitespace-nowrap"
                  >
                    Checkmate
                  </motion.div>
                </span>
              </motion.span>
            </h1>

            {/* Description with Elegant Line Accents */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="relative max-w-3xl mx-auto mb-10 md:mb-16"
            >
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-8 md:h-12 bg-linear-to-b from-primary/0 via-primary/50 to-primary/0" />
              <p className="text-lg md:text-2xl text-stone-300 leading-relaxed font-light tracking-wide mt-8 md:mt-12">
                {t("hero:description") || "In the game of branding, every move is calculated. We blend architectural precision with cinematic flair to land your business at checkmate."}
              </p>
            </motion.div>

            

            
          </motion.div>
        </div>
      </motion.div>

      {/* Premium Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 z-20 pointer-events-none"
      >
        
        <div className="w-px h-10 md:h-16 bg-linear-to-b from-primary/50 to-transparent" />
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.3 }}
          className="w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-primary/50 rotate-45"
        />
      </motion.div>
    </section>
  );
};

export default Hero;