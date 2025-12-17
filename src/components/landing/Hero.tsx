import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import DashboardMockup from './DashboardMockup';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          <div className="space-y-8 lg:pr-12">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <motion.span
                initial={{ clipPath: 'inset(0 100% 0 0)', filter: 'blur(6px)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)', filter: 'blur(0px)' }}
                transition={{ duration: 2.2, ease: 'easeInOut' }}
                className="inline-block"
              >
                Empower Your Business With{' '}
                <span className="text-gradient">AI Automation</span> Services
              </motion.span>
            </h1>

            <p
              className="text-lg text-muted-foreground max-w-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Transform your workflow with intelligent AI-powered content generation and
              automated processes. Save time, reduce costs, and scale your operations
              effortlessly.
            </p>

            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Button
                size="lg"
                className="gradient-primary hover:scale-105 hover-glow transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-muted-foreground/30 hover:bg-muted/50 hover:border-primary transition-all duration-300 group"
              >
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                See How It Works
              </Button>
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-in-up w-full max-w-sm sm:max-w-md lg:max-w-none justify-self-start lg:-translate-x-8 xl:-translate-x-12"
            style={{ animationDelay: '0.4s' }}
          >
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
