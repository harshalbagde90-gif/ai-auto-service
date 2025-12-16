import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Sparkles, Shield } from 'lucide-react';

const TrustBadges = () => {
  const { ref, isVisible } = useScrollAnimation();

  const badges = [
    { icon: Sparkles, label: 'AI-Powered Automation' },
    { icon: Shield, label: 'Enterprise Security' },
  ];

  const partners = ['TechCorp', 'Innovate', 'DataFlow', 'CloudSync', 'AILabs'];

  return (
    <section ref={ref} className="py-16 border-y border-border/30">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-wrap justify-center gap-8 mb-12 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {badges.map((badge, i) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 glass rounded-full px-6 py-3"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center animate-pulse-glow">
                <badge.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-foreground font-medium">{badge.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <span className="text-muted-foreground text-sm">Trusted by:</span>
          {partners.map((partner, i) => (
            <div
              key={partner}
              className={`text-muted-foreground/50 font-semibold text-lg hover:text-muted-foreground transition-colors ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
