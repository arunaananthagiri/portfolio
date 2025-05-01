
const Projects = () => {
  const projects = [
    {
      title: "NewsNetwork",
      description: "A personalized news platform with user preference-based content delivery and real-time updates.",
      techStack: "React, MongoDB",
      points: [
        "Developed a personalized news platform with user preference-based content delivery and real-time updates.",
        "Integrated external news APIs to fetch the latest news, ensuring dynamic and relevant content.",
        "Enabled user interactions, including likes and saved articles, to enhance engagement and retention."
      ]
    },
    {
      title: "HerProTech - Women Safety Analytics",
      description: "An AI-driven women's safety system that detects harassment activities in public spaces.",
      techStack: "Machine Learning",
      points: [
        "Developed an AI-driven women's safety system to detect harassment activities in public spaces.",
        "Implemented gender classification and anomaly detection to identify lone women at night or individual women surrounded by men.",
        "Utilized machine learning models to recognize harassment patterns and trigger real-time SOS alerts for immediate assistance."
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-40 bg-gradient-to-r from-portfolioPrimary to-portfolioAccent/30 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-portfolioHeading">{project.title}</h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-portfolioBg rounded-full px-3 py-1 text-sm font-semibold text-portfolioText mr-2 mb-2">
                    {project.techStack}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {project.points.map((point, i) => (
                    <li key={i} className="text-gray-700">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
