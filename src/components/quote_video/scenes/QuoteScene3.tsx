import { FadeText, StaggerText } from '../utils';

export const QuoteScene3 = () => {
  return (
    <div className="w-full">
      <p className="text-3xl md:text-5xl lg:text-5xl text-neutral-300 font-light leading-relaxed tracking-wide max-w-3xl mx-auto" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
        <FadeText delay={0.5} className="text-neutral-400">
          Z uśmiechania się wtedy,
        </FadeText>
        <br />
        <br />
        <StaggerText delay={1.8} text="gdy w środku powoli tracisz siłę." className="text-white font-normal" />
      </p>
    </div>
  );
};
