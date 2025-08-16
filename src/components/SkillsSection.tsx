import { useEffect, useState, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Programming Languages
    { name: "Java", level: 90, category: "Languages" },
    { name: "Python", level: 85, category: "Languages" },
    { name: "JavaScript", level: 80, category: "Languages" },
    { name: "C", level: 75, category: "Languages" },
    
    // Web Technologies
    { name: "React.js", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "Streamlit", level: 75, category: "Frontend" },
    
    // Databases & Tools
    { name: "MySQL", level: 85, category: "Database" },
    { name: "MongoDB", level: 70, category: "Database" },
    { name: "Git/GitHub", level: 85, category: "Tools" },
    { name: "Linux/Ubuntu", level: 80, category: "Tools" }
  ];

  const categories = ["Languages", "Frontend", "Backend", "Database", "Tools"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="cosmic-gradient">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I've mastered in my journey through the digital cosmos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-glow mb-6">Technical Proficiency</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="skill-bar h-3">
                  <div
                    className="skill-progress h-full"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills by Category */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-glow mb-6">Skill Categories</h3>
            {categories.map((category, categoryIndex) => (
              <div 
                key={category} 
                className="section-glow p-6 rounded-xl fade-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h4 className="text-xl font-semibold mb-4 text-secondary">{category}</h4>
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <div 
                        key={skill.name}
                        className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-primary hover:bg-primary/10 transition-colors cursor-default"
                      >
                        {skill.name}
                      </div>
                    ))
                  }
                </div>
              </div>
            ))}

            {/* Core Strengths */}
            <div className="section-glow p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-accent">Core Strengths</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Problem-Solving",
                  "Critical Thinking", 
                  "Team Collaboration",
                  "Adaptability"
                ].map((strength) => (
                  <div key={strength} className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    {strength}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};