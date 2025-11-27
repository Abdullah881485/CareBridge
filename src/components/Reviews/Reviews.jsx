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
    <section className="w-9/10 mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">
        What Our Clients Say
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {reviews.map((review) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            key={review.id}
            className="bg-white p-6 rounded-xl shadow-md max-w-sm text-left hover:-translate-y-1 transition-transform"
          >
            <p className="text-gray-600 mb-6">{review.text}</p>
            <div className="flex items-center gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-gray-800 font-semibold">{review.name}</h4>
                <span className="text-gray-500 text-sm">{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
