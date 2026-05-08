import { motion } from 'framer-motion';

export const Scene17 = () => {
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
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-1 relative perspective-1000 z-10"
        >
          {/* Mockup UI for Build Optimizer */}
          <div className="bg-[#111322] border border-cyan-900/50 rounded-xl p-6 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-600/10 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">Meta Build Path</div>
            
            <div className="space-y-6">
              {[
                { phase: 'Early Game', items: [3, 4], color: 'text-neutral-400' },
                { phase: 'Core Items', items: [1, 2], color: 'text-yellow-500' },
                { phase: 'Late Game', items: [5, 6, 7], color: 'text-red-400' }
              ].map((row, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-24 text-xs font-bold uppercase ${row.color}`}>{row.phase}</div>
                  <div className="flex gap-2">
                    {row.items.map(item => (
                      <div key={item} className="w-10 h-10 border border-neutral-700 bg-neutral-800 rounded relative overflow-hidden group">
                        <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-500/50" />
                      </div>
                    ))}
                  </div>
                  {i === 1 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2, type: 'spring' }}
                      className="text-xs bg-cyan-500/20 text-cyan-300 font-bold px-2 py-1 rounded-md ml-auto"
                    >
                      58% WR
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800">
              <div className="text-xs text-neutral-500 font-mono">
                Opierając się na statystykach z ostatnich patchów, ten układ run i itemów daje największą szansę na snowball.
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex-1 space-y-6 z-10 pl-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block py-2 px-4 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-sm tracking-widest border border-cyan-500/30 uppercase"
          >
            Optymalizacja Startu
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]"
          >
            FUNKCJE
            <br />
            <span className="text-cyan-400">BUILD OPTYMALIZATOR</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-neutral-400 font-light max-w-lg mt-4"
          >
            Zobacz jak poprawnie budować swojego czempiona pod określonych przeciwników. Maksymalizuj swoje statystyki korzystając z najskuteczniejszych pathów itemowych i najlepszych run.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
