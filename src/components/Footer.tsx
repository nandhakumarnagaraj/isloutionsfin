import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Home Funding',
    'Personal Funding',
    'Vehicle Funding',
    'Business Funding',
    'Insurance',
    'Investments',
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/isolutionsfin/', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-0">
              <img
                src="/logo.png"
                alt="iSolutions Logo"
                className="h-14 w-auto object-contain animate-gentle-scale"
              />
              <div>
                <span className="text-2xl font-bold text-foreground font-serif tracking-wide">
                  SOLUT<span className="text-[#FF0000]">I</span>ONS
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A Complete Financial Solution - Your trusted partner for all financial services since 2010.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>B & B Spot, Ground Floor</p>
              <p>New No. 653 / Old No. 370</p>
              <p>Periyar E. V. R. Salai (P. H. Road)</p>
              <p>Chennai – 600106</p>
              <p className="text-secondary">+91 9884823838</p>
              <p className="text-secondary">rajesh@isolutionsfin.com</p>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
