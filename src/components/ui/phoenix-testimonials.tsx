import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "framer-motion";

// Phoenix Crest Marketing Services testimonials
const testimonials = [
  {
    text: "Phoenix Marketing Services revolutionized our brand presence with their strategic approach and creative excellence. The results exceeded all our expectations.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b123?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Johnson",
    role: "CEO, Global Tech Ventures",
  },
  {
    text: "Their attention to detail and luxury aesthetic perfectly aligned with our premium brand positioning. Outstanding work and remarkable results.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Michael Chen",
    role: "Brand Director, Platinum Holdings",
  },
  {
    text: "The team's innovative campaigns captured attention and drove meaningful engagement. Their digital strategies amplified our brand across all channels.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Emily Rodriguez",
    role: "Marketing Manager, Luxe Brands",
  },
  {
    text: "Phoenix Marketing's comprehensive approach to brand strategy positioned us perfectly in the luxury market. Their expertise is unmatched.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "David Williams",
    role: "Founder, Elite Enterprises",
  },
  {
    text: "The creative excellence and strategic thinking they brought to our campaigns resulted in significant brand growth and market recognition.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Jessica Thompson",
    role: "VP Marketing, Prestige Corp",
  },
  {
    text: "Working with Phoenix Marketing was transformative. Their luxury aesthetic and premium brand positioning strategies delivered exceptional results.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "James Patterson",
    role: "Creative Director, Summit Studios",
  },
  {
    text: "Their digital marketing expertise and social media strategies significantly improved our online presence and customer engagement rates.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Amanda Clarke",
    role: "Digital Director, Modern Brands",
  },
  {
    text: "Phoenix Marketing Services delivered a comprehensive brand strategy that resonated with our target audience and exceeded our business goals.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Robert Taylor",
    role: "CEO, Innovation Labs",
  },
  {
    text: "The premium quality of their work and attention to luxury branding details made all the difference in our market positioning.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face",
    name: "Sophia Martinez",
    role: "Brand Manager, Luxury Collective",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const PhoenixTestimonials = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-border py-2 px-4 rounded-full bg-card/50 backdrop-blur-sm">
              <span className="text-sm font-medium text-foreground">Client Testimonials</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-center text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-center text-muted-foreground text-lg leading-relaxed">
            Discover how Phoenix Marketing Services has transformed brands and delivered exceptional results for our premium clients.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 max-h-[740px] overflow-hidden relative">
          {/* Gradient mask overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 pointer-events-none"></div>
          
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block" 
            duration={19} 
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block" 
            duration={17} 
          />
        </div>
      </div>
    </section>
  );
};