"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
    
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center items-center w-10 h-10 rounded-lg shadow-sm"
        aria-label="Toggle Menu"
      >
        <span
          className={`h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-gray-800 my-1 transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      
      {open && (
        <div
          data-aos="fade-down"
          className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <ul className="flex flex-col divide-y">
            <li>
              <Link
                href="/"
                className="block px-5 py-3 hover:bg-gray-50 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/bikes"
                className="block px-5 py-3 hover:bg-gray-50 transition"
              >
                Bikes
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="block px-5 py-3 hover:bg-gray-50 transition"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="block px-5 py-3 hover:bg-gray-50 transition text-blue-600 font-semibold"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
