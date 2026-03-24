import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const locationsData = [
  {
    id: "rooks-corner",
    name: "The Rook's Corner",
    subtitle: "Downtown Studio",
    description: "An industrial space characterized by raw brick walls, exposed beams, and dramatic natural lighting. Perfect for edgy, urban productions with authentic character.",
    stats: { area: "2,500 sq ft", capacity: "50 guests", ceiling: "18 ft" },
    images: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1598305090518-e3db79c29cc3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1200",
    ]
  },
  {
    id: "knights-hall",
    name: "Knight's Hall",
    subtitle: "Westside Loft",
    description: "Minimalist and bright, this space offers pure white cycloramas and perfect structural symmetry. Ideal for fashion, product, and clean editorial work.",
    stats: { area: "3,200 sq ft", capacity: "75 guests", ceiling: "20 ft" },
    images: [
      "https://images.unsplash.com/photo-1600607686027-6cb2cc80e227?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1628102491629-77858abce1b9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1200",
    ]
  },
  {
    id: "queens-gambit",
    name: "Queen's Gambit",
    subtitle: "Penthouse Suite",
    description: "Our premium location featuring mid-century modern furniture, moody dark walls, and gold accents. The ultimate setting for luxury and high-end productions.",
    stats: { area: "4,000 sq ft", capacity: "100 guests", ceiling: "22 ft" },
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    ]
  }
];

