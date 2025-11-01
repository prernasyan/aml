import { useState } from "react";
import Header from "../../../components/feature/Header";
import Footer from "../../../components/feature/Footer";
import { Link } from "react-router-dom";

export default function VirtualRealityToursPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch(
        "https://readdy.ai/api/form/d3mirlst07omtp5lr4g0",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          project_type: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              backgroundImage: `url('/images/services/virtual-reality-tours/1.jpg')`,
            }}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <img
                  src="/images/services/virtual-reality-tours/2.png"
                  alt="VR"
                  className="w-10 h-10"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                Virtual Reality Tours (360°)
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                Interactive VR experiences allowing clients to explore
                properties before construction with complete immersion.
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
                Immersive VR Experience Features
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Step into your future property with cutting-edge virtual reality
                technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <img
                    src="/images/services/virtual-reality-tours/2.png"
                    alt="VR"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Full 360° Immersion
                </h3>
                <p className="text-gray-600">
                  Complete spherical views allowing users to look in any
                  direction and explore every corner of the space.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-hand-heart-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Interactive Hotspots
                </h3>
                <p className="text-gray-600">
                  Clickable elements providing detailed information about
                  features, materials, and specifications.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-smartphone-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Multi-Device Support
                </h3>
                <p className="text-gray-600">
                  Compatible with VR headsets, smartphones, tablets and desktop
                  computers for maximum accessibility.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-map-pin-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Room Navigation
                </h3>
                <p className="text-gray-600">
                  Seamless transitions between rooms and floors with intuitive
                  navigation controls and floor plans.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-palette-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Customization Options
                </h3>
                <p className="text-gray-600">
                  Real-time material changes, furniture arrangements, and
                  lighting scenarios to visualize options.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-share-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Easy Sharing
                </h3>
                <p className="text-gray-600">
                  Simple links for sharing VR tours with clients, stakeholders,
                  and potential buyers instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Advanced VR Technology
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">
                  Cutting-Edge VR Solutions
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="/images/services/virtual-reality-tours/2.png"
                        alt="VR"
                        className="w-4 h-4"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        High-Resolution Rendering
                      </h4>
                      <p className="text-gray-600">
                        8K resolution support for crystal-clear visual quality
                        in VR environments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        Real-Time Rendering
                      </h4>
                      <p className="text-gray-600">
                        Instant loading and smooth navigation with optimized
                        performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        Cross-Platform Compatibility
                      </h4>
                      <p className="text-gray-600">
                        Works with Oculus, HTC Vive, mobile VR, and web
                        browsers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        Analytics Integration
                      </h4>
                      <p className="text-gray-600">
                        Track user engagement and behavior within VR
                        experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/services/virtual-reality-tours/3.jpg"
                  alt="VR Technology"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                VR Experience Portfolio
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Immersive virtual reality experiences that transport clients
                into their future properties
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/services/virtual-reality-tours/4.jpg"
                  alt="Luxury Apartment VR"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Penthouse VR Experience
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Immersive VR tour of luxury penthouse with customizable
                    finishes and furnishing options.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <img
                      src="/images/services/virtual-reality-tours/2.png"
                      alt="VR"
                      className="w-4 h-4 mr-2"
                    />
                    <span>360° VR • Luxury Residential</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/services/virtual-reality-tours/5.jpg"
                  alt="Office Space VR"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Corporate Office VR
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Interactive VR walkthrough of premium office spaces with
                    layout customization.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <img
                      src="/images/services/virtual-reality-tours/2.png"
                      alt="VR"
                      className="w-4 h-4 mr-2"
                    />
                    <span>360° VR • Commercial</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/services/virtual-reality-tours/6.jpg"
                  alt="Shopping Mall VR"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Retail Center VR
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive VR experience showcasing multi-level shopping
                    center and amenities.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <img
                      src="/images/services/virtual-reality-tours/2.png"
                      alt="VR"
                      className="w-4 h-4 mr-2"
                    />
                    <span>360° VR • Retail</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/services/virtual-reality-tours/7.jpg"
                  alt="Hotel VR Experience"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Resort Hotel VR
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Immersive VR tour of luxury resort facilities including
                    suites, amenities, and grounds.
                  </p>
                  <div className="flex items-center text-sm text-gray-5 0">
                    <i className="ri-vr-line mr-2"></i>
                    <span>360° VR • Hospitality</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/services/virtual-reality-tours/8.jpg"
                  alt="Community VR Tour"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Community VR Tour
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Virtual exploration of master-planned community with homes,
                    parks, and amenities.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <img
                      src="/images/services/virtual-reality-tours/2.png"
                      alt="VR"
                      className="w-4 h-4 mr-2"
                    />
                    <span>360° VR • Residential Community</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/services/virtual-reality-tours/9.jpg"
                  alt="Development Preview VR"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Development Preview
                  </h3>
                  <p className="text-gray-600 mb-4">
                    VR preview of future development allowing exploration before
                    construction begins.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <img
                      src="/images/services/virtual-reality-tours/2.png"
                      alt="VR"
                      className="w-4 h-4 mr-2"
                    />
                    <span>360° VR • Pre-Construction</span>
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

        {/* Contact Form Section */}
        <section className="py-24 bg-yellow-400">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Get Your VR Tour Quote
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">
                  Ready to create immersive VR experiences? Contact us for a
                  custom quote.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <form
                  id="vr-inquiry-form"
                  data-readdy-form
                  onSubmit={handleSubmit}
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
                        value={formData.name}
                        onChange={handleInputChange}
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
                        value={formData.email}
                        onChange={handleInputChange}
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
                        value={formData.phone}
                        onChange={handleInputChange}
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
                        value={formData.project_type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential Complex</option>
                        <option value="commercial">Commercial Building</option>
                        <option value="retail">Retail/Shopping Center</option>
                        <option value="hospitality">Hotel/Resort</option>
                        <option value="educational">Educational Campus</option>
                        <option value="healthcare">Healthcare Facility</option>
                        <option value="mixed-use">Mixed-Use Development</option>
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
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                      placeholder="Tell us about your VR tour requirements, property details, and any specific features you'd like to include..."
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <i className="ri-loader-4-line animate-spin"></i>
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>Get Quote</span>
                        <i className="ri-send-plane-line"></i>
                      </span>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <div className="text-green-600 text-center font-medium">
                      Thank you! We'll get back to you with a custom quote
                      within 24 hours.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="text-red-600 text-center font-medium">
                      Sorry, there was an error sending your message. Please try
                      again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience the Future of Property Tours
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform how your clients experience properties with immersive VR
              technology that sells before construction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/#contact"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                Start Your VR Project
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
