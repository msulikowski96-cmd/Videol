import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, ShieldCheck } from 'lucide-react';

export function Scene10() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
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
        className="mb-8 relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <div className="absolute inset-0 bg-[#5865F2] rounded-full blur-[35px] opacity-30" />
        <MessageSquare style={{ color: '#5865F2', width: '22vw', height: '22vw' }} />
      </motion.div>

      <motion.h2
        className="text-[12vw] leading-none mb-4 uppercase"
        style={{ color: '#fff', fontFamily: 'Bebas Neue, cursive', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
        initial={{ y: 50, opacity: 0 }}
        animate={phase >= 2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        DOŁĄCZ DO DISCORDA
      </motion.h2>

      <motion.p
        className="text-[4.5vw] max-w-[85%] mx-auto"
        style={{ color: '#0BC4E3', fontFamily: 'Inter, sans-serif' }}
        initial={{ y: 20, opacity: 0 }}
        animate={phase >= 3 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        Wymieniaj się doświadczeniami, szukaj duo i bądź na bieżąco.
      </motion.p>
      
      <div className="flex gap-8 mt-10">
        {[
          { icon: Heart, label: 'Społeczność', delay: 0 },
          { icon: ShieldCheck, label: 'Wsparcie', delay: 0.2 },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: 'spring', delay: 0.4 + item.delay }}
          >
            <div className="w-[10vw] h-[10vw] rounded-full flex items-center justify-center border border-[#5865F2]/40 bg-[#5865F2]/20">
              <item.icon style={{ color: '#5865F2', width: '5vw', height: '5vw' }} />
            </div>
            <p className="text-[3vw] text-white/70">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
