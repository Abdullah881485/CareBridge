import Link from "next/link";
import AOS from "aos";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner relative w-full min-h-[70vh] flex items-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-9/10 md:w-8/10 mx-auto text-center md:text-left space-y-6">
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          Trusted Care for{" "}
          <span className="text-blue-400">Your Loved Ones</span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-base md:text-xl text-gray-200 max-w-3xl"
        >
          CareBridge connects families with reliable caregivers for baby
          sitting, elderly assistance, and special home care services — making
          caregiving safe, simple, and accessible.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex justify-center md:justify-start gap-4 pt-2"
        >
          <Link
            href="#services"
            className="btn btn-sm md:btn-lg border-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          >
            Explore Services
          </Link>

          <Link
            href="/register"
            className="btn btn-sm md:btn-lg border bg-transparent border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
