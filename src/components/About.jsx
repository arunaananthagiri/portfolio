
const About = () => {
  return (
    <section id="about" className="section-padding py-20">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <p className="mb-4 text-lg">
                I am a passionate Data Analysis and Machine Learning enthusiast with a solid foundation in Computer Science Engineering. 
                My journey in the field of data science is driven by a deep curiosity to uncover patterns and insights from complex datasets.
              </p>
              <p className="mb-4 text-lg">
                With expertise in various programming languages and machine learning frameworks, I am particularly focused on natural language processing,
                sentiment analysis, and building AI solutions for real-world problems. I enjoy working on projects that combine technical challenges with 
                meaningful impact.
              </p>
              <p className="text-lg">
                My research interests include multilingual text analysis, code-mixed language processing, and sentiment analysis of regional languages.
                I am constantly learning and exploring new technologies to enhance my skills in the rapidly evolving field of AI.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md h-full animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-bold mb-4 text-portfolioHeading">Education</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-portfolioHeading">Bachelor of Engineering in Computer Science</h4>
                <p className="text-sm mb-1">Kongu Engineering College, Perundurai</p>
                <p className="text-sm text-gray-600">CGPA: 8.32</p>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-portfolioHeading">Objective</h3>
              <p className="text-gray-700">
                Aiming to secure an entry level position in the industry where I can utilize my skills to contribute to the industry and grow with the organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
