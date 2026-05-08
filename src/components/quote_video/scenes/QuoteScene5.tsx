import { FadeText, StaggerText } from '../utils';

export const QuoteScene5 = () => {
  return (
    <div className="w-full">
      <p className="text-2xl md:text-4xl lg:text-4xl text-neutral-300 font-light leading-relaxed tracking-wide max-w-4xl mx-auto" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
        <FadeText delay={0.5}>
          I właśnie wtedy najbardziej potrzebujesz kogoś,
        </FadeText>
        <br />
        <FadeText delay={1.8} className="text-white mt-8 block font-normal">
          kto nie zapyta: <span className="italic">„co się stało?”</span>
        </FadeText>
      </p>
    </div>
  );
};
