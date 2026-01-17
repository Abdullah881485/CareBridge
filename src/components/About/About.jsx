export default function AboutUs() {
  return (
    <section data-aos="fade-up" className="my-20 w-9/10 md:w-8/10 mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl shadow-lg overflow-hidden">
    
        <div className="w-full md:w-1/2 h-[260px] md:h-[380px] overflow-hidden">
          <img
            src="https://i.ibb.co.com/39Ny7gXN/motorbike-is-being-driven-quickly-28914-32822.jpg"
            alt="About BikeMart"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </div>

       
        <div className="w-full md:w-1/2 p-6 md:p-10 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-blue-600">BikeMart</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            BikeMart is your trusted online destination for premium bikes and
            accessories. From daily commuting to off-road adventures, we deliver
            quality, performance, and reliability.
          </p>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Our mission is simple — make every ride smooth, powerful, and
            unforgettable with top-tier products and customer-first service.
          </p>
        </div>
      </div>
    </section>
  );
}
