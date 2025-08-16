import { Trophy, Award, Medal, Star } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  type: string;
  date: string;
  icon: "trophy" | "award" | "medal" | "star";
}

export const AchievementsSection = () => {
  const achievements: Achievement[] = [
    {
      title: "🥇 1st Place - Web Designing",
      description: "ADVAYA'25, RVITM",
      type: "Competition Winner",
      date: "March 2025",
      icon: "trophy"
    },
    {
      title: "🥈 2nd Place - Web Designing", 
      description: "TECHNIX 6.0, BMSIT",
      type: "Competition Runner-up",
      date: "February 2025",
      icon: "medal"
    },
    {
      title: "Senior Under Officer (SUO)",
      description: "National Cadet Corps (NCC) - C Certificate",
      type: "Leadership Role",
      date: "2023",
      icon: "star"
    },
    {
      title: "State-level Throw Ball Player",
      description: "Represented state in throw ball competitions",
      type: "Sports Achievement",
      date: "2022",
      icon: "award"
    },
    {
      title: "District-level Basketball Player",
      description: "District basketball championship participant",
      type: "Sports Achievement", 
      date: "2021",
      icon: "award"
    }
  ];

  const trainings = [
    "ReactJS - Nxt Wave (June 2025)",
    "MongoDB - Simplilearn (March 2025)", 
    "Tableau Data Visualization - DSATM (Feb 2025)",
    "AI Fundamentals - IBM SkillsBuild (Dec 2024)",
    "Node.js - Nxt Wave (May 2024)",
    "JavaScript Essentials - Nxt Wave (Feb 2024)"
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "trophy": return <Trophy className="w-6 h-6" />;
      case "medal": return <Medal className="w-6 h-6" />;
      case "award": return <Award className="w-6 h-6" />;
      case "star": return <Star className="w-6 h-6" />;
      default: return <Trophy className="w-6 h-6" />;
    }
  };

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="cosmic-gradient">Achievements & Training</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones and certifications that mark my journey through the cosmos of learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-glow mb-8">🏆 Awards & Recognition</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="section-glow p-6 rounded-xl fade-in hover:scale-105 transition-transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      {getIcon(achievement.icon)}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-bold text-glow">{achievement.title}</h4>
                        <span className="text-sm text-muted-foreground">{achievement.date}</span>
                      </div>
                      <p className="text-secondary font-medium mb-2">{achievement.description}</p>
                      <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                        {achievement.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training & Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-glow mb-8">📚 Training & Workshops</h3>
            <div className="section-glow p-8 rounded-xl">
              <div className="space-y-4">
                {trainings.map((training, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-card/30 rounded-lg hover:bg-card/50 transition-colors fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{training}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 section-glow p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-secondary">Continuous Learning</h4>
              <p className="text-muted-foreground leading-relaxed">
                I believe in staying ahead of the technology curve through continuous learning and 
                hands-on practice. These certifications and workshops have strengthened my foundation 
                in modern web technologies, data science, and emerging tech trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};