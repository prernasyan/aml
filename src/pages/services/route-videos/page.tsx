import { Link } from "react-router-dom";
import Header from "../../../components/feature/Header";
import Footer from "../../../components/feature/Footer";
import WhatsAppFloat from "../../../components/feature/WhatsAppFloat";

export default function RouteVideosPage() {
  const features = [
    {
      icon: "ri-road-map-line",
      title: "Scenic Route Planning",
      description:
        "Strategic route selection highlighting the most attractive pathways and accessibility features to your development.",
    },
    {
      icon: "ri-camera-3-line",
      title: "Cinematic Production",
      description:
        "Professional cinematography with smooth camera movements and dynamic angles showcasing the journey experience.",
    },
    {
      icon: "ri-flight-takeoff-line",
      title: "Aerial Perspectives",
      description:
        "Drone footage providing bird's eye views of routes, connectivity, and surrounding infrastructure.",
    },
    {
      icon: "ri-time-line",
      title: "Journey Timing",
      description:
        "Accurate travel time documentation from key landmarks and transportation hubs to your property.",
    },
    {
      icon: "ri-map-pin-line",
      title: "Landmark Integration",
      description:
        "Highlighting important landmarks, amenities, and points of interest along the route to your development.",
    },
    {
      icon: "ri-navigation-line",
      title: "Navigation Clarity",
      description:
        "Clear directional guidance and signage visibility ensuring easy navigation for potential buyers.",
    },
  ];

  const benefits = [
    "Enhanced location marketing and accessibility demonstration",
    "Improved buyer confidence through route familiarity",
    "Professional presentation of connectivity advantages",
    "Reduced site visit preparation time for clients",
    "Effective showcase of surrounding infrastructure",
    "Compelling visual storytelling of the journey experience",
  ];

  const portfolioItems = [
    {
      title: "Luxury Resort Route Video",
      image:
        "https://readdy.ai/api/search-image?query=Aerial%20cinematic%20route%20video%20showcasing%20luxury%20resort%20development%20with%20winding%20roads%20through%20lush%20tropical%20landscape%2C%20modern%20architecture%20buildings%20connected%20by%20scenic%20pathways%2C%20birds%20eye%20view%20perspective%2C%20professional%20real%20estate%20marketing%20cinematography%2C%20golden%20hour%20lighting&width=600&height=400&seq=route-portfolio-1&orientation=landscape",
      description:
        "Dynamic route visualization showcasing scenic pathways to premium resort development",
    },
    {
      title: "Urban Township Access",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20route%20video%20of%20urban%20township%20development%20showing%20main%20road%20access%2C%20traffic%20flow%2C%20modern%20infrastructure%2C%20street%20lighting%2C%20landscaping%2C%20and%20connectivity%20to%20city%20center%2C%20cinematic%20real%20estate%20marketing%20style&width=600&height=400&seq=route-portfolio-2&orientation=landscape",
      description:
        "Comprehensive access route documentation for large-scale township project",
    },
    {
      title: "Highway Connectivity Showcase",
      image:
        "https://readdy.ai/api/search-image?query=Highway%20route%20video%20showing%20smooth%20connectivity%20to%20residential%20development%2C%20modern%20road%20infrastructure%2C%20clear%20signage%2C%20landscaped%20medians%2C%20professional%20cinematography%20for%20real%20estate%20marketing%2C%20daylight%20conditions&width=600&height=400&seq=route-portfolio-3&orientation=landscape",
      description:
        "Strategic highway access visualization highlighting excellent connectivity",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Cinematic%20aerial%20view%20of%20winding%20road%20through%20beautiful%20landscape%20leading%20to%20modern%20residential%20development%2C%20professional%20real%20estate%20route%20video%20cinematography%2C%20golden%20hour%20lighting%2C%20scenic%20pathways%20and%20infrastructure%2C%20birds%20eye%20perspective&width=1920&height=1080&seq=route-hero-bg&orientation=landscape')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Route Videos
            </h1>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Dynamic route visualizations that showcase accessibility,
              connectivity, and the journey experience to your developments with
              professional cinematography and strategic storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                Start Your Project
              </Link>
              <a
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Route Video Features
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive route documentation that enhances location marketing
              and buyer confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-yellow-400 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${feature.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Why Choose Route Videos?
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              <p className="text-xl text-gray-600 mb-8">
                Route videos provide potential buyers with essential
                accessibility information and create confidence in location
                advantages.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <i className="ri-check-line text-yellow-400 text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20route%20video%20production%20setup%20with%20camera%20equipment%2C%20drone%2C%20and%20cinematography%20gear%20for%20real%20estate%20marketing%2C%20modern%20technology%20for%20location%20documentation%2C%20clean%20studio%20environment&width=600&height=500&seq=route-benefits&orientation=landscape"
                alt="Route Video Production"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Route Video Portfolio
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our route video projects showcasing various accessibility
              and connectivity solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gray-900 mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <i className="ri-play-circle-line text-4xl mb-2"></i>
                      <p className="text-sm">View Route Video</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Showcase Your Location?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us create compelling route videos that highlight your
            development's accessibility and connectivity advantages.
          </p>
          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
