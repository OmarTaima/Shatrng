import React from "react";
import { useTranslation } from "../i18n/hooks/useTranslation";
import { motion } from "framer-motion";

const Hero = () => {
  const { t, isArabic } = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingPieces = [
    { type: "Knight", icon: "♞", top: "15%", left: "10%", delay: 0 },
    { type: "Pawn", icon: "♟", top: "60%", left: "15%", delay: 2 },
    { type: "Rook", icon: "♜", top: "25%", right: "12%", delay: 1 },
    { type: "Bishop", icon: "♝", bottom: "15%", right: "10%", delay: 3 },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20"
    >
      {/* Dynamic Chess Grid Background - Enhanced with subtle glow */}
      <div className="absolute inset-0 z-0 opacity-[0.07]"
           style={{
             backgroundImage: `linear-gradient(45deg, #795548 25%, transparent 25%), 
                               linear-gradient(-45deg, #795548 25%, transparent 25%), 
                               linear-gradient(45deg, transparent 75%, #795548 75%), 
                               linear-gradient(-45deg, transparent 75%, #795548 75%)`,
             backgroundSize: "120px 120px",
             backgroundPosition: "0 0, 0 60px, 60px 60px, 60px 0"
           }}
      />
      
      {/* Radial Vignette for depth */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-black/40 to-black pointer-events-none" />

      {/* Parallax Floating Pieces - Enhanced with Glow and Motion */}
      {floatingPieces.map((piece, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.05, 0.2, 0.05], 
            scale: [1, 1.05, 1],
            y: [0, -40, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 12 + i * 2, 
            repeat: Infinity, 
            delay: piece.delay,
            ease: "easeInOut" 
          }}
          className="absolute z-0 text-7xl md:text-9xl pointer-events-none select-none text-primary/15 font-serif blur-[1px] group-hover:blur-0 transition-all duration-1000"
          style={{ 
            top: piece.top, 
            left: piece.left, 
            right: piece.right, 
            bottom: piece.bottom 
          }}
        >
          {piece.icon}
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className={`container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 ${isArabic ? "rtl" : "ltr"}`}>
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-6xl relative"
          >
            {/* Elegant Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Elegant Badge */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-4 mb-12 px-8 py-3 border border-primary/20 bg-black/40 backdrop-blur-xl text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase rounded-full shadow-2xl shadow-primary/10"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              {t("hero:badge") || "The Art of Strategic Vision"}
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            </motion.div>

            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-serif font-bold text-white leading-[0.8] mb-14 tracking-tightest">
              <motion.span 
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                className="block relative inline-block mr-4"
              >
                MASTER
              </motion.span>
              <br />
              <motion.span 
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
                className="text-primary italic inline-flex items-center gap-6 relative"
              >
                YOUR <span className="text-white not-italic relative">
                  MOVE
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 origin-left"
                  />
                </span>
              </motion.span>
            </h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="relative"
            >
              <p className="text-xl md:text-3xl text-stone-400 max-w-4xl mx-auto leading-relaxed mb-20 font-light tracking-wide">
                {t("hero:description") || "In the game of branding, every move is calculated. We blend architectural precision with cinematic flair to land your business at checkmate."}
              </p>
              
              {/* Interactive Piece Counter - Visual Detail */}
              <div className="flex justify-center gap-16 mb-20 opacity-40">
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary mb-1">64</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold">Squares</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-white mb-1">32</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold">Forces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-stone-500 mb-1">01</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold">Vision</div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToContact}
                  className="group relative px-16 py-6 bg-white text-black font-serif text-2xl tracking-widest overflow-hidden rounded-sm transition-all shadow-2xl hover:shadow-primary/20"
                >
                  <span className="relative z-10 font-bold uppercase">{t("hero:ctaStart") || "Commence Game"}</span>
                  <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Ultra-Luxury Scroll Progression */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
        <motion.div 
          animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[10px] uppercase tracking-[0.8em] text-primary font-bold pl-2"
        >
          Explore
        </motion.div>
        <div className="relative w-px h-24 bg-stone-800 overflow-hidden">
          <motion.div 
            animate={{ y: [-100, 100] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;