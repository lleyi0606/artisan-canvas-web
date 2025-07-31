import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const BlogSection = () => {
  const featuredPost = {
    title: 'Building Scalable React Applications: Best Practices for 2024',
    excerpt: 'Discover the latest patterns and techniques for building maintainable, performant React applications that scale with your business needs.',
    category: 'Development',
    readTime: '8 min read',
    publishDate: 'December 15, 2024',
    featured: true,
  };

  const posts = [
    {
      title: 'The Art of Micro-Interactions in Modern Web Design',
      excerpt: 'How subtle animations and feedback can dramatically improve user experience and engagement.',
      category: 'Design',
      readTime: '5 min read',
      publishDate: 'December 10, 2024',
    },
    {
      title: 'TypeScript Tips: Advanced Type Patterns',
      excerpt: 'Advanced TypeScript patterns that will make your code more robust and maintainable.',
      category: 'Development',
      readTime: '6 min read',
      publishDate: 'December 5, 2024',
    },
    {
      title: 'Mobile-First Design: Beyond Responsive',
      excerpt: 'Why mobile-first thinking is essential for modern web applications and how to implement it effectively.',
      category: 'Design',
      readTime: '7 min read',
      publishDate: 'November 28, 2024',
    },
    {
      title: 'Performance Optimization Strategies',
      excerpt: 'Proven techniques to improve your web application performance and user experience.',
      category: 'Performance',
      readTime: '9 min read',
      publishDate: 'November 20, 2024',
    },
  ];

  const categories = ['All', 'Development', 'Design', 'Performance', 'Career'];

  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Latest <span className="text-accent-gradient">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge, experiences, and insights from the world of development 
            and design. Let's learn and grow together.
          </p>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden shadow-elegant hover:shadow-glow transition-smooth animate-slide-up">
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="outline" className="bg-gradient-accent text-accent-foreground">
                Featured
              </Badge>
              <Badge variant="secondary">
                {featuredPost.category}
              </Badge>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-gradient">
              {featuredPost.title}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.publishDate}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </div>
              </div>
              
              <Button variant="accent" className="group">
                Read Article
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="minimal"
              className="hover:bg-accent hover:text-accent-foreground"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-elegant transition-smooth animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <Badge variant="secondary" className="mb-3">
                  {post.category}
                </Badge>
                <h4 className="text-xl font-serif font-semibold mb-3 group-hover:text-accent transition-smooth">
                  {post.title}
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.publishDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="p-8 lg:p-12 text-center shadow-card bg-gradient-primary text-primary-foreground animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <BookOpen className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
              Stay Updated
            </h3>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to get notified about new articles, tutorials, and insights 
              delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-primary-foreground text-primary placeholder:text-primary/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="accent" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BlogSection;