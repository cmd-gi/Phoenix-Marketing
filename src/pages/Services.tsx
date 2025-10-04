import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Waves } from '@/components/ui/waves-background';
import { AnimatedSection } from '@/components/ui/animated-section';
import { AnimatedHeroText } from '@/components/ui/animated-hero-text';
import { motion } from 'framer-motion';
import { 
  Target, 
  Lightbulb, 
  Smartphone, 
  Calendar, 
  Megaphone, 
  BarChart3, 
  Video,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Brand Strategy & Positioning',
      description: 'Comprehensive brand development that positions your company as the definitive choice in your market.',
      features: ['Brand Identity Development', 'Market Positioning', 'Competitive Analysis', 'Brand Guidelines'],
      timeline: '6-8 weeks',
      price: 'Premium Investment'
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Creative Campaign Development',
      description: 'Innovative campaigns that capture attention, engage audiences, and drive meaningful business results.',
      features: ['Creative Concept Development', 'Multi-Channel Campaigns', 'Visual Identity Systems', 'Copywriting & Content'],
      timeline: '4-6 weeks',
      price: 'Custom Quote'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Digital Marketing & Social Media',
      description: 'Comprehensive digital strategies that amplify your brand across all digital touchpoints.',
      features: ['Social Media Strategy', 'Content Marketing', 'SEO & SEM', 'Digital Advertising'],
      timeline: 'Ongoing',
      price: 'Monthly Retainer'
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Event Marketing & Activation',
      description: 'Memorable experiential marketing that creates lasting connections between your brand and audience.',
      features: ['Event Strategy & Planning', 'Experiential Design', 'Brand Activations', 'Trade Show Marketing'],
      timeline: '8-12 weeks',
      price: 'Project Based'
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: 'Public Relations & Media Outreach',
      description: 'Strategic PR that builds credibility, manages reputation, and positions you as an industry leader.',
      features: ['Media Relations', 'Press Release Distribution', 'Crisis Communication', 'Thought Leadership'],
      timeline: 'Ongoing',
      price: 'Monthly Program'
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Market Research & Consumer Insights',
      description: 'Deep market intelligence that informs strategy and validates marketing decisions.',
      features: ['Consumer Research', 'Market Analysis', 'Competitive Intelligence', 'Brand Tracking'],
      timeline: '4-8 weeks',
      price: 'Research Package'
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: 'Advertising Production',
      description: 'High-quality advertising production that brings creative visions to life across all media.',
      features: ['Video Production', 'Photography', 'Print Design', 'Digital Assets'],
      timeline: '6-10 weeks',
      price: 'Production Quote'
    }
  ];

  return (
    <div className="-mt-20 md:-mt-24">
      {/* Hero Section with Waves Background */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-background">
        {/* Waves Background - Light mode (subtle dark lines) */}
        <div className="absolute inset-0 w-full h-full dark:hidden">
          <Waves
            lineColor="rgba(46, 45, 45, 0.17)"
            backgroundColor="transparent"
            waveSpeedX={0.015}
            waveSpeedY={0.008}
            waveAmpX={35}
            waveAmpY={18}
            friction={0.92}
            tension={0.006}
            maxCursorMove={90}
            xGap={12}
            yGap={32}
          />
        </div>

        {/* Waves Background - Dark mode (brighter white lines) */}
        <div className="absolute inset-0 w-full h-full hidden dark:block">
          <Waves
            lineColor="rgba(202, 202, 202, 0.37)"
            backgroundColor="transparent"
            waveSpeedX={0.015}
            waveSpeedY={0.008}
            waveAmpX={35}
            waveAmpY={18}
            friction={0.92}
            tension={0.006}
            maxCursorMove={90}
            xGap={12}
            yGap={32}
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedHeroText className="font-heading text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Premium Services
              </AnimatedHeroText>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 drop-shadow-md"
              >
                Seven core services designed to transform your brand and amplify your market presence. 
                Each service is crafted with luxury precision and strategic excellence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Button size="lg" className="btn-luxury text-primary-foreground">
                  Schedule Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="luxury-card elegant-hover group">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {service.timeline}
                    </Badge>
                  </div>
                  <CardTitle className="font-heading text-2xl font-bold mt-4">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">{service.price}</span>
                    <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gold-accent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results for every client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Deep dive into your brand, market, and objectives' },
              { step: '02', title: 'Strategy', description: 'Develop comprehensive marketing strategy and roadmap' },
              { step: '03', title: 'Execution', description: 'Implement campaigns with precision and excellence' },
              { step: '04', title: 'Optimization', description: 'Continuously refine and optimize for maximum impact' }
            ].map((phase, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary-foreground">{phase.step}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss which services align with your business objectives and growth goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-luxury text-primary-foreground">
                Get Custom Proposal
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;