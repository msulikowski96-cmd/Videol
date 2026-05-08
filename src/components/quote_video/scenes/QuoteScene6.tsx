import { motion } from 'framer-motion';

export const QuoteScene6 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="absolute inset-0 flex items-center justify-center p-8 text-center"
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 2.5, ease: "easeOut" }}
        className="text-3xl md:text-5xl lg:text-6xl text-white font-normal leading-relaxed tracking-wider max-w-2xl"
        style={{ textShadow: '0 4px 30px rgba(255,255,255,0.1)' }}
      >
        tylko usiądzie obok
        <br />
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 2 }}
          className="text-neutral-500 font-light text-2xl md:text-4xl lg:text-5xl"
        >
          i zostanie.
        </motion.span>
      </motion.p>
    </motion.div>
  );
};
