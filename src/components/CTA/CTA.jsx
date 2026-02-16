import useAuth from "@/Hooks/useAuth";
import Link from "next/link";

export default function CTA() {
  const { user } = useAuth();

  return (
    <section className="py-20 bg-linear-to-r from-gray-900 to-gray-800 text-white">
      <div className="w-9/10 md:w-8/10 mx-auto px-4 text-center">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Book Trusted Care Services?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-blue-100 max-w-2xl mx-auto mb-8"
        >
          Find verified caregivers for baby sitting, elderly care, and special
          home assistance — all in one secure platform.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex justify-center gap-4 flex-wrap"
        >
          <Link
            href="#services"
            className="btn btn-sm md:btn-lg bg-white text-blue-700 font-semibold hover:bg-gray-100 transition"
          >
            Explore Services
          </Link>

          {!user?.email && (
            <Link
              href="/register"
              className="btn btn-sm md:btn-lg border border-white text-white hover:bg-white hover:text-blue-700 transition"
            >
              Create Account
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
