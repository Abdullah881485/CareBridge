export default function Achievements() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="w-9/10 md:w-8/10 mx-auto">
        
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-blue-600">Achievements</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Milestones that reflect our growth, trust, and commitment to riders.
          </p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <h3 className="text-5xl font-extrabold text-blue-600">120+</h3>
            <p className="mt-3 text-lg font-semibold text-gray-900">
              Products Listed
            </p>
            <p className="text-gray-600 text-sm mt-2">
              A diverse collection of high-quality bikes and accessories.
            </p>
          </div>

        
          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <h3 className="text-5xl font-extrabold text-blue-600">4.8★</h3>
            <p className="mt-3 text-lg font-semibold text-gray-900">
              Customer Rating
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Highly rated by riders for quality and service.
            </p>
          </div>

       
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <h3 className="text-5xl font-extrabold text-blue-600">8+</h3>
            <p className="mt-3 text-lg font-semibold text-gray-900">
              Years of Trust
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Delivering reliability and customer satisfaction since day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
