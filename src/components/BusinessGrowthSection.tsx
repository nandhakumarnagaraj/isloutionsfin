import { useRef } from 'react';
import { ArrowRight, TrendingUp, Factory, Building, ShieldCheck, Banknote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from 'framer-motion';

const BusinessGrowthSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      id: 'msme',
      title: 'MSME Support',
      subtitle: 'Micro, Small and Medium Enterprises',
      description: 'Empowering the backbone of the economy. Our specialized funding for Micro, Small and Medium Enterprises in the manufacturing sector ensures your production never stops.',
      image: '/msme_manufacturing.png',
      icon: Factory,
      features: ['Machinery Loans', 'Infrastructure', 'Raw Material Funding'],
      color: 'gold'
    },
    {
      id: 'sme',
      title: 'SME Solutions',
      subtitle: 'Small and Medium Enterprises',
      description: 'Accelerate your trading business with tailored financial solutions designed for Small and Medium Enterprises. From working capital to expansion funding, we provide the boost your business needs.',
      image: '/sme_trading.png',
      icon: TrendingUp,
      features: ['Working Capital', 'Trade Finance', 'Business Expansion'],
      color: 'blue'
    }
  ];

  return (
    <section id="business-growth" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary to-transparent" />
        <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-secondary to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 mb-4 animate-fade-in">
            <ShieldCheck className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary font-medium">Empowering Businesses</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Fueling Growth for{' '}
            <span className="text-gradient-gold">MSME</span> &{' '}
            <span className="text-gradient-blue">SME</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive financial strategies tailored for trading and manufacturing sectors.
          </p>
        </div>

        <div ref={ref} className="space-y-24">
          {solutions.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className={`flex-1 w-full relative group perspective-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className={`p-3 rounded-xl inline-flex mb-3 ${item.color === 'gold' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'}`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.subtitle}</h3>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className={`absolute -z-10 top-[-20px] ${index % 2 === 0 ? 'left-[-20px]' : 'right-[-20px]'} w-2/3 h-2/3 border-2 ${item.color === 'gold' ? 'border-secondary/30' : 'border-primary/30'} rounded-2xl`} />
              </div>

              {/* Content Side */}
              <div className={`flex-1 space-y-6 ${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 200 + 200}ms` }}>
                <h3 className={`text-4xl font-bold ${item.color === 'gold' ? 'text-gradient-gold' : 'text-gradient-blue'}`}>
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-4">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.color === 'gold' ? 'bg-secondary' : 'bg-primary'}`} />
                      <span className="text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={item.color === 'gold' ? 'gold' : 'default'} className="mt-4" asChild>
                  <a href="#contact">
                    Get Funding
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Banking Partners Strip */}
        <div className="mt-24 pt-12 border-t border-border">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground flex items-center justify-center gap-2">
              <Banknote className="w-5 h-5 text-secondary" />
              Trusted Banking Solutions
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-70">
            {['Corporate Banking', 'Trade Finance', 'O/D Facilities', 'Bank Guarantees'].map((bank, i) => (
              <div key={i} className="p-4 rounded-lg bg-muted/30 border border-border text-center text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">
                {bank}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowthSection;
