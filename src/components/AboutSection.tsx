import { CheckCircle, Award, Users, Building } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: Award, label: 'RBI Registered NBFC', description: 'Fully compliant and regulated' },
    { icon: Users, label: 'Expert Team', description: '50+ financial advisors' },
    { icon: Building, label: 'Chennai Based', description: 'Local expertise, global standards' },
  ];

  const features = [
    'Personalized financial planning',
    'Competitive interest rates',
    'Quick loan approvals',
    'Transparent processes',
    'Dedicated relationship managers',
    'Flexible repayment options',
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-card border border-border">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <pattern id="paisley" patternUnits="userSpaceOnUse" width="50" height="50">
                    <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
                    <circle cx="25" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                    <circle cx="25" cy="25" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
                  </pattern>
                  <rect width="400" height="300" fill="url(#paisley)" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow-cyan">
                    <span className="text-4xl font-bold text-primary-foreground">i</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">iSOLUTIONS</h3>
                  <p className="text-secondary font-medium">A Complete Financial Solution</p>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-card p-6 rounded-xl border border-secondary/30 shadow-card shadow-glow-gold">
              <p className="text-4xl font-bold text-gradient-gold">14+</p>
              <p className="text-sm text-muted-foreground">Years of Trust</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <p className="text-secondary font-semibold mb-2 tracking-wider text-sm">ABOUT US</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Building Financial{' '}
                <span className="text-gradient-blue">Futures</span> Since 2010
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                iSolutions is a trusted financial services company based in Chennai, dedicated to providing 
                comprehensive solutions for all your financial needs. Under the leadership of Managing Director 
                D. Rajesh, we've helped thousands of families achieve their financial goals.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-muted/50 border border-border">
                  <item.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
