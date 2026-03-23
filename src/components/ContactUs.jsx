import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section id="contact-section" className="relative py-48 bg-dark-900 text-white overflow-hidden">
      {/* Cinematic Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(121,85,72,0.1),transparent_60%)] opacity-50" />
      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: "linear-gradient(#795548 1px, transparent 1px), linear-gradient(90deg, #795548 1px, transparent 1px)", backgroundSize: "80px 80px" }}
      />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-360">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-16"
          >
            <div className="space-y-8">
               <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-6 text-primary font-bold tracking-[0.4em] text-[10px] uppercase"
              >
                <div className="w-16 h-px bg-primary/30" />
                INITIATE PROTOCOL
              </motion.div>

              <h2 className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.85] tracking-tightest">
                READY TO <br/>
                <span className="text-transparent stroke-text-white italic font-normal">MAKE CONTACT?</span>
              </h2>
            </div>

            <p className="text-stone-400 max-w-lg text-2xl font-sans font-light leading-relaxed border-l border-primary/20 pl-10">
              Start a strategic conversation with us. Whether you need a full campaign production or a specific shoot location, we're ready to set the board.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-12 pt-10">
              <div className="group space-y-4">
                <div className="text-[10px] uppercase tracking-[0.4em] text-stone-600 font-bold group-hover:text-primary transition-colors">Direct Channel</div>
                <div className="text-2xl font-serif text-white hover:text-primary transition-colors cursor-pointer">checkmate@studio.com</div>
              </div>

              <div className="group space-y-4">
                <div className="text-[10px] uppercase tracking-[0.4em] text-stone-600 font-bold group-hover:text-primary transition-colors">Tactical Support</div>
                <div className="text-2xl font-serif text-white hover:text-primary transition-colors cursor-pointer">+1 (555) 019-8372</div>
              </div>
            </div>

            <div className="pt-12 flex gap-8 grayscale opacity-20">
               {["IG", "TW", "FB", "LN"].map((social) => (
                 <span key={social} className="text-xs font-bold tracking-widest hover:text-primary transition-colors cursor-pointer">{social}</span>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Ultra-Luxury Glass Form Container */}
            <div className="relative bg-white/3 backdrop-blur-3xl p-12 md:p-20 border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-primary/20 m-6 pointer-events-none transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-primary/20 m-6 pointer-events-none transition-all duration-700"></div>
              
              <div className="relative z-10 space-y-12">
                 <div className="flex justify-between items-center pb-8 border-b border-white/5">
                    <span className="text-[10px] uppercase tracking-[0.6em] font-black text-primary">Transmission Form</span>
                    <span className="text-white/10 text-4xl font-serif">0x7</span>
                 </div>

                 <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                   <div className="group relative">
                     <label className="block text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4 transition-colors group-focus-within:text-primary font-bold">Identity</label>
                     <input type="text" className="w-full bg-transparent border-b border-white/10 focus:border-primary py-4 text-xl text-white outline-none transition-all placeholder:text-stone-800" placeholder="Grandmaster Name" />
                   </div>
                   
                   <div className="group relative">
                     <label className="block text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4 transition-colors group-focus-within:text-primary font-bold">Beacon Protocol (Email)</label>
                     <input type="email" className="w-full bg-transparent border-b border-white/10 focus:border-primary py-4 text-xl text-white outline-none transition-all placeholder:text-stone-800" placeholder="name@domain.com" />
                   </div>
                   
                   <div className="group relative">
                     <label className="block text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4 transition-colors group-focus-within:text-primary font-bold">The Strategic Brief</label>
                     <textarea rows="4" className="w-full bg-transparent border-b border-white/10 focus:border-primary py-4 text-xl text-white outline-none transition-all resize-none placeholder:text-stone-800" placeholder="Describe the maneuver..."></textarea>
                   </div>
                   
                   <button className="group relative w-full bg-primary py-6 text-black font-black uppercase tracking-[0.8em] text-xs hover:bg-white transition-all duration-700 flex items-center justify-center gap-4">
                     <span className="relative z-10">Initiate Move</span>
                     <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-500">→</span>
                   </button>
                 </form>
              </div>
            </div>

            {/* Decorative Piece in background of form */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-[0.03] select-none pointer-events-none grayscale">
               <span className="text-[30rem] leading-none">♚</span>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1.5px #ffffff;
        }
        .tracking-tightest {
          letter-spacing: -0.04em;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;