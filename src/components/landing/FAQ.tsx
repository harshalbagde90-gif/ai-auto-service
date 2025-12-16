import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      question: 'What types of content can the AI generate?',
      answer:
        'Our AI can generate a wide variety of content including blog posts, social media content, marketing copy, product descriptions, emails, and more. The AI adapts to your brand voice and style guidelines.',
    },
    {
      question: 'How does workflow automation work?',
      answer:
        'You can create custom automation rules that trigger based on specific events. For example, automatically generate social media posts when a new blog is published, or send personalized follow-ups based on user actions.',
    },
    {
      question: 'Is my data secure with NexusAI?',
      answer:
        'Absolutely. We use enterprise-grade encryption for all data at rest and in transit. We are SOC 2 Type II certified and GDPR compliant. Your data is never used to train our models.',
    },
    {
      question: 'Can I integrate NexusAI with my existing tools?',
      answer:
        'Yes! We offer native integrations with popular tools like Slack, Zapier, HubSpot, Salesforce, and many more. We also provide a robust API for custom integrations.',
    },
    {
      question: 'What support options are available?',
      answer:
        'All plans include email support. Professional plans get priority support with faster response times. Enterprise customers receive dedicated account managers and 24/7 phone support.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can upgrade or cancel anytime during the trial period.',
    },
  ];

  return (
    <section id="faq" ref={ref} className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Frequently Asked{' '}
          <span className="text-gradient">Questions</span>
        </h2>

        <Accordion
          type="single"
          collapsible
          className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-lg px-6 border-none"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
