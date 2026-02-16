const features = [
  {
    title: "Verified & Trusted Caregivers",
    desc: "All caregivers are carefully screened and background-verified to ensure safety and reliability.",
    icon: "🛡️",
  },
  {
    title: "Flexible & Easy Booking",
    desc: "Book care services based on your preferred time, duration, and location with just a few clicks.",
    icon: "📅",
  },
  {
    title: "Affordable & Transparent Pricing",
    desc: "Clear pricing with no hidden charges — pay only for the time and service you need.",
    icon: "💳",
  },
  {
    title: "24/7 Dedicated Support",
    desc: "Our support team is always available to assist you before, during, and after your booking.",
    icon: "📞",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-100">
      <div className="w-9/10 md:w-8/10 mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Why Choose <span className="text-blue-600">CareBridge</span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="120"
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          We are committed to making caregiving safe, simple, and accessible —
          providing families with trusted support whenever they need it.
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
