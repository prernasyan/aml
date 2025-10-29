
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20modern%20architectural%20visualization%20studio%20with%20sleek%20black%20surfaces%2C%20dramatic%20lighting%2C%20holographic%20displays%20showing%203D%20building%20models%2C%20cinematic%20atmosphere%2C%20high-tech%20equipment%2C%20minimalist%20design%2C%20professional%20photography%20lighting%2C%20ultra-modern%20workspace%20with%20glass%20and%20metal%20elements%2C%20sophisticated%20technology%20setup&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Where Real Estate
            <span className="block text-yellow-400">Meets Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cinematic Content & Virtual Experiences for Modern Developers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button variant="primary" size="lg" onClick={scrollToPortfolio}>
              <span className="flex items-center space-x-2">
                <span>Explore Our Work</span>
                <i className="ri-arrow-right-line"></i>
              </span>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open('https://calendly.com/lakshay-alliancemedialabs/30min?month=2025-10', '_blank')}>
              <span className="flex items-center space-x-2">
                <i className="ri-play-circle-line"></i>
                <span>Book a Demo</span>
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
}
