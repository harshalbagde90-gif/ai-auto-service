import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, TrendingUp, Clock, DollarSign } from 'lucide-react';
import DashboardMockup from './DashboardMockup';

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    { icon: TrendingUp, text: '10x Faster Content Creation' },
    { icon: Clock, text: 'Save 20+ Hours Per Week' },
    { icon: DollarSign, text: 'Reduce Operational Costs by 60%' },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Transform Your Workflow With{' '}
              <span className="text-gradient">AI</span>
            </h2>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-4 glass rounded-lg px-4 py-3 group hover:bg-primary/10 transition-colors"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit.text}</span>
                  <Check className="w-5 h-5 text-green-500 ml-auto" />
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="rounded-2xl overflow-hidden border-[3px] border-transparent bg-gradient-to-r from-primary via-secondary to-accent p-[3px]">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
