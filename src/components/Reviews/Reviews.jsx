// components/Reviews.js
export default function Reviews() {
  const reviews = [
    {
      id: 1,
      text: "BikeMart made my biking experience seamless! Fast delivery and excellent support.",
      name: "John Doe",
      role: "Professional Cyclist",
      avatar: "https://i.pravatar.cc/50?img=1",
    },
    {
      id: 2,
      text: "High-quality bikes at unbeatable prices. Highly recommend BikeMart to everyone.",
      name: "Jane Smith",
      role: "Adventure Blogger",
      avatar: "https://i.pravatar.cc/50?img=2",
    },
    {
      id: 3,
      text: "Amazing customer service and fast shipping. I love my new bike!",
      name: "Mike Johnson",
      role: "Outdoor Enthusiast",
      avatar: "https://i.pravatar.cc/50?img=3",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-9/10 md:w-8/10 mx-auto">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Real experiences from riders who trust BikeMart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-gray-700 mb-6 h-15 leading-relaxed">
                “{review.text}”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-600"
                />
                <div>
                  <h4 className="text-gray-900 font-semibold">{review.name}</h4>
                  <span className="text-gray-500 text-sm">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
