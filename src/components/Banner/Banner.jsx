import Link from "next/link";

import AOS from "aos";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner relative w-full min-h-[70vh] flex items-center">
      
      <div className="absolute inset-0 bg-black/60"></div>

     
      <div className="relative z-10 w-9/10 md:w-8/10 mx-auto text-center md:text-left space-y-6">
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          Discover Your <span className="text-blue-500">Perfect Ride</span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-base md:text-xl text-gray-200 max-w-3xl"
        >
          Explore our wide selection of bikes — from rugged mountain bikes to
          sleek road bikes — crafted for every journey and adventure.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex justify-center md:justify-start gap-4 pt-2"
        >
          <Link
            href="/products"
            className="btn btn-sm md:btn-lg border-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          >
            Shop Bikes
          </Link>

          <Link
            href="/contact"
            className="btn btn-sm md:btn-lg border bg-transparent border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
