import { motion } from 'framer-motion';

export const QuoteScene4 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="absolute inset-0 flex items-center justify-center p-8 text-center"
    >
      <motion.p
        className="text-2xl md:text-4xl lg:text-5xl text-neutral-300 font-light leading-relaxed tracking-wide max-w-3xl"
      >
        <motion.span
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          Z bycia „
        </motion.span>
        <motion.span
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="text-white font-medium"
        >
          silnym
        </motion.span>
        <motion.span
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 1.1, duration: 1.5 }}
        >
          ”,<br/>
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1.5 }}
          className="text-neutral-500 text-xl md:text-2xl mt-6 block"
        >
          bo wszyscy już się do tego przyzwyczaili.
        </motion.span>
      </motion.p>
    </motion.div>
  );
};
