import React, { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Lucide icons were failing to export from the installed library version.
// Using custom SVG implementations for all icons to ensure reliability.
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    // Handle form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { 
      name: "INSTAGRAM", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ), 
      link: "#" 
    },
    { 
      name: "TWITTER", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-2 1-3.3 1.2c-1.4-1.7-3.8-2.3-5.7-1.4-1.9.9-3.2 3.1-3.1 5.4C6.5 9 4 3 2 3c0 4 .5 5 1.5 6-.5 0-1 0-1.5-.2.1 2.3 2.1 4.1 4.4 4.5-.5.1-1 .1-1.5 0 .8 1.8 2.5 3.3 4.5 3.3-1.6 1.3-3.6 2-5.7 2 0 0 13 8 20-4 0-.1 0-.3 0-.4 0-.8.7-1.5 1.2-2.2z" />
        </svg>
      ), 
      link: "#" 
    },
    { 
      name: "FACEBOOK", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ), 
      link: "#" 
    },
    { 
      name: "LINKEDIN", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ), 
      link: "#" 
    },
    { 
      name: "BEHANCE", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12c0 3-2.5 3-3 3H5V5h3.5c2 0 3 1.5 3 2.5 0 2-2.5 2-2.5 2 2.5 0 2.5 2.5 2.5 2.5z" />
          <path d="M8 8.5H5.5" />
          <path d="M8 12.5H5.5" />
          <path d="M16 12c-4 0-4 4-4 4s0 4 4 4 4-4 4-4" />
          <line x1="14" y1="12" x2="20" y2="12" />
          <line x1="15" y1="8" x2="19" y2="8" />
        </svg>
      ), 
      link: "#" 
    }
  ];

  const chessCoordinates = Array.from({ length: 32 }, (_, i) => ({
    x: (i % 4) * 33.33,
    y: Math.floor(i / 4) * 33.33,
    delay: i * 0.05
  }));

  return (
    <section 
      ref={sectionRef}
      id="contact-section" 
      className="relative py-48 bg-linear-to-b from-black via-stone-950 to-black text-white overflow-hidden"
    >
      {/* Dynamic Animated Background */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Luxurious linear Orbs */}
        <div className="absolute top-0 left-0 w-200 h-200 bg-primary/5 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-150 h-150 bg-amber-500/5 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
        
        {/* Chess Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ 
            backgroundImage: `repeating-linear-linear(45deg, #795548 0px, #795548 2px, transparent 2px, transparent 8px),
                             repeating-linear-linear(135deg, #795548 0px, #795548 2px, transparent 2px, transparent 8px)`,
            backgroundSize: "40px 40px"
          }}
        />
        
        {/* Floating Chess Pieces Pattern */}
        {chessCoordinates.map((coord, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: [0, 0.03, 0], scale: [0, 1, 0.8] } : {}}
            transition={{ delay: coord.delay, duration: 3, repeat: Infinity, repeatDelay: 5 }}
            className="absolute text-8xl pointer-events-none select-none"
            style={{
              left: `${coord.x}%`,
              top: `${coord.y}%`,
              transform: `rotate(${i * 15}deg)`
            }}
          >
            {i % 2 === 0 ? "♚" : "♛"}
          </motion.div>
        ))}
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12 lg:sticky lg:top-32"
          >
            {/* Elegant Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-4"
            >
              <div className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
              <span className="text-primary font-bold tracking-[0.3em] text-[11px] uppercase">
                INITIATE PROTOCOL
              </span>
              <div className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
            </motion.div>

            {/* Main Headline with Split Animation */}
            <motion.div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[0.9] tracking-tighter">
                <motion.span 
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="block"
                >
                  READY TO
                </motion.span>
                <motion.span 
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="block relative mt-4"
                >
                  MAKE
                  <span className="text-primary relative inline-block">
                    CONTACT
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2, duration: 1 }}
                      className="absolute -bottom-4 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary to-transparent origin-left"
                    />
                  </span>
                </motion.span>
              </h2>
            </motion.div>

            {/* Description with Premium Styling */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-stone-300 max-w-lg text-xl md:text-2xl font-light leading-relaxed border-l-2 border-primary/30 pl-8"
            >
              Start a strategic conversation with us. Whether you need a full campaign production or a specific shoot location, we're ready to set the board.
            </motion.p>
            
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-8 pt-8">
              {[
                { 
                  label: "DIRECT CHANNEL", 
                  value: "checkmate@studio.com",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                  type: "email"
                },
                { 
                  label: "TACTICAL SUPPORT", 
                  value: "+1 (555) 019-8372",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  type: "phone"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.2, duration: 0.6 }}
                  className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:bg-white/10"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500 group-hover:text-primary transition-colors font-bold">
                        {item.label}
                      </span>
                      <span className="group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                    </div>
                    <div className="text-xl md:text-2xl font-serif text-white group-hover:text-primary transition-colors cursor-pointer break-all">
                      {item.value}
                    </div>
                    <div className="w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links with Enhanced Styling */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="pt-8"
            >
              <div className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-6">
                FOLLOW THE STRATEGY
              </div>
              <div className="flex flex-wrap gap-6">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-3 text-stone-400 hover:text-primary transition-all duration-300"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    <span className="text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 w-0 group-hover:w-auto overflow-hidden whitespace-nowrap">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form with Enhanced Luxury */}
          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Ultra-Luxury Glass Form Container */}
            <div className="relative bg-white/5 backdrop-blur-2xl p-8 md:p-12 lg:p-16 border border-white/10 rounded-3xl shadow-2xl overflow-hidden group">
              {/* Animated Border linear */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Corner Ornaments */}
              <div className="absolute top-6 right-6 w-20 h-20">
                <div className="absolute top-0 right-0 w-12 h-px bg-linear-to-l from-primary/50 to-transparent" />
                <div className="absolute top-0 right-0 w-px h-12 bg-linear-to-b from-primary/50 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 w-20 h-20">
                <div className="absolute bottom-0 left-0 w-12 h-px bg-linear-to-r from-primary/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-px h-12 bg-linear-to-t from-primary/50 to-transparent" />
              </div>
              
              {/* Header */}
              <div className="relative z-10 space-y-8 mb-12">
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-[0.5em] font-black text-primary block">
                      TRANSMISSION FORM
                    </span>
                    <span className="text-xs text-stone-500">Encrypted • Secure Channel</span>
                  </div>
                  <motion.span 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-white/10 text-4xl font-serif"
                  >
                    0x7F
                  </motion.span>
                </div>
              </div>

              {/* Form */}
              <form className="relative z-10 space-y-10" onSubmit={handleSubmit}>
                <div className="group relative">
                  <label className="block text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-3 transition-all group-focus-within:text-primary font-bold">
                    GRANDMASTER IDENTITY
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-white/10 focus:border-primary py-4 text-lg md:text-xl text-white outline-none transition-all placeholder:text-stone-800 focus:pl-4"
                      placeholder="Your full name"
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-focus-within:w-full transition-all duration-500" />
                  </div>
                </div>
                
                <div className="group relative">
                  <label className="block text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-3 transition-all group-focus-within:text-primary font-bold">
                    BEACON PROTOCOL
                  </label>
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-white/10 focus:border-primary py-4 text-lg md:text-xl text-white outline-none transition-all placeholder:text-stone-800 focus:pl-4"
                      placeholder="name@domain.com"
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-focus-within:w-full transition-all duration-500" />
                  </div>
                </div>
                
                <div className="group relative">
                  <label className="block text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-3 transition-all group-focus-within:text-primary font-bold">
                    THE STRATEGIC BRIEF
                  </label>
                  <div className="relative">
                    <textarea 
                      rows="4" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-white/10 focus:border-primary py-4 text-lg md:text-xl text-white outline-none transition-all resize-none placeholder:text-stone-800 focus:pl-4"
                      placeholder="Describe your vision, strategy, or maneuver..."
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-focus-within:w-full transition-all duration-500" />
                  </div>
                </div>
                
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full overflow-hidden bg-linear-to-r from-primary to-amber-600 py-6 text-black font-black uppercase tracking-[0.3em] text-xs md:text-sm rounded-2xl shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    {isSubmitted ? (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        MESSAGE TRANSMITTED
                      </>
                    ) : (
                      <>
                        INITIATE MOVE
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </motion.div>
                      </>
                    )}
                  </span>
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-white"
                  />
                </motion.button>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-primary text-sm font-medium"
                  >
                    Your strategic move has been received. Our team will respond within 24 hours.
                  </motion.div>
                )}
              </form>

              {/* Decorative Chess Piece */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 opacity-[0.03] select-none pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="text-[20rem] leading-none"
                >
                  ♚
                </motion.div>
              </div>
            </div>

            {/* Floating Accent Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 border border-primary/20 rounded-full"
            />
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-40 h-40 border border-amber-500/20 rounded-full"
            />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;