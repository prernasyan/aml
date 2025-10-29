import { Link } from "react-router-dom";
import Header from "../../../components/feature/Header";
import Footer from "../../../components/feature/Footer";
import WhatsAppFloat from "../../../components/feature/WhatsAppFloat";
import { useState } from "react";

export default function IsometricsPage() {
  const features = [
    {
      icon: "ri-cube-line",
      title: "Technical Precision",
      description:
        "Accurate isometric projections maintaining true proportions and dimensional relationships for architectural clarity.",
    },
    {
      icon: "ri-layout-grid-line",
      title: "Comprehensive Layouts",
      description:
        "Complete floor plans and site layouts presented in easy-to-understand isometric perspective views.",
    },
    {
      icon: "ri-building-2-line",
      title: "Multi-Level Visualization",
      description:
        "Complex multi-story buildings and developments shown with clear level separation and spatial relationships.",
    },
    {
      icon: "ri-palette-line",
      title: "Professional Styling",
      description:
        "Clean, professional presentation with consistent styling, colors, and annotation systems.",
    },
    {
      icon: "ri-zoom-in-line",
      title: "Detail Integration",
      description:
        "Comprehensive inclusion of architectural details, landscaping, and infrastructure elements.",
    },
    {
      icon: "ri-file-chart-line",
      title: "Technical Documentation",
      description:
        "Detailed annotations, measurements, and specifications integrated seamlessly into visual presentations.",
    },
  ];

  const benefits = [
    "Enhanced spatial understanding for clients and stakeholders",
    "Professional technical documentation for approvals",
    "Clear communication of complex architectural concepts",
    "Effective marketing materials for pre-launch campaigns",
    "Comprehensive project visualization in single views",
    "Improved decision-making through visual clarity",
  ];

  const portfolioItems = [
    {
      title: "Etereo 1, Goa",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20luxury%20residential%20project%20Etereo%201%20in%20Goa%20showcasing%20contemporary%20architecture%20with%20premium%20apartments%2C%20tropical%20landscaping%2C%20resort-style%20amenities%2C%20coastal%20living%20environment%2C%20sophisticated%20design%20elements%2C%20professional%20real%20estate%20photography&width=600&height=400&seq=etereo-goa-1&orientation=landscape",
      description:
        "Premium residential project featuring contemporary design and luxury amenities in the heart of Goa",
      hasGallery: true,
      galleryImages: [
        {
          url: "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/7d3148ad380a194187bb5fbe9e1767b6.jpeg",
          title: "Exterior Architecture",
          description: "Contemporary building design with premium finishes",
        },
        {
          url: "https://readdy.ai/api/search-image?query=Modern%20apartment%20interior%20living%20space%20Etereo%201%20Goa%20with%20sophisticated%20furnishing%2C%20open%20plan%20layout%2C%20premium%20materials%2C%20elegant%20design%2C%20luxury%20residential%20interiors%2C%20contemporary%20styling&width=400&height=600&seq=etereo-gallery-2&orientation=portrait",
          title: "Interior Spaces",
          description: "Sophisticated interiors with premium amenities",
        },
        {
          url: "https://readdy.ai/api/search-image?query=Resort-style%20amenities%20area%20Etereo%201%20Goa%20with%20swimming%20pool%2C%20landscaped%20gardens%2C%20recreational%20facilities%2C%20luxury%20residential%20complex%20amenities%2C%20tropical%20paradise%20setting&width=400&height=600&seq=etereo-gallery-3&orientation=portrait",
          title: "Amenities & Facilities",
          description: "Resort-style amenities and recreational spaces",
        },
      ],
    },
    {
      title: "Commercial Tower Layout",
      image:
        "https://readdy.ai/api/search-image?query=Technical%203D%20isometric%20drawing%20of%20commercial%20office%20tower%20showing%20floor%20layouts%2C%20elevator%20cores%2C%20parking%20levels%2C%20and%20surrounding%20infrastructure%2C%20professional%20architectural%20visualization%20style%2C%20precise%20geometric%20details&width=600&height=400&seq=iso-portfolio-2&orientation=landscape",
      description:
        "Detailed isometric representation of commercial high-rise with technical specifications",
    },
    {
      title: "Township Master Plan",
      image:
        "https://readdy.ai/api/search-image?query=Large%20scale%203D%20isometric%20master%20plan%20of%20township%20development%20showing%20residential%20blocks%2C%20commercial%20areas%2C%20roads%2C%20parks%2C%20utilities%2C%20and%20infrastructure%20in%20technical%20architectural%20drawing%20style%2C%20comprehensive%20site%20planning&width=600&height=400&seq=iso-portfolio-3&orientation=landscape",
      description:
        "Complete township development shown in comprehensive isometric master plan",
    },
  ];

  const [selectedItem, setSelectedItem] = useState<
    (typeof portfolioItems)[0] | null
  >(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const handleItemClick = (item: (typeof portfolioItems)[0]) => {
    setSelectedItem(item);
    setCurrentGalleryIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentGalleryIndex(0);
  };

  const nextGalleryImage = () => {
    if (selectedItem?.galleryImages) {
      setCurrentGalleryIndex((prev) =>
        prev === selectedItem.galleryImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevGalleryImage = () => {
    if (selectedItem?.galleryImages) {
      setCurrentGalleryIndex((prev) =>
        prev === 0 ? selectedItem.galleryImages!.length - 1 : prev - 1
      );
    }
  };

  const goToGalleryImage = (index: number) => {
    setCurrentGalleryIndex(index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Professional%20architectural%20isometric%20drawing%20workspace%20with%20technical%20blueprints%2C%203D%20models%2C%20and%20design%20tools%2C%20modern%20architectural%20studio%20environment%2C%20clean%20and%20organized%20workspace%2C%20professional%20lighting&width=1920&height=1080&seq=iso-hero-bg&orientation=landscape')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              3D Isometrics
            </h1>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Technical isometric visualizations that provide comprehensive
              overview of architectural layouts, spatial relationships, and
              development masterplans with precision and clarity.
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
              Isometric Visualization Features
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional technical drawings that communicate complex
              architectural concepts with clarity and precision
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
                Why Choose 3D Isometrics?
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              <p className="text-xl text-gray-600 mb-8">
                Isometric visualizations provide unparalleled clarity in
                communicating architectural concepts and spatial relationships.
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
                src="https://readdy.ai/api/search-image?query=Professional%203D%20isometric%20architectural%20drawing%20being%20created%20on%20computer%20screen%2C%20technical%20precision%2C%20architectural%20software%20interface%2C%20detailed%20building%20layouts%20and%20floor%20plans%2C%20modern%20design%20workspace&width=600&height=500&seq=iso-benefits&orientation=landscape"
                alt="3D Isometric Creation Process"
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
              Isometric Portfolio
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our technical isometric visualizations showcasing various
              architectural projects and developments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-900 mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <i
                        className={`${
                          item.hasGallery ? "ri-image-line" : "ri-image-line"
                        } text-4xl mb-2`}
                      ></i>
                      <p className="text-sm">
                        {item.hasGallery ? "View Gallery" : "View Isometric"}
                      </p>
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

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {selectedItem.hasGallery ? (
              // Gallery Modal for Etereo 1, Goa
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-20"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>

                {/* Gallery Container with Split Layout */}
                <div className="relative h-96 md:h-[500px] overflow-hidden rounded-t-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{
                      transform: `translateX(-${currentGalleryIndex * 100}%)`,
                    }}
                  >
                    {selectedItem.galleryImages?.map((image, index) => (
                      <div
                        key={index}
                        className="w-full h-full flex-shrink-0 relative flex"
                      >
                        {/* Split layout for portrait images */}
                        <div className="w-1/2 h-full">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-1/2 h-full">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  {selectedItem.galleryImages &&
                    selectedItem.galleryImages.length > 1 && (
                      <>
                        <button
                          onClick={prevGalleryImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                        >
                          <i className="ri-arrow-left-line text-xl"></i>
                        </button>
                        <button
                          onClick={nextGalleryImage}
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
                          onClick={() => goToGalleryImage(index)}
                          className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                            index === currentGalleryIndex
                              ? "bg-yellow-400"
                              : "bg-gray-400"
                          }`}
                        ></button>
                      ))}
                    </div>
                  )}

                <div className="p-8">
                  <div className="text-yellow-400 text-sm font-medium mb-2">
                    3D Isometrics
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>
                  {selectedItem.galleryImages &&
                    selectedItem.galleryImages[currentGalleryIndex] && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-black mb-2">
                          {
                            selectedItem.galleryImages[currentGalleryIndex]
                              .title
                          }
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {
                            selectedItem.galleryImages[currentGalleryIndex]
                              .description
                          }
                        </p>
                      </div>
                    )}
                </div>
              </div>
            ) : (
              // Regular Modal for other items
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-96 object-cover object-top rounded-t-2xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>

                <div className="p-8">
                  <div className="text-yellow-400 text-sm font-medium mb-2">
                    3D Isometrics
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Technical Visualizations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us create precise isometric drawings that clearly communicate
            your architectural concepts and development plans.
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
