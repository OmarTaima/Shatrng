import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail("");
    }
  };

  const navigationLinks = [
    { name: "Home", href: "#home", icon: "♔" },
    { name: "Philosophy", href: "#about", icon: "♕" },
    { name: "Nodes", href: "#locations", icon: "♖" },
    { name: "The Council", href: "#team", icon: "♘" }
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      href: "#", 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      href: "#", 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    { 
      name: "Twitter", 
      href: "#", 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-2 1-3.3 1.2c-1.4-1.7-3.8-2.3-5.7-1.4-1.9.9-3.2 3.1-3.1 5.4C6.5 9 4 3 2 3c0 4 .5 5 1.5 6-.5 0-1 0-1.5-.2.1 2.3 2.1 4.1 4.4 4.5-.5.1-1 .1-1.5 0 .8 1.8 2.5 3.3 4.5 3.3-1.6 1.3-3.6 2-5.7 2 0 0 13 8 20-4 0-.1 0-.3 0-.4 0-.8.7-1.5 1.2-2.2z" />
        </svg>
      )
    },
    { 
      name: "Behance", 
      href: "#", 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12c0 3-2.5 3-3 3H5V5h3.5c2 0 3 1.5 3 2.5 0 2-2.5 2-2.5 2 2.5 0 2.5 2.5 2.5 2.5z" />
          <path d="M8 8.5H5.5" />
          <path d="M8 12.5H5.5" />
          <path d="M16 12c-4 0-4 4-4 4s0 4 4 4 4-4 4-4" />
          <line x1="14" y1="12" x2="20" y2="12" />
          <line x1="15" y1="8" x2="19" y2="8" />
        </svg>
      )
    }
  ];

  return (
    <footer 
      className="relative bg-[#0c0908] text-white pt-32 pb-16 overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-125 h-125 bg-primary/10 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-150 h-150 bg-primary/10 rounded-full blur-[160px] animate-pulse-slow animation-delay-2000" />
        
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ 
            backgroundImage: `repeating-linear-gradient(45deg, #c58940 0px, #c58940 1px, transparent 1px, transparent 40px),
                             repeating-linear-gradient(135deg, #c58940 0px, #c58940 1px, transparent 1px, transparent 40px)`,
            backgroundSize: "60px 60px"
          }}
        />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: [0, 0.03, 0], y: [100, -100, -300] }}
            transition={{ duration: 15 + i * 2, repeat: Infinity, delay: i * 2 }}
            className="absolute text-6xl pointer-events-none select-none"
            style={{
              left: `${10 + i * 12}%`,
              bottom: "-50px"
            }}
          >
            {i % 2 === 0 ? "♚" : "♛"}
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-1 md:col-span-4 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-5xl lg:text-6xl font-serif font-bold text-white leading-none">
                SHTARNG<span className="text-primary">.</span>
              </h3>
              <div className="w-16 h-px bg-primary/40" />
            </div>
            <p className="text-stone-400 text-lg font-light leading-relaxed max-w-sm">
              Architecting visual dominance through strategic creative execution. We don't just capture moments; we orchestrate inevitable outcomes.
            </p>
            
            <div className="flex gap-2 pt-4">
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={i} 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`w-2 h-2 transition-all duration-300 ${
                    i < 3 ? 'bg-primary shadow-[0_0_8px_rgba(var(--color-primary),0.5)]' : 'bg-white/10'
                  }`} 
                />
              ))}
            </div>

            <div className="pt-6">
              <h4 className="text-[9px] uppercase tracking-[0.3em] text-stone-500 font-bold mb-4">
                Strategic Intelligence
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="relative max-w-xs group">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-stone-700 focus:border-primary/50 focus:outline-none transition-all duration-500 focus:bg-white/10"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-primary text-black text-xs font-black uppercase tracking-wider rounded-lg hover:bg-white transition-all duration-500 shadow-lg"
                >
                  {isSubmitted ? "✓" : "→"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-1 md:col-span-2 space-y-8"
          >
            <h4 className="text-[9px] uppercase tracking-[0.3em] text-primary font-bold border-b border-primary/30 pb-3 inline-block">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navigationLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-3 text-stone-400 hover:text-primary transition-all duration-300 text-sm font-light"
                  >
                    <span className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">{link.icon}</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-500 tracking-wide">{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connection */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 md:col-span-2 space-y-8"
          >
            <h4 className="text-[9px] uppercase tracking-[0.3em] text-primary font-bold border-b border-primary/30 pb-3 inline-block">
              Connection
            </h4>
            <ul className="space-y-4">
              {socialLinks.map((social, i) => (
                <motion.li 
                  key={social.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <a 
                    href={social.href} 
                    className="group flex items-center gap-4 text-stone-400 hover:text-primary transition-all duration-500 text-sm font-light"
                  >
                    <span className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">{social.icon}</span>
                    <span className="tracking-wide group-hover:translate-x-1 transition-transform duration-500">{social.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Context Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-1 md:col-span-4 space-y-8"
          >
            <h4 className="text-[9px] uppercase tracking-[0.3em] text-primary font-bold border-b border-primary/30 pb-3 inline-block">
              The Grand Brief
            </h4>
            <div className="space-y-6">
              <p className="text-stone-400 text-sm italic font-light leading-relaxed border-l border-primary/20 pl-6 py-2">
                "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat."
              </p>
              <div className="pt-2">
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--color-primary),0.5)]" />
                  <span className="text-[10px] uppercase tracking-[.25em] font-black text-stone-500 group-hover:text-primary transition-colors duration-500">
                    Active HQ: NEW YORK • LONDON • DUBAI
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
            <p className="text-stone-600 text-[9px] lg:text-[10px] uppercase tracking-[0.4em] font-black">
              &copy; {currentYear} SHTARNG STUDIO — ALL RIGHTS RESERVED
            </p>
            <div className="flex gap-6 lg:gap-8">
               <a href="#" className="text-stone-800 text-[9px] uppercase tracking-[0.35em] font-bold hover:text-primary transition-all duration-500">Privacy Protocol</a>
               <a href="#" className="text-stone-800 text-[9px] uppercase tracking-[0.35em] font-bold hover:text-primary transition-all duration-500">Service Terms</a>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 h-6">
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: 2 }}
                whileInView={{ height: [2, 12, 4, 16, 2] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
                className={`w-px ${i % 4 === 0 ? 'bg-primary/40' : 'bg-stone-800'}`}
              />
            ))}
            
            <motion.button
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-6 w-10 h-10 bg-linear-to-br from-primary to-amber-600 text-black rounded-lg flex items-center justify-center shadow-2xl transition-all duration-500 group"
            >
              <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 12s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;