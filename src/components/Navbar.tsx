import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="iSolutions Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="text-xl font-bold text-foreground">
                  SOLUTIONSFIN
                </span>
                <p className="text-[10px] text-muted-foreground tracking-wider">A COMPLETE FINANCIAL SOLUTION</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+919884823838" className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+91 9884823838</span>
              </a>
              <Button variant="gold" size="sm" asChild>
                <a href="#contact">
                  Get Started
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md animate-slide-down-and-fade"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl text-muted-foreground hover:text-foreground transition-colors animate-slide-up"
                style={{ animationDelay: `${i * 100 + 200}ms`, animationFillMode: 'both' }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent closing the menu
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up"
              style={{ animationDelay: '600ms', animationFillMode: 'both' }}
            >
              <Button variant="gold" size="lg" asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </a>
              </Button>
              <Button variant="outline-gold" size="lg" asChild>
                <a href="tel:+919884823838">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
