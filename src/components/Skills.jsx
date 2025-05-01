
const Skills = () => {
  const programmingSkills = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  ];
  
  const frameworks = [
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  ];
  
  const databases = [
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ];
  
  const tools = [
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  ];
  
  const technical = [
    { name: 'Machine Learning', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/python.svg' },
    { name: 'Deep Learning', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/tensorflow.svg' },
    { name: 'Data Analysis', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/pandas.svg' },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-portfolioHeading">Programming Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {programmingSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-box animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-2" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-portfolioHeading">Frameworks</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {frameworks.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-box animate-scale-in"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-2" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-portfolioHeading">Databases</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {databases.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-box animate-scale-in"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-2" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-portfolioHeading">Development Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-box animate-scale-in"
                style={{ animationDelay: `${index * 0.1 + 0.7}s` }}
              >
                <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-2" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-portfolioHeading">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {technical.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-box animate-scale-in"
                style={{ animationDelay: `${index * 0.1 + 0.9}s` }}
              >
                <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-2" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
