import { useState } from "react";
import { useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../base/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    { name: "3D Walkthrough Videos", path: "/services/3d-walkthrough-videos" },
    { name: "Virtual Reality Tours", path: "/services/virtual-reality-tours" },
    {
      name: "3D Renders & Isometrics",
      path: "/services/3d-renders-isometrics",
    },
    { name: "Interactive 3D Tools", path: "/services/interactive-3d-tools" },
    {
      name: "Architectural Scale Models",
      path: "/services/architectural-scale-models",
    },
    {
      name: "Construction Update Videos",
      path: "/services/construction-update-videos",
    },
    { name: "Location AV", path: "/services/drone-shoots" },
    { name: "Graphics & Branding", path: "/services/graphics-branding" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
  ];

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname === "/") {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other page, navigate to home then scroll to section
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
              <img
                src="https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/7240d6459fd7bd08670b4a90c4788daa.png"
                alt="Alliance Media Labs"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleSectionNavigation("about")}
              className="text-white hover:text-yellow-400 transition-colors cursor-pointer"
            >
              About
            </button>

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-white hover:text-yellow-400 transition-colors cursor-pointer flex items-center"
              >
                Services
                <i
                  className={`ri-arrow-down-s-line ml-1 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl py-2 z-50">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-gray-800/50 transition-all duration-200 cursor-pointer whitespace-nowrap"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleSectionNavigation("portfolio")}
              className="text-white hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => handleSectionNavigation("technology")}
              className="text-white hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Technology
            </button>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() =>
                window.open(
                  "https://calendly.com/lakshay-alliancemedialabs/30min?month=2025-10",
                  "_blank"
                )
              }
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i
              className={`ri-${isMenuOpen ? "close" : "menu"}-line text-xl`}
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => handleSectionNavigation("about")}
                className="text-white hover:text-yellow-400 transition-colors cursor-pointer text-left"
              >
                About
              </button>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-white hover:text-yellow-400 transition-colors cursor-pointer flex items-center justify-between w-full"
                >
                  Services
                  <i
                    className={`ri-arrow-down-s-line transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer text-sm py-1"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleSectionNavigation("portfolio")}
                className="text-white hover:text-yellow-400 transition-colors cursor-pointer text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => handleSectionNavigation("technology")}
                className="text-white hover:text-yellow-400 transition-colors cursor-pointer text-left"
              >
                Technology
              </button>
              <Link
                to="/contact"
                className="text-white hover:text-yellow-400 transition-colors cursor-pointer"
              >
                Contact
              </Link>
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/lakshay-alliancemedialabs/30min?month=2025-10",
                      "_blank"
                    )
                  }
                >
                  Book a Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
