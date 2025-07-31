import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Palette, Smartphone, Database, Globe, Users } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'React & Next.js', level: 95, icon: Code2 },
    { name: 'TypeScript', level: 90, icon: Code2 },
    { name: 'UI/UX Design', level: 85, icon: Palette },
    { name: 'Mobile Development', level: 80, icon: Smartphone },
    { name: 'Backend APIs', level: 85, icon: Database },
    { name: 'Web Performance', level: 88, icon: Globe },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovation Co.',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
    },
    {
      year: '2022',
      title: 'Frontend Specialist',
      company: 'Digital Creative Agency',
      description: 'Specialized in creating exceptional user experiences and modern web interfaces.',
    },
    {
      year: '2020',
      title: 'Junior Developer',
      company: 'Startup Solutions',
      description: 'Started journey in web development, focusing on React and modern JavaScript.',
    },
    {
      year: '2019',
      title: 'Computer Science Degree',
      company: 'University of Technology',
      description: 'Graduated with honors, specializing in software engineering and web technologies.',
    },
  ];

  const values = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.',
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Putting user experience at the heart of every design decision.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing new technologies and pushing creative boundaries.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            About <span className="text-accent-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that combine beautiful design 
            with powerful functionality. I believe in the perfect balance of creativity and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Personal Story */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-serif font-semibold mb-6">My Journey</h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                My passion for development started during university when I discovered the magic 
                of bringing ideas to life through code. What began as curiosity quickly grew into 
                a deep love for creating meaningful digital experiences.
              </p>
              <p>
                Over the years, I've had the privilege of working with diverse teams and clients, 
                from innovative startups to established enterprises. Each project has taught me 
                something new and reinforced my belief in the power of thoughtful design and 
                clean, efficient code.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                workshops and mentoring.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-serif font-semibold mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-accent" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-accent h-2 rounded-full transition-smooth"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-serif font-semibold mb-8 text-center">Professional Timeline</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-smooth">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <Badge variant="outline" className="w-fit bg-gradient-accent text-accent-foreground">
                      {item.year}
                    </Badge>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-accent font-medium">{item.company}</p>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-serif font-semibold mb-8 text-center">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth animate-scale-hover"
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;