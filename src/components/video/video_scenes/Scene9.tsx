import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Compass } from 'lucide-react';

export function Scene9() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2200),
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="mb-6 relative"
        initial={{ scale: 0, opacity: 0, rotate: -45 }}
        animate={
          phase >= 1
            ? { scale: 1, opacity: 1, rotate: 0 }
            : { scale: 0, opacity: 0, rotate: -45 }
        }
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <div className="absolute inset-0 bg-[#FF2D55] rounded-full blur-[30px] opacity-20" />
        <Target style={{ color: '#FF2D55', width: '20vw', height: '20vw' }} />
      </motion.div>

      <motion.h2
        className="text-[14vw] leading-none mb-4 uppercase"
        style={{
          color: '#fff',
          fontFamily: 'Bebas Neue, cursive',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)',
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={phase >= 2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        ZDOMINUJ GRĘ
      </motion.h2>

      <motion.p
        className="text-[5vw] max-w-[85%] mx-auto"
        style={{ color: '#0BC4E3', fontFamily: 'Inter, sans-serif' }}
        initial={{ y: 20, opacity: 0 }}
        animate={phase >= 3 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        Obejmij przewagę i wspinaj się w rankingu bez przeszkód
      </motion.p>

      <div className="flex gap-12 mt-[8vh]">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
        >
          <div className="w-[12vw] h-[12vw] rounded-full flex items-center justify-center border border-[#00D48A]/50 bg-[#00D48A]/10">
            <Compass style={{ color: '#00D48A', width: '6vw', height: '6vw' }} />
          </div>
          <span className="text-[3.5vw] text-white/80 font-medium font-sans">
            Lepsze Decyzje
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
        >
          <div className="w-[12vw] h-[12vw] rounded-full flex items-center justify-center border border-[#F59E0B]/50 bg-[#F59E0B]/10">
            <TrendingUp style={{ color: '#F59E0B', width: '6vw', height: '6vw' }} />
          </div>
          <span className="text-[3.5vw] text-white/80 font-medium font-sans">
            Więcej Winów
          </span>
        </motion.div>
      </div>

      {/* Confetti / background sparks */}
      {phase >= 4 &&
        [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ background: i % 2 === 0 ? '#FF2D55' : '#0BC4E3' }}
            initial={{
              top: '50%',
              left: '50%',
              opacity: 1,
            }}
            animate={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              opacity: 0,
              scale: Math.random() * 2 + 1,
            }}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
              repeat: Infinity,
              repeatDelay: Math.random(),
            }}
          />
        ))}
    </motion.div>
  );
}
