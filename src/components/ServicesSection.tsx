import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Home,
  Car,
  Briefcase,
  Building2,
  Shield,
  TrendingUp,
  CreditCard,
  Landmark,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = scrollContainer.scrollWidth / 2;
    const scrollSpeed = 2;
    let animationId: number;

    const scroll = () => {
      scrollPosition -= scrollSpeed;
      if (scrollPosition <= 0) {
        scrollPosition = scrollContainer.scrollWidth / 2;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      if (animationId) cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);
  const services = [
    {
      icon: Home,
      title: 'Home Funding',
      description: 'Make your dream home a reality with competitive rates and flexible EMI options.',
      features: ['Up to 90% financing', 'Tenure up to 30 years', 'Quick approval'],
      color: 'primary',
    },
    {
      icon: Car,
      title: 'Vehicle Funding',
      description: 'Drive your dream vehicle with easy financing for cars, bikes, and commercial vehicles.',
      features: ['New & used vehicles', 'Low down payment', 'Fast disbursal'],
      color: 'accent',
    },
    {
      icon: Briefcase,
      title: 'Personal Funding',
      description: 'Meet your personal expenses with hassle-free funding and minimal documentation.',
      features: ['No collateral needed', 'Instant approval', 'Flexible tenure'],
      color: 'secondary',
    },
    {
      icon: Building2,
      title: 'Business Funding',
      description: 'Fuel your business growth with working capital and expansion funding.',
      features: ['MSME friendly', 'High funding amounts', 'Quick processing'],
      color: 'primary',
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Comprehensive protection for life, health, and assets from leading insurers.',
      features: ['Life & health', 'Vehicle insurance', 'Property coverage'],
      color: 'accent',
    },
    {
      icon: TrendingUp,
      title: 'Investments',
      description: 'Grow your wealth with expert-guided mutual funds and investment planning.',
      features: ['Mutual funds', 'SIP planning', 'Portfolio management'],
      color: 'secondary',
    },
    {
      icon: CreditCard,
      title: 'Credit Cards',
      description: 'Access premium credit cards with exciting rewards and benefits.',
      features: ['Cashback offers', 'Travel rewards', 'Low interest rates'],
      color: 'primary',
    },
    {
      icon: Landmark,
      title: 'Funding Against Property',
      description: 'Unlock the value of your property with attractive funding-to-value ratios.',
      features: ['High LTV ratio', 'Lower interest', 'Longer tenure'],
      color: 'accent',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary group-hover:text-primary';
      case 'accent':
        return 'text-accent group-hover:text-accent';
      case 'secondary':
        return 'text-secondary group-hover:text-secondary';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="services" className="py-24 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-semibold mb-2 tracking-wider text-sm">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Financial{' '}
            <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="text-muted-foreground">
            From funding to investments, we offer a complete range of financial services
            to help you achieve your goals at every stage of life.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-8 scrollbar-hide"
            style={{ scrollBehavior: 'auto' }}
          >
            <div className="flex gap-6 px-4">
              {[...services, ...services].map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-card p-6 rounded-xl border border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-card flex-shrink-0 w-[85vw] md:w-[500px] hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 transition-colors ${getColorClasses(service.color)}`}>
                    <service.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" size="sm" className="p-0 h-auto text-secondary hover:text-secondary/80 group/btn" asChild>
                    <a href="#contact">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>


        </div>


      </div>
    </section>
  );
};

export default ServicesSection;
