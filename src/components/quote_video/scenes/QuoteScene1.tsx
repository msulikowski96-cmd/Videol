import { motion } from 'framer-motion';

export const QuoteScene1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="absolute inset-0 flex items-center justify-center p-8 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="text-2xl md:text-4xl lg:text-5xl text-neutral-300 font-light leading-relaxed tracking-wide max-w-3xl"
        style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
      >
        Najgorsze zmęczenie
        <br />
        <span className="text-white font-normal">nie bierze się z pracy</span>
        <br />
        ani braku snu.
      </motion.p>
    </motion.div>
  );
};
