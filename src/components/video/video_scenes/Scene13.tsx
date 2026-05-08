import { motion } from 'framer-motion';

export const Scene13 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block py-2 px-4 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-sm tracking-widest border border-emerald-500/30 uppercase mb-6"
        >
          Twoje Mistrzostwo
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-4"
        >
          STRONA <span className="text-[#C89B3C]">CHAMPIONA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-neutral-400 font-light max-w-2xl mb-12"
        >
          Analizuj statystyki dla każdego bohatera. KDA, średni farm, win-rate i historia ostatnich meczów tylko tym czempionem.
        </motion.p>

        {/* Champion Stats Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="col-span-1 border border-neutral-800 bg-neutral-900/50 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#C89B3C] to-yellow-300 p-1 mb-4">
              <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center">
                {/* Mock mastery icon */}
                <div className="w-12 h-12 bg-[#C89B3C] clip-path-polygon-[50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%]" />
              </div>
            </div>
            <div className="text-3xl font-bold">Mistrzostwo 7</div>
            <div className="text-neutral-500 uppercase text-sm mt-1">150,000 Pkt</div>
          </motion.div>

          {/* Stats Boxes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="col-span-2 grid grid-cols-2 gap-4"
          >
            {[
              { label: "Win Rate", val: "58%", color: "text-emerald-400" },
              { label: "Średnie KDA", val: "3.2", color: "text-[#11C4E3]" },
              { label: "CS / Min", val: "7.8", color: "text-white" },
              { label: "Damage / Min", val: "1,240", color: "text-white" }
            ].map((stat, i) => (
              <div key={i} className="border border-neutral-800 bg-neutral-900/50 rounded-xl p-5 flex flex-col justify-center">
                <div className="text-sm font-mono text-neutral-500 uppercase">{stat.label}</div>
                <div className={`text-4xl font-bold mt-2 ${stat.color}`}>{stat.val}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C89B3C08_1px,transparent_1px),linear-gradient(to_bottom,#C89B3C08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />
    </motion.div>
  );
};
