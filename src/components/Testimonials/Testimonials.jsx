export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Fatema Rahman",
      role: "Mother of Two",
      message:
        "CareBridge helped us find a trustworthy babysitter within hours. The service was professional and reliable.",
    },
    {
      id: 2,
      name: "Mahmud Hasan",
      role: "Son of Elderly Parent",
      message:
        "The caregiver assigned for my father was kind and experienced. It gave our family real peace of mind.",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      role: "Working Professional",
      message:
        "Booking was simple, and the caregiver was extremely supportive. Highly recommended platform!",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="w-9/10 md:w-8/10 mx-auto">

        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Families Say About{" "}
            <span className="text-blue-600">CareBridge</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Real experiences from families who trust our care services.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                “{item.message}”
              </p>

              <div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <span className="text-gray-500 text-sm">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
