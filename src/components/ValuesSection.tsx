import { useRef } from 'react';
import { Target, Compass, Heart, Shield, Zap, Users } from 'lucide-react';
import { useInView } from 'framer-motion';

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and transparency in all our actions.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your financial well-being is our top priority. We tailor solutions to fits your unique needs.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging modern technology to provide faster, safer, and smarter financial services.'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We listen to understand, not just to reply. We are partners in your journey.'
    }
  ];

  return (
    <section id="values" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <p className="text-secondary font-semibold mb-2 tracking-wider text-sm uppercase">Our Philosophy</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Driven by <span className="text-gradient-blue">Purpose</span>
          </h2>

        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Vision & Mission Column */}
          <div className={`space-y-12 ${isInView ? 'animate-slide-right' : 'opacity-0'}`} style={{ transitionDuration: '1000ms' }}>

            {/* Vision */}
            <div className="relative group">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full" />
              <div className="pl-8 py-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Compass className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative financial partner in Chennai, empowering individuals and businesses to achieve their dreams through accessible and transparent funding solutions.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative group">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full" />
              <div className="pl-8 py-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide comprehensive, personalized financial services with speed and integrity. We strive to simplify complex financial processes, fostering long-term relationships built on trust and mutual growth.
                </p>
              </div>
            </div>

          </div>

          {/* Core Values Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isInView ? 'animate-slide-left' : 'opacity-0'}`} style={{ transitionDuration: '1000ms', transitionDelay: '200ms' }}>
            {values.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <item.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
