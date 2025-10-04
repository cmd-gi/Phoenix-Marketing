import ScrollExpandMedia from '@/components/ui/scroll-expand-media';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Globe, Calendar, MapPin } from 'lucide-react';

const AboutContent = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Excellence',
      description: 'Every campaign begins with deep market intelligence and strategic thinking to ensure maximum impact.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Partnership',
      description: 'We build long-term relationships based on trust, transparency, and exceptional results.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Creative Innovation',
      description: 'Pushing boundaries to create memorable brand experiences that truly resonate with audiences.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Perspective',
      description: 'Operating across markets with cultural sensitivity and deep local expertise.'
    }
  ];

  const timeline = [
    { year: '2016', event: 'Phoenix Marketing Services founded in Bangalore', icon: <MapPin className="w-5 h-5" /> },
    { year: '2018', event: 'Expanded to serve pan-India markets', icon: <Globe className="w-5 h-5" /> },
    { year: '2020', event: 'Established strong presence in South Indian markets', icon: <Target className="w-5 h-5" /> },
    { year: '2022', event: 'Reached 200+ premium brand partnerships', icon: <Award className="w-5 h-5" /> },
    { year: '2024', event: 'Leading marketing agency in Bangalore', icon: <Users className="w-5 h-5" /> }
  ];

  const stats = [
    { number: '250+', label: 'Premium Clients', description: 'Brands trust us' },
    { number: '8', label: 'Years Excellence', description: 'Proven track record' },
    { number: '50+', label: 'Awards Won', description: 'Industry recognition' },
    { number: '1', label: 'Location', description: 'Bangalore, India' }
  ];

  return (
    <div className="space-y-20">
      {/* Mission Section */}
      <section>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To elevate luxury brands through strategic marketing excellence, creative innovation, and 
            unparalleled client service that drives meaningful growth and lasting market impact.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center mb-6 text-foreground">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-card/30 rounded-2xl p-12">
        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
                {stat.number}
              </div>
              <div className="text-foreground font-semibold mb-1">{stat.label}</div>
              <div className="text-muted-foreground text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Journey</h3>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground mb-2">
                  {item.icon}
                </div>
                {index !== timeline.length - 1 && (
                  <div className="w-px h-16 bg-border"></div>
                )}
              </div>
              <div className="flex-1 pt-2">
                <div className="text-2xl font-bold text-foreground mb-1">{item.year}</div>
                <div className="text-muted-foreground leading-relaxed">{item.event}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Philosophy Section */}
      <section className="text-center">
        <h3 className="text-3xl font-bold mb-8 text-foreground">Why Choose Phoenix</h3>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            In the competitive landscape of luxury marketing, Phoenix Marketing Services stands apart 
            through our commitment to strategic excellence, creative innovation, and measurable results. 
            We don't just create campaigns—we craft experiences that elevate brands and drive sustainable growth.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our global perspective, combined with deep local market knowledge, enables us to create 
            marketing solutions that resonate across cultures while maintaining the sophisticated 
            aesthetic that luxury brands demand.
          </p>
        </div>
      </section>
    </div>
  );
};

export const PhoenixAboutHero = () => {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1280&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
      title="About Phoenix Marketing"
      subtitle="Excellence in Luxury Brand Strategy"
      scrollToExpand="Scroll to explore our story"
      textBlend={true}
    >
      <AboutContent />
    </ScrollExpandMedia>
  );
};