import Header from "../../../components/feature/Header";
import Footer from "../../../components/feature/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../../components/base/Button";
import { Title, Meta } from "react-head";
import Schema from "../../../components/base/Schema";

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  videoUrl?: string;
  hasSlider?: boolean;
  sliderImages?: Array<{
    url: string;
    title: string;
    description: string;
  }>;
  hasGallery?: boolean;
  galleryImages?: Array<{
    url: string;
    title: string;
    description: string;
  }>;
};

// FAQ Schema Data
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are architectural scale models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Architectural scale models are detailed miniature representations of buildings or real estate projects that help visualize design, layout, and scale before construction.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I choose professional scale model builders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional scale model builders ensure high accuracy, premium materials, realistic detailing, and superior finishing, which enhances project presentation and marketing impact.",
      },
    },
    {
      "@type": "Question",
      name: "What types of scale models does Alliance Media Labs create?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alliance Media Labs creates architectural scale models, real estate scale models, 3D scale models, and customized miniature model making solutions for architects, developers, and exhibitions.",
      },
    },
    {
      "@type": "Question",
      name: "How long does architectural scale model making take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The time required depends on project scale, complexity, and detailing, but most architectural scale models are delivered within a competitive and defined timeframe.",
      },
    },
    {
      "@type": "Question",
      name: "How do scale models help in real estate marketing and sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scale models improve buyer understanding, increase engagement, and create strong visual appeal at sales offices and exhibitions, helping real estate projects convert faster.",
      },
    },
  ],
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Centonic, Pune",
    category: "Scale Models",
    image: "/images/services/architectural-scale-models/1.jpg",
    description:
      "Precision architectural scale model showcasing Centonic's contemporary residential development in Pune, featuring detailed landscaping, modern tower structures, and comprehensive amenity planning.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/centonic/1.jpeg",
        title: "Centonic Main Tower Complex",
        description:
          "Detailed scale model of the primary residential towers with surrounding landscape elements and pedestrian pathways",
      },
      {
        url: "/images/services/architectural-scale-models/centonic/2.jpeg",
        title: "Amenity Zone Layout",
        description:
          "Miniature representation of recreational facilities including clubhouse, pool area, and community spaces",
      },
      {
        url: "/images/services/architectural-scale-models/centonic/3.jpeg",
        title: "Tower Elevation Detail",
        description:
          "Close-up view showcasing architectural facade details, balcony arrangements, and building proportion accuracy",
      },
      {
        url: "/images/services/architectural-scale-models/centonic/4.jpeg",
        title: "Master Plan Overview",
        description:
          "Complete aerial perspective of the Centonic development showing site planning and spatial organization",
      },
    ],
  },
  {
    id: 2,
    title: "Indian Railways",
    category: "Scale Models",
    image: "/images/services/architectural-scale-models/2.jpg",
    description:
      "Intricate scale model for Indian Railways infrastructure project, demonstrating station layouts, platform configurations, and surrounding urban integration with meticulous attention to operational details.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/railways/1.jpeg",
        title: "Railway Station Complex",
        description:
          "Comprehensive model showing station building architecture, platform arrangements, and passenger circulation areas",
      },
      {
        url: "/images/services/architectural-scale-models/railways/2.jpeg",
        title: "Platform Infrastructure",
        description:
          "Detailed representation of railway tracks, platform edges, overhead structures, and signaling systems",
      },
      {
        url: "/images/services/architectural-scale-models/railways/3.jpeg",
        title: "Terminal Building Facade",
        description:
          "Architectural elevation model highlighting the station's main entrance, roof design, and structural elements",
      },
      {
        url: "/images/services/architectural-scale-models/railways/4.jpeg",
        title: "Transit Integration Hub",
        description:
          "Scale model depicting connectivity between railway platforms and surrounding transportation networks",
      },
      {
        url: "/images/services/architectural-scale-models/railways/5.jpeg",
        title: "Station Master Plan",
        description:
          "Bird's eye view of the complete railway infrastructure showcasing track layouts and station positioning",
      },
    ],
  },
  {
    id: 3,
    title: "Hiranandani Meadows, Thane",
    category: "Scale Models",
    image: "/images/services/architectural-scale-models/3.jpg",
    description:
      "Elaborate architectural scale model of Hiranandani Meadows in Thane, capturing the sprawling residential township with multi-story buildings, green corridors, and integrated community facilities.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/hiranandani/1.jpeg",
        title: "Township Residential Clusters",
        description:
          "Multiple residential tower models arranged to show the planned neighborhood layout and density distribution",
      },
      {
        url: "/images/services/architectural-scale-models/hiranandani/2.jpeg",
        title: "Central Landscaped Gardens",
        description:
          "Miniature green spaces featuring walking paths, water features, and recreational zones within the township",
      },
      {
        url: "/images/services/architectural-scale-models/hiranandani/3.jpeg",
        title: "High-Rise Tower Detail",
        description:
          "Individual tower model showcasing architectural style, floor-to-floor heights, and facade treatment",
      },
      {
        url: "/images/services/architectural-scale-models/hiranandani/4.jpeg",
        title: "Community Center Complex",
        description:
          "Scale representation of shared facilities including clubhouse, sports areas, and social gathering spaces",
      },
      {
        url: "/images/services/architectural-scale-models/hiranandani/5.jpeg",
        title: "Master Township Layout",
        description:
          "Complete site model displaying road networks, building clusters, and open space distribution across the development",
      },
    ],
  },
  {
    id: 4,
    title: "Venkatesh Skydale, Pune",
    category: "Scale Models",
    image: "/images/services/architectural-scale-models/4.jpg",
    description:
      "Sophisticated scale model of Venkatesh Skydale residential project in Pune, highlighting the twin-tower configuration, podium-level amenities, and contextual urban setting with accurate proportions.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/venkatesh/1.jpeg",
        title: "Twin Tower Configuration",
        description:
          "Architectural model showing both residential towers with connecting podium and vertical circulation cores",
      },
      {
        url: "/images/services/architectural-scale-models/venkatesh/2.jpeg",
        title: "Podium Level Amenities",
        description:
          "Ground and podium floor model featuring entrance lobbies, parking areas, and resident facilities",
      },
    ],
  },
  {
    id: 5,
    title: "Spree City, Sonipat",
    category: "Scale Models",
    image: "/images/services/architectural-scale-models/5.jpg",
    description:
      "Comprehensive architectural scale model for Spree City in Sonipat, representing a mixed-use development with residential zones, commercial areas, and extensive landscaping across multiple phases.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/spree/1.jpeg",
        title: "Mixed-Use Development Core",
        description:
          "Central area model showing integration of residential, retail, and commercial components",
      },
      {
        url: "/images/services/architectural-scale-models/spree/2.jpeg",
        title: "Residential Phase Clusters",
        description:
          "Housing sector models depicting apartment buildings, row houses, and supporting infrastructure",
      },
      {
        url: "/images/services/architectural-scale-models/spree/3.jpeg",
        title: "Commercial District Zone",
        description:
          "Scale model of business and retail areas with office buildings and shopping complexes",
      },
      {
        url: "/images/services/architectural-scale-models/spree/4.jpeg",
        title: "Green Corridor Network",
        description:
          "Landscape model showing interconnected parks, tree-lined avenues, and pedestrian-friendly pathways",
      },
      {
        url: "/images/services/architectural-scale-models/spree/5.jpeg",
        title: "Complete City Master Plan",
        description:
          "Expansive overview model presenting all development phases, infrastructure, and land use distribution",
      },
    ],
  },
  {
    id: 6,
    title: "Skyline Realty, Hyderabad",
    category: "Scale Models",
    image: "/images/services/architectural-scale-models/6.jpg",
    description:
      "Detailed architectural scale model for Skyline Realty's premium development in Hyderabad, showcasing contemporary high-rise design, rooftop amenities, and sophisticated urban living spaces.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/skyline/1.jpeg",
        title: "Premium Tower Elevation",
        description:
          "High-rise residential tower model with detailed facade articulation and balcony projections",
      },
      {
        url: "/images/services/architectural-scale-models/skyline/2.jpeg",
        title: "Rooftop Amenity Deck",
        description:
          "Top-floor amenity level showcasing swimming pool, gym facilities, and sky lounge areas",
      },
      {
        url: "/images/services/architectural-scale-models/skyline/3.jpeg",
        title: "Entrance Plaza Design",
        description:
          "Ground level model featuring grand entrance, drop-off area, and landscaped arrival court",
      },
      {
        url: "/images/services/architectural-scale-models/skyline/4.jpeg",
        title: "Site Context Integration",
        description:
          "Complete development model showing relationship with surrounding roads, neighboring buildings, and urban fabric",
      },
    ],
  },
  {
    id: 7,
    title: "Island City Centre, Mumbai",
    category: "Scale Models",
    image: "/images/services/architectural-scale-models/7.jpg",
    description:
      "Premium architectural scale model of Island City Centre in Mumbai, depicting a landmark mixed-use development with commercial towers, retail podiums, and waterfront promenade integration.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/island/1.jpeg",
        title: "Commercial Tower Complex",
        description:
          "Multi-tower model showing office buildings, retail podium, and multi-level parking structures",
      },
      {
        url: "/images/services/architectural-scale-models/island/2.jpeg",
        title: "Waterfront Promenade",
        description:
          "Detailed model of public realm areas with pedestrian walkways, seating zones, and waterfront landscaping",
      },
    ],
  },
];

