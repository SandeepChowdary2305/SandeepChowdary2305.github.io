export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="cosmic-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </div>

        <div className="section-glow p-8 md:p-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-glow">
                Journey Through Technology 🚀
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Currently pursuing my <span className="text-primary font-semibold">MCA at Dayananda Sagar Academy</span>, 
                  I'm passionate about leveraging technology to create innovative solutions that make a difference.
                </p>
                <p>
                  My expertise spans across <span className="text-secondary font-semibold">Java, Python, and full-stack development</span>, 
                  with a strong foundation in data structures and algorithms. I thrive on solving complex problems 
                  and turning ideas into reality through clean, efficient code.
                </p>
                <p>
                  Beyond coding, I believe in continuous learning and exploring emerging technologies. 
                  My goal is to contribute to innovative solutions in the tech industry while growing as a 
                  <span className="text-accent font-semibold"> well-rounded software professional</span>.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="section-glow p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 text-primary">Core Values</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Innovation & Problem-Solving
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Continuous Learning
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Team Collaboration
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Clean Code Practices
                  </li>
                </ul>
              </div>

              <div className="section-glow p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 text-secondary">Quick Facts</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Location</span>
                    <p className="font-semibold">Karnataka, India</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">CGPA</span>
                    <p className="font-semibold text-primary">8.8/10</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Focus</span>
                    <p className="font-semibold">Full-Stack Development</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Passion</span>
                    <p className="font-semibold text-accent">Tech Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};