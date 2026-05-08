import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Globe, CheckCircle } from 'lucide-react';

export function Scene11() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 2200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050810 0%, #07091A 60%, #0A0B18 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(200,155,60,0.15) 0%, transparent 60%)' }}
      />

      <motion.div
        className="mb-6 relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <div className="absolute inset-0 bg-[#C89B3C] rounded-full blur-[40px] opacity-40" />
        <CheckCircle style={{ color: '#C89B3C', width: '22vw', height: '22vw' }} />
      </motion.div>

      <motion.h2
        className="text-[15vw] leading-none mb-4 uppercase"
        style={{ color: '#fff', fontFamily: 'Bebas Neue, cursive' }}
        initial={{ y: 50, opacity: 0 }}
        animate={phase >= 2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        TO JUZ WSZYSTKO!
      </motion.h2>

      <motion.div
        className="flex items-center gap-3 bg-[#0BC4E3]/10 px-6 py-3 border border-[#0BC4E3]/30 rounded-2xl mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={phase >= 3 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <PlayCircle style={{ color: '#0BC4E3', width: '6vw', height: '6vw' }} />
        <span className="text-[5vw] text-[#0BC4E3] font-bold font-sans tracking-wide">GOTOWY?</span>
      </motion.div>

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[4vw] text-white/50 mb-2 font-sans">Odwiedź naszą stronę</p>
        <div className="flex items-center gap-2">
          <Globe style={{ color: '#C89B3C', width: '5vw', height: '5vw' }} />
          <p className="text-[5.5vw] text-[#C89B3C] font-semibold tracking-wider font-sans">
            nexus-sight.onrender.com
          </p>
        </div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${4 + (i % 3) * 4}px`, height: `${4 + (i % 3) * 4}px`,
            background: i % 2 === 0 ? '#C89B3C' : '#0BC4E3',
            opacity: 0.5,
            left: `${20 + i * 12}%`,
            bottom: `${10 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
        />
      ))}
    </motion.div>
  );
}
