import { motion } from 'framer-motion';

export const Scene15 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-1 w-full order-2 md:order-1 relative z-10 perspective-1000"
        >
          {/* LP History Graph Mockup */}
          <div className="bg-[#111322] border border-neutral-800 rounded-xl p-6 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C89B3C]/10 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="text-sm font-bold text-neutral-400 uppercase mb-4 tracking-wider">Historia LP</div>
            <div className="h-48 w-full relative flex items-end">
              {/* Grid lines */}
              <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-between">
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className="w-full h-px bg-neutral-800/50"></div>
                ))}
              </div>
              
              {/* Synthetic line chart */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <motion.path 
                  d="M0,80 L10,75 L20,85 L30,60 L40,65 L50,45 L60,50 L70,30 L80,20 L90,25 L100,5"
                  fill="none" 
                  stroke="#C89B3C" 
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                />
                <motion.path 
                  d="M0,80 L10,75 L20,85 L30,60 L40,65 L50,45 L60,50 L70,30 L80,20 L90,25 L100,5 L100,100 L0,100 Z"
                  fill="url(#gradient-lp)" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
                <defs>
                  <linearGradient id="gradient-lp" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#C89B3C" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Data points */}
              {[
                { x: '10%', y: '25%' }, { x: '30%', y: '40%' },
                { x: '50%', y: '55%' }, { x: '70%', y: '70%' },
                { x: '90%', y: '75%' }, { x: '100%', y: '95%' }
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="absolute w-2 h-2 rounded-full bg-white border border-[#C89B3C] shadow-[0_0_10px_#C89B3C]"
                  style={{ left: `calc(${pos.x} - 4px)`, bottom: `calc(${pos.y} - 4px)` }}
                />
              ))}
            </div>
            
            <div className="flex justify-between items-center mt-4 text-xs text-emerald-400">
              <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-emerald-400"></span> +45 LP Dzisiaj</span>
              <span className="font-mono">+2 Dywizje</span>
            </div>
          </div>
        </motion.div>

        <div className="flex-1 space-y-6 order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block py-2 px-4 rounded-full bg-yellow-500/20 text-yellow-300 font-mono text-sm tracking-widest border border-yellow-500/30 uppercase"
          >
            Śledzenie Postępów
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]"
          >
            HISTORIA
            <br />
            <span className="text-[#C89B3C]">LP</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-neutral-400 font-light max-w-lg mt-4"
          >
            Monitoruj swoje postępy na czytelnym wykresie. Sprawdź jak twoje MMR i zdobywane LP zmieniają się ze spotkania na spotkanie.
          </motion.p>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 right-12 w-px bg-white/5 pointer-events-none" />
    </motion.div>
  );
};
