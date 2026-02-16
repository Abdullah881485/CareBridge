import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] text-gray-700 pt-14 pb-8 px-6">
      <div className="w-9/10 md:w-8/10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Care<span className="text-[#3863da]">Bridge</span>{" "}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Your trusted marketplace for premium care services. Explore,
            compare, and book with confidence.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-blue-600 transition">Branding</a>
            </li>
            <li>
              <a className="hover:text-blue-600 transition">Design</a>
            </li>
            <li>
              <a className="hover:text-blue-600 transition">Marketing</a>
            </li>
            <li>
              <a className="hover:text-blue-600 transition">Advertisement</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-blue-600 transition">About Us</a>
            </li>
            <li>
              <a className="hover:text-blue-600 transition">Contact</a>
            </li>
            <li>
              <a className="hover:text-blue-600 transition">Jobs</a>
            </li>
            <li>
              <a className="hover:text-blue-600 transition">Press Kit</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-black hover:text-blue-600 transition transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-800 hover:text-blue-900 transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 text-center text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} CareBridge. All rights reserved.
      </div>
    </footer>
  );
}
