import { FadeText, StaggerText } from '../utils';

export const QuoteScene1 = () => {
  return (
    <div className="w-full">
      <p className="text-3xl md:text-5xl lg:text-5xl text-neutral-300 font-light leading-relaxed tracking-wide max-w-3xl mx-auto" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
        <FadeText delay={0.5}>
          Najgorsze zmęczenie
        </FadeText>
        <br />
        <FadeText delay={1.8} className="text-white font-normal my-2">
          nie bierze się z pracy
        </FadeText>
        <br />
        <StaggerText delay={3.2} text="ani braku snu." className="text-neutral-400" />
      </p>
    </div>
  );
};
