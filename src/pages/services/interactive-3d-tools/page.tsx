import Header from "../../../components/feature/Header";
import Footer from "../../../components/feature/Footer";
import { Link } from "react-router-dom";
import PortfolioSection from "../../home/components/PortfolioSection";

export default function Interactive3DToolsPage() {
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
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Interactive%203D%20visualization%20on%20modern%20computer%20screen%20showing%20architectural%20building%20configurator%2C%20user%20interface%20elements%2C%20clean%20technology%20background%2C%20professional%20web%20application%20showcase&width=1920&height=1080&seq=interactive-hero&orientation=landscape')`,
            }}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <i className="ri-computer-line text-3xl text-black"></i>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                Interactive 3D Tools
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                Custom web-based 3D configurators and interactive visualization
                platforms that engage and convert prospects.
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
                Advanced Interactive Features
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Engage your clients with cutting‑edge interactive 3D tools that
                allow real‑time customization and exploration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-settings-3-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Real-Time Customization
                </h3>
                <p className="text-gray-600">
                  Instant material changes, color variations, and layout
                  modifications with live 3D updates.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-smartphone-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Cross-Platform Compatibility
                </h3>
                <p className="text-gray-600">
                  Seamless performance across desktop, tablet, and mobile
                  devices with responsive design.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-hand-heart-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Intuitive User Interface
                </h3>
                <p className="text-gray-600">
                  User-friendly controls and navigation that make complex 3D
                  interactions simple and enjoyable.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-database-2-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Dynamic Content Management
                </h3>
                <p className="text-gray-600">
                  Easy-to-use backend system for updating 3D models, materials,
                  and configuration options.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-share-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Social Sharing
                </h3>
                <p className="text-gray-600">
                  Built-in sharing capabilities allowing users to save and share
                  their custom configurations.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-bar-chart-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Analytics Integration
                </h3>
                <p className="text-gray-600">
                  Comprehensive analytics tracking user interactions and popular
                  configuration choices.
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
                Interactive 3D Portfolio
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Innovative interactive 3D tools that transform how clients
                experience and customize properties
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Interactive%20apartment%20configurator%20on%20computer%20screen%2C%203D%20room%20customization%20interface%2C%20real%20estate%20technology%2C%20property%20visualization%20tool&width=400&height=300&seq=interactive-portfolio-1&orientation=landscape"
                  alt="Apartment Configurator"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Luxury Apartment Configurator
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Interactive tool allowing buyers to customize layouts,
                    finishes, and furniture in real-time.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-computer-line mr-2"></i>
                    <span>Web App • 3D Configurator</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Interactive%20master%20plan%20visualization%2C%20development%20site%20map%20with%20clickable%20buildings%2C%20real%20estate%20project%20overview%20tool&width=400&height=300&seq=interactive-portfolio-2&orientation=landscape"
                  alt="Master Plan Tool"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Master Plan Explorer
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Interactive site plan allowing exploration of entire
                    development with unit selection.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-map-2-line mr-2"></i>
                    <span>Interactive Map • Site Planning</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Virtual%20showroom%20interface%20with%203D%20property%20models%2C%20interactive%20real%20estate%20presentation%2C%20digital%20property%20showcase&width=400&height=300&seq=interactive-portfolio-3&orientation=landscape"
                  alt="Virtual Showroom"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Virtual Sales Center
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive virtual showroom with interactive property
                    models and information.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-store-3-line mr-2"></i>
                    <span>Virtual Showroom • Sales Tool</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Interactive%20floor%20plan%20tool%20with%20drag%20and%20drop%20furniture%2C%20room%20layout%20customization%2C%20interior%20design%20configurator&width=400&height=300&seq=interactive-portfolio-4&orientation=landscape"
                  alt="Floor Plan Tool"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Interactive Floor Plans
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dynamic floor plan tool with furniture placement and space
                    customization options.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-layout-line mr-2"></i>
                    <span>Floor Plans • Space Planning</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Augmented%20reality%20property%20viewer%20on%20mobile%20device%2C%20AR%20real%20estate%20application%2C%20virtual%20property%20overlay%20technology&width=400&height=300&seq=interactive-portfolio-5&orientation=landscape"
                  alt="AR Property Viewer"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    AR Property Viewer
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Augmented reality app allowing clients to visualize
                    properties in real environments.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-smartphone-line mr-2"></i>
                    <span>Mobile AR • Property Visualization</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Interactive%203D%20building%20explorer%20with%20cutaway%20views%2C%20architectural%20visualization%20tool%2C%20building%20section%20viewer&width=400&height=300&seq=interactive-portfolio-6&orientation=landscape"
                  alt="Building Explorer"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    3D Building Explorer
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Interactive building explorer with cutaway views and
                    detailed unit information.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-building-line mr-2"></i>
                    <span>3D Explorer • Building Visualization</span>
                  </div>
                </div>
              </div>

              {/* New Portfolio Item */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/8173ab7e42cdb17b0403da87035eb759.png"
                  alt="Yuu by Nahar Interactive Tool"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Yuu by Nahar, Mumbai
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Interactive residential apartment configurator allowing
                    buyers to customize layouts, finishes, and amenities in
                    real‑time.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-home-4-line mr-2"></i>
                    <span>Apartment Configurator • Residential</span>
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

        {/* Tools Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Interactive Tool Types
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-home-4-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Property Configurators
                </h3>
                <p className="text-gray-600 mb-6">
                  Interactive tools allowing prospects to customize apartments,
                  houses, and commercial spaces in real-time.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Floor plan customization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Material and finish selection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Furniture and fixture options</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Pricing calculator integration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-building-2-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Development Visualizers
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive tools showcasing entire developments with
                  interactive site plans and building selection.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Interactive site master plans</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Building and unit selection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Amenity and facility tours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Phase‑wise development timeline</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-palette-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Design Studios
                </h3>
                <p className="text-gray-600 mb-6">
                  Advanced design tools allowing clients to experiment with
                  layouts, materials, and styling options.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Drag‑and‑drop furniture placement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Color scheme generators</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Lighting scenario testing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Style preset collections</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-presentation-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Sales Presentation Tools
                </h3>
                <p className="text-gray-600 mb-6">
                  Interactive presentation platforms designed specifically for
                  sales teams and client meetings.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Guided tour sequences</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Comparison tools</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Lead capture integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Offline presentation mode</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <PortfolioSection />
        {/* Contact Form Section */}
        <section className="py-24 bg-yellow-400">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Get Your Interactive 3D Quote
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">
                  Ready to create engaging interactive experiences? Contact us
                  for a custom quote.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <form
                  id="interactive-3d-inquiry-form"
                  data-readdy-form
                  action="https://readdy.ai/api/form/d3mirlst07omtp5lr4fg"
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
                        Project Type
                      </label>
                      <select
                        name="project_type"
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select project type</option>
                        <option value="configurator">
                          Product Configurator
                        </option>
                        <option value="virtual-showroom">
                          Virtual Showroom
                        </option>
                        <option value="interactive-floor-plan">
                          Interactive Floor Plan
                        </option>
                        <option value="3d-viewer">3D Model Viewer</option>
                        <option value="ar-experience">AR Experience</option>
                        <option value="custom-tool">
                          Custom Interactive Tool
                        </option>
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
                      placeholder="Tell us about your interactive 3D tool requirements, target audience, and specific features you'd like to include..."
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
              Ready to Engage Your Clients?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Create interactive experiences that convert visitors into buyers
              with our cutting‑edge 3D tools.
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
      </main>
      <Footer />
    </div>
  );
}