const Locations = () => {
  const [activeTab, setActiveTab] = useState(locationsData[0].id);
  const [expandedImage, setExpandedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const activeLocation = locationsData.find(loc => loc.id === activeTab);
  const activeIndex = locationsData.findIndex(loc => loc.id === activeTab);

  useEffect(() => {
    if (expandedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [expandedImage]);

  const openLightbox = (img, index) => {
    setExpandedImage(img);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setExpandedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % activeLocation.images.length;
    setCurrentImageIndex(nextIndex);
    setExpandedImage(activeLocation.images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + activeLocation.images.length) % activeLocation.images.length;
    setCurrentImageIndex(prevIndex);
    setExpandedImage(activeLocation.images[prevIndex]);
  };

  const chessCoordinates = Array.from({ length: 32 }, (_, i) => ({
    x: (i % 8) * 12.5,
    y: Math.floor(i / 8) * 12.5,
    delay: i * 0.05
  }));

  return (
    <section 
      ref={sectionRef}
      id="locations" 
      className="relative py-48 bg-linear-to-b from-black via-stone-950 to-black text-white overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Luxurious Gradient Orbs */}
        <div className="absolute top-40 right-20 w-150 h-150 bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-40 left-20 w-125 h-125 bg-amber-500/5 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
        
        {/* Chess Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: `repeating-linear-gradient(45deg, #795548 0px, #795548 1px, transparent 1px, transparent 30px),
                             repeating-linear-gradient(135deg, #795548 0px, #795548 1px, transparent 1px, transparent 30px)`,
            backgroundSize: "50px 50px"
          }}
        />
        
        {/* Floating Chess Pieces */}
        {chessCoordinates.map((coord, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.03, 0], scale: [0, 1, 0.8] }}
            transition={{ delay: coord.delay, duration: 3, repeat: Infinity, repeatDelay: 8 }}
            className="absolute text-7xl pointer-events-none select-none"
            style={{
              left: `${coord.x}%`,
              top: `${coord.y}%`,
              transform: `rotate(${i * 22.5}deg)`
            }}
          >
            {i % 2 === 0 ? "♜" : "♞"}
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative large text bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] md:text-[15vw] font-serif font-black opacity-[0.02] select-none pointer-events-none uppercase text-white whitespace-nowrap">
        ARENA
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Navigation & Info */}
          <div className="lg:col-span-5 space-y-12 lg:space-y-16">
            {/* Header */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-4"
              >
                <div className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
                <span className="text-primary font-bold tracking-[0.3em] text-[11px] uppercase">
                  ARCHITECTURAL SPHERES
                </span>
                <div className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[0.9] tracking-tighter"
              >
                <span className="block">LOCATIONS</span>
                <span className="text-primary italic font-normal mt-2 block relative">
                  NODES
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute -bottom-3 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary to-transparent origin-left"
                  />
                </span>
              </motion.h2>
            </div>

            {/* Location Navigation */}
            <div className="flex flex-col items-start gap-4">
              {locationsData.map((loc, idx) => (
                <motion.button
                  key={loc.id}
                  onClick={() => setActiveTab(loc.id)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className={`group relative w-full text-left transition-all duration-500 ${
                    activeTab === loc.id ? "translate-x-4" : "opacity-40 hover:opacity-80"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`h-px transition-all duration-500 ${
                      activeTab === loc.id ? "w-16 bg-primary" : "w-8 bg-white/30 group-hover:w-12"
                    }`} />
                    <div>
                      <div className={`text-2xl md:text-3xl font-serif transition-all duration-500 ${
                        activeTab === loc.id ? "text-primary font-bold" : "text-white group-hover:text-stone-300"
                      }`}>
                        {loc.name}
                      </div>
                      <div className="text-[9px] uppercase tracking-[0.3em] font-bold mt-1 text-stone-500 group-hover:text-primary transition-colors">
                        {loc.subtitle}
                      </div>
                    </div>
                  </div>
                  {activeTab === loc.id && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Location Description with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="pt-8 space-y-8 border-t border-white/10"
              >
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed italic border-l-2 border-primary/30 pl-6">
                    "{activeLocation.description}"
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {Object.entries(activeLocation.stats).map(([key, value], i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="text-center p-3 bg-white/5 rounded-xl border border-white/5"
                      >
                        <div className="text-xs uppercase tracking-wider text-stone-500 mb-1">{key}</div>
                        <div className="text-sm font-semibold text-white">{value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-4"
                >
                  <button className="group flex items-center gap-2 text-primary text-sm uppercase tracking-wider hover:gap-4 transition-all">
                    <span>Explore Space</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Gallery */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 80, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Main Image Container */}
                <div className="relative h-125 md:h-150 lg:h-175 w-full bg-stone-900 overflow-hidden rounded-3xl shadow-2xl border border-white/10 group">
                  {/* Main Image with Ken Burns Effect */}
                  <motion.div 
                    className="w-full h-full cursor-zoom-in overflow-hidden"
                    onClick={() => openLightbox(activeLocation.images[0], 0)}
                  >
                    <motion.img
                      key={`main-${activeTab}`}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5 }}
                      src={activeLocation.images[0]}
                      alt={activeLocation.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                  
                  {/* Overlay Gradients */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Location Badge */}
                  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-primary/30">
                    <span className="text-primary text-xs font-bold tracking-wider">{activeLocation.subtitle}</span>
                  </div>
                  
                  {/* Navigation Arrows */}
                  {isHovering && (
                    <>
                      <button
                        onClick={() => {
                          const prevIndex = (activeIndex - 1 + locationsData.length) % locationsData.length;
                          setActiveTab(locationsData[prevIndex].id);
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                      >
                        <svg className="w-6 h-6 text-white group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          const nextIndex = (activeIndex + 1) % locationsData.length;
                          setActiveTab(locationsData[nextIndex].id);
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                      >
                        <svg className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                  
                  {/* Counter */}
                  <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-stone-400">
                    {activeIndex + 1} / {locationsData.length}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-3 mt-6">
                  {activeLocation.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      onClick={() => openLightbox(img, idx)}
                      className="relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300"
                      style={{ borderColor: idx === currentImageIndex ? '#795548' : 'rgba(255,255,255,0.1)' }}
                    >
                      <img 
                        src={img} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        alt={`View ${idx + 1}`}
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Geometric Accents */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border border-primary/10 rotate-12 -z-10 hidden lg:block" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border border-primary/10 -z-10 hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/98 backdrop-blur-3xl cursor-zoom-out"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-7xl max-h-screen w-full mx-4 md:mx-12"
              onClick={e => e.stopPropagation()}
            >
              {/* Main Image */}
              <img 
                src={expandedImage} 
                className="max-w-full max-h-[85vh] mx-auto object-contain rounded-2xl shadow-2xl" 
                alt="Expanded view" 
              />
              
              {/* Navigation Buttons */}
              {activeLocation.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute -top-12 right-0 md:-right-12 text-white/50 hover:text-white transition-colors p-2 group"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image Counter */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white">
                {currentImageIndex + 1} / {activeLocation.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .stroke-text-white {
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.8);
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 12s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Locations;