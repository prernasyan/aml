import { useState } from "react";

const projects = [
  {
    url: "https://drive.google.com/uc?export=view&id=1xijP8YNsQnJCWMSJrwsoBvyyR4R5IbUh",
    title: "Project 1",
  },
  {
    url: "https://drive.google.com/uc?export=view&id=1KTsUOOkaS8tA2QUfQESfoK-iGC62L9Nz",
    title: "Project 2",
  },
  {
    url: "https://drive.google.com/uc?export=view&id=1gzGBBFqo9aYwAi-mBVAK0bp50CLba3X9",
    title: "Project 3",
  },
  {
    url: "https://drive.google.com/uc?export=view&id=1FKi52ItiGU-w0tAj56HejNEfxbleE2Jn",
    title: "Project 4",
  },
  {
    url: "https://drive.google.com/uc?export=view&id=1Qp_1EwJ_f3oo9Fad-u5urrUj62RMTWet",
    title: "Project 5",
  },
];

const portfolioItems = [
  {
    id: 1,
    title: "Etereo 1, Goa",
    category: "3D Walkthrough",
    image: "/images/portfolio/1.png",
    description:
      "Cinematic 3D walkthrough showcasing luxury residential units with panoramic city views.",
    videoUrl: "https://www.youtube.com/embed/BiCCdx0fDik?autoplay=1&t",
    isExternal: false,
  },
  {
    id: 2,
    title: "Shree Radha Gopal Residency, Kosi",
    category: "VR Experience",
    image: "/images/portfolio/2.png",
    description:
      "Interactive VR tour of a residential plotted development with modern amenities and green spaces.",
    videoUrl: "https://amlabs.cloud/SRMG_V06/",
    isExternal: true,
  },
  {
    id: 3,
    title: "Province D Olympia, Noida",
    category: "Location AV",
    image: "/images/portfolio/3.png",
    description:
      "Professional location showcase highlighting the prime Noida location and premium real estate development with excellent connectivity and modern infrastructure.",
    videoUrl:
      "https://www.youtube.com/embed/VPTirPc5a1I?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 4,
    title: "Multiple Projects",
    category: "3D Rendering",
    image: "/images/portfolio/4.png",
    description:
      "Comprehensive collection of 3D still renders showcasing various residential developments with detailed architectural visualization",
    videoUrl:
      "https://www.youtube.com/embed/BiCCdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
    hasSlider: true,
    sliderImages: [
      {
        url: "/images/portfolio/5.png",
        title: "Luxury Residential Complex",
        description: "Modern residential development with premium amenities",
      },
      {
        url: "/images/portfolio/6.png",
        title: "Premium Interior Design",
        description: "Sophisticated interior spaces with modern finishes",
      },
      {
        url: "/images/portfolio/7.png",
        title: "High-Rise Development",
        description: "Urban residential tower with panoramic city views",
      },
      {
        url: "/images/portfolio/8.png",
        title: "Premium Villa Project",
        description: "Exclusive villa development with luxury amenities",
      },
      {
        url: "/images/portfolio/9.png",
        title: "Master Plan Visualization",
        description: "Complete residential development master planning",
      },
    ],
  },
  {
    id: 5,
    title: "Pyramid Alban, Gurugram",
    category: "Construction Updates",
    image: "/images/portfolio/10.png",
    description:
      "Comprehensive construction progress documentation of premium residential project with detailed milestone markers and progress tracking.",
    videoUrl:
      "https://www.youtube.com/embed/QDJxopvP4Ro?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 16,
    title: "Smart World- The Edition, Gurugram",
    category: "Construction Updates",
    image: "/images/portfolio/11.png",
    description:
      "Comprehensive construction progress documentation highlighting the development of multi-tower residential project with premium amenities and modern architectural design.",
    videoUrl:
      "https://www.youtube.com/embed/4RebMEfQr3Y?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 17,
    title: "IT Park Complex, Bangalore",
    category: "Construction Updates",
    image: "/images/portfolio/12.png",
    description:
      "Comprehensive construction documentation of large-scale IT park development featuring multiple office towers with advanced engineering and modern architectural elements.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 6,
    title: "Yuu by Nahar, Mumbai",
    category: "Interactive 3D",
    image: "/images/portfolio/13.png",
    description:
      "Interactive residential apartment configurator allowing buyers to customize layouts, finishes, and amenities in real-time for premium Mumbai living.",
    videoUrl: "https://amlabs.cloud/Nahar_VR/",
    isExternal: true,
  },
  {
    id: 7,
    title: "Hero Homes-The Palatial, Gurugram",
    category: "Route Videos",
    image: "/images/portfolio/14.png",
    description:
      "Dynamic route visualization showcasing different approach routes to reach the project site highlighting nearby landmarks and markers for easy navigation.",
    videoUrl:
      "https://www.youtube.com/embed/ENlsfe7wQRs?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 8,
    title: "Etereo 1, Goa",
    category: "3D Isometrics",
    image: "/images/portfolio/15.jpg",
    description:
      "Premium residential project featuring contemporary design and luxury amenities in the heart of Goa with comprehensive isometric visualization.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/portfolio/16.jpeg",
        title: "Master Plan Isometric",
        description:
          "Complete site layout with residential blocks and amenities",
      },
      {
        url: "/images/portfolio/17.jpg",
        title: "Building Isometric View",
        description: "Detailed residential building with floor plan layouts",
      },
      {
        url: "/images/portfolio/18.jpg",
        title: "Complex Layout Isometric",
        description: "Multi-tower residential development with amenities",
      },
    ],
  },
  {
    id: 9,
    title: "Hero Homes, Ludhiana",
    category: "Interior Cinematic Walkthrough",
    image: "/images/portfolio/19.jpg",
    description:
      "Immersive interior walkthrough highlighting the sophisticated apartment interiors with premium finishes, modern amenities, and elegant design elements.",
    videoUrl:
      "https://www.youtube.com/embed/dPJRyTFkX-g?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 18,
    title: "Rising Homes, Gurugram",
    category: "Interior Cinematic Walkthrough",
    image: "/images/portfolio/20.png",
    description:
      "Immersive interior walkthrough highlighting the sophisticated apartment interiors with premium finishes, modern amenities, and elegant design elements.",
    videoUrl:
      "https://www.youtube.com/embed/ExZlpEoGIBc?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 19,
    title: "Modern Apartment Lifestyle Showcase",
    category: "Interior Cinematic Walkthrough",
    image: "/images/portfolio/21.jpg",
    description:
      "Stylish apartment interior presentation highlighting modern design, urban living, and contemporary lifestyle through cinematic storytelling.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 10,
    title: "Township Development Model",
    category: "Architectural Scale Models",
    image: "/images/portfolio/22.jpg",
    description:
      "Physical and digital scale models providing tangible representation of architectural concepts and development masterplans.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 11,
    title: "House of Hiranandani, Mumbai",
    category: "VR Experience",
    image: "/images/portfolio/23.png",
    description:
      "Immersive VR tour of premium shopping mall featuring interactive retail spaces and modern commercial architecture.",
    videoUrl: "https://amlabs.cloud/HOH-V2/",
    isExternal: true,
  },
  {
    id: 12,
    title: "Province D Olympia, Noida",
    category: "VR Experience",
    image: "/images/portfolio/24.png",
    description: "Residential plotted development",
    videoUrl: "https://amlabs.cloud/ATS_PDO/",
    isExternal: true,
  },
  {
    id: 13,
    title: "Resort & Spa VR Journey",
    category: "VR Experience",
    image: "/images/portfolio/25.jpg",
    description:
      "Comprehensive VR experience showcasing luxury resort amenities, spa facilities, and premium accommodation options.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
    isExternal: false,
  },
  {
    id: 14,
    title: "Altura DXP 92, Gurugram",
    category: "Location AV",
    image: "/images/portfolio/26.png",
    description:
      "Infographical location AV showcasing Altura DXP 92 development in Gurugram with comprehensive visual presentation and detailed project information.",
    videoUrl:
      "https://www.youtube.com/embed/z6RclcDFWAA?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 15,
    title: "Shree Radha Gopal Residency, Kosi",
    category: "Location AV",
    image: "/images/portfolio/27.png",
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

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<
    (typeof portfolioItems)[0] | null
  >(null);
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handleItemClick = (item: (typeof portfolioItems)[0]) => {
    // Specific handling for known external or video items
    if (item.title === "Yuu by Nahar, Mumbai") {
      // Open external link in a new tab
      window.open("https://amlabs.cloud/Nahar_VR/", "_blank");
      return;
    }

    if (item.title === "House of Hiranandani, Mumbai") {
      // Open external link in a new tab
      window.open("https://amlabs.cloud/HOH-V2/", "_blank");
      return;
    }

    if (
      item.title === "Province D Olympia, Noida" &&
      item.category === "VR Experience"
    ) {
      // Open external link in a new tab
      window.open("https://amlabs.cloud/ATS_PDO/", "_blank");
      return;
    }

    if (item.title === "Etereo 1, Goa" && item.category === "3D Walkthrough") {
      // Play video in modal
      setSelectedItem(item);
      setShowVideo(true);
      return;
    }

    if (item.title === "Etereo 1, Goa" && item.category === "3D Isometrics") {
      // Show gallery in modal
      setSelectedItem(item);
      setShowVideo(false);
      setCurrentSlideIndex(0);
      return;
    }

    // Generic external link handling
    if (item.isExternal) {
      window.open(item.videoUrl, "_blank");
      return;
    }

    // Default: open regular modal (image or slider)
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

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio Showcase
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we transform visions into
            immersive experiences
          </p>
        </div>

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
                      if (item.hasSlider || item.hasGallery) {
                        handleItemClick(item);
                      } else {
                        handleVideoPlay(item);
                      }
                    }}
                  >
                    <i
                      className={`${
                        item.hasSlider || item.hasGallery
                          ? "ri-image-line"
                          : "ri-play-circle-line"
                      } text-4xl mb-2`}
                    ></i>
                    <p className="text-sm">
                      {item.hasSlider || item.hasGallery
                        ? "View Gallery"
                        : "View Project"}
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
              ) : selectedItem.hasGallery ? (
                // Gallery Modal for Etereo 1, Goa (3D Isometrics)
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
                        transform: `translateX(-${currentSlideIndex * 100}%)`,
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
              ) : (
                // Regular Image Modal
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
  );
}
