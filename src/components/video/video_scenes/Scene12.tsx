import { motion } from 'framer-motion';

export const Scene12 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block py-2 px-4 rounded-full bg-blue-500/20 text-blue-300 font-mono text-sm tracking-widest border border-blue-500/30 uppercase"
          >
            Szczegóły Meczu
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]"
          >
            BUILD VS
            <br />
            <span className="text-red-500">ENEMY TEAM</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-neutral-400 font-light max-w-lg mt-4"
          >
            Skład obu drużyn z przedmiotami, runami i statystykami. Porównaj swój wynik bezpośrednio z przeciwnikiem z linii i sprawdź kto zdominował pojedynek.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-1 relative perspective-1000 z-10"
        >
          {/* Mockup UI for Match Details */}
          <div className="bg-[#111322] border border-neutral-800 rounded-xl p-4 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[40px] rounded-full pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
                  <div>
                    <div className="text-sm font-bold">Zwycięstwo</div>
                    <div className="text-xs text-neutral-500">Blue Team</div>
                  </div>
                </div>
                <div className="font-mono text-xl text-neutral-400">vs</div>
                <div className="flex items-center gap-2 text-right">
                  <div>
                    <div className="text-sm font-bold">Porażka</div>
                    <div className="text-xs text-neutral-500">Red Team</div>
                  </div>
                  <div className="w-8 h-8 bg-red-600 rounded-md"></div>
                </div>
              </div>

              {/* Rows */}
              {[1, 2, 3, 4, 5].map((row, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className={`flex justify-between items-center py-1 ${i === 1 ? 'bg-[#C89B3C]/10 rounded px-2 -mx-2' : ''}`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-neutral-700"></div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5,6].map(item => (
                        <div key={item} className="w-4 h-4 bg-neutral-800 rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                  
                  {i === 1 && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2, type: 'spring' }}
                      className="text-xs text-[#C89B3C] font-bold px-2 uppercase"
                    >
                      Dominate
                    </motion.div>
                  )}

                  <div className="flex items-center gap-2 flex-row-reverse">
                    <div className="w-6 h-6 rounded-full bg-neutral-700"></div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5,6].map(item => (
                        <div key={item} className="w-4 h-4 bg-neutral-800 rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-white/5 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-white/5 pointer-events-none" />
    </motion.div>
  );
};
