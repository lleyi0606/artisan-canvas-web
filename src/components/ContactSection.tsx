import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@portfolio.com',
      href: 'mailto:hello@portfolio.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];



  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Let's <span className="text-accent-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          
          {/* Contact Information Grid */}
          <div className="grid lg:grid-cols-2 gap-8 animate-slide-up">
            
            {/* Left Column - Availability */}
            <div className="order-2 lg:order-1">
              <Card className="p-8 shadow-card bg-gradient-subtle h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Availability</h3>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                    Available
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  I'm currently available for new projects and collaborations.
                  Whether you need UI/UX design, a brand refresh, or product consultation, let's discuss your needs.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Response time:</strong> Within 24 hours</p>
                  <p><strong>Preferred projects:</strong> Web applications, Mobile apps, Design systems</p>
                  <p><strong>Collaboration style:</strong> Agile, Remote-friendly</p>
                </div>
              </Card>
            </div>

            {/* Right Column - Contact Details and Social Links */}
            <div className="space-y-8 order-1 lg:order-2">
              
              {/* Contact Details */}
              <Card className="p-8 shadow-card">
                <h3 className="text-2xl font-serif font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                          <Icon className="h-5 w-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <a 
                            href={item.href} 
                            className="text-muted-foreground hover:text-accent transition-smooth"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8 shadow-card">
                <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:shadow-glow hover:bg-accent hover:text-accent-foreground transition-spring"
                        asChild
                      >
                        <a href={social.href} aria-label={social.label}>
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </Card>

            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 lg:p-12 bg-gradient-primary text-primary-foreground shadow-elegant">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Every great project starts with a conversation. Let's discuss your vision 
              and explore how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Schedule a Call
              </Button>
              <Button variant="elegant" size="lg">
                View Pricing
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;