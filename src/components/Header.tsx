import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import phoenixCrest from '@/assets/phoenix-crest.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 elegant-hover">
            <img src={phoenixCrest} alt="Phoenix Marketing Services" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-foreground">Phoenix</span>
              <span className="text-xs text-muted-foreground tracking-wider">MARKETING SERVICES</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                } story-link`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;