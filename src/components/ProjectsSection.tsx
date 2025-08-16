import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  period: string;
  role: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: "retail-dashboard",
      title: "Smart Retail Management Dashboard",
      description: "A comprehensive retail management system with AI-powered sales forecasting and real-time analytics.",
      tech: ["Python", "Streamlit", "MySQL", "LSTM", "Data Analysis"],
      period: "May 2024 - Jul 2024",
      role: "Full-Stack Developer",
      features: [
        "Real-time inventory management",
        "Sales tracking & analytics",
        "AI-powered profit forecasting",
        "LSTM model for sales prediction"
      ],
      githubUrl: "https://github.com/SandeepChowdary2305/Shop-Management",
      liveUrl: "https://github.com/SandeepChowdary2305/java-encryption-sharing"
    },
    {
      id: "file-encryption",
      title: "Secure File Encryption & Sharing System",
      description: "Enterprise-grade file security system with AES-256 encryption and secure LAN sharing capabilities.",
      tech: ["Java", "Java Swing", "AES-256", "Socket Programming", "MySQL"],
      period: "Jan 2024 - Mar 2024",
      role: "Security & Backend Developer",
      features: [
        "AES-256 file encryption/decryption",
        "Secure user authentication",
        "LAN-based file sharing",
        "Intuitive Java Swing interface"
      ],
      githubUrl: "",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="cosmic-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my journey through code - where innovation meets implementation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card p-8 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-glow">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{project.period}</p>
                <p className="text-secondary font-medium mb-4">{project.role}</p>
                <p className="text-lg leading-relaxed">{project.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-accent">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-accent">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="border-primary/50 text-primary hover:bg-primary/10"
          >
            <a href="https://github.com/SandeepChowdary2305" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};