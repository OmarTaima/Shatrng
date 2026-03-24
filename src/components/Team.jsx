import React, { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

const teamData = [
  {
    id: 1,
    name: "Alex Vance",
    role: "Creative Director",
    bio: "The grandmaster of visual storytelling with 15+ years orchestrating brand identities. His strategic vision transforms concepts into cultural moments.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    piece: "King",
    pieceIcon: "♔",
    expertise: ["Strategy", "Vision", "Leadership"],
    social: { linkedin: "#", instagram: "#" }
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Lead Photographer",
    bio: "Her eye for dramatic lighting and precise framing ensures every shot hits the mark. Master of chiaroscuro and cinematic composition.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    piece: "Queen",
    pieceIcon: "♕",
    expertise: ["Lighting", "Composition", "Cinematography"],
    social: { linkedin: "#", instagram: "#" }
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Set Designer",
    bio: "Builds the architectural foundations of our shoots, bringing concept to reality. His sets are architectural masterpieces in themselves.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    piece: "Rook",
    pieceIcon: "♖",
    expertise: ["Architecture", "Spatial Design", "Construction"],
    social: { linkedin: "#", instagram: "#" }
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Stylist & Casting",
    bio: "Calculates the dynamic movements and stylistic choices that elevate the final frame. Her eye for talent and aesthetics is unmatched.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    piece: "Knight",
    pieceIcon: "♘",
    expertise: ["Styling", "Casting", "Trend Forecasting"],
    social: { linkedin: "#", instagram: "#" }
  }
];

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const chessCoordinates = Array.from({ length: 32 }, (_, i) => ({
    x: (i % 8) * 12.5,
    y: Math.floor(i / 8) * 12.5,
    isBlack: (Math.floor(i / 8) + (i % 8)) % 2 === 1,
    delay: i * 0.05
  }));

  return (
    <section 
      ref={sectionRef}
      id="team" 
      className="relative py-40 bg-white text-black overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Footer-Style Premium Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ 
            backgroundImage: `repeating-linear-gradient(45deg, #c58940 0px, #c58940 1px, transparent 1px, transparent 40px),
                             repeating-linear-gradient(135deg, #c58940 0px, #c58940 1px, transparent 1px, transparent 40px)`,
            backgroundSize: "60px 60px"
          }}
        />

        {/* Floating Gold Dust Orbs */}
        <div className="absolute top-40 left-20 w-125 h-125 bg-primary/10 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-40 right-20 w-150 h-150 bg-primary/15 rounded-full blur-[160px] animate-pulse-slow animation-delay-2000" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
              <span className="text-primary font-bold tracking-[0.3em] text-[11px] uppercase">
                THE STRATEGIC COUNCIL
              </span>
              <div className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cinzel font-black text-black leading-[0.9] tracking-tighter"
            >
              THE
              <span className="text-primary italic mx-3 relative inline-block">
                COUNCIL
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary to-transparent origin-left"
                />
              </span>
              <br />
              OF MASTERS
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
            className="hidden md:block relative"
          >
            <div className="w-24 h-24 border-2 border-black rotate-45 flex items-center justify-center">
              <div className="w-12 h-12 border border-primary rotate-12" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/10 rounded-full" />
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-linear-to-r from-stone-200 via-stone-300 to-stone-200 p-px rounded-3xl overflow-hidden shadow-2xl">
          {teamData.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onHoverStart={() => setHoveredMember(member.id)}
              onHoverEnd={() => setHoveredMember(null)}
              className="group relative bg-white hover:bg-black transition-all duration-700 h-125 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                  src={member.image} 
                  alt={member.name}
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredMember === member.id ? 1.1 : 1 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-transparent group-hover:from-black/80 group-hover:via-black/60 group-hover:to-transparent transition-all duration-700" />
              </div>

              {/* Chess Piece Icon - Floating */}
              <motion.div 
                animate={{ 
                  y: hoveredMember === member.id ? [0, -10, 0] : 0,
                  rotate: hoveredMember === member.id ? [0, 5, -5, 0] : 0
                }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 right-6 text-4xl text-primary/30 group-hover:text-primary/50 transition-all duration-500 z-20"
              >
                {member.pieceIcon}
              </motion.div>

              {/* Top Section */}
              <div className="relative z-10 p-8">
                <motion.span 
                  animate={{ x: hoveredMember === member.id ? 10 : 0 }}
                  className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-2 block"
                >
                  {member.piece}
                </motion.span>
                <h3 className="text-3xl font-serif font-black tracking-tighter text-black group-hover:text-white transition-colors duration-500 leading-tight">
                  {member.name.split(' ')[0]} <br/>
                  <span className="italic font-normal text-stone-600 group-hover:text-stone-300 transition-colors">
                    {member.name.split(' ')[1]}
                  </span>
                </h3>
              </div>

              {/* Center - Expertise Tags (appears on hover) */}
              <AnimatePresence>
                {hoveredMember === member.id && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8 z-20"
                  >
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="px-3 py-1 bg-primary/20 backdrop-blur-md text-primary text-xs font-bold rounded-full border border-primary/30"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Section */}
              <div className="relative z-10 p-8 mt-auto">
                <motion.div 
                  animate={{ width: hoveredMember === member.id ? "100%" : "48px" }}
                  className="h-px bg-linear-to-r from-primary to-transparent mb-6 transition-all duration-500"
                />
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 group-hover:text-primary transition-colors">
                  {member.role}
                </h4>
                <p className="text-sm text-stone-500 font-sans leading-relaxed group-hover:text-stone-300 transition-colors line-clamp-3">
                  {member.bio}
                </p>
                
                {/* Social Links */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: hoveredMember === member.id ? 1 : 0, y: hoveredMember === member.id ? 0 : 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-4 mt-6"
                >
                  <a href="#" className="text-stone-400 hover:text-primary transition-colors text-sm">
                    LinkedIn
                  </a>
                  <a href="#" className="text-stone-400 hover:text-primary transition-colors text-sm">
                    Instagram
                  </a>
                </motion.div>
                
                {/* Decorative Element */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-3xl font-serif italic text-stone-200 group-hover:text-white/10 transition-colors">
                    {member.pieceIcon}
                  </span>
                  <span className="text-[8px] uppercase tracking-wider text-stone-300 group-hover:text-stone-500">
                    Strategic Asset
                  </span>
                </div>
              </div>

              {/* Hover Border Effect */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredMember === member.id ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-primary via-amber-500 to-primary origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20 pt-12 border-t border-stone-200"
        >
          <p className="text-stone-500 text-lg mb-6 max-w-2xl mx-auto">
            Each member of our council brings unique strategic value to the board. 
            Together, we form an unstoppable force in creative production.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-primary transition-all duration-500"
          >
            <span className="text-sm uppercase tracking-wider font-bold">Meet the Full Council</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 w-64 h-64 opacity-[0.03] pointer-events-none select-none"
      >
        <div className="text-[15rem] leading-none">♔</div>
      </motion.div>
      
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -top-20 -right-20 w-80 h-80 opacity-[0.03] pointer-events-none select-none"
      >
        <div className="text-[18rem] leading-none">♕</div>
      </motion.div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Team;