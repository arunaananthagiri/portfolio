
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolioBg to-portfolioPrimary/20 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-float">
              <div className="w-full h-full bg-gradient-to-br from-portfolioPrimary to-portfolioAccent flex items-center justify-center">
              <img 
                src="/image/AA.jpeg" 
                alt="Profile" 
                className="w-80 h-80 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
              />
              </div>
            </div>
          </div>
          <div className="md:order-1">
            <p className="text-lg md:text-xl text-portfolioAccent font-medium mb-2 animate-slide-in">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-portfolioHeading mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Aruna A
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-portfolioText mb-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
              Data Analyst & Machine Learning Enthusiast
            </p>
            <p className="text-portfolioText text-lg mb-8 max-w-lg animate-fade-in" style={{animationDelay: '0.6s'}}>
              Passionate about transforming data into actionable insights and developing intelligent solutions using machine learning and AI.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-portfolioAccent hover:bg-portfolioAccent/90 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white hover:bg-gray-50 text-portfolioHeading font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
