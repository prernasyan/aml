import { useState } from "react";
import Header from "../../../components/feature/Header";
import Footer from "../../../components/feature/Footer";
import Button from "../../../components/base/Button";
import { Link } from "react-router-dom";
import { Title, Meta } from "react-head";
import Schema from "../../../components/base/Schema";

// FAQ Schema Data
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a 3D walkthrough video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3D walkthrough video is a computer-generated visualization that allows users to experience a property virtually, showcasing interiors, exteriors, layouts, and design details. It is widely used in real estate and architectural marketing.",
      },
    },
    {
      "@type": "Question",
      name: "How is a 3D walkthrough different from a 3D virtual house tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3D walkthrough video follows a guided camera path, while a 3D virtual house tour allows users to explore the property interactively. Both are effective tools for real estate marketing.",
      },
    },
    {
      "@type": "Question",
      name: "Who should use 3D architectural walkthrough services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D architectural walkthrough services are ideal for real estate developers, builders, architects, interior designers, and property marketing agencies.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide real estate 3D walkthrough services in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Alliance Media Labs provides real estate 3D walkthrough services across India, including major cities like Delhi NCR, Mumbai, Bangalore, Pune, and Hyderabad.",
      },
    },
    {
      "@type": "Question",
      name: "Can 3D walkthroughs be created for under-construction properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 3D property walkthroughs are ideal for under-construction and pre-launch projects, helping buyers visualize the final property before completion.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to create a 3D walkthrough video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depending on the project size and complexity, a 3D walkthrough video typically takes between 7 days to 3 weeks to complete.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of a 3D walkthrough service in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of a 3D walkthrough service in India depends on property size, level of detail, and project requirements. Custom pricing is available based on scope.",
      },
    },
  ],
};

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
      title: "Etereo 1, Goa",
      category: "3D Walkthrough",
      image: "/images/portfolio/1.png",
      description:
        "Cinematic 3D walkthrough showcasing luxury residential units with panoramic city views.",
      videoUrl: "https://www.youtube.com/embed/BiCCdx0fDik?autoplay=1&t",
      duration: "2:45",
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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "a557c293-5de3-4d54-8636-50b7d3c406c7",
          subject: `3D Walkthrough Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `
New 3D Walkthrough Inquiry

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Project Type: ${formData.project_type || "Not specified"}

