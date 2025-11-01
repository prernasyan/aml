export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Alliance Media Labs
              </h2>
              <div className="w-20 h-1 bg-yellow-400"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              We are a creative technology company that bridges the gap between
              imagination and reality. Specializing in real estate content
              creation and virtual visualization, we empower developers with
              cutting-edge visuals and immersive digital tools.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our team combines artistic vision with technological innovation to
              create experiences that don't just showcase properties—they tell
              stories, evoke emotions, and drive decisions.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-black">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/images/home/2.jpg"
                alt="Alliance Media Labs Studio"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-2xl flex items-center justify-center">
              <i className="ri-building-line text-4xl text-black"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
