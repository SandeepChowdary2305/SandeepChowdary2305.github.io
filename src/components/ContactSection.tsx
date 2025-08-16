import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "sandeepchowdary2305@gmail.com",
      href: "mailto:sandeepchowdary2305@gmail.com"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub", 
      value: "SandeepChowdary2305",
      href: "https://github.com/SandeepChowdary2305"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "L Sandeep Chowdary", 
      href: "https://www.linkedin.com/in/l-sandeep-chowdary/"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Karnataka, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="cosmic-gradient">Let's Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to embark on a cosmic journey together? Let's build something amazing!
          </p>
        </div>

        <div className="section-glow p-8 md:p-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-glow mb-8">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-card/30 rounded-xl hover:bg-card/50 transition-colors fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-lg font-medium text-glow hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-lg font-medium">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA and Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-glow mb-6">Ready to Collaborate?</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking for a passionate developer to join your team, 
                  collaborate on an exciting project, or just want to discuss the latest 
                  in technology, I'd love to hear from you!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    asChild
                    className="cosmic-gradient-bg text-primary-foreground"
                  >
                    <a href="mailto:sandeepchowdary2305@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-primary/50 text-primary hover:bg-primary/10"
                  >
                    <a href="https://www.linkedin.com/in/l-sandeep-chowdary/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>

              <div className="section-glow p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 text-secondary">Current Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                    <span className="text-muted-foreground">Open to new opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                    <span className="text-muted-foreground">Available for freelance projects</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                    <span className="text-muted-foreground">Interested in collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/30">
          <p className="text-muted-foreground">
            © 2024 L Sandeep Chowdary. Crafted with 💙 in the cosmos of code.
          </p>
        </div>
      </div>
    </section>
  );
};