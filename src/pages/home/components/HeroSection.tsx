import Button from "../../../components/base/Button";

export default function HeroSection() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/home/1.jpg')",
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
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open(
                  "https://calendly.com/lakshay-alliancemedialabs/30min?month=2025-10",
                  "_blank"
                )
              }
            >
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
