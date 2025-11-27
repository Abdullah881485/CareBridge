const features = [
  {
    title: "Quality Bikes",
    desc: "We only sell top-quality bikes from trusted brands.",
    icon: "🚴‍♂️",
  },
  {
    title: "Affordable Prices",
    desc: "Competitive pricing without compromising quality.",
    icon: "💰",
  },
  {
    title: "Fast Delivery",
    desc: "Get your bike delivered quickly and safely.",
    icon: "🚚",
  },
  {
    title: "24/7 Support",
    desc: "Our team is here to help anytime you need.",
    icon: "🛠️",
  },
];

export default function WhyChooseUs() {
  return (
    <section className=" w-9/10 mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            key={i}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
