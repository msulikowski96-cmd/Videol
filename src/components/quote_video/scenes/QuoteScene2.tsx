import { motion } from 'framer-motion';
import { FadeText, StaggerText } from '../utils';

export const QuoteScene2 = () => {
  return (
    <div className="w-full">
      <p className="text-3xl md:text-5xl lg:text-5xl text-neutral-300 font-light leading-relaxed tracking-wide max-w-3xl mx-auto" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
        <FadeText delay={0.5}>
          Tylko z udawania,
        </FadeText>
        <br/>
        <span className="text-white font-normal relative inline-block mt-4">
          <StaggerText delay={1.5} text="że wszystko jest w porządku." />
          <motion.span 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 2.8, duration: 1.5, ease: "easeInOut" }}
            className="absolute -bottom-3 left-0 h-[2px] bg-white/40" 
          />
        </span>
      </p>
    </div>
  );
};
