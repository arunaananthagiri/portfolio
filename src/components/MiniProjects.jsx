
const MiniProjects = () => {
  const miniProjects = [
    {
      id: 1,
      title: "Detecting Racial Hoaxes in Code-Mixed Hindi-English Social Media Data",
      description: "Developed a machine learning model to identify racial hoaxes in bilingual social media content, helping combat misinformation.",
      techStack: "Python, NLP, Machine Learning"
    },
    {
      id: 2,
      title: "Political Multiclass Sentiment Analysis of Tamil X(Twitter) Comments",
      description: "Built a sentiment analysis system specifically for Tamil language tweets related to political topics. The model categorizes sentiments into multiple classes.",
      techStack: "Python, Tamil NLP, Deep Learning"
    },
    {
      id: 3,
      title: "Sarcasm Identification of Dravidian Languages",
      description: "Created models to detect sarcasm in Dravidian languages, addressing the unique challenges of linguistic nuances in these languages.",
      techStack: "Python, NLP, Transformers"
    }
  ];

  return (
    <section id="miniprojects" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Mini Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {miniProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden card-hover-effect animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-3 bg-gradient-to-r from-portfolioPrimary to-portfolioAccent"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-portfolioHeading mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                    {project.techStack}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniProjects;
