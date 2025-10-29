import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              {/* <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span
                  className="text-black font-bold text-lg"
                  style={{ fontFamily: '"Pacifico", serif' }}
                >
                  AML
                </span>
              </div> */}
              <div className="flex items-center">
                <Link to="/" className="cursor-pointer">
                  <img
                    src="https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/7240d6459fd7bd08670b4a90c4788daa.png"
                    alt="Alliance Media Labs"
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
              {/* <span className="text-xl font-bold">RealVision Studios</span> */}
            </div>
            <p className="text-gray-400 mb-6">
              Creating stunning visual experiences for real estate through
              cutting-edge 3D technology and cinematic storytelling.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/19mvCsEY7U"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="https://youtube.com/@alliancemedialabs"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer"
              >
                <i className="ri-youtube-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/alliancemedialabs"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/alliance-media-labs"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/3d-walkthrough-videos"
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  3D Walkthrough Videos
                </Link>
              </li>
              <li>
                <Link
                  to="/services/virtual-reality-tours"
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Virtual Reality Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/services/drone-shoots"
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Drone Shoots
                </Link>
              </li>
              <li>
                <Link
                  to="/services/architectural-scale-models"
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Architectural Models
                </Link>
              </li>
              <li>
                <Link
                  to="/services/interactive-3d-tools"
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Interactive 3D Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/#about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Full Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/#testimonials"
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* City Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">City Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/city-services/3d-walkthrough-videos-mumbai"
                  className="text-white/80 hover:text-yellow-400 transition-colors"
                >
                  3D Walkthroughs Mumbai
                </Link>
              </li>
              <li>
                <Link
                  to="/services/city-services/3d-walkthrough-videos-bangalore"
                  className="text-white/80 hover:text-yellow-400 transition-colors"
                >
                  3D Walkthroughs Bangalore
                </Link>
              </li>
              <li>
                <Link
                  to="/services/city-services/3d-walkthrough-videos-delhi"
                  className="text-white/80 hover:text-yellow-400 transition-colors"
                >
                  3D Walkthroughs Delhi NCR
                </Link>
              </li>
              <li>
                <Link
                  to="/services/city-services/3d-renders-mumbai"
                  className="text-white/80 hover:text-yellow-400 transition-colors"
                >
                  3D Renders Mumbai
                </Link>
              </li>
              <li>
                <Link
                  to="/services/city-services/drone-shoots-bangalore"
                  className="text-white/80 hover:text-yellow-400 transition-colors"
                >
                  Drone Shoots Bangalore
                </Link>
              </li>
              <li>
                <Link
                  to="/services/city-services/real-estate-video-production-gurugram"
                  className="text-white/80 hover:text-yellow-400 transition-colors"
                >
                  Video Production Gurugram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Alliance Media Labs. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors cursor-pointer"
              >
                Terms of Service
              </a>
              {/* <a
                href="https://readdy.ai/?origin=logo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors cursor-pointer"
              >
                Website Builder
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