Project Details:
${formData.message || "No additional details provided"}
        `.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            project_type: "",
            message: "",
          });
          setSubmitStatus("idle");
        }, 3000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Title>
        3D Walkthrough Video Services | 3D Property & Virtual House Tours in
        India
      </Title>
      <Meta
        name="description"
        content="Professional 3D walkthrough & virtual house tour services for real estate. Boost property engagement with immersive 3D architectural walkthroughs."
      />
      <Meta
        property="og:title"
        content="3D Walkthrough Video Services | 3D Property & Virtual House Tours in India"
      />
      <Meta
        property="og:description"
        content="Professional 3D walkthrough & virtual house tour services for real estate."
      />
      <Meta property="og:image" content="/images/og-walkthrough.png" />
      <Meta
        property="og:url"
        content="https://alliancemedialabs.com/walkthrough-videos"
      />
      {/* Add Schema for SEO */}
      <Schema schema={faqSchema} />
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
              3D Walkthrough Video Service for Real Estate & Architecture
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
                visualizations that help clients experience spaces before
                they're built, making it easier to secure approvals, attract
                investors, and drive sales.
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
                  Dedicated project managers and unlimited revisions until
                  you're satisfied
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
                Our 3D Walkthrough Video Production Process
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

        {/* Why 3D Walkthroughs Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Why Modern Real Estate Marketing Needs 3D Walkthroughs
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real estate has become competitive — 3D walkthroughs give
                developers and builders a winning edge.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-3xl font-bold">•</span>
                <p className="text-gray-700 text-lg">
                  Builds buyer trust before first contact
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-3xl font-bold">•</span>
                <p className="text-gray-700 text-lg">
                  Increases time spent on property pages (SEO benefit)
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-3xl font-bold">•</span>
                <p className="text-gray-700 text-lg">
                  Improves ad performance & click-to-lead ratio
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-3xl font-bold">•</span>
                <p className="text-gray-700 text-lg">
                  Works perfectly for under-construction projects
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-3xl font-bold">•</span>
                <p className="text-gray-700 text-lg">
                  Reduces unnecessary site visits
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-3xl font-bold">•</span>
                <p className="text-gray-700 text-lg">
                  Helps close deals faster
                </p>
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
                  Get Your 3D Walkthrough Quote
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">
                  Ready to bring your architectural vision to life? Contact us
                  for a custom quote.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <form
                  id="walkthrough-inquiry-form"
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
                        <span>Sending.....</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>Send Inquiry via Email</span>
                        <i className="ri-mail-send-line"></i>
                      </span>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="text-green-600 text-center font-medium">
                      Thank you! We'll get back to you with a custom quote
                      within 24 hours.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="text-red-600 text-center font-medium">
                      Sorry, there was an error. Please email us directly at
                      info@alliancemedialabs.com
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/*<section className="py-24 bg-black">
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
      </section>*/}

        {/* Property Marketing Upgrade Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upgrade Your Property Marketing Experience
            </h2>

            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              3D walkthrough videos are no longer optional — they are a
              competitive advantage in modern real estate marketing.
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              If your goal is better engagement, higher-quality leads, and
              faster sales, 3D walkthroughs outperform traditional property
              marketing at every stage.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Talk to Alliance Media Labs to create high-impact 3D walkthrough
              videos that convert interest into inquiries.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                Request a Strategy Call
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
                className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors whitespace-nowrap cursor-pointer"
              >
                Explore Our 3D Services
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Answers to some of the most common questions about our 3D
                walkthrough services.
              </p>
            </div>

            {/* Accordion */}
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Item 1 */}
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <summary className="cursor-pointer text-xl font-semibold text-black">
                  What is a 3D walkthrough video?
                </summary>
                <p className="text-gray-600 mt-3">
                  A 3D walkthrough video is a computer-generated immersive
                  visualization that allows viewers to virtually experience a
                  property. It showcases interiors, exteriors, layouts,
                  lighting, and spatial flow — ideal for real estate marketing,
                  architectural presentations, and promotional campaigns.
                </p>
              </details>

              {/* Item 2 */}
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <summary className="cursor-pointer text-xl font-semibold text-black">
                  Who should use 3D architectural walkthrough services?
                </summary>
                <p className="text-gray-600 mt-3">
                  Our services are ideal for:
                  <br />• Real estate developers
                  <br />• Builders & construction companies
                  <br />• Architects & interior designers
                  <br />• Property marketing agencies
                  <br />• Commercial & residential project owners
                  <br />
                  <br />
                  These walkthroughs help buyers visualize projects before
                  completion and make faster decisions.
                </p>
              </details>

              {/* Item 3 */}
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <summary className="cursor-pointer text-xl font-semibold text-black">
                  Do you provide 3D walkthrough services for real estate in
                  India?
                </summary>
                <p className="text-gray-600 mt-3">
                  Yes — we serve clients across India including Delhi NCR,
                  Mumbai, Bangalore, Pune, Hyderabad, Chennai, and more.
                </p>
              </details>

              {/* Item 4 */}
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <summary className="cursor-pointer text-xl font-semibold text-black">
                  Can 3D walkthroughs be created for under-construction
                  properties?
                </summary>
                <p className="text-gray-600 mt-3">
                  Absolutely. 3D walkthroughs are especially effective for
                  under-construction and pre-launch projects, helping buyers
                  visualize the final output and boosting early bookings.
                </p>
              </details>

              {/* Item 5 */}
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <summary className="cursor-pointer text-xl font-semibold text-black">
                  How long does it take to create a 3D walkthrough video?
                </summary>
                <p className="text-gray-600 mt-3">
                  Timelines depend on project size and complexity:
                  <br />• Small residential projects: 7–10 days
                  <br />• Large commercial / township projects: 2–3 weeks
                  <br />
                  <br />
                  We ensure fast turnaround times while maintaining high
                  quality.
                </p>
              </details>

              {/* Item 6 */}
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <summary className="cursor-pointer text-xl font-semibold text-black">
                  What do you need to start a 3D property walkthrough project?
                </summary>
                <p className="text-gray-600 mt-3">
                  Typically we require:
                  <br />• Architectural drawings or floor plans
                  <br />• Elevation designs
                  <br />• Material & color references
                  <br />• Project brief + target audience details
                  <br />
                  <br />
                  Our team handles everything from modeling to rendering.
                </p>
              </details>

              {/* Item 7 */}
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <summary className="cursor-pointer text-xl font-semibold text-black">
                  Are 3D virtual tours useful for real estate marketing & ads?
                </summary>
                <p className="text-gray-600 mt-3">
                  Yes — 3D walkthroughs improve engagement on websites, landing
                  pages, Google Ads and Meta Ads. They increase time-on-site,
                  improve lead quality, and help close deals faster.
                </p>
              </details>

              {/* Item 8 */}
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <summary className="cursor-pointer text-xl font-semibold text-black">
                  What is the cost of a 3D walkthrough service in India?
                </summary>
                <p className="text-gray-600 mt-3">
                  Pricing depends on property size, duration, level of detail,
                  and custom requirements. Contact Alliance Media Labs for a
                  tailored quote.
                </p>
              </details>

              {/* Item 9 */}
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <summary className="cursor-pointer text-xl font-semibold text-black">
                  Why choose Alliance Media Labs for 3D walkthrough services?
                </summary>
                <p className="text-gray-600 mt-3">
                  Our studio combines 3D visualization expertise with real
                  estate marketing strategy — meaning our videos don’t just look
                  impressive, they convert viewers into qualified leads and
                  buyers.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Modal for Portfolio Details */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-96 object-cover"
              /> */}
                <div className="aspect-video">
                  <iframe
                    src={selectedProject.videoUrl}
                    title={selectedProject.title}
                    className="w-full h-full rounded-t-2xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                {/* <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
                {selectedProject.category}
              </div> */}
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
                {/* <div className="flex space-x-4">
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
              </div> */}
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
