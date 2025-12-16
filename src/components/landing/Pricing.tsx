import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();

  const plans = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for individuals and small projects',
      features: [
        '1,000 AI generations/month',
        'Basic automation workflows',
        'Email support',
        '5 team members',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$79',
      description: 'Best for growing teams and businesses',
      features: [
        '10,000 AI generations/month',
        'Advanced automation',
        'Priority support',
        'Unlimited team members',
        'Custom integrations',
        'Analytics dashboard',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited AI generations',
        'Custom AI models',
        'Dedicated support',
        'SLA guarantee',
        'On-premise deployment',
        'Advanced security',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Simple, Transparent{' '}
          <span className="text-gradient">Pricing</span>
        </h2>
        <p
          className={`text-center text-muted-foreground mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          For Every Team
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 ${
                plan.popular
                  ? 'glass scale-105 border-2 border-primary glow-primary'
                  : 'glass'
              } card-lift ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-primary px-4 py-1 rounded-full text-sm font-medium text-primary-foreground">
                  Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-gradient">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'gradient-primary hover-glow'
                    : 'bg-muted hover:bg-muted/80'
                } transition-all duration-300 hover:scale-105`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
