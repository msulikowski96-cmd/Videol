import { motion } from 'framer-motion';

export const QuoteScene5 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="absolute inset-0 flex items-center justify-center p-8 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="text-xl md:text-3xl lg:text-4xl text-neutral-300 font-light leading-relaxed tracking-wide max-w-4xl"
      >
        I właśnie wtedy najbardziej potrzebujesz kogoś,
        <br />
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="text-white mt-4 block"
        >
          kto nie zapyta: <span className="italic">„co się stało?”</span>
        </motion.span>
      </motion.p>
    </motion.div>
  );
};
