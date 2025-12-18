import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 scale-105 animate-gentle-scale"
          style={{ backgroundImage: 'url("/handshake_bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      </div>

      <div className="container mx-auto px-4 pt-24 md:pt-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 animate-fade-in">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-medium">Trusted Financial Partner Since 2010</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-slide-up">
              Your Complete{' '}
              <span className="text-gradient-gold">Financial</span>{' '}
              <span className="text-gradient-blue">Solutions</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-slide-up animation-delay-200">
              From personal funding to business investments, we provide comprehensive financial services
              tailored to your needs. Experience trusted expertise with iSolutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-400">
              <Button variant="gold" size="lg" asChild>
                <a href="#services">
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline-gold" size="lg" asChild>
                <a href="#contact">
                  Contact Us
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-in animation-delay-600">
              <div>
                <p className="text-3xl font-bold text-gradient-gold">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient-blue">1500+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">₹700Cr+</p>
                <p className="text-sm text-muted-foreground">Funding Disbursed</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          {/* Visual Element */}
          <div className="relative lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto mt-8 lg:mt-0">
              {/* Main Visual Image */}
              <div className="relative rounded-full overflow-hidden w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] mx-auto border-4 border-white/10 shadow-2xl animate-float">
                <img
                  src="/mirror_building.png"
                  alt="Corporate Building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute top-10 left-0 bg-gradient-card p-4 rounded-xl border border-border shadow-card animate-float hidden sm:block">
                <TrendingUp className="w-8 h-8 text-accent mb-2" />
                <p className="text-sm font-medium text-foreground">Investment Growth</p>
                <p className="text-xs text-muted-foreground">+24% Returns</p>
              </div>

              <div className="absolute bottom-10 right-0 bg-gradient-card p-4 rounded-xl border border-border shadow-card animate-float animation-delay-400 hidden sm:block">
                <Users className="w-8 h-8 text-secondary mb-2" />
                <p className="text-sm font-medium text-foreground">Client Trust</p>
                <p className="text-xs text-muted-foreground">1500+ Families</p>
              </div>

              <div className="absolute top-1/2 -right-8 bg-gradient-card p-4 rounded-xl border border-border shadow-card animate-float animation-delay-800 hidden sm:block">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Secure Funding</p>
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
