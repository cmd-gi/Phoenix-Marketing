import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Building2, 
  Users, 
  Target, 
  Award, 
  Globe, 
  TrendingUp,
  Zap,
  Star,
  Heart,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarBorder } from '@/components/ui/star-border';
import { BackgroundPaths } from '@/components/ui/background-paths';
// import { PhoenixBackground } from '@/components/ui/phoenix-background';

// Timeline data - Phoenix Crest monochromatic theme
const timelineData = [
  {
    year: '2019',
    title: 'Foundation & Vision',
    description: 'Phoenix Crest Marketing was founded with a clear mission: to transform how businesses connect with their audiences through strategic marketing excellence.',
    icon: Building2,
    achievements: ['Established company vision', 'Built core team', 'Defined service offerings'],
    color: 'from-zinc-800 to-zinc-600'
  },
  {
    year: '2020',
    title: 'First Major Clients',
    description: 'Successfully secured our first premium clients in luxury and lifestyle sectors, establishing our reputation for delivering exceptional results.',
    icon: Users,
    achievements: ['50+ clients acquired', 'Luxury brand partnerships', 'Team expansion to 15'],
    color: 'from-zinc-700 to-zinc-500'
  },
  {
    year: '2021',
    title: 'Digital Innovation',
    description: 'Expanded our digital capabilities with cutting-edge analytics, AI-powered targeting, and comprehensive social media strategies.',
    icon: TrendingUp,
    achievements: ['AI integration launched', 'Advanced analytics platform', 'Social media mastery'],
    color: 'from-zinc-600 to-zinc-400'
  },
  {
    year: '2022',
    title: 'Industry Recognition',
    description: 'Achieved significant industry recognition with multiple awards for creative excellence and innovative marketing campaigns.',
    icon: Award,
    achievements: ['15+ industry awards', 'Top agency recognition', '95% client retention'],
    color: 'from-zinc-500 to-zinc-300'
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Extended our reach internationally, working with global brands and establishing strategic partnerships across multiple continents.',
    icon: Globe,
    achievements: ['International partnerships', '25+ countries served', 'Global brand collaborations'],
    color: 'from-zinc-400 to-zinc-200'
  },
  {
    year: '2024',
    title: 'AI-Powered Future',
    description: 'Leading the industry with revolutionary AI-powered marketing solutions, predictive analytics, and automated campaign optimization.',
    icon: Zap,
    achievements: ['AI platform launch', 'Predictive marketing', 'Industry leadership'],
    color: 'from-zinc-300 to-white'
  }
];

// Company stats
const stats = [
  { number: '250+', label: 'Happy Clients', description: 'Businesses transformed' },
  { number: '500+', label: 'Projects Completed', description: 'Successful campaigns' },
  { number: '98%', label: 'Client Satisfaction', description: 'Exceptional results' },
  { number: '5+', label: 'Years Excellence', description: 'Proven expertise' }
];

// Company values
const values = [
  {
    icon: Target,
    title: 'Strategic Excellence',
    description: 'Every campaign begins with deep market intelligence and strategic thinking to ensure maximum impact and measurable results.'
  },
  {
    icon: Heart,
    title: 'Client Partnership',
    description: 'We build long-term relationships based on trust, transparency, and exceptional service that drives genuine business growth.'
  },
  {
    icon: Star,
    title: 'Creative Innovation',
    description: 'Pushing creative boundaries to develop memorable brand experiences that truly resonate with target audiences.'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Operating across markets with cultural sensitivity and deep local expertise to maximize international reach.'
  }
];

const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const PhoenixAboutPage = () => {
  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline-section');
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with BackgroundPaths */}
      <BackgroundPaths 
        title="About Phoenix Crest"
        subtitle="From innovative startups to established enterprises, we craft marketing strategies that drive growth, enhance visibility, and create lasting impact in the digital landscape."
        buttonText="Explore Our Journey"
        onButtonClick={scrollToTimeline}
      />

      {/* Stats Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline-section" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From our founding vision to becoming an industry leader, explore the key milestones 
              that have shaped Phoenix Crest Marketing into the strategic partner businesses trust.
            </p>
          </AnimatedSection>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line - elegant monochromatic */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/40 to-white/20 transform md:-translate-x-1/2" />
            
            <div className="space-y-12 md:space-y-16">
              {timelineData.map((item, index) => (
                <AnimatedSection key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline dot - monochromatic with subtle glow */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 transform -translate-x-1/2 md:-translate-x-1/2">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} shadow-lg border border-white/20`} />
                      <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-30`} />
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ml-12 md:ml-0 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}>
                      <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-white/10 hover:border-white/20 bg-background/40 backdrop-blur-sm">
                        <CardContent className="p-0">
                          {/* Year badge - with StarBorder animation */}
                          <div className={`flex items-center gap-3 mb-4 ${
                            index % 2 === 0 ? 'md:justify-end' : ''
                          }`}>
                            <StarBorder
                              className="inline-block"
                              color={`hsl(${220 + index * 20}, 70%, 60%)`}
                              speed={`${4 + index}s`}
                            >
                              <div className="px-2 py-1 text-xs font-bold text-foreground">
                                {item.year}
                              </div>
                            </StarBorder>
                            <div className={`p-2 rounded-full bg-gradient-to-r ${item.color} bg-opacity-20 backdrop-blur-sm border border-white/10`}>
                              <item.icon size={24} className="text-white" />
                            </div>
                          </div>

                          {/* Title and description */}
                          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
                            {item.description}
                          </p>

                          {/* Achievements */}
                          <div className={`flex flex-wrap gap-2 ${
                            index % 2 === 0 ? 'md:justify-end' : ''
                          }`}>
                            {item.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 size={14} className="text-white" />
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every campaign we create
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-8 hover:shadow-xl transition-all duration-300 border-border group hover:border-primary/50">
                    <CardContent className="p-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <value.icon size={28} className="text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the businesses that trust Phoenix Crest to elevate their marketing to new heights. 
              Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <StarBorder 
                as="button"
                className="group hover:scale-105 transition-transform duration-300"
                color="#ffffff"
                speed="3s"
              >
                <div className="flex items-center gap-2 px-4 py-2">
                  Start Your Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </StarBorder>
              <StarBorder 
                as="button"
                className="group hover:scale-105 transition-transform duration-300"
                color="rgba(255,255,255,0.5)"
                speed="6s"
              >
                <div className="px-4 py-2">
                  View Our Work
                </div>
              </StarBorder>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};