import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-dark-900 text-white pt-24 pb-12 overflow-hidden">
      {/* Decorative Grid footer */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-360">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          <div className="col-span-1 md:col-span-4 space-y-10">
            <h3 className="text-5xl font-serif font-bold text-white leading-none">
              SHTARNG<span className="text-primary">.</span>
            </h3>
            <p className="text-stone-500 text-lg font-sans font-light leading-relaxed max-w-sm">
              Architecting visual dominance through strategic creative execution. We don't just capture moments; we orchestrate inevitable outcomes.
            </p>
            <div className="flex gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-3 h-3 ${i === 0 ? 'bg-primary' : 'border border-white/10'}`} />
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-stone-600 font-bold border-b border-primary/20 pb-4 inline-block">
              Navigation
            </h4>
            <ul className="space-y-4 text-stone-400 text-sm font-sans tracking-wide">
              <li><a href="#home" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-px bg-primary transition-all" />Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-px bg-primary transition-all" />Philosophy</a></li>
              <li><a href="#locations" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-px bg-primary transition-all" />Nodes</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-px bg-primary transition-all" />The Council</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-stone-600 font-bold border-b border-primary/20 pb-4 inline-block">
              Connection
            </h4>
            <ul className="space-y-4 text-stone-400 text-sm font-sans tracking-wide">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Behance</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-stone-600 font-bold border-b border-primary/20 pb-4 inline-block">
              The Grand Brief
            </h4>
            <p className="text-stone-500 text-sm italic font-sans font-light leading-loose">
              "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat."
            </p>
            <div className="pt-4">
               <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-2 underline decoration-primary underline-offset-8">HQ: New York, London, Dubai</div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <p className="text-stone-600 text-[10px] uppercase tracking-[0.3em] font-bold">
              &copy; {new Date().getFullYear()} SHTARNG STUDIO
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-stone-800">
               <a href="#" className="hover:text-stone-500 transition-colors">Privacy Protocol</a>
               <a href="#" className="hover:text-stone-500 transition-colors">Service Terms</a>
            </div>
          </div>
          
          <div className="flex gap-2">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`w-0.5 h-4 ${i % 4 === 0 ? 'bg-primary/20' : 'bg-stone-900'} hidden sm:block`}></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;