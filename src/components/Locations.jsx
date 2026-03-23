import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const locationsData = [
  {
    id: "rooks-corner",
    name: "The Rook's Corner",
    subtitle: "Downtown Studio",
    description: "An industrial space characterized by raw brick walls, exposed beams, and dramatic natural lighting.",
    images: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1598305090518-e3db79c29cc3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    ]
  },
  {
    id: "knights-hall",
    name: "Knight's Hall",
    subtitle: "Westside Loft",
    description: "Minimalist and bright, this space offers pure white cycloramas and perfect structural symmetry.",
    images: [
      "https://images.unsplash.com/photo-1600607686027-6cb2cc80e227?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1628102491629-77858abce1b9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    ]
  },
  {
    id: "queens-gambit",
    name: "Queen's Gambit",
    subtitle: "Penthouse Suite",
    description: "Our premium location featuring mid-century modern furniture, moody dark walls, and gold accents.",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=800",
    ]
  }
];

const Locations = () => {
  const [activeTab, setActiveTab] = useState(locationsData[0].id);
  const activeLocation = locationsData.find(loc => loc.id === activeTab);

  return (
    <section id="locations" className="relative py-48 bg-dark-900 text-white overflow-hidden">
      {/* Cinematic Spotlight Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(121,85,72,0.15),transparent_70%)] opacity-50" />
      
      {/* Decorative large text bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-black opacity-[0.02] select-none pointer-events-none uppercase">
        Arena
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-360">
        <div className="grid lg:grid-cols-12 gap-32">
          
          <div className="lg:col-span-5 space-y-20">
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-6 text-primary font-bold tracking-[0.4em] text-[10px] uppercase"
              >
                <div className="w-16 h-px bg-primary/30" />
                Architectural Spheres
              </motion.div>
              
              <h2 className="text-7xl md:text-8xl lg:text-8xl font-serif font-bold text-white leading-[0.85] tracking-tightest uppercase">
                Locations <br/>
                <span className="text-transparent stroke-text-white italic font-normal">NODES</span>
              </h2>
            </div>

            <div className="flex flex-col items-start gap-8">
              {locationsData.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveTab(loc.id)}
                  className={`group flex items-center gap-10 text-left transition-all duration-700 ${
                    activeTab === loc.id ? "translate-x-6" : "opacity-30 hover:opacity-100"
                  }`}
                >
                  <div className={`h-px transition-all duration-700 ${
                    activeTab === loc.id ? "w-24 bg-primary" : "w-12 bg-white/20"
                  }`} />
                  <div>
                    <div className={`text-3xl font-serif transition-colors duration-500 ${
                      activeTab === loc.id ? "text-primary" : "text-white"
                    }`}>
                      {loc.name}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.4em] font-bold mt-2 text-stone-500 group-hover:text-primary transition-colors">
                      {loc.subtitle}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="pt-10 space-y-12 border-t border-white/5"
              >
                <p className="text-2xl text-stone-400 font-light leading-relaxed font-sans italic max-w-lg">
                  "{activeLocation.description}"
                </p>
                
                <div className="flex items-center gap-12">
                   <button className="group relative px-12 py-5 border border-white/10 text-[10px] uppercase tracking-[0.6em] font-bold hover:border-primary transition-all overflow-hidden">
                     <span className="relative z-10 group-hover:text-black transition-colors duration-500">Secure Node</span>
                     <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                   </button>
                   <div className="text-[10px] uppercase tracking-[0.3em] text-stone-600 font-bold hidden sm:block">
                     Available <br/> 24/7
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 1.05 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-200 w-full bg-stone-900 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5"
              >
                {/* Main Image with Ken Burns Effect */}
                <motion.img
                  key={`img-${activeTab}`}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.7 }}
                  transition={{ duration: 2 }}
                  src={activeLocation.images[0]}
                  alt={activeLocation.name}
                  className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000"
                />
                
                {/* Vignette & Gradients */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/30" />
                <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent" />

                {/* Floating Detail Overlay */}
                <div className="absolute bottom-20 left-20 right-20 flex justify-between items-end">
                   <div className="space-y-4">
                      <div className="h-px w-32 bg-primary/40" />
                      <div className="text-6xl font-serif text-white/10">0{locationsData.findIndex(l => l.id === activeTab) + 1}</div>
                   </div>
                   
                   <div className="flex gap-4">
                      {activeLocation.images.slice(1, 3).map((img, i) => (
                        <div key={i} className="w-32 h-44 border border-white/10 p-1 bg-black/50 backdrop-blur-md overflow-hidden">
                           <img src={img} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0" alt="Sub detail" />
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Geometric Accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/10 rotate-12 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full border border-primary/10 -z-10" />
          </div>
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

export default Locations;