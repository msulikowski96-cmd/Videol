import { FadeText, StaggerText } from '../utils';

export const QuoteScene6 = () => {
  return (
    <div className="w-full">
      <p className="text-4xl md:text-6xl lg:text-7xl text-white font-normal leading-relaxed tracking-wider max-w-2xl mx-auto" style={{ textShadow: '0 4px 40px rgba(255,255,255,0.2)' }}>
        <FadeText delay={0.5}>
          tylko usiądzie obok
        </FadeText>
        <br />
        <StaggerText delay={2.5} text="i zostanie." className="text-neutral-500 font-light text-3xl md:text-5xl lg:text-6xl mt-6 block" />
      </p>
    </div>
  );
};
