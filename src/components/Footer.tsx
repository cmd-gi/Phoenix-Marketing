import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import phoenixCrest from '@/assets/phoenix-crest.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={phoenixCrest} alt="Phoenix Marketing Services" className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold text-primary">Phoenix</span>
                <span className="text-sm text-muted-foreground tracking-wider">MARKETING SERVICES</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Bringing market intelligence and brand understanding together for effective communication. 
              Impacting brand perception and adding value to brand lifecycles since 2016.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary transition-colors elegant-hover">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary transition-colors elegant-hover">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary transition-colors elegant-hover">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-primary">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Brand Strategy</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Creative Campaigns</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Event Marketing</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Public Relations</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Market Research</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-primary">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:hello@phoenixmarketing.com" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@phoenixmarketing.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <a href="tel:+918951448408" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 89514 48408
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground">Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Phoenix Marketing Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;