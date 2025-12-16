import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      quote:
        "NexusAI transformed how we create content. We've cut our production time by 80% while maintaining quality.",
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechCorp',
    },
    {
      quote:
        "The automation features are incredible. Tasks that took hours now complete in minutes automatically.",
      name: 'Michael Ross',
      role: 'Operations Manager',
      company: 'Innovate Inc',
    },
    {
      quote:
        "Best investment we've made. The ROI was visible within the first month of implementation.",
      name: 'Emily Davis',
      role: 'CEO',
      company: 'StartupLabs',
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          See What Our{' '}
          <span className="text-gradient">Clients Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`glass rounded-xl p-6 card-lift ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
