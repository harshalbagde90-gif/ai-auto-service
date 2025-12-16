import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FileText, Workflow, Users, Zap } from 'lucide-react';

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: FileText,
      title: 'Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing tools.',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks and boost productivity automatically.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time AI assistance.',
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Get results in seconds with our lightning-fast AI engine.',
    },
  ];

  return (
    <section id="features" ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          AI Solutions for Your{' '}
          <span className="text-gradient">Business Challenges</span>
        </h2>

        <div className="relative">
          {/* Central orb */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-32 h-32 rounded-full gradient-primary animate-pulse-glow animate-rotate-slow opacity-50" />
            <div className="absolute inset-4 rounded-full bg-background" />
          </div>

          {/* SVG connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full hidden lg:block"
            style={{ zIndex: -1 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {isVisible && (
              <>
                <line
                  x1="25%"
                  y1="25%"
                  x2="50%"
                  y2="50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  className="animate-draw-line"
                />
                <line
                  x1="75%"
                  y1="25%"
                  x2="50%"
                  y2="50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  className="animate-draw-line"
                  style={{ animationDelay: '0.2s' }}
                />
                <line
                  x1="25%"
                  y1="75%"
                  x2="50%"
                  y2="50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  className="animate-draw-line"
                  style={{ animationDelay: '0.4s' }}
                />
                <line
                  x1="75%"
                  y1="75%"
                  x2="50%"
                  y2="50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  className="animate-draw-line"
                  style={{ animationDelay: '0.6s' }}
                />
              </>
            )}
          </svg>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`glass rounded-xl p-6 card-lift group ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
