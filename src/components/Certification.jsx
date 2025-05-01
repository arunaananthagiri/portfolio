
const Certification = () => {
  return (
    <section id="certification" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Certification</h2>
        
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in">
            <div className="p-6">
              <h3 className="text-xl font-bold text-portfolioHeading mb-2">
                Executive Post Graduate Certification in Data Science & Artificial Intelligence
              </h3>
              <p className="text-gray-600 mb-4">iHUB DivyaSampark at Indian Institute of Technology Roorkee</p>
              <p className="text-gray-600 mb-4">in association with Department of Science & Technology</p>
              
              <div className="mt-6 flex justify-center">
                <div className="max-w-md overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="/image/certificate.png" 
                    alt="Data Science & AI Certification" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-portfolioHeading">Other Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h4 className="font-semibold text-lg text-portfolioHeading mb-2">Paper Publication Award</h4>
              <p className="text-gray-700">
                Won third prize for paper on "3D Printing Technology" at Papertrix 2k23, organized by IEEE, KEC.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: '0.4s'}}>
              <h4 className="font-semibold text-lg text-portfolioHeading mb-2">Reliance Foundation Scholarship</h4>
              <p className="text-gray-700">
                Recipient of Reliance Foundation Undergraduate Scholarship (2022-2026)
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: '0.6s'}}>
              <h4 className="font-semibold text-lg text-portfolioHeading mb-2">Foundation for Excellence Scholarship</h4>
              <p className="text-gray-700">
                Recipient of Foundation for Excellence (FFE) Scholarship (2022-2026)
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-6 text-portfolioHeading">Paper Publications</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: '0.8s'}}>
                <h4 className="font-semibold text-lg text-portfolioHeading mb-2">Decoding Emotions: Political Sentiment Analysis of Tamil-English Code-Mixed Tweets Using Machine Learning and Transformers</h4>
                <p className="text-gray-600 italic">(Accepted)</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: '1s'}}>
                <h4 className="font-semibold text-lg text-portfolioHeading mb-2">Sarcasm Detection in Dravidian Languages Using Machine Learning and Transformer Models</h4>
                <p className="text-gray-600 italic">(Accepted)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
