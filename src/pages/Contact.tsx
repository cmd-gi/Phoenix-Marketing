import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  Globe,
  Calendar
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      city: 'New York',
      address: '432 Park Avenue, Suite 1200\nNew York, NY 10016',
      phone: '+1 (555) 123-4567',
      email: 'ny@phoenixmarketing.com',
      timezone: 'EST'
    },
    {
      city: 'London',
      address: '25 Old Bond Street\nMayfair, London W1S 4QB',
      phone: '+44 20 7123 4567',
      email: 'london@phoenixmarketing.com',
      timezone: 'GMT'
    },
    {
      city: 'Tokyo',
      address: '1-1-1 Shibuya, Shibuya City\nTokyo 150-0002, Japan',
      phone: '+81 3 1234 5678',
      email: 'tokyo@phoenixmarketing.com',
      timezone: 'JST'
    }
  ];

  const services = [
    'Brand Strategy & Positioning',
    'Creative Campaign Development',
    'Digital Marketing & Social Media',
    'Event Marketing & Activation',
    'Public Relations & Media Outreach',
    'Market Research & Consumer Insights',
    'Advertising Production'
  ];

  const budgetRanges = [
    '$50K - $100K',
    '$100K - $250K',
    '$250K - $500K',
    '$500K - $1M',
    '$1M+'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Let's Create Something <span className="gold-accent">Extraordinary</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Ready to elevate your brand? We're here to discuss your vision and develop 
              a strategic approach that delivers transformative results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl font-bold flex items-center">
                    <Send className="w-6 h-6 text-primary mr-3" />
                    Start Your Project
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your project and we'll craft a custom proposal tailored to your objectives.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@company.com"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                          className="bg-background border-border"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Service of Interest</label>
                        <Select onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="bg-background border-border">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Project Budget</label>
                        <Select onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="bg-background border-border">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        rows={6}
                        required
                        className="bg-background border-border resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-luxury text-primary-foreground">
                      Send Project Inquiry
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Quick Contact */}
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="font-heading text-xl font-bold">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">hello@phoenixmarketing.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Schedule a Call</p>
                      <Button variant="outline" size="sm" className="mt-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Book Consultation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="luxury-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <h3 className="font-heading text-lg font-semibold">Response Guarantee</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Initial response within 2 hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Detailed proposal within 48 hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span>Available across all time zones</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="font-heading text-lg font-semibold">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['North America', 'Europe', 'Asia-Pacific', 'Middle East', 'Latin America'].map((area) => (
                      <Badge key={area} variant="outline" className="border-primary/30 text-primary">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Global <span className="gold-accent">Presence</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Three strategic locations serving clients worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="luxury-card elegant-hover text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">{office.city}</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p className="whitespace-pre-line">{office.address}</p>
                    <div className="space-y-2">
                      <p className="flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>{office.phone}</span>
                      </p>
                      <p className="flex items-center justify-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>{office.email}</span>
                      </p>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {office.timezone}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;