import { useState, useEffect } from "react";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";
import WhatsAppFloat from "../../components/feature/WhatsAppFloat";
import { updateSEO, addStructuredData } from "../../utils/seo";

const portfolioItems = [
  {
    id: 1,
    title: "Etereo 1, Goa",
    category: "3D Walkthrough",
    image:
      "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/7d1a7b2654dbbd990ff9a0d69399d49c.png",
    description:
      "Cinematic 3D walkthrough showcasing luxury residential units with panoramic city views.",
    videoUrl: "https://www.youtube.com/embed/BiCCdx0fDik?autoplay=1&t",
    isExternal: false,
  },
  {
    id: 2,
    title: "Shree Radha Gopal Residency, Kosi",
    category: "VR Experience",
    image:
      "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/bf9b9f4a6907bcd5e362967e58db6657.png",
    description:
      "Interactive VR tour of a residential plotted development with modern amenities and green spaces.",
    videoUrl: "https://amlabs.cloud/SRMG_V06/",
    isExternal: true,
  },
  {
    id: 3,
    title: "Province D Olympia, Noida",
    category: "Location AV",
    image:
      "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/2ef363fa71622e5ffcaa49d73762d286.png",
    description:
      "Professional location showcase highlighting the prime Noida location and premium real estate development with excellent connectivity and modern infrastructure.",
    videoUrl:
      "https://www.youtube.com/embed/VPTirPc5a1I?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 4,
    title: "Multiple Projects",
    category: "3D Rendering",
    image:
      "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/cad1ec69f9736a7d84b083bbd59bbe44.png",
    description:
      "Comprehensive collection of 3D still renders showcasing various residential developments with detailed architectural visualization",
    videoUrl:
      "https://www.youtube.com/embed/BiCCdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
    hasSlider: true,
    sliderImages: [
      {
        url: "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/bbb5436b3c93aedf6fb7a2ce4ee35e14.png",
        title: "Luxury Residential Complex",
        description: "Modern residential development with premium amenities",
      },
      {
        url: "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/2de44ef8bca3d7bbed54ea1868b20a85.png",
        title: "Premium Interior Design",
        description: "Sophisticated interior spaces with modern finishes",
      },
      {
        url: "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/57ac807618496ffda77652e72b070eff.png",
        title: "High-Rise Development",
        description: "Urban residential tower with panoramic city views",
      },
      {
        url: "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/bfc7eae56a5f96cd635c7eb9cc6db5fc.png",
        title: "Premium Villa Project",
        description: "Exclusive villa development with luxury amenities",
      },
      {
        url: "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/97b3c83067efd731f4adc318653864f9.png",
        title: "Master Plan Visualization",
        description: "Complete residential development master planning",
      },
    ],
  },
  {
    id: 5,
    title: "Pyramid Alban, Gurugram",
    category: "Construction Updates",
    image:
      "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/5582e4121b59f46ffabe025a8d67dc24.png",
    description:
      "Comprehensive construction progress documentation of premium residential project with detailed milestone markers and progress tracking.",
    videoUrl:
      "https://www.youtube.com/embed/QDJxopvP4Ro?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 6,
    title: "Yuu by Nahar, Mumbai",
    category: "Interactive 3D",
    image:
      "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/8173ab7e42cdb17b0403da87035eb759.png",
    description:
      "Interactive residential apartment configurator allowing buyers to customize layouts, finishes, and amenities in real-time for premium Mumbai living.",
    videoUrl: "https://amlabs.cloud/Nahar_VR/",
    isExternal: true,
  },
  {
    id: 7,
    title: "Hero Homes-The Palatial, Gurugram",
    category: "Route Videos",
    image:
      "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/6a13795374b51176f221bbc208458661.png",
    description:
      "Dynamic route visualization showcasing different approach routes to reach the project site highlighting nearby landmarks and markers for easy navigation.",
    videoUrl:
      "https://www.youtube.com/embed/ENlsfe7wQRs?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 8,
    title: "Residential Complex Isometrics",
    category: "3D Isometrics",
    image:
      "https://readdy.ai/api/search-image?query=Professional%203D%20isometric%20architectural%20visualization%20of%20modern%20residential%20complex%20with%20multiple%20buildings%2C%20detailed%20floor%20plans%2C%20landscaping%20elements%2C%20parking%20areas%2C%20and%20amenities%20shown%20in%20technical%20isometric%20perspective%2C%20clean%20white%20background%2C%20architectural%20drawing%20style%2C%20precise%20geometric%20details&width=400&height=300&seq=isometric-1&orientation=landscape",
    description:
      "Technical isometric visualizations providing comprehensive overview of architectural layouts and spatial relationships.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 9,
    title: "Hero Homes, Ludhiana",
    category: "Interior Cinematic Walkthrough",
    image:
      "https://readdy.ai/api/search-image?query=Cinematic%20interior%20walkthrough%20of%20luxury%20villa%20showcasing%20elegant%20living%20spaces%2C%20modern%20kitchen%2C%20sophisticated%20bedroom%2C%20marble%20bathrooms%2C%20high-end%20furniture%20and%20fixtures%2C%20warm%20ambient%20lighting%2C%20professional%20real%20estate%20photography%20style%2C%20contemporary%20design%20elements&width=400&height=300&seq=interior-walkthrough-1&orientation=landscape",
    description:
      "Immersive interior walkthrough highlighting the sophisticated apartment interiors with premium finishes, modern amenities, and elegant design elements.",
    videoUrl:
      "https://www.youtube.com/embed/dPJRyTFkX-g?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 23,
    title: "Rising Homes, Gurugram",
    category: "Interior Cinematic Walkthrough",
    image:
      "https://readdy.ai/api/search-image?query=Cinematic%20interior%20walkthrough%20of%20luxury%20penthouse%20featuring%20panoramic%20city%20views%2C%20premium%20materials%2C%20designer%20furniture%2C%20wine%20cellar%2C%20home%20theater%2C%20sophisticated%20lighting%2C%20high-end%20finishes%2C%20contemporary%20luxury%20design%2C%20professional%20real%20estate%20cinematography&width=400&height=300&seq=interior-walkthrough-4&orientation=landscape",
    description:
      "Immersive interior walkthrough highlighting the sophisticated apartment interiors with premium finishes, modern amenities, and elegant design elements.",
    videoUrl:
      "https://www.youtube.com/embed/ExZlpEoGIBc?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 10,
    title: "Township Development Model",
    category: "Architectural Scale Models",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20architectural%20scale%20model%20of%20large%20township%20development%20with%20miniature%20buildings%2C%20landscaping%2C%20roads%2C%20and%20infrastructure%2C%20displayed%20on%20clean%20presentation%20table%2C%20detailed%20craftsmanship%2C%20realistic%20materials%20and%20textures%2C%20professional%20studio%20lighting%2C%20architectural%20model%20photography&width=400&height=300&seq=scale-model-1&orientation=landscape",
    description:
      "Physical and digital scale models providing tangible representation of architectural concepts and development masterplans.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 11,
    title: "Luxury Commercial Complex",
    category: "3D Walkthrough",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20luxury%20commercial%20complex%20with%20glass%20facades%2C%20contemporary%20architecture%2C%20professional%20business%20environment%2C%20high-end%20retail%20spaces%2C%20office%20towers%2C%20landscaped%20plaza%20areas%2C%20evening%20lighting%2C%20architectural%20visualization%20style%2C%20premium%20commercial%20development&width=400&height=300&seq=commercial-1&orientation=landscape",
    description:
      "Sophisticated commercial development featuring modern office spaces and premium retail environments.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 12,
    title: "Heritage Hotel Restoration",
    category: "VR Experience",
    image:
      "https://readdy.ai/api/search-image?query=Heritage%20hotel%20restoration%20project%20showcasing%20blend%20of%20traditional%20architecture%20with%20modern%20amenities%2C%20colonial%20style%20building%20with%20contemporary%20interiors%2C%20luxury%20hospitality%20design%2C%20historical%20preservation%20meets%20modern%20comfort%2C%20elegant%20facade%20restoration&width=400&height=300&seq=heritage-1&orientation=landscape",
    description:
      "Virtual tour of heritage hotel restoration blending historical architecture with contemporary luxury amenities.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 13,
    title: "Smart City Infrastructure",
    category: "Location AV",
    image:
      "https://readdy.ai/api/search-image?query=Smart%20city%20infrastructure%20development%20with%20modern%20transportation%20systems%2C%20green%20buildings%2C%20sustainable%20urban%20planning%2C%20technology%20integration%2C%20futuristic%20cityscape%2C%20clean%20energy%20solutions%2C%20connected%20urban%20environment%2C%20aerial%20perspective&width=400&height=300&seq=smartcity-1&orientation=landscape",
    description:
      "Comprehensive smart city development showcasing integrated infrastructure and sustainable urban planning solutions.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 14,
    title: "Waterfront Residences",
    category: "3D Rendering",
    image:
      "https://readdy.ai/api/search-image?query=Luxury%20waterfront%20residential%20development%20with%20modern%20apartments%20overlooking%20pristine%20lake%2C%20contemporary%20architecture%2C%20glass%20balconies%2C%20landscaped%20waterfront%20promenade%2C%20sunset%20lighting%2C%20premium%20lakeside%20living%2C%20architectural%20rendering%20style&width=400&height=300&seq=waterfront-1&orientation=landscape",
    description:
      "Premium waterfront residential project featuring contemporary design and stunning lake views.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 15,
    title: "Smart World- The Edition, Gurugram",
    category: "Construction Updates",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20multi-tower%20residential%20construction%20project%20in%20Gurugram%20with%20premium%20high-rise%20buildings%20under%20development%2C%20construction%20cranes%2C%20steel%20and%20concrete%20framework%2C%20luxury%20residential%20complex%20progress%20documentation%2C%20contemporary%20architecture%2C%20construction%20milestone%20tracking&width=400&height=300&seq=metro-1&orientation=landscape",
    description:
      "Comprehensive construction progress documentation highlighting the development of multi-tower residential project with premium amenities and modern architectural design.",
    videoUrl:
      "https://www.youtube.com/embed/4RebMEfQr3Y?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 16,
    title: "House of Hiranandani, Mumbai",
    category: "VR Experience",
    image:
      "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/13ec1b4216e30180cf09cab872d325bd.png",
    description:
      "Immersive VR tour of premium shopping mall featuring interactive retail spaces and modern commercial architecture.",
    videoUrl: "https://amlabs.cloud/HOH-V2/",
    isExternal: true,
  },
  {
    id: 17,
    title: "Province D Olympia, Noida",
    category: "VR Experience",
    image:
      "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/452f2545a1ee6b755317f454d585315e.png",
    description: "Residential plotted development",
    videoUrl: "https://amlabs.cloud/ATS_PDO/",
    isExternal: true,
  },
  {
    id: 18,
    title: "Resort & Spa VR Journey",
    category: "VR Experience",
    image:
      "https://readdy.ai/api/search-image?query=Luxury%20resort%20and%20spa%20complex%20with%20virtual%20reality%20experience%2C%20tropical%20paradise%20setting%2C%20infinity%20pools%2C%20spa%20facilities%2C%20beachfront%20villas%2C%20lush%20landscaping%2C%20premium%20hospitality%20design%2C%20sunset%20lighting%2C%20vacation%20destination%20photography&width=400&height=300&seq=vr-resort-1&orientation=landscape",
    description:
      "Comprehensive VR experience showcasing luxury resort amenities, spa facilities, and premium accommodation options.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
    isExternal: false,
  },
  {
    id: 19,
    title: "Altura DXP 92, Gurugram",
    category: "Location AV",
    image:
      "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/03904ca42a7bed6c84c7b379707456c5.png",
    description:
      "Infographical location AV showcasing Altura DXP 92 development in Gurugram with comprehensive visual presentation and detailed project information.",
    videoUrl:
      "https://www.youtube.com/embed/z6RclcDFWAA?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 20,
    title: "Shree Radha Gopal Residency, Kosi",
    category: "Location AV",
    image:
      "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/30430b59183d8ae1262c10573ce98c55.png",
    description:
      "Highlighting spiritual location of Kosi along with project highlights showcasing the serene environment and premium residential development features.",
    videoUrl:
      "https://www.youtube.com/embed/nl1xegGywlc?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
];

const categories = [
  "All",
  "3D Walkthrough",
  "VR Experience",
  "Location AV",
  "3D Rendering",
  "Construction Updates",
  "Interactive 3D",
  "Route Videos",
  "3D Isometrics",
  "Interior Cinematic Walkthrough",
  "Architectural Scale Models",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<
    (typeof portfolioItems)[0] | null
  >(null);
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    // Update SEO
    updateSEO({
      title:
        "Portfolio - Alliance Media Labs Real Estate Visualization Projects",
      description:
        "Explore our comprehensive portfolio of real estate visualization projects including 3D walkthroughs, VR tours, architectural renderings, and construction documentation.",
      keywords:
        "real estate portfolio, 3D walkthrough examples, VR tour samples, architectural visualization portfolio, construction video examples",
      canonical: `${
        import.meta.env.VITE_SITE_URL || "https://example.com"
      }/portfolio`,
      ogImage: `${
        import.meta.env.VITE_SITE_URL || "https://example.com"
      }/og-portfolio.jpg`,
    });

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Alliance Media Labs Portfolio",
      description:
        "Comprehensive portfolio of real estate visualization projects",
      url: `${
        import.meta.env.VITE_SITE_URL || "https://example.com"
      }/portfolio`,
      mainEntity: {
        "@type": "ItemList",
        name: "Real Estate Visualization Projects",
        numberOfItems: portfolioItems.length,
        itemListElement: portfolioItems.slice(0, 10).map((item, index) => ({
          "@type": "CreativeWork",
          position: index + 1,
          name: item.title,
          description: item.description,
          category: item.category,
          image: item.image,
        })),
      },
    };

    addStructuredData(structuredData);
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handleItemClick = (item: (typeof portfolioItems)[0]) => {
    // Handle specific projects based on title
    if (item.title === "Yuu by Nahar, Mumbai") {
      // Open external link in new tab
      window.open("https://amlabs.cloud/Nahar_VR/", "_blank");
      return;
    }

    if (item.title === "House of Hiranandani, Mumbai") {
      // Open external link in new tab
      window.open("https://amlabs.cloud/HOH-V2/", "_blank");
      return;
    }

    if (
      item.title === "Province D Olympia, Noida" &&
      item.category === "VR Experience"
    ) {
      // Open external link in new tab
      window.open("https://amlabs.cloud/ATS_PDO/", "_blank");
      return;
    }

    if (item.title === "Etereo 1, Goa") {
      // Play video in modal
      setSelectedItem(item);
      setShowVideo(true);
      return;
    }

    // Handle other external links
    if (item.isExternal) {
      window.open(item.videoUrl, "_blank");
      return;
    }

    // Handle regular items
    setSelectedItem(item);
    setCurrentSlideIndex(0);
  };

  const handleVideoPlay = (item: (typeof portfolioItems)[0]) => {
    if (item.isExternal) {
      window.open(item.videoUrl, "_blank");
      return;
    }
    setSelectedItem(item);
    setShowVideo(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShowVideo(false);
    setCurrentSlideIndex(0);
  };

  const nextSlide = () => {
    if (selectedItem?.sliderImages) {
      setCurrentSlideIndex((prev) =>
        prev === selectedItem.sliderImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedItem?.sliderImages) {
      setCurrentSlideIndex((prev) =>
        prev === 0 ? selectedItem.sliderImages!.length - 1 : prev - 1
      );
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-black text-white py-24 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of projects showcasing
            cutting-edge technology and creative excellence in real estate
            visualization
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === category
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div
                      className="text-center text-white cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (item.hasSlider) {
                          handleItemClick(item);
                        } else {
                          handleVideoPlay(item);
                        }
                      }}
                    >
                      <i
                        className={`${
                          item.hasSlider
                            ? "ri-image-line"
                            : "ri-play-circle-line"
                        } text-4xl mb-2`}
                      ></i>
                      <p className="text-sm">
                        {item.hasSlider ? "View Gallery" : "View Project"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="text-yellow-400 text-sm font-medium mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
              <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                {showVideo ? (
                  <div className="relative">
                    <div className="aspect-video">
                      <iframe
                        src={selectedItem.videoUrl}
                        title={selectedItem.title}
                        className="w-full h-full rounded-t-2xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                    >
                      <i className="ri-close-line text-xl"></i>
                    </button>
                    <div className="p-8">
                      <div className="text-yellow-400 text-sm font-medium mb-2">
                        {selectedItem.category}
                      </div>
                      <h3 className="text-3xl font-bold text-black mb-4">
                        {selectedItem.title}
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>
                  </div>
                ) : selectedItem.hasSlider ? (
                  // Slider Modal for Multiple Projects
                  <div className="relative">
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-20"
                    >
                      <i className="ri-close-line text-xl"></i>
                    </button>

                    {/* Slider Container */}
                    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-t-2xl">
                      <div
                        className="flex transition-transform duration-500 ease-in-out h-full"
                        style={{
                          transform: `translateX(-${currentSlideIndex * 100}%)`,
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
                ) : (
                  // Regular Modal
                  <div className="relative">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-96 object-cover object-top"
                    />
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer"
                    >
                      <i className="ri-close-line text-xl"></i>
                    </button>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button
                        onClick={() => setShowVideo(true)}
                        className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors cursor-pointer"
                      >
                        <i className="ri-play-fill text-3xl text-black"></i>
                      </button>
                    </div>

                    <div className="p-8">
                      <div className="text-yellow-400 text-sm font-medium mb-2">
                        {selectedItem.category}
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
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
