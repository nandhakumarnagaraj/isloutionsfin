import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(220_25%_18%/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(220_25%_18%/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 animate-fade-in">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-medium">Trusted Financial Partner Since 2010</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
              Your Complete{' '}
              <span className="text-gradient-gold">Financial</span>{' '}
              <span className="text-gradient-blue">Solution</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl animate-slide-up animation-delay-200">
              From personal loans to business investments, we provide comprehensive financial services
              tailored to your needs. Experience trusted expertise with iSolutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
              <Button variant="gold" size="xl" asChild>
                <a href="#services">
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline-gold" size="xl" asChild>
                <a href="#contact">
                  Contact Us
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-in animation-delay-600">
              <div>
                <p className="text-3xl font-bold text-gradient-gold">14+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient-blue">5000+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">₹50Cr+</p>
                <p className="text-sm text-muted-foreground">Loans Disbursed</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central Globe */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />

                  {/* Globe */}
                  <div className="absolute inset-8 bg-gradient-to-br from-primary via-cyan to-primary rounded-full shadow-glow-cyan overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />
                    {/* Globe Lines */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-foreground/20" />
                      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-foreground/20" />
                      <div className="absolute top-1/4 left-0 right-0 h-px bg-foreground/10" />
                      <div className="absolute top-3/4 left-0 right-0 h-px bg-foreground/10" />
                    </div>
                  </div>

                  {/* Red Dot */}
                  <div className="absolute top-12 right-16 w-4 h-4 bg-destructive rounded-full shadow-lg shadow-destructive/50 animate-pulse" />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-0 left-0 bg-gradient-card p-4 rounded-xl border border-border shadow-card animate-float">
                <TrendingUp className="w-8 h-8 text-accent mb-2" />
                <p className="text-sm font-medium text-foreground">Investment Growth</p>
                <p className="text-xs text-muted-foreground">+24% Returns</p>
              </div>

              <div className="absolute bottom-0 right-0 bg-gradient-card p-4 rounded-xl border border-border shadow-card animate-float animation-delay-400">
                <Users className="w-8 h-8 text-secondary mb-2" />
                <p className="text-sm font-medium text-foreground">Client Trust</p>
                <p className="text-xs text-muted-foreground">5000+ Families</p>
              </div>

              <div className="absolute top-1/2 -right-4 bg-gradient-card p-4 rounded-xl border border-border shadow-card animate-float animation-delay-800">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Secure Loans</p>
                <p className="text-xs text-muted-foreground">100% Safe</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
