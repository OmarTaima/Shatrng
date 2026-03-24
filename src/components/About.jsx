import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "../i18n/hooks/useTranslation";

const About = () => {
  const { t, isArabic } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const strategicPoints = [
    { 
      title: "Meticulous Framing", 
      subtitle: "Architectural Precision",
      description: "We treat creative production as an exercise in structural logic. Each angle is audited for balance, tension, and clarity.",
      icon: "♙",
      image: "https://images.unsplash.com/photo-1628102491629-77858abce1b9?auto=format&fit=crop&q=80&w=800",
      color: "primary"
    },
    { 
      title: "Strategic Lighting", 
      subtitle: "Cinematic Approach",
      description: "Every shadow and highlight is calculated to create depth, drama, and narrative impact in every frame.",
      icon: "♝",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
      color: "amber"
    },
    { 
      title: "Precision Editing", 
      subtitle: "Refined Excellence",
      description: "Post-production is where strategy meets execution. Every pixel is optimized for maximum impact.",
      icon: "♜",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
      color: "stone"
    }
  ];

  const chessCoordinates = Array.from({ length: 48 }, (_, i) => ({
    x: (i % 8) * 12.5,
    y: Math.floor(i / 8) * 12.5,
    isBlack: (Math.floor(i / 8) + (i % 8)) % 2 === 1,
    delay: i * 0.05
  }));

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-48 bg-linear-to-b from-stone-50 via-white to-stone-50 text-black overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Luxurious linear Orbs */}
        <div className="absolute top-20 right-20 w-150 h-150 bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-125 h-125 bg-amber-500/5 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000" />
        
        {/* Sophisticated Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ 
            backgroundImage: `repeating-linear-linear(45deg, #795548 0px, #795548 1px, transparent 1px, transparent 20px),
                             repeating-linear-linear(135deg, #795548 0px, #795548 1px, transparent 1px, transparent 20px)`,
            backgroundSize: "40px 40px"
          }}
        />
        
        {/* Floating Chess Grid Background */}
        <div className="absolute inset-0 overflow-hidden">
          {chessCoordinates.map((coord, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: coord.isBlack ? 0.03 : 0.02, scale: 1 } : {}}
              transition={{ delay: coord.delay * 0.1, duration: 0.8 }}
              className="absolute w-[12.5%] h-[12.5%] border border-black/5"
              style={{
                left: `${coord.x}%`,
                top: `${coord.y}%`,
                backgroundColor: coord.isBlack ? 'rgba(121, 85, 72, 0.05)' : 'transparent'
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className={`container relative z-10 mx-auto px-4 md:px-8 max-w-7xl ${isArabic ? "rtl" : "ltr"}`}>
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          
          {/* Left Column - Content */}
          <div className="relative space-y-12 lg:sticky lg:top-32">
            {/* Elegant Corner Accent */}
            <div className="absolute -left-8 top-0 w-px h-32 bg-linear-to-b from-primary/0 via-primary/30 to-primary/0 hidden xl:block" />
            
            {/* Badge with Animation */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-4"
            >
              <div className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
              <span className="text-primary font-bold tracking-[0.3em] text-[11px] uppercase">
                {t("about:badge") || "The Calculus of Art"}
              </span>
              <div className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
            </motion.div>
            
            {/* Main Headline with Split Animation */}
            <motion.h2 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-black leading-[0.9] tracking-tighter"
            >
              <motion.span 
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="block"
              >
                EVERY
              </motion.span>
              <motion.span 
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="block mt-2"
              >
                DETAIL,
              </motion.span>
              <motion.span 
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
                className="block mt-4 relative"
              >
                <span className="text-transparent stroke-text-black italic font-normal tracking-normal relative">
                  STRATEGIC
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 1.2 }}
                    className="absolute -bottom-3 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary to-transparent origin-left"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] tracking-[0.3em] text-primary/50 uppercase whitespace-nowrap"
                  >
                    Grandmaster Approach
                  </motion.div>
                </span>
              </motion.span>
            </motion.h2>
            
            {/* Description with Premium Styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="space-y-8 max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-light tracking-wide border-l-2 border-primary/30 pl-8">
                We view creative production through the lens of a <span className="text-black font-semibold relative inline-block">
                  grandmaster
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/30 origin-left"
                  />
                </span>. Each frame, each lighting setup, and each stylistic choice is a deliberate step toward an undeniable outcome.
              </p>
              
              <div className="w-20 h-px bg-linear-to-r from-primary/50 to-transparent" />

              <p className="text-base md:text-lg text-stone-600 leading-relaxed font-light italic">
                Our studio doesn't just "take photos." We architect environments. We calculate visual paths. We ensure that when your brand takes the board, the results are <span className="not-italic text-stone-800 font-medium">inevitable</span>.
              </p>
            </motion.div>
            
            {/* Strategic Pillars */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="pt-8 grid grid-cols-3 gap-4"
            >
              {[
                { label: "Strategic Vision", value: "100%", icon: "♔" },
                { label: "Precision Execution", value: "99.9%", icon: "♕" },
                { label: "Client Success", value: "98%", icon: "♖" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 bg-stone-50/50 backdrop-blur-sm rounded-2xl border border-stone-200/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">{item.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 mt-1">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Interactive Cards */}
          <div className="space-y-8">
            {strategicPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Premium Card */}
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl">
                  {/* Background Image with Parallax */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div 
                      animate={{ scale: hoveredCard === index ? 1.1 : 1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                      style={{ backgroundImage: `url(${point.image})` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-white/90 group-hover:from-white/90 group-hover:via-white/80 group-hover:to-white/70 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="space-y-2">
                        <motion.div 
                          animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                          transition={{ duration: 0.6 }}
                          className="text-5xl md:text-6xl text-primary/30 group-hover:text-primary transition-colors duration-500"
                        >
                          {point.icon}
                        </motion.div>
                        <div className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-bold">
                          {point.subtitle}
                        </div>
                      </div>
                      <div className="text-4xl font-serif text-stone-200 group-hover:text-primary/20 transition-colors duration-500">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4 group-hover:text-primary transition-colors duration-500">
                      {point.title}
                    </h3>
                    
                    <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-6">
                      {point.description}
                    </p>
                    
                    <motion.div 
                      animate={{ x: hoveredCard === index ? 10 : 0 }}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider"
                    >
                      <span>Explore Philosophy</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Decorative Bottom Border */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredCard === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-primary via-amber-500 to-primary origin-left"
                  />
                </div>
              </motion.div>
            ))}

            {/* Philosophy Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="relative p-8 md:p-10 bg-linear-to-br from-stone-900 to-black rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="text-primary text-6xl mb-6">"</div>
                <p className="text-white text-xl md:text-2xl font-light leading-relaxed italic mb-6">
                  In chess, as in creativity, the most beautiful moves are often the most unexpected. We find beauty in precision and power in subtlety.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold">Alexander Petrov</div>
                    <div className="text-stone-400 text-sm">Creative Director & Grandmaster</div>
                  </div>
                  <div className="text-primary text-4xl">♔</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Premium Floating Element */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-20 w-96 h-96 opacity-[0.03] pointer-events-none select-none"
      >
        <div className="text-[30rem] leading-none">♞</div>
      </motion.div>

      <style jsx>{`
        .stroke-text-black {
          -webkit-text-stroke: 1.5px #121212;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default About;