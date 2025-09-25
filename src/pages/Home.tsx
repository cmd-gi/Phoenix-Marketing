import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { StaggerReveal } from '@/components/ui/stagger-reveal';
import { PhoenixTestimonials } from '@/components/ui/phoenix-testimonials';
import { ArrowRight, Star, TrendingUp, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-luxury.jpg';
import abstractLuxury from '@/assets/abstract-luxury.jpg';
import { PhoenixAuroraDemo } from '@/components/ui/phoenix-aurora-demo';

const Home = () => {
  const services = [
    {
      title: 'Brand Strategy & Positioning',
      description: 'Crafting compelling brand narratives that resonate with your target audience.',
      icon: <Star className="w-8 h-8" />
    },
    {
      title: 'Creative Campaign Development',
      description: 'Innovative campaigns that capture attention and drive meaningful engagement.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Digital Marketing & Social Media',
      description: 'Comprehensive digital strategies that amplify your brand across all channels.',
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Aurora Background */}
      <section className="relative">
        <PhoenixAuroraDemo />
      </section>

      {/* Services Highlight */}
      {/* Services Highlight */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <ScrollReveal animation="fade-in-up" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic solutions that transform brands and drive meaningful results
            </p>
          </ScrollReveal>

          <StaggerReveal staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="modern-card clean-hover border-border bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-accent/20">
        <div className="container mx-auto container-padding">
          <StaggerReveal staggerDelay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '250+', label: 'Premium Brands' },
              { number: '8', label: 'Years Excellence' },
              { number: '50+', label: 'Awards Won' },
              { number: '3', label: 'Global Offices' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-foreground mb-2 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Testimonials */}
      <PhoenixTestimonials />

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container mx-auto container-padding text-center">
          <ScrollReveal animation="scale-in" className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-background/70 mb-8">
              Let's discuss how Phoenix Marketing Services can elevate your brand to new heights.
            </p>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-base font-medium">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;