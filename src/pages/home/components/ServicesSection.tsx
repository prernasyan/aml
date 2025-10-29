
import { Link, useNavigate } from 'react-router-dom';

export default function ServicesSection() {
  const navigate = useNavigate();
  const services = [
    {
      icon: 'ri-video-camera-line',
      title: '3D Walkthrough Videos',
      description: 'Cinematic tours that showcase your properties with Hollywood-grade quality and immersive storytelling.',
      link: '/services/3d-walkthrough-videos',
      isText: true,
      text: '3D'
    },
    {
      icon: 'ri-vr-line',
      title: 'Virtual Reality Tours (360°)',
      description: 'Interactive VR experiences allowing clients to explore properties before construction with complete immersion.',
      link: '/services/virtual-reality-tours',
      isCustomIcon: true,
      customIcon: 'https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/fe7a09b49ca15138bec4a79058f6a337.png'
    },
    {
      icon: 'ri-image-line',
      title: '3D Renders & Isometrics',
      description: 'Photorealistic visualizations and technical drawings that bring architectural concepts to life.',
      link: '/services/3d-renders-isometrics'
    },
    {
      icon: 'ri-tools-line',
      title: 'Interactive 3D Tools',
      description: 'Custom configurators and interactive experiences that engage clients and drive conversions.',
      link: '/services/interactive-3d-tools'
    },
    {
      icon: 'ri-building-line',
      title: 'Architectural Scale Models',
      description: 'Physical and digital scale models for presentations, marketing, and client engagement.',
      link: '/services/architectural-scale-models'
    },
    {
      icon: 'ri-camera-3-line',
      title: 'Construction Update Videos',
      description: 'Professional documentation of construction progress with drone footage and time-lapse sequences.',
      link: '/services/construction-update-videos'
    },
    {
      icon: 'ri-flight-takeoff-line',
      title: 'Location AVs & Drone Shoots',
      description: 'Aerial photography and videography that captures the full scope and context of your developments.',
      link: '/services/drone-shoots'
    },
    {
      icon: 'ri-palette-line',
      title: 'Graphics & Branding',
      description: 'Complete visual identity solutions including logos, marketing materials, and brand guidelines.',
      link: '/services/graphics-branding'
    },
    {
      icon: 'ri-megaphone-line',
      title: 'Digital Marketing',
      description: 'Strategic online campaigns, social media management, and digital advertising for real estate.',
      link: '/services/digital-marketing'
    },
    {
      icon: 'ri-road-map-line',
      title: 'Route Videos',
      description: 'Dynamic route visualizations showcasing accessibility and connectivity to your developments.',
      link: '/services/route-videos'
    },
    {
      icon: 'ri-cube-line',
      title: '3D Isometrics',
      description: 'Technical isometric visualizations providing comprehensive overview of architectural layouts.',
      link: '/services/3d-isometrics'
    },
    {
      icon: 'ri-home-4-line',
      title: 'Interior Cinematic Walkthrough',
      description: 'Immersive interior tours highlighting premium finishes and lifestyle experiences.',
      link: '/services/interior-cinematic-walkthrough'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Comprehensive solutions for modern real estate marketing and visualization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-yellow-400 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.isText ? (
                  <span className="text-xl font-bold text-black">{service.text}</span>
                ) : service.isCustomIcon ? (
                  <img src={service.customIcon} alt={service.title} className="w-8 h-8" />
                ) : (
                  <i className={`${service.icon} text-2xl text-black`}></i>
                )}
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-black/70 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-yellow-400 group-hover:text-yellow-600 transition-colors">
                <span className="text-sm font-semibold">Learn More</span>
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
