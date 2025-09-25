import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const Insights = () => {
  const featuredPost = {
    title: 'The Future of Luxury Brand Marketing in 2024',
    excerpt: 'Exploring emerging trends, consumer behavior shifts, and strategic opportunities that will define luxury marketing success in the coming year.',
    author: 'Alexandra Sterling',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
  };

  const insights = [
    {
      title: 'Building Authentic Brand Narratives That Resonate',
      excerpt: 'How to craft compelling brand stories that connect emotionally with your target audience while maintaining luxury positioning.',
      author: 'Marcus Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop'
    },
    {
      title: 'Digital Transformation in Luxury Marketing',
      excerpt: 'Navigating the digital landscape while preserving exclusivity and premium brand experience across all touchpoints.',
      author: 'Isabella Rodriguez',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Digital',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop'
    },
    {
      title: 'The Psychology of Luxury Consumer Behavior',
      excerpt: 'Understanding the motivations, desires, and decision-making processes that drive luxury purchasing decisions.',
      author: 'Dr. Sarah Williams',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Research',
      image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=250&fit=crop'
    },
    {
      title: 'Event Marketing Excellence: Creating Memorable Experiences',
      excerpt: 'Best practices for designing and executing luxury events that create lasting brand impressions and drive engagement.',
      author: 'James Thompson',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=250&fit=crop'
    },
    {
      title: 'Measuring ROI in Luxury Brand Marketing',
      excerpt: 'Advanced metrics and KPIs that accurately reflect the success of premium brand marketing initiatives.',
      author: 'Alexandra Sterling',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    },
    {
      title: 'Sustainability and Luxury: The New Paradigm',
      excerpt: 'How luxury brands are successfully integrating sustainability messaging without compromising their premium positioning.',
      author: 'Marcus Chen',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop'
    }
  ];

  const categories = ['All', 'Strategy', 'Branding', 'Digital', 'Research', 'Events', 'Analytics', 'Sustainability'];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Marketing <span className="gold-accent">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Expert perspectives, industry trends, and strategic insights from our team of luxury marketing specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Card className="luxury-card elegant-hover overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full min-h-[300px] object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 lg:p-12">
                  <Badge variant="outline" className="border-primary text-primary mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="font-heading text-3xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{featuredPost.author}</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="btn-luxury text-primary-foreground">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {insights.map((insight, index) => (
              <Card key={index} className="luxury-card elegant-hover group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge variant="outline" className="absolute top-4 left-4 bg-background/90 border-primary text-primary">
                    {insight.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <h3 className="font-heading text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    {insight.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="font-medium">{insight.author}</span>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(insight.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{insight.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full text-primary hover:bg-primary hover:text-primary-foreground group">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Stay Ahead of the <span className="gold-accent">Curve</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Subscribe to our weekly insights newsletter and receive the latest trends, 
              strategies, and case studies delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="btn-luxury text-primary-foreground px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;