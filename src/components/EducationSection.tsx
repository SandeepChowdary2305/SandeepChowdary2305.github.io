interface Education {
  degree: string;
  institution: string;
  grade: string;
  year: string;
  status?: string;
}

export const EducationSection = () => {
  const education: Education[] = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Dayananda Sagar Academy of Technology & Management",
      grade: "8.8 CGPA",
      year: "2024 - Present",
      status: "Pursuing"
    },
    {
      degree: "B.Sc in Computer Science & Physics",
      institution: "Loyola Degree College, Manvi",
      grade: "8.48 CGPA",
      year: "2021 - 2024"
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "Loyola PU College, Manvi",
      grade: "74.6%",
      year: "2019 - 2021"
    },
    {
      degree: "Secondary School (CBSE)",
      institution: "Xavier School, Manvi",
      grade: "69.8%",
      year: "2018 - 2019"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="cosmic-gradient">Education Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The academic foundation that launched my cosmic journey in technology
          </p>
        </div>

        <div className="section-glow p-8 md:p-12 rounded-2xl">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="timeline-item fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card/50 p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-glow mb-2">
                        {edu.degree}
                        {edu.status && (
                          <span className="ml-3 px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                            {edu.status}
                          </span>
                        )}
                      </h3>
                      <p className="text-lg text-secondary font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-lg font-bold text-accent">{edu.grade}</p>
                      <p className="text-muted-foreground">{edu.year}</p>
                    </div>
                  </div>
                  
                  {/* Add specific highlights for certain degrees */}
                  {index === 0 && (
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <h4 className="text-sm font-semibold text-primary mb-2">Current Focus Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Advanced Software Engineering", "Database Systems", "Machine Learning", "Web Technologies"].map((area) => (
                          <span key={area} className="px-2 py-1 bg-muted text-xs rounded-full">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <h4 className="text-sm font-semibold text-primary mb-2">Key Subjects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Computer Science", "Physics"].map((subject) => (
                          <span key={subject} className="px-2 py-1 bg-muted text-xs rounded-full">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};