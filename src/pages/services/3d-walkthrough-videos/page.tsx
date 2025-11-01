import { useState } from "react";
import Header from "../../../components/feature/Header";
import Footer from "../../../components/feature/Footer";
import Button from "../../../components/base/Button";
import { Link } from "react-router-dom";
import PortfolioSection from "../../home/components/PortfolioSection";

export default function WalkthroughVideosPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
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

  const portfolioProjects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      description:
        "Premium apartment complex with modern amenities and landscaping",
      image: "/images/services/3d-walkthrough-videos/1.jpg",
      duration: "3:45",
      category: "Residential",
    },
    {
      id: 2,
      title: "Corporate Office Tower",
      description:
        "25-story commercial building with state-of-the-art facilities",
      image: "/images/services/3d-walkthrough-videos/2.jpg",
      duration: "4:20",
      category: "Commercial",
    },
    {
      id: 3,
      title: "Shopping Mall Complex",
      description: "Multi-level retail center with entertainment zones",
      image: "/images/services/3d-walkthrough-videos/3.jpg",
      duration: "5:15",
      category: "Retail",
    },
    {
      id: 4,
      title: "Boutique Hotel Resort",
      description:
        "Luxury hospitality project with spa and conference facilities",
      image: "/images/services/3d-walkthrough-videos/4.jpg",
      duration: "6:30",
      category: "Hospitality",
    },
    {
      id: 5,
      title: "Educational Campus",
      description: "Modern university campus with research facilities",
      image: "/images/services/3d-walkthrough-videos/5.jpg",
      duration: "4:45",
      category: "Educational",
    },
    {
      id: 6,
      title: "Healthcare Facility",
      description: "State-of-the-art medical center with advanced equipment",
      image: "/images/services/3d-walkthrough-videos/6.jpg",
      duration: "3:55",
      category: "Healthcare",
    },
  ];

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
        "https://readdy.ai/api/form/submit/3d-walkthrough-inquiry",
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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/services/3d-walkthrough-videos/7.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            3D Walkthrough Videos
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg">
            Immersive cinematic experiences that bring your architectural
            visions to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio">
              <Button variant="primary" size="lg">
                View Our Portfolio
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Cinematic 3D Walkthroughs
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg text-black/80 leading-relaxed">
              Transform your architectural designs into stunning cinematic
              experiences. Our 3D walkthrough videos provide photorealistic
              visualizations that help clients experience spaces before they're
              built, making it easier to secure approvals, attract investors,
              and drive sales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-movie-2-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Cinematic Quality
              </h3>
              <p className="text-black/70">
                Hollywood-grade rendering with realistic lighting, materials,
                and camera movements
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Fast Delivery
              </h3>
              <p className="text-black/70">
                Quick turnaround times without compromising on quality or
                attention to detail
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Expert Support
              </h3>
              <p className="text-black/70">
                Dedicated project managers and unlimited revisions until you're
                satisfied
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our 3D Walkthrough Portfolio
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Explore our collection of immersive 3D walkthrough videos across
              various project types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                      <i className="ri-play-fill text-2xl text-black"></i>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                    {project.duration}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-black/70">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Production Process
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Consultation & Planning
              </h3>
              <p className="text-gray-600">
                Understanding your vision, target audience, and key selling
                points to create the perfect narrative.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                3D Modeling & Setup
              </h3>
              <p className="text-gray-600">
                Creating detailed 3D models with accurate materials, lighting,
                and environmental elements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Animation & Rendering
              </h3>
              <p className="text-gray-600">
                Crafting smooth camera movements and rendering high-quality
                frames with photorealistic detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Post-Production
              </h3>
              <p className="text-gray-600">
                Professional editing, color grading, audio integration, and
                final delivery in multiple formats.
              </p>
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
                Get Your 3D Walkthrough Quote
              </h2>
              <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-lg text-black/80">
                Ready to bring your architectural vision to life? Contact us for
                a custom quote.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <form
                id="walkthrough-inquiry-form"
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
                    placeholder="Tell us about your project requirements, timeline, and any specific features you'd like to highlight..."
                  ></textarea>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <Button variant="primary" size="lg" className="w-full">
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
                </Button>

                {submitStatus === "success" && (
                  <div className="text-green-600 text-center font-medium">
                    Thank you! We'll get back to you with a custom quote within
                    24 hours.
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
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your architectural designs into stunning cinematic
            experiences that sell your vision.
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

      {/* Modal for Portfolio Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
              <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
                {selectedProject.category}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-black mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-black/70 text-lg mb-6">
                {selectedProject.description}
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <i className="ri-time-line text-yellow-400"></i>
                  <span className="text-black">
                    Duration: {selectedProject.duration}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-play-circle-line text-yellow-400"></i>
                  <span className="text-black">HD Quality</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button variant="primary">
                  <span className="flex items-center space-x-2">
                    <i className="ri-play-fill"></i>
                    <span>Watch Video</span>
                  </span>
                </Button>
                <Button variant="outline">
                  <span className="flex items-center space-x-2">
                    <i className="ri-download-line"></i>
                    <span>Download</span>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
