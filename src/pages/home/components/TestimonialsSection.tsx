
const testimonials = [
  {
    name: 'Sarah Chen',
    position: 'Development Director',
    company: 'Pinnacle Properties',
    content: 'Alliance Media Labs transformed our marketing approach. Their 3D walkthroughs increased our pre-sales by 40% and gave clients confidence in their investment.',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20headshot%2C%20confident%20smile%2C%20modern%20office%20background%2C%20corporate%20portrait%2C%20professional%20lighting%2C%20business%20attire%2C%20executive%20appearance%2C%20contemporary%20style&width=100&height=100&seq=testimonial-1&orientation=squarish'
  },
  {
    name: 'Michael Rodriguez',
    position: 'CEO',
    company: 'Urban Developments',
    content: 'The VR tours they created for our luxury condos were game-changing. Clients could experience the space before construction was complete.',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20businessman%20headshot%2C%20confident%20expression%2C%20modern%20office%20setting%2C%20corporate%20portrait%2C%20business%20suit%2C%20executive%20appearance%2C%20professional%20photography%2C%20contemporary%20style&width=100&height=100&seq=testimonial-2&orientation=squarish'
  },
  {
    name: 'Emily Watson',
    position: 'Marketing Manager',
    company: 'Skyline Realty',
    content: 'Their drone cinematography and construction updates kept our investors engaged throughout the entire development process. Exceptional quality and service.',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20headshot%2C%20friendly%20smile%2C%20office%20environment%2C%20corporate%20portrait%2C%20professional%20attire%2C%20marketing%20executive%20appearance%2C%20modern%20lighting%2C%20business%20professional&width=100&height=100&seq=testimonial-3&orientation=squarish'
  }
];

const clientLogos = [
  {
    name: 'Hero Homes',
    logo: 'https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/9461bfbcf76a8c79afedfbeb5ad9fa57.png'
  },
  {
    name: 'Client Logo 2',
    logo: 'https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/987556581ff010cd635411b17a12405d.png'
  },
  {
    name: 'Client Logo 3',
    logo: 'https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/edd75b52100e0483dd27f6d0cd0e471e.png'
  },
  {
    name: 'Pyramid Infratech',
    logo: 'https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/e81429f8bd1425b394a3e7e9a3cc2b25.png'
  },
  {
    name: 'Client Logo 5',
    logo: 'https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/f18746e3cd8bc2ee6281918994ebe916.png'
  },
  {
    name: 'Pinnacle Properties',
    logo: 'https://readdy.ai/api/search-image?query=Modern%20real%20estate%20company%20logo%20design%2C%20minimalist%20corporate%20branding%2C%20professional%20property%20development%20logo%2C%20clean%20geometric%20design%2C%20contemporary%20business%20identity%2C%20premium%20real%20estate%20brand&width=120&height=60&seq=client-logo-1&orientation=landscape'
  },
  {
    name: 'Urban Developments',
    logo: 'https://readdy.ai/api/search-image?query=Urban%20development%20company%20logo%2C%20modern%20construction%20branding%2C%20architectural%20firm%20logo%20design%2C%20professional%20building%20company%20identity%2C%20contemporary%20developer%20brand%2C%20corporate%20real%20estate%20logo&width=120&height=60&seq=client-logo-2&orientation=landscape'
  },
  {
    name: 'Skyline Realty',
    logo: 'https://readdy.ai/api/search-image?query=Skyline%20realty%20company%20logo%2C%20professional%20real%20estate%20branding%2C%20modern%20property%20management%20logo%2C%20clean%20corporate%20identity%2C%20premium%20realty%20brand%20design%2C%20contemporary%20business%20logo&width=120&height=60&seq=client-logo-3&orientation=landscape'
  },
  {
    name: 'Metro Construction',
    logo: 'https://readdy.ai/api/search-image?query=Metro%20construction%20company%20logo%2C%20professional%20building%20contractor%20branding%2C%20modern%20construction%20firm%20identity%2C%20industrial%20corporate%20logo%2C%20contemporary%20builder%20brand%20design&width=120&height=60&seq=client-logo-4&orientation=landscape'
  },
  {
    name: 'Elite Builders',
    logo: 'https://readdy.ai/api/search-image?query=Elite%20builders%20company%20logo%2C%20luxury%20construction%20branding%2C%20premium%20building%20contractor%20identity%2C%20high-end%20developer%20logo%2C%20sophisticated%20construction%20brand%20design&width=120&height=60&seq=client-logo-5&orientation=landscape'
  },
  {
    name: 'Coastal Developments',
    logo: 'https://readdy.ai/api/search-image?query=Coastal%20development%20company%20logo%2C%20waterfront%20property%20branding%2C%20modern%20coastal%20real%20estate%20identity%2C%20premium%20beachfront%20developer%20logo%2C%20contemporary%20coastal%20brand%20design&width=120&height=60&seq=client-logo-6&orientation=landscape'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-black mb-8">Trusted by Leading Developers</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="hover:scale-105 transition-transform duration-300 flex items-center justify-center w-36 h-20">
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-32 w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-yellow-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-sm"></i>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
