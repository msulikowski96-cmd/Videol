import { motion } from 'framer-motion';

export const Scene14 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white z-10"
    >
      <div className="absolute inset-0 z-0">
         {/* Radar sweep effect */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full border border-red-500/10"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, rgba(239,68,68,0.2) 60deg, transparent 60deg)'
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full border border-red-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full border border-red-500/20" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
        
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-red-500/20 text-red-400 font-mono text-sm tracking-widest border border-red-500/30 uppercase"
          >
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Live Scouting
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]"
          >
            LIVE<br />
            GAME
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-neutral-400 font-light max-w-lg mt-4"
          >
            Poznaj swojego przeciwnika zanim wyjdziesz z bazy. Podejrzyj jego runy, prawdziwą rangę i czary przywoływacza u wszystkich graczy na ekranie ładowania.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex-1 w-full"
        >
          {/* Live Game Mockup */}
          <div className="bg-[#111322]/90 backdrop-blur-xl border border-red-900/50 rounded-xl overflow-hidden shadow-[0_0_50px_-12px_rgba(239,68,68,0.3)]">
            <div className="bg-red-950/40 border-b border-red-900/50 p-4 flex justify-between items-center">
               <div className="font-mono text-red-500 text-sm font-bold flex items-center gap-2">
                 <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                 MECZ W TOKU (12:34)
               </div>
            </div>
            <div className="p-4 grid gap-2">
               {[1, 2, 3, 4, 5].map((player, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.8 + i * 0.1 }}
                   className={`flex items-center gap-4 bg-neutral-900/50 p-2 rounded-lg border ${i === 0 ? 'border-red-500/50' : 'border-neutral-800'}`}
                 >
                   <div className="w-10 h-10 bg-neutral-800 rounded-md"></div>
                   <div className="flex-1">
                     <div className="h-2 w-24 bg-neutral-700 rounded mb-2"></div>
                     <div className="flex gap-1">
                        <div className="w-4 h-4 rounded-full bg-yellow-600"></div>
                        <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="text-xs font-bold text-neutral-300">PLATINUM II</div>
                     <div className="text-[10px] text-neutral-500">54% WR</div>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
