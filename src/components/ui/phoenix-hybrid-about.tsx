import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';
import { useResponsive } from '@/hooks/use-responsive';
import { 
  Building2, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Calendar, 
  MapPin, 
  Lightbulb, 
  Rocket, 
  Heart,
  TrendingUp,
  Zap
} from 'lucide-react';

// Phoenix Crest timeline data
const phoenixTimelineData = [
  {
    id: 1,
    title: "Foundation",
    date: "2019",
    content: "Phoenix Crest Marketing was founded with a vision to transform digital marketing through innovative strategies and data-driven insights.",
    category: "Company",
    icon: Building2,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "First Clients",
    date: "2020",
    content: "Secured our first major clients in the luxury and lifestyle sectors, establishing our reputation for premium brand marketing.",
    category: "Growth",
    icon: Users,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Digital Expansion",
    date: "2021",
    content: "Expanded our digital capabilities with advanced analytics, AI-powered targeting, and comprehensive social media strategies.",
    category: "Technology",
    icon: TrendingUp,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Awards & Recognition",
    date: "2022",
    content: "Won multiple industry awards for creative excellence and achieved recognition as a top-tier marketing agency.",
    category: "Achievement",
    icon: Award,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Global Reach",
    date: "2023",
    content: "Extended our services globally, working with international brands and establishing partnerships across continents.",
    category: "Expansion",
    icon: Globe,
    relatedIds: [4, 6],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 6,
    title: "AI Integration",
    date: "2024",
    content: "Leading the industry with AI-powered marketing solutions, predictive analytics, and automated campaign optimization.",
    category: "Innovation",
    icon: Zap,
    relatedIds: [5, 7],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 7,
    title: "Future Vision",
    date: "2025+",
    content: "Pioneering the next generation of marketing technology with immersive experiences and sustainable growth strategies.",
    category: "Vision",
    icon: Rocket,
    relatedIds: [6],
    status: "pending" as const,
    energy: 60,
  },
];

export const PhoenixHybridAbout = () => {
  const { isMobile } = useResponsive();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showTimeline, setShowTimeline] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Create transforms for different elements
  const heroY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const timelineOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setShowTimeline(latest > 0.4);
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
        
        <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-4 md:mb-6"
          >
            Phoenix Crest
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed"
          >
            Elevating Brands Through Strategic Excellence
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-sm md:text-base lg:text-lg text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4"
          >
            From innovative startups to established enterprises, we craft marketing strategies 
            that drive growth, enhance visibility, and create lasting impact in the digital landscape.
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-muted-foreground/60 text-xs md:text-sm tracking-widest uppercase"
          >
            Scroll to explore our journey
          </motion.div>
        </div>

        {/* Animated background elements - responsive count */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(isMobile ? 15 : 30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Timeline Transition Section */}
      <motion.div 
        style={{ opacity: timelineOpacity }}
        className="relative z-20 bg-background"
      >
        <div className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-black px-4">
          <div className="text-center text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8"
            >
              Our Journey
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg lg:text-xl text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto px-4"
            >
              Explore our evolution from a startup vision to industry leadership. 
              Click on each milestone to discover our story.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Orbital Timeline Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showTimeline ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative z-30"
      >
        <RadialOrbitalTimeline timelineData={phoenixTimelineData} />
      </motion.div>

      {/* Final CTA Section */}
      <div className="relative z-20 bg-black">
        <div className="h-screen flex items-center justify-center px-4">
          <div className="text-center text-white">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"
            >
              Ready to Begin Your Journey?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg lg:text-xl text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto px-4"
            >
              Join the brands that trust Phoenix Crest to elevate their marketing to new heights. 
              Let's create something extraordinary together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors text-sm md:text-base">
                Start Your Project
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};