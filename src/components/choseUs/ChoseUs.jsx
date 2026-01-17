const features = [
  {
    title: "Premium Quality Bikes",
    desc: "We offer only carefully selected bikes from trusted and proven brands.",
    icon: "🚴‍♂️",
  },
  {
    title: "Best Value Pricing",
    desc: "Transparent and competitive prices without compromising on quality.",
    icon: "💰",
  },
  {
    title: "Fast & Secure Delivery",
    desc: "Your bike arrives safely and on time, right at your doorstep.",
    icon: "🚚",
  },
  {
    title: "24/7 Customer Support",
    desc: "Our support team is always ready to assist you whenever needed.",
    icon: "🛠️",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="w-9/10 md:w-8/10 mx-auto text-center">
        
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Why Choose <span className="text-blue-600">BikeMart</span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="120"
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          We combine quality, affordability, and reliable service to give you
          the best biking experience possible.
        </p>

      
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-5">{f.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {f.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
