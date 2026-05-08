import { motion } from 'framer-motion';

export const QuoteScene3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="absolute inset-0 flex items-center justify-center p-8 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.8 }}
        className="text-2xl md:text-3xl lg:text-4xl text-neutral-400 font-light leading-relaxed tracking-wide max-w-2xl"
      >
        Z uśmiechania się wtedy,
        <br />
        <br />
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.5 }}
          className="text-white md:text-5xl lg:text-6xl text-3xl font-normal"
        >
          gdy w środku powoli tracisz siłę.
        </motion.span>
      </motion.p>
    </motion.div>
  );
};
