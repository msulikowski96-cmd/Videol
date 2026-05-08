import { FadeText, StaggerText } from '../utils';

export const QuoteScene4 = () => {
  return (
    <div className="w-full">
      <p className="text-3xl md:text-5xl lg:text-5xl text-neutral-300 font-light leading-relaxed tracking-wide max-w-3xl mx-auto" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
        <FadeText delay={0.5}>
          Z bycia „<span className="text-white font-medium">silnym</span>”
        </FadeText>
        <br />
        <FadeText delay={2.0} className="text-neutral-500 text-2xl md:text-3xl mt-8 block">
          bo wszyscy już się do tego przyzwyczaili.
        </FadeText>
      </p>
    </div>
  );
};
