import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Globe, Calendar, MapPin, Lightbulb, Rocket, Heart } from 'lucide-react';

interface StorySection {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  icon: React.ReactNode;
  stats?: { number: string; label: string }[];
  color: string;
}

const storySections: StorySection[] = [
  {
    id: 'vision',
    title: 'Our Vision',
    subtitle: 'Where Innovation Meets Excellence',
    content: 'Phoenix Crest was born from a vision to transform how businesses connect with their audiences. We believe in the power of strategic marketing to elevate brands and create meaningful relationships.',
    icon: <Lightbulb className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: 'expertise',
    title: 'Our Expertise',
    subtitle: 'Strategic Marketing Excellence',
    content: 'With years of experience across diverse industries, we specialize in creating comprehensive marketing strategies that drive growth, enhance brand visibility, and deliver measurable results.',
    icon: <Target className="w-8 h-8" />,
    stats: [
      { number: '250+', label: 'Successful Projects' },
      { number: '98%', label: 'Client Satisfaction' },
      { number: '5+', label: 'Years Experience' },
      { number: '50+', label: 'Happy Clients' }
    ],
    color: 'from-green-500 to-teal-600',
  },
  {
    id: 'approach',
    title: 'Our Approach',
    subtitle: 'Data-Driven Creative Solutions',
    content: 'We combine analytical insights with creative innovation to develop campaigns that not only look amazing but deliver real business value. Every strategy is tailored to your unique goals.',
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'commitment',
    title: 'Our Commitment',
    subtitle: 'Your Success is Our Mission',
    content: 'We are committed to building long-term partnerships with our clients. Your growth is our growth, and we work tirelessly to ensure every campaign exceeds expectations.',
    icon: <Heart className="w-8 h-8" />,
    color: 'from-pink-500 to-purple-600',
  }
];

export const PhoenixStoryScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Create transforms for different elements
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const storyOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const sectionIndex = Math.floor(latest * storySections.length);
      setCurrentSection(Math.min(sectionIndex, storySections.length - 1));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }}
        className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background/90 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-6"
          >
            Phoenix Crest
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
          >
            Elevating Brands Through Strategic Excellence
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-muted-foreground/60 text-sm tracking-widest uppercase"
          >
            Scroll to discover our story
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Story Sections */}
      <motion.div 
        style={{ opacity: storyOpacity }}
        className="relative z-20 bg-background"
      >
        {storySections.map((section, index) => (
          <div key={section.id} className="min-h-screen flex items-center py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white mb-6`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {section.icon}
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                      {section.title}
                    </h2>
                    
                    <h3 className="text-xl text-muted-foreground mb-6 font-medium">
                      {section.subtitle}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {section.content}
                    </p>

                    {section.stats && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {section.stats.map((stat, statIndex) => (
                          <motion.div
                            key={statIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 * statIndex }}
                            viewport={{ once: true }}
                            className="text-center"
                          >
                            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                              {stat.number}
                            </div>
                            <div className="text-sm text-muted-foreground font-medium">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Visual Element */}
                  <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className={`aspect-square rounded-3xl bg-gradient-to-br ${section.color} p-1`}>
                        <div className="w-full h-full rounded-3xl bg-card border border-border flex items-center justify-center">
                          <motion.div
                            className="text-6xl text-muted-foreground/30"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            {section.icon}
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Floating elements */}
                      <motion.div
                        className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col space-y-4">
          {storySections.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-8 rounded-full transition-colors duration-300 ${
                currentSection >= index ? 'bg-primary' : 'bg-border'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};