import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/ui/animated-section';
import { AnimatedHeroText } from '@/components/ui/animated-hero-text';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Work = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Brand Strategy' },
    { id: 'digital', label: 'Digital Marketing' },
    { id: 'campaigns', label: 'Creative Campaigns' },
    { id: 'events', label: 'Event Marketing' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Watch Brand Relaunch',
      client: 'Timepiece Royale',
      category: 'branding',
      description: 'Complete brand transformation for a heritage luxury watch manufacturer, repositioning them for the modern luxury market.',
      results: '+150% brand awareness, +89% sales growth',
      tags: ['Brand Strategy', 'Creative Direction', 'Digital Marketing'],
      image: 'https://images.unsplash.com/photo-1587836374228-4c8f6c8b5b6a?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Tech Startup Global Launch',
      client: 'InnovateTech Solutions',
      category: 'campaigns',
      description: 'Multi-channel campaign strategy for a fintech startup entering European and Asian markets simultaneously.',
      results: '50M+ impressions, 25K+ qualified leads',
      tags: ['Campaign Development', 'PR Strategy', 'Event Marketing'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Fashion Week Digital Experience',
      client: 'Couture Collective',
      category: 'events',
      description: 'Immersive digital fashion week experience combining AR technology with luxury brand storytelling.',
      results: '2M+ virtual attendees, 500% social engagement',
      tags: ['Event Marketing', 'Digital Innovation', 'Brand Activation'],
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Premium Automotive Launch',
      client: 'Velocity Motors',
      category: 'digital',
      description: 'Comprehensive digital marketing strategy for luxury electric vehicle launch across three continents.',
      results: '12K+ pre-orders, #1 trending campaign',
      tags: ['Digital Strategy', 'Content Marketing', 'Influencer Relations'],
      image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Hospitality Brand Positioning',
      client: 'Grand Estate Hotels',
      category: 'branding',
      description: 'Strategic repositioning of luxury hotel chain to appeal to millennial luxury travelers.',
      results: '+200% millennial bookings, Award-winning campaign',
      tags: ['Brand Positioning', 'Market Research', 'Creative Strategy'],
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Sustainable Luxury Initiative',
      client: 'EcoLux Brands',
      category: 'campaigns',
      description: 'Purpose-driven campaign showcasing luxury brand commitment to environmental sustainability.',
      results: '+300% brand loyalty, Industry leadership award',
      tags: ['Purpose Marketing', 'Sustainability', 'Brand Communications'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedHeroText className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Our Work
            </AnimatedHeroText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              A showcase of transformative campaigns and strategic successes that have elevated 
              premium brands to new heights of market leadership.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={filter === category.id 
                  ? "btn-luxury text-primary-foreground" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="luxury-card elegant-hover group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Button 
                    size="sm" 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 btn-luxury text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-primary/30 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-primary font-medium mb-3">{project.client}</p>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold text-primary mb-3">Results:</p>
                    <p className="text-sm text-muted-foreground">{project.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Campaign <span className="gold-accent">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { metric: '2.5B+', label: 'Total Impressions' },
              { metric: '450%', label: 'Avg ROI Increase' },
              { metric: '89%', label: 'Client Retention' },
              { metric: '50+', label: 'Industry Awards' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.metric}
                </div>
                <div className="text-muted-foreground uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can develop a transformative campaign strategy for your brand.
            </p>
            <Button size="lg" className="btn-luxury text-primary-foreground">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;