import { TypingEffect } from './TypingEffect';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import cosmicBg from '@/assets/cosmic-bg.jpg';

export const HeroSection = () => {
  const typingWords = ["Full Stack Developer", "Problem Solver", "Tech Explorer "];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center cosmic-bg relative overflow-hidden"
      style={{
        backgroundImage: `url(${cosmicBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/80"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 fade-in">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="cosmic-gradient">L Sandeep</span>
          </h1>
          <div className="text-2xl md:text-4xl font-medium text-foreground mb-4">
            <TypingEffect words={typingWords} className="nebula-gradient" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting innovative solutions through code, exploring the infinite possibilities 
            of technology, and building the future one project at a time.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-6 mb-12">
          <a 
            href="mailto:sandeepchowdary2305@gmail.com"
            className="flex items-center justify-center w-12 h-12 rounded-full section-glow hover:scale-110 transition-transform"
          >
            <Mail className="w-5 h-5 text-primary" />
          </a>
          <a 
            href="https://github.com/SandeepChowdary2305"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full section-glow hover:scale-110 transition-transform"
          >
            <Github className="w-5 h-5 text-primary" />
          </a>
          <a 
            href="https://www.linkedin.com/in/l-sandeep-chowdary/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full section-glow hover:scale-110 transition-transform"
          >
            <Linkedin className="w-5 h-5 text-primary" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="cosmic-gradient-bg text-primary-foreground hover:scale-105 transition-transform"
          >
            Explore My Work
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 transition-transform"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};