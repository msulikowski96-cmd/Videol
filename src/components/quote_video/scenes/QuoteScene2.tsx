import { motion } from 'framer-motion';

export const QuoteScene2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="absolute inset-0 flex items-center justify-center p-8 text-center"
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="text-2xl md:text-4xl lg:text-5xl text-neutral-300 font-light leading-relaxed tracking-wide max-w-3xl"
      >
        Tylko z udawania,<br/>
        <span className="text-white font-normal relative inline-block mt-2">
          że wszystko jest w porządku.
          <motion.span 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
            className="absolute -bottom-2 left-0 h-px bg-white/50" 
          />
        </span>
      </motion.p>
    </motion.div>
  );
};
