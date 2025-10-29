import Header from "../../../components/feature/Header";
import Footer from "../../../components/feature/Footer";
import { Link } from "react-router-dom";

export default function ArchitecturalScaleModelsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-black/70"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20architectural%20scale%20model%20of%20modern%20building%20on%20clean%20white%20surface%2C%20detailed%20miniature%20construction%2C%20professional%20studio%20lighting%2C%20architectural%20visualization%2C%20clean%20minimalist%20background&width=1920&height=1080&seq=scale-model-hero&orientation=landscape')`,
            }}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <i className="ri-building-2-line text-3xl text-black"></i>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                Architectural Scale Models
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                Detailed video presentations of physical and digital
                architectural scale models with professional cinematography.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get Quote
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Professional Scale Model Craftsmanship
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Handcrafted architectural scale models with exceptional detail
                and precision for presentations and exhibitions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-hammer-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Precision Craftsmanship
                </h3>
                <p className="text-gray-600">
                  Expert artisans create detailed scale models using premium
                  materials and traditional model-making techniques.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-ruler-2-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Accurate Scaling
                </h3>
                <p className="text-gray-600">
                  Precise measurements and proportions ensuring every detail
                  matches your architectural drawings and specifications.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-palette-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Premium Materials
                </h3>
                <p className="text-gray-600">
                  High-quality materials including acrylic, wood, metal, and
                  specialized modeling compounds for realistic finishes.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-lightbulb-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  LED Lighting Integration
                </h3>
                <p className="text-gray-600">
                  Custom LED lighting systems to illuminate interiors,
                  exteriors, and landscape features for dramatic presentations.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-landscape-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Landscape Details
                </h3>
                <p className="text-gray-600">
                  Detailed landscaping including trees, gardens, pathways, and
                  environmental context to complete the presentation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Protective Display Cases
                </h3>
                <p className="text-gray-600">
                  Custom acrylic display cases with professional mounting to
                  protect and showcase your scale model investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Scale Model Portfolio
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Explore our collection of architectural scale model videos and
                presentations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Detailed%20architectural%20scale%20model%20of%20residential%20complex%2C%20miniature%20buildings%20with%20landscaping%2C%20professional%20model%20photography%2C%20clean%20studio%20background&width=400&height=300&seq=model-portfolio-1&orientation=landscape"
                  alt="Residential Complex Model"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Riverside Gardens
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Detailed scale model showcasing 200-unit residential
                    development with amenities.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-ruler-line mr-2"></i>
                    <span>Scale: 1:500</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Commercial%20office%20building%20scale%20model%20with%20detailed%20facade%2C%20miniature%20architecture%2C%20professional%20lighting%2C%20architectural%20model%20showcase&width=400&height=300&seq=model-portfolio-2&orientation=landscape"
                  alt="Office Building Model"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Corporate Tower
                  </h3>
                  <p className="text-gray-600 mb-4">
                    High-detail model of 40-story office building with
                    integrated lighting system.
                  </p>
                  <div className="flex items-center text-sm text-gray-5 0">
                    <i className="ri-ruler-line mr-2"></i>
                    <span>Scale: 1:200</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Mixed-use%20development%20scale%20model%20with%20retail%20and%20residential%20components%2C%20detailed%20miniature%20architecture%2C%20professional%20model%20photography&width=400&height=300&seq=model-portfolio-3&orientation=landscape"
                  alt="Mixed-Use Model"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    City Center Plaza
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive mixed-use model featuring retail, office, and
                    residential spaces.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-ruler-line mr-2"></i>
                    <span>Scale: 1:300</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Shopping%20mall%20scale%20model%20with%20multiple%20levels%2C%20detailed%20interior%20layout%2C%20architectural%20miniature%20with%20lighting%20effects&width=400&height=300&seq=model-portfolio-4&orientation=landscape"
                  alt="Shopping Mall Model"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Grand Mall
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Multi-level retail complex model with detailed interior
                    spaces and lighting.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-ruler-line mr-2"></i>
                    <span>Scale: 1:400</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Hospital%20complex%20scale%20model%20with%20multiple%20buildings%2C%20detailed%20medical%20facility%20architecture%2C%20professional%20architectural%20model&width=400&height=300&seq=model-portfolio-5&orientation=landscape"
                  alt="Hospital Complex Model"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Medical Center
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive healthcare facility model with multiple
                    specialized buildings.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-ruler-line mr-2"></i>
                    <span>Scale: 1:600</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=University%20campus%20scale%20model%20with%20multiple%20academic%20buildings%2C%20landscaped%20grounds%2C%20detailed%20educational%20facility%20architecture&width=400&height=300&seq=model-portfolio-6&orientation=landscape"
                  alt="University Campus Model"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Tech University
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master plan model of new university campus with academic and
                    residential buildings.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-ruler-line mr-2"></i>
                    <span>Scale: 1:1000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/portfolio"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Scale Model Applications
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-presentation-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Presentation Models
                </h3>
                <p className="text-gray-600 mb-6">
                  High-quality display models for client presentations,
                  marketing centers, and public exhibitions with premium
                  finishes and detailed craftsmanship.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Premium material finishes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Integrated LED lighting systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Custom display cases included</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-tools-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Working Study Models
                </h3>
                <p className="text-gray-600 mb-6">
                  Functional models for design development, spatial analysis,
                  and architectural studies with modular components and testing
                  capabilities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Removable building sections</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Modular design components</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Design iteration flexibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-yellow-400">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Get Your Scale Model Quote
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">
                  Ready to create impressive scale models? Contact us for a
                  custom quote.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <form
                  id="scale-models-inquiry-form"
                  data-readdy-form
                  action="https://readdy.ai/api/form/d3mirlst07omtp5lr4h0"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Model Type
                      </label>
                      <select
                        name="project_type"
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select model type</option>
                        <option value="physical">Physical Scale Model</option>
                        <option value="digital">Digital 3D Model</option>
                        <option value="both">
                          Both Physical &amp; Digital
                        </option>
                        <option value="presentation">Presentation Model</option>
                        <option value="working">Working Model</option>
                        <option value="conceptual">Conceptual Model</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                      placeholder="Tell us about your scale model requirements, preferred scale, materials, timeline, and intended use..."
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      0/500 characters
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Get Quote</span>
                      <i className="ri-send-plane-line"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bring Your Designs to Life
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Create impressive scale models that showcase your architectural
              vision with precision and craftsmanship.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                Start Your Project
              </Link>
              <Link
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors whitespace-nowrap cursor-pointer"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ... existing code ... */}
      </main>
      <Footer />
    </div>
  );
}
