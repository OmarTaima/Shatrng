import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../i18n/hooks/useTranslation";

const About = () => {
  const { t, isArabic } = useTranslation();

  return (
    <section id="about" className="relative py-40 bg-white text-black overflow-hidden">
      {/* Texture Background - Refined Editorial Pattern */}
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-stone-50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.05]"
           style={{ backgroundImage: "linear-gradient(#795548 1px, transparent 1px), linear-gradient(90deg, #795548 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className={`container relative z-10 mx-auto px-4 md:px-8 max-w-360 ${isArabic ? "rtl" : "ltr"}`}>
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          
          <div className="relative space-y-16">
            <div className="absolute -left-20 top-0 w-px h-full bg-stone-100 hidden xl:block" />
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-6 text-primary font-bold tracking-[0.4em] text-[10px] uppercase"
              >
                <div className="w-16 h-px bg-primary/30" />
                {t("about:badge") || "The Calculus of Art"}
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-black leading-[0.85] tracking-tightest"
              >
                EVERY <br/> DETAIL, <br/>
                <span className="text-transparent stroke-text italic font-normal tracking-normal relative">
                  STRATEGIC
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 origin-left"
                  />
                </span>
              </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-10 max-w-2xl"
            >
              <p className="text-2xl text-stone-600 leading-relaxed font-sans font-light tracking-wide">
                We view creative production through the lens of a <span className="text-black font-semibold">grandmaster</span>. Each frame, each lighting setup, and each stylistic choice is a deliberate step toward an undeniable outcome.
              </p>
              
              <div className="w-24 h-px bg-stone-200" />

              <p className="text-lg text-stone-500 leading-loose font-sans font-light italic">
                Our studio doesn't just "take photos." We architect environments. We calculate visual paths. We ensure that when your brand takes the board, the results are <span className="not-italic text-stone-800">inevitable</span>.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-10 flex flex-wrap gap-20"
            >
             
              
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-225 flex items-center justify-center p-4"
          >
            {/* Ultra-Luxury Geometric Card */}
            <div className="relative w-full h-full bg-black flex flex-col justify-between items-start group overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
               {/* High-End Background Effects */}
               <div className="absolute inset-0 bg-stone-900 overflow-hidden">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ repeat: Infinity, duration: 20 }}
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628102491629-77858abce1b9?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
               </div>

               <div className="relative z-10 w-full p-12 flex justify-between items-start">
                  <div className="text-6xl font-serif text-white/10 group-hover:text-white transition-colors duration-700">01</div>
                  <motion.div 
                    whileHover={{ rotate: 90 }}
                    className="w-20 h-20 border border-primary/30 rounded-full flex items-center justify-center text-primary text-3xl transition-all duration-700 backdrop-blur-md hover:bg-primary/10"
                  >
                    ♙
                  </motion.div>
               </div>

               <div className="relative z-10 p-12 w-full">
                 <h3 className="text-5xl font-serif text-white mb-6 group-hover:text-primary transition-colors duration-500">Meticulous <br/> Framing</h3>
                 <p className="text-stone-400 text-xl font-sans leading-relaxed max-w-sm mb-12">
                   We treat architectural photography as an exercise in structural logic. Each angle is audited for balance, tension, and clarity.
                 </p>
                 
                 <div className="relative w-full overflow-hidden h-64 grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-sm border border-white/5">
                    <img src="https://images.unsplash.com/photo-1628102491629-77858abce1b9?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Detail" />
                 </div>
               </div>

               {/* Absolute Accents */}
               <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-primary/40 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-1000" />
            </div>

            {/* Premium Floating Badge */}
            <motion.div 
               animate={{ y: [0, -30, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="absolute -bottom-16 -left-16 w-64 h-64 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-10 border border-stone-50 z-20 flex flex-col items-center justify-center text-center xl:flex"
            >
              <div className="w-full h-full border border-primary/10 flex flex-col items-center justify-center">
                 <span className="text-primary text-5xl mb-4 italic serif">V.</span>
                 <span className="text-[10px] uppercase tracking-[0.6em] font-black text-black">Studio Verified</span>
                 <div className="mt-4 w-8 h-px bg-primary/40" />
              </div>
            </motion.div>

            {/* Floating Geometric Elements */}
            <div className="absolute top-20 right-20 w-32 h-32 border border-primary/5 rotate-12 -z-10" />
            <div className="absolute bottom-40 -right-20 w-64 h-64 rounded-full border border-primary/5 -z-10" />
          </motion.div>

        </div>
      </div>
      
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #121212;
        }
      `}</style>
    </section>
  );
};

export default About;