import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const Steps = () => {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your free account in seconds with just your email.',
    },
    {
      number: '02',
      title: 'Connect Tools',
      description: 'Integrate your existing workflow tools and data sources.',
    },
    {
      number: '03',
      title: 'Automate',
      description: 'Let AI handle repetitive tasks while you focus on growth.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Get Started in{' '}
          <span className="text-gradient">Three Simple Steps</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`glass rounded-xl p-8 relative group hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:border-purple-500/50 transition-all duration-300 ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <span className="text-6xl font-bold text-gradient opacity-50">
                {step.number}
              </span>
              <h3 className="text-2xl font-semibold mt-4 mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-4">{step.description}</p>
              <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
