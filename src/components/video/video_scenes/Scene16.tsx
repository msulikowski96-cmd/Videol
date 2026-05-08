import { motion } from 'framer-motion';

export const Scene16 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block py-2 px-4 rounded-full bg-purple-500/20 text-purple-300 font-mono text-sm tracking-widest border border-purple-500/30 uppercase"
          >
            Unikalny Profil
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]"
          >
            ARCHETYP
            <br />
            <span className="text-purple-500">STYLU GRY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-neutral-400 font-light max-w-lg mt-4"
          >
            Kim naprawdę jesteś na Summoner's Rift? System analizuje Twoje zachowania — od Aggressive Carry, po Tactical Support i wyznacza Twój unikalny Archetyp.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-1 w-full relative z-10 perspective-1000"
        >
          {/* Playstyle Archetype Mockup */}
          <div className="bg-[#111322] border border-purple-900/50 rounded-xl p-8 shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)] relative overflow-hidden text-center flex flex-col items-center">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0,transparent_60%)] pointer-events-none" />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="w-32 h-32 mb-6 relative"
            >
              <svg className="w-full h-full text-purple-500 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M12 18v-6"></path>
                <path d="m9 15 3 3 3-3"></path>
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">Twój Archetyp</div>
              <div className="text-4xl font-bold uppercase tracking-tight text-white mb-2">
                Hyper-Carry <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Assassin</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-sm text-neutral-400 mt-4 px-4"
            >
              Skupiasz się na wczesnej dominacji i szybkiej eliminacji kluczowych celów. Czasami ryzykujesz nieco za bardzo, zwiększając Tilt Index.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
