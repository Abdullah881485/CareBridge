export default function Achievements() {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Achievements
          </h2>
          <p className="text-gray-600 mt-2">
            Some highlights that show our journey and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center md:text-start"
          >
            <h3 className="text-4xl font-bold text-blue-600">120+</h3>
            <p className="mt-2 text-gray-700 font-semibold">Products Listed</p>
            <p className="text-gray-500 text-sm mt-1">
              Wide range of top-quality bikes and accessories.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center md:text-start"
          >
            <h3 className="text-4xl font-bold text-blue-600">4.8★</h3>
            <p className="mt-2 text-gray-700 font-semibold">Customer Rating</p>
            <p className="text-gray-500 text-sm mt-1">
              Consistently rated high by satisfied buyers.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center md:text-start"
          >
            <h3 className="text-4xl font-bold text-blue-600">8+</h3>
            <p className="mt-2 text-gray-700 font-semibold">Years of Trust</p>
            <p className="text-gray-500 text-sm mt-1">
              Building trust with reliable service since day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
