const testimonials = [
  {
    name: "Sarah Chen",
    position: "Development Director",
    company: "Pinnacle Properties",
    content:
      "Alliance Media Labs transformed our marketing approach. Their 3D walkthroughs increased our pre-sales by 40% and gave clients confidence in their investment.",
    avatar: "/images/testimonial/1.jpg",
  },
  {
    name: "Michael Rodriguez",
    position: "CEO",
    company: "Urban Developments",
    content:
      "The VR tours they created for our luxury condos were game-changing. Clients could experience the space before construction was complete.",
    avatar: "/images/testimonial/2.jpg",
  },
  {
    name: "Emily Watson",
    position: "Marketing Manager",
    company: "Skyline Realty",
    content:
      "Their drone cinematography and construction updates kept our investors engaged throughout the entire development process. Exceptional quality and service.",
    avatar: "/images/testimonial/3.jpg",
  },
];

const clientLogos = [
  {
    name: "Hero Homes",
    logo: "/images/testimonial/4.png",
  },
  {
    name: "Client Logo 2",
    logo: "/images/testimonial/5.png",
  },
  {
    name: "Client Logo 3",
    logo: "/images/testimonial/6.png",
  },
  {
    name: "Pyramid Infratech",
    logo: "/images/testimonial/7.png",
  },
  {
    name: "Client Logo 5",
    logo: "/images/testimonial/8.png",
  },
  {
    name: "Pinnacle Properties",
    logo: "/images/testimonial/9.jpg",
  },
  {
    name: "Urban Developments",
    logo: "/images/testimonial/10.jpg",
  },
  {
    name: "Skyline Realty",
    logo: "/images/testimonial/11.png",
  },
  {
    name: "Metro Construction",
    logo: "/images/testimonial/12.jpg",
  },
  {
    name: "Elite Builders",
    logo: "/images/testimonial/13.jpg",
  },
  {
    name: "Coastal Developments",
    logo: "/images/testimonial/14.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-black mb-8">
            Trusted by Leading Developers
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="hover:scale-105 transition-transform duration-300 flex items-center justify-center w-36 h-20"
              >
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
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-yellow-600 font-medium">
                    {testimonial.company}
                  </p>
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