export default function ArchitecturalScaleModelsPage() {
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
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleItemClick = (item: (typeof portfolioItems)[0]) => {
    setSelectedItem(item);
    setCurrentSlideIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentSlideIndex(0);
  };

  const nextSlide = () => {
    if (selectedItem?.sliderImages) {
      setCurrentSlideIndex((prev) =>
        prev === selectedItem.sliderImages!.length - 1 ? 0 : prev + 1
      );
    }
    if (selectedItem?.galleryImages) {
      setCurrentSlideIndex((prev) =>
        prev === selectedItem.galleryImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedItem?.sliderImages) {
      setCurrentSlideIndex((prev) =>
        prev === 0 ? selectedItem.sliderImages!.length - 1 : prev - 1
      );
    }
    if (selectedItem?.galleryImages) {
      setCurrentSlideIndex((prev) =>
        prev === 0 ? selectedItem.galleryImages!.length - 1 : prev - 1
      );
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
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
          subject: `Architectural Scale Models Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `
New Architectural Scale Models Inquiry

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
      {/* SEO Meta Tags */}
      <Title>
        Architectural Scale Models & 3D Scale Model Making Service | Alliance
        Media Labs
      </Title>
      <Meta
        name="description"
        content="Professional architectural scale model makers & 3D scale model making services in India. High-detail real estate scale models & miniature model solutions. Get a quote!"
      />
      <Meta
        property="og:title"
        content="Architectural Scale Models & 3D Model Services | Alliance Media Labs"
      />
      <Meta
        property="og:description"
        content="Professional architectural scale model makers & 3D scale model making services in India. High-detail miniature models for real estate & architecture."
      />
      <Meta
        property="og:image"
        content="https://alliancemedialabs.com/og-image.jpg"
      />
      <Meta
        property="og:url"
        content="https://alliancemedialabs.com/services/architectural-scale-models"
      />
      <Meta property="og:type" content="website" />

      {/* Add Schema for SEO */}
      <Schema schema={faqSchema} />

      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 bg-black/70"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/services/architectural-scale-models/1.jpg')`,
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
                    exteriors, and landscape features for dramatic
                    presentations.
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
                  Architectural Scale Model Portfolio
                </h2>
                <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Explore our collection of architectural scale models, real
                  estate scale models, and 3D miniature model presentations
                  created for leading developers and infrastructure projects
                  across India.
                </p>
              </div>

              {/* Project Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => handleItemClick(project)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                          <i
                            className={`${
                              project.hasGallery || project.hasSlider
                                ? "ri-image-line"
                                : "ri-play-fill"
                            } text-2xl text-black`}
                          ></i>
                        </div>
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

            {/* Modal with Slider/Gallery */}
            {selectedItem && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full relative max-h-[90vh] overflow-y-auto">
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-20"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>

                  {selectedItem.hasSlider ? (
                    // Slider for 3D Rendering
                    <div>
                      <div className="relative h-96 md:h-[500px] overflow-hidden">
                        <div
                          className="flex transition-transform duration-500 ease-in-out h-full"
                          style={{
                            transform: `translateX(-${
                              currentSlideIndex * 100
                            }%)`,
                          }}
                        >
                          {selectedItem.sliderImages?.map((slide, index) => (
                            <div
                              key={index}
                              className="w-full h-full flex-shrink-0 relative"
                            >
                              <img
                                src={slide.url}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Navigation Arrows */}
                        {selectedItem.sliderImages &&
                          selectedItem.sliderImages.length > 1 && (
                            <>
                              <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                              >
                                <i className="ri-arrow-left-line text-xl"></i>
                              </button>
                              <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                              >
                                <i className="ri-arrow-right-line text-xl"></i>
                              </button>
                            </>
                          )}
                      </div>

                      {/* Slide Indicators */}
                      {selectedItem.sliderImages &&
                        selectedItem.sliderImages.length > 1 && (
                          <div className="flex justify-center space-x-2 py-4 bg-gray-100">
                            {selectedItem.sliderImages.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                                  index === currentSlideIndex
                                    ? "bg-yellow-400"
                                    : "bg-gray-400"
                                }`}
                              ></button>
                            ))}
                          </div>
                        )}

                      <div className="p-8">
                        <div className="text-yellow-400 text-sm font-medium mb-2">
                          {selectedItem.category}
                        </div>
                        <h3 className="text-3xl font-bold text-black mb-4">
                          {selectedItem.title}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {selectedItem.description}
                        </p>
                      </div>
                    </div>
                  ) : selectedItem.hasGallery ? (
                    // Gallery for 3D Isometrics
                    <div>
                      <div className="relative h-96 md:h-[500px] overflow-hidden">
                        <div
                          className="flex transition-transform duration-500 ease-in-out h-full"
                          style={{
                            transform: `translateX(-${
                              currentSlideIndex * 100
                            }%)`,
                          }}
                        >
                          {selectedItem.galleryImages?.map((image, index) => (
                            <div
                              key={index}
                              className="w-full h-full flex-shrink-0 relative"
                            >
                              <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-contain bg-gray-100"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Navigation Arrows */}
                        {selectedItem.galleryImages &&
                          selectedItem.galleryImages.length > 1 && (
                            <>
                              <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                              >
                                <i className="ri-arrow-left-line text-xl"></i>
                              </button>
                              <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                              >
                                <i className="ri-arrow-right-line text-xl"></i>
                              </button>
                            </>
                          )}
                      </div>

                      {/* Gallery Indicators */}
                      {selectedItem.galleryImages &&
                        selectedItem.galleryImages.length > 1 && (
                          <div className="flex justify-center space-x-2 py-4 bg-gray-100">
                            {selectedItem.galleryImages.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                                  index === currentSlideIndex
                                    ? "bg-yellow-400"
                                    : "bg-gray-400"
                                }`}
                              ></button>
                            ))}
                          </div>
                        )}

                      <div className="p-8">
                        <div className="text-yellow-400 text-sm font-medium mb-2">
                          {selectedItem.category}
                        </div>
                        <h3 className="text-3xl font-bold text-black mb-4">
                          {selectedItem.title}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {selectedItem.description}
                        </p>
                        {selectedItem.galleryImages &&
                          selectedItem.galleryImages[currentSlideIndex] && (
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold text-black mb-2">
                                {
                                  selectedItem.galleryImages[currentSlideIndex]
                                    .title
                                }
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {
                                  selectedItem.galleryImages[currentSlideIndex]
                                    .description
                                }
                              </p>
                            </div>
                          )}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            )}
            <div className="text-center mt-12">
              <Link
                to="/portfolio"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                View Our Portfolio
              </Link>
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
                    and architectural studies with modular components and
                    testing capabilities.
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

          {/* Scale Model Making Process Section */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  Our Scale Model Making Process
                </h2>
                <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A structured, detail-driven approach to deliver precise and
                  high-quality architectural scale models.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    Concept & Design Planning
                  </h3>
                  <p className="text-gray-600">
                    • Review architectural drawings and references
                    <br />• Define model purpose (presentation, sales, or study)
                    <br />• Finalize detailing level and delivery timeline
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    Scale Selection & Material Planning
                  </h3>
                  <p className="text-gray-600">
                    • Select the appropriate scale for the model
                    <br />• Choose materials like acrylic, wood, metal, or resin
                    <br />• Plan durability and display requirements
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    Precision Model Making
                  </h3>
                  <p className="text-gray-600">
                    • Accurate measurements and proportional execution
                    <br />• Professional scale model builders ensure precision
                    <br />• Handcrafted and tool-assisted construction
                  </p>
                </div>

                {/* Step 4 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    Detailing, Lighting & Finishing
                  </h3>
                  <p className="text-gray-600">
                    • Landscape, textures, and surface detailing
                    <br />• Optional LED lighting integration
                    <br />• Color matching and finish enhancement
                  </p>
                </div>

                {/* Step 5 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">5</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    Quality Check & Delivery
                  </h3>
                  <p className="text-gray-600">
                    • Accuracy and finish inspection
                    <br />• Secure packaging for safe transport
                    <br />• Ready-to-display model delivery
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our Scale Model Making Company */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  Why Choose Our Scale Model Making Company
                </h2>
                <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We combine craftsmanship, technology, and real estate
                  expertise to deliver world-class architectural scale models.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <span className="text-yellow-400 text-3xl font-bold">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Professional Scale Model Builders
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Our team consists of experienced and skilled scale model
                      builders specializing in architectural scale models and
                      precision miniature model making. Every model is crafted
                      with strict attention to accuracy, proportion, and
                      detailing to represent the architect’s vision perfectly.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <span className="text-yellow-400 text-3xl font-bold">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      High-Realism Miniature Models
                    </h3>
                    <p className="text-gray-700 text-lg">
                      We create high-realism miniature models using premium
                      materials, advanced 3D model making techniques, and fine
                      finishing. From textures and landscaping to elevations and
                      lighting, our models deliver a lifelike visual experience
                      that boosts client confidence.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <span className="text-yellow-400 text-3xl font-bold">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Real Estate Scale Model Expertise
                    </h3>
                    <p className="text-gray-700 text-lg">
                      With deep expertise in real estate scale models, we help
                      developers present projects effectively at sales offices,
                      exhibitions, and investor meetings. Our models simplify
                      complex layouts, enhance buyer understanding, and support
                      faster decision-making and higher conversions.
                    </p>
                  </div>
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
                    // action="https://readdy.ai/api/form/d3mirlst07omtp5lr4h0"
                    // method="POST"
                    className="space-y-6"
                    onSubmit={handleSubmit}
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
                          <option value="presentation">
                            Presentation Model
                          </option>
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
          <section className="py-24 bg-black">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Bring Your Designs to Life
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Create impressive architectural scale models, miniature models,
                and 3D scale model solutions that showcase your architectural
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
          </section>

          {/* FAQ Section – Architectural Scale Models */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  Frequently Asked Questions (FAQs)
                </h2>
                <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Answers to common questions about our architectural and real
                  estate scale model making services.
                </p>
              </div>

              {/* Accordion */}
              <div className="max-w-3xl mx-auto space-y-6">
                {/* Item 1 */}
                <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <summary className="cursor-pointer text-xl font-semibold text-black">
                    What are architectural scale models?
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Architectural scale models are detailed miniature
                    representations of buildings or real estate projects. They
                    help architects, developers, and clients visualize design,
                    layout, proportions, and spatial relationships before actual
                    construction begins.
                  </p>
                </details>

                {/* Item 2 */}
                <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <summary className="cursor-pointer text-xl font-semibold text-black">
                    Why should I choose professional scale model builders?
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Professional scale model builders ensure precision, premium
                    materials, realistic finishes, and fine detailing.
                    High-quality models enhance presentations, improve client
                    understanding, and significantly boost marketing and sales
                    impact.
                  </p>
                </details>

                {/* Item 3 */}
                <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <summary className="cursor-pointer text-xl font-semibold text-black">
                    What types of scale models does Alliance Media Labs create?
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Alliance Media Labs specializes in:
                    <br />• Architectural scale models
                    <br />• Real estate scale models
                    <br />• 3D and miniature scale models
                    <br />• Custom models for exhibitions and sales galleries
                    <br />
                    <br />
                    Each model is tailored to project requirements and branding
                    goals.
                  </p>
                </details>

                {/* Item 4 */}
                <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <summary className="cursor-pointer text-xl font-semibold text-black">
                    How long does architectural scale model making take?
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Timelines vary based on project size, complexity, and level
                    of detailing. Once the design is finalized, most
                    architectural scale models are completed within a defined
                    and competitive timeframe while maintaining premium quality.
                  </p>
                </details>

                {/* Item 5 */}
                <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <summary className="cursor-pointer text-xl font-semibold text-black">
                    How do scale models help in real estate marketing and sales?
                  </summary>
                  <p className="text-gray-600 mt-3">
                    Scale models create strong visual impact at sales offices,
                    exhibitions, and launch events. They help buyers easily
                    understand layouts, project scope, and surroundings—leading
                    to higher engagement, faster decision-making, and improved
                    conversion rates.
                  </p>
                </details>
              </div>
            </div>
          </section>

          {/* ... existing code ... */}
        </main>
        <Footer />
      </div>
    </>
  );
}
