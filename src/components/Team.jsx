import React from "react";
import { motion } from "framer-motion";

const teamData = [
  {
    id: 1,
    name: "Alex Vance",
    role: "Creative Director",
    bio: "The grandmaster of visual storytelling with 15+ years orchestrating brand identities.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    piece: "King"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Lead Photographer",
    bio: "Her eye for dramatic lighting and precise framing ensures every shot hits the mark.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    piece: "Queen"
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Set Designer",
    bio: "Builds the architectural foundations of our shoots, bringing concept to reality.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    piece: "Rook"
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Stylist & Casting",
    bio: "Calculates the dynamic movements and stylistic choices that elevate the final frame.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    piece: "Knight"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-secondary font-bold tracking-[0.3em] text-[10px] uppercase mb-4">The Strategic Council</div>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-black leading-none uppercase">
               The <span className="text-primary italic">Council</span> <br/>
               Of Masters
            </h2>
          </div>
          <div className="md:block w-32 h-32 border-2 border-black rotate-45 flex items-center justify-center translate-y-10">
             <div className="w-16 h-16 border border-primary rotate-12" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-100 border border-stone-100">
          {teamData.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative bg-white p-10 hover:bg-chess-black transition-colors duration-700 h-125 flex flex-col justify-between"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-bold tracking-[0.4em] text-secondary uppercase mb-1 block">
                  {member.piece}
                </span>
                <h3 className="text-3xl font-serif font-black tracking-tighter text-black group-hover:text-white transition-colors duration-500">
                  {member.name.split(' ')[0]} <br/>
                  <span className="italic font-normal">{member.name.split(' ')[1]}</span>
                </h3>
              </div>

              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden px-6 grayscale transition-all duration-700 opacity-0 group-hover:opacity-20 group-hover:grayscale-0 group-hover:scale-110">
                <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
              </div>

              <div className="relative z-10">
                <div className="h-px bg-primary w-12 mb-6 transition-all duration-500 group-hover:w-full" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 group-hover:text-primary transition-colors">
                  {member.role}
                </h4>
                <p className="text-sm text-stone-500 font-sans leading-relaxed group-hover:text-stone-300 transition-colors">
                  {member.bio}
                </p>
                <div className="mt-8">
                  <span className="text-4xl font-serif italic text-stone-100 group-hover:text-white/10 transition-colors pointer-events-none">
                     {member.piece[0]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;