import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export function Scene7() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1100),
      setTimeout(() => setPhase(4), 1600),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const chartData = [10, 25, 20, 45, 40, 70, 65, 95];
  const maxVal = Math.max(...chartData);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        className="text-[4vw] uppercase tracking-widest"
        style={{ color: '#0BC4E3', fontFamily: 'Bebas Neue, cursive' }}
        initial={{ y: -30, opacity: 0 }}
        animate={phase >= 1 ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
      >
        Zaawansowane
      </motion.p>
      
      <motion.h2
        className="text-[12vw] leading-none mb-6"
        style={{ color: '#C89B3C', fontFamily: 'Bebas Neue, cursive' }}
        initial={{ x: -100, opacity: 0 }}
        animate={phase >= 1 ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        WYKRESY ELO
      </motion.h2>

      <div className="flex-1 flex flex-col justify-end pb-12 relative w-full px-4 mt-[10vh]">
        {/* Background Grid */}
        <div className="absolute inset-0 flex flex-col justify-between opacity-20 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full h-px border-t border-dashed" style={{ borderColor: '#0BC4E3' }} />
          ))}
        </div>

        {/* Chart Container */}
        <div className="relative h-full w-full flex items-end justify-between z-10 gap-[2vw]">
          {chartData.map((val, i) => {
            const heightPct = (val / maxVal) * 100;
            return (
              <motion.div
                key={i}
                className="w-full rounded-t-lg flex flex-col justify-end items-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, rgba(200,155,60,0.8) 0%, rgba(200,155,60,0.1) 100%)',
                  borderTop: '2px solid #C89B3C',
                  height: phase >= 2 ? `${heightPct}%` : '0%',
                }}
                initial={{ height: '0%' }}
                animate={phase >= 2 ? { height: `${heightPct}%` } : { height: '0%' }}
                transition={{ type: 'spring', stiffness: 120, damping: 15, delay: i * 0.1 }}
              >
                {/* LP label */}
                <motion.div 
                  className="absolute top-2 text-[#050810] font-bold text-[3vw]"
                  initial={{ opacity: 0 }}
                  animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  {val > 20 ? val : ''}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Growing Line Overlay (Mock) */}
        <motion.div
           className="absolute bottom-10 left-0 right-0 h-px pointer-events-none"
           style={{ zIndex: 20 }}
        >
          <motion.div
            className="flex items-center absolute"
            style={{ 
              bottom: '90%', left: '80%', background: '#0BC4E3', 
              color: '#050810', padding: '1vw 3vw', borderRadius: '4vw',
              fontWeight: 'bold', fontSize: '3vw'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={phase >= 4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <TrendingUp className="mr-2" style={{ width: '4vw', height: '4vw' }} />
            +85 LP
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
