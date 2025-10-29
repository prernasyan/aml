
const technologies = [
  {
    icon: 'ri-vr-line',
    title: 'Virtual Reality',
    description: 'Immersive VR experiences using cutting-edge headsets and 360° environments',
    isCustomIcon: true,
    customIcon: 'https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/fe7a09b49ca15138bec4a79058f6a337.png'
  },
  {
    icon: 'ri-smartphone-line',
    title: 'Augmented Reality',
    description: 'AR applications that overlay digital information onto real-world environments'
  },
  {
    icon: 'ri-computer-line',
    title: 'Real-time Rendering',
    description: 'Advanced GPU-accelerated rendering for instant visualization updates'
  },
  {
    icon: 'ri-cloud-line',
    title: 'Cloud Computing',
    description: 'Scalable cloud infrastructure for processing and delivering content globally'
  }
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Technology Edge
              </h2>
              <div className="w-20 h-1 bg-yellow-400"></div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We leverage the latest in visualization technology to create immersive experiences 
              that push the boundaries of what's possible in real estate marketing.
            </p>
            
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    {tech.isCustomIcon ? (
                      <img src={tech.customIcon} alt={tech.title} className="w-6 h-6" />
                    ) : (
                      <i className={`${tech.icon} text-xl text-black`}></i>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{tech.title}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-black to-gray-800 rounded-2xl overflow-hidden relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Futuristic%20holographic%20display%20showing%203D%20architectural%20building%20model%20floating%20in%20space%2C%20advanced%20technology%20interface%2C%20digital%20visualization%2C%20sci-fi%20atmosphere%2C%20glowing%20blue%20and%20yellow%20accents%2C%20high-tech%20laboratory%20setting%2C%20immersive%20technology%20demonstration&width=600&height=600&seq=tech-display&orientation=squarish"
                alt="Technology Display"
                className="w-full h-full object-cover object-top opacity-80"
              />
              
              {/* Overlay Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <i className="ri-play-circle-line text-3xl text-yellow-400"></i>
                  </div>
                  <p className="text-sm font-medium">Experience Our Technology</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-yellow-400/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                <i className="ri-3d-view-line text-xl text-yellow-400"></i>
              </div>
              
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-yellow-400/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                <img src="https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/fe7a09b49ca15138bec4a79058f6a337.png" alt="VR" className="w-6 h-6 brightness-0 invert opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
