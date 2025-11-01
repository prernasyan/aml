import Header from "../../../components/feature/Header";
import Footer from "../../../components/feature/Footer";
import Button from "../../../components/base/Button";
import { Link } from "react-router-dom";
import PortfolioSection from "../../home/components/PortfolioSection";

export default function ConstructionUpdateVideosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Construction%20site%20time-lapse%20photography%20setup%20with%20professional%20camera%20equipment%2C%20construction%20workers%20in%20safety%20gear%2C%20building%20progress%20documentation%2C%20crane%20operations%2C%20modern%20construction%20project%2C%20professional%20videography%20equipment%2C%20construction%20progress%20monitoring%2C%20industrial%20setting%2C%20natural%20lighting&width=1920&height=1080&seq=construction-hero&orientation=landscape')`,
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-shadow-lg">
                Construction Update Videos
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed text-shadow-md max-w-3xl mx-auto">
                Document your project's journey with professional time-lapse
                videos and progress updates that showcase every milestone of
                your construction process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/lakshay-alliancemedialabs/30min?month=2025-10",
                      "_blank"
                    )
                  }
                  className="shadow-lg backdrop-blur-sm"
                >
                  Book a Demo
                </Button>
                <Link to="/portfolio">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() =>
                      document
                        .getElementById("portfolio")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="shadow-lg backdrop-blur-sm"
                  >
                    View Portfolio
                  </Button>
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
                Comprehensive Progress Documentation
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Keep stakeholders informed with professional construction
                progress videos and detailed project updates
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-flight-takeoff-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Drone Cinematography
                </h3>
                <p className="text-gray-600">
                  Stunning aerial footage capturing construction progress from
                  unique perspectives and angles.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-calendar-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Regular Updates
                </h3>
                <p className="text-gray-600">
                  Scheduled weekly or monthly video updates documenting
                  construction milestones and progress.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-time-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Time-Lapse Creation
                </h3>
                <p className="text-gray-600">
                  Compelling time-lapse videos showing construction progress
                  over weeks and months.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Safety Compliance
                </h3>
                <p className="text-gray-600">
                  All drone operations follow strict safety protocols and
                  regulatory compliance standards.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-hd-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  4K Quality
                </h3>
                <p className="text-gray-600">
                  Ultra-high definition video capture ensuring every detail of
                  construction progress is clearly visible.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-cloud-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Cloud Delivery
                </h3>
                <p className="text-gray-600">
                  Secure cloud-based delivery system for easy access and sharing
                  with project stakeholders.
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
                Construction Video Portfolio
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                See how we document construction progress with professional
                videography and time-lapse sequences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=High-rise%20construction%20site%20aerial%20view%2C%20tower%20crane%20and%20building%20progress%2C%20professional%20construction%20documentation%2C%20urban%20development&width=400&height=300&seq=construction-portfolio-1&orientation=landscape"
                  alt="High-Rise Construction"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Skyline Tower
                  </h3>
                  <p className="text-gray-600 mb-4">
                    18-month time-lapse documentation of 50-story residential
                    tower construction.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-time-line mr-2"></i>
                    <span>18 months • 72 updates</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Shopping%20mall%20construction%20progress%2C%20large%20commercial%20building%20under%20construction%2C%20construction%20machinery%20and%20workers%2C%20aerial%20documentation&width=400&height=300&seq=construction-portfolio-2&orientation=landscape"
                  alt="Mall Construction"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Metro Shopping Center
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive construction documentation of large-scale
                    retail development.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-time-line mr-2"></i>
                    <span>24 months • 96 updates</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Office%20building%20construction%20site%20with%20multiple%20cranes%2C%20commercial%20development%20progress%2C%20professional%20construction%20photography&width=400&height=300&seq=construction-portfolio-3&orientation=landscape"
                  alt="Office Complex Construction"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Corporate Campus
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Multi-building office complex with detailed progress
                    tracking and milestone videos.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-time-line mr-2"></i>
                    <span>30 months • 120 updates</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Residential%20complex%20construction%20with%20multiple%20buildings%2C%20housing%20development%20progress%2C%20construction%20site%20aerial%20view&width=400&height=300&seq=construction-portfolio-4&orientation=landscape"
                  alt="Residential Development"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Pyramid Alban, Gurugram
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive construction progress documentation of premium
                    residential project with detailed milestone markers and
                    progress tracking.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-time-line mr-2"></i>
                    <span>36 months • 144 updates</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Hospital%20construction%20site%20with%20medical%20facility%20development%2C%20healthcare%20building%20construction%20progress%2C%20professional%20documentation&width=400&height=300&seq=construction-portfolio-5&orientation=landscape"
                  alt="Hospital Construction"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Regional Medical Center
                  </h3>
                  <p className="text-gray-600 mb-4">
                    State-of-the-art healthcare facility construction with
                    specialized documentation.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-time-line mr-2"></i>
                    <span>42 months • 168 updates</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://readdy.ai/api/search-image?query=Infrastructure%20construction%20project%2C%20bridge%20or%20highway%20construction%2C%20large-scale%20civil%20engineering%20project%20documentation&width=400&height=300&seq=construction-portfolio-6&orientation=landscape"
                  alt="Infrastructure Project"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    City Bridge Project
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Major infrastructure project with detailed engineering
                    milestone documentation.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-time-line mr-2"></i>
                    <span>48 months • 192 updates</span>
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

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Why Construction Videos Matter
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">
                  Project Benefits
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        Stakeholder Communication
                      </h4>
                      <p className="text-gray-600">
                        Keep investors, buyers, and team members informed with
                        visual progress updates.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        Marketing Content
                      </h4>
                      <p className="text-gray-600">
                        Create compelling marketing materials showcasing project
                        development and quality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        Quality Documentation
                      </h4>
                      <p className="text-gray-600">
                        Maintain detailed visual records for quality control and
                        project management.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        Timeline Tracking
                      </h4>
                      <p className="text-gray-600">
                        Visual timeline documentation helps identify delays and
                        optimize schedules.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Construction%20site%20aerial%20view%20with%20modern%20building%20progress%2C%20construction%20cranes%20and%20equipment%2C%20professional%20construction%20documentation%2C%20clean%20industrial%20setting%2C%20project%20development%20showcase&width=600&height=400&seq=construction-benefits&orientation=landscape"
                  alt="Construction Progress"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover object-top"
                />
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
                  Get Your Construction Video Quote
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">
                  Ready to document your construction progress? Contact us for a
                  custom quote.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <form
                  id="construction-videos-inquiry-form"
                  data-readdy-form
                  action="https://readdy.ai/api/form/d3mirlst07omtp5lr4hg"
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
                        Video Type
                      </label>
                      <select
                        name="project_type"
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select video type</option>
                        <option value="progress-updates">
                          Progress Update Videos
                        </option>
                        <option value="time-lapse">
                          Time-lapse Documentation
                        </option>
                        <option value="drone-footage">
                          Drone Construction Footage
                        </option>
                        <option value="milestone-videos">
                          Milestone Videos
                        </option>
                        <option value="safety-documentation">
                          Safety Documentation
                        </option>
                        <option value="investor-updates">
                          Investor Update Videos
                        </option>
                        <option value="comprehensive">
                          Comprehensive Package
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
                      placeholder="Tell us about your construction project, timeline, frequency of updates needed, and any specific requirements..."
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
              Document Your Success Story
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional construction documentation that builds trust and
              showcases your progress.
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
