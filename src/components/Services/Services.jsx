"use client";

import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";

export default function ServicesOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      id: "baby",
      title: "Baby Care",
      desc: "Professional and loving caregivers ensuring safety, hygiene, and comfort for your baby.",
      image: "https://i.ibb.co.com/m5zpxT46/Pediatrics1.jpg",
    },
    {
      id: "elderly",
      title: "Elderly Service",
      desc: "Compassionate assistance and daily support for elderly family members.",
      image: "https://i.ibb.co.com/d0fVK4DJ/R.jpg",
    },
    {
      id: "sick",
      title: "Sick People Service",
      desc: "Dedicated home care and monitoring services for patients recovering at home.",
      image: "https://i.ibb.co.com/xt686Xm3/OIP.webp",
    },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Services <span className="text-blue-600">Overview</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted care solutions designed to support your loved ones with
            professionalism and compassion.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="bg-white rounded-2xl overflow-hidden shadow-md  transition-all duration-500 group"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <Link
                  href={`/Services/${service.id}`}
                  className="text-blue-600 font-semibold hover:text-black/80 cursor-pointer"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
