import Link from "next/link";

export default function Card({ bike }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
    >
      <div className="w-full h-50 bg-gray-100 rounded-lg mb-4 overflow-hidden">
        <img
          src={bike.image}
          alt={bike.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-heading text-lg font-semibold mb-1">{bike.title}</h3>

      <p className="text-subtext text-sm font-semibold text-gray-500 line-clamp-2 mb-3">
        {bike.short_description}
      </p>

      <p className="text-primary font-semibold text-base mb-4">${bike.price}</p>

      <Link
        bike={bike}
        href={`/products/${bike._id}`}
        className="mt-auto btn cursor-pointer hover:shadow-blue-300 hover:shadow-md bg-primary text-white py-2 rounded-lg hover:bg-primary-hover active:bg-primary-active transition"
      >
        View Details
      </Link>
    </div>
  );
}
