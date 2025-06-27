
const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-100 to-emerald-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
          Transforming Lives Through Agriculture
        </h2>
        <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto">
          A women-led farmer producer organization dedicated to empowering over 500 women shareholders 
          in Jhalawar District, Rajasthan since 2022.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white rounded-lg px-6 py-4 shadow-md">
            <div className="text-2xl font-bold text-green-600">500+</div>
            <div className="text-sm text-gray-600">Women Shareholders</div>
          </div>
          <div className="bg-white rounded-lg px-6 py-4 shadow-md">
            <div className="text-2xl font-bold text-green-600">2022</div>
            <div className="text-sm text-gray-600">Established</div>
          </div>
          <div className="bg-white rounded-lg px-6 py-4 shadow-md">
            <div className="text-2xl font-bold text-green-600">Rajasthan</div>
            <div className="text-sm text-gray-600">Jhalawar District</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
