"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import useAxios from "@/Hooks/useAxios";
import Swal from "sweetalert2";
import Loader from "@/components/Loader/Loader";
import useAuth from "@/Hooks/useAuth";

export default function BookingPage() {
  const { user } = useAuth();
  // console.log(user);

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const axiosInstance = useAxios();
  const serviceId = params.service_id;

  const [duration, setDuration] = useState(1);

  const services = [
    {
      id: "baby",
      name: "Baby Care",
      rate: 500,
      description:
        "Professional baby care with trained caregivers ensuring safety, emotional bonding, and hygiene.",
      image: "https://i.ibb.co.com/m5zpxT46/Pediatrics1.jpg",
    },
    {
      id: "elderly",
      name: "Elderly Service",
      rate: 600,
      description:
        "Compassionate elderly care and companionship support at home.",
      image: "https://i.ibb.co.com/d0fVK4DJ/R.jpg",
    },
    {
      id: "sick",
      name: "Sick People Service",
      rate: 700,
      description: "Home-based medical assistance and recovery support.",
      image: "https://i.ibb.co.com/xt686Xm3/OIP.webp",
    },
  ];
  const service = services.find((s) => s.id === serviceId);
  const handleAddBooking = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const duration = form.duration.value;
    const location = form.location.value;
    const name = service.name;
    const id = service.id;
    const email = user?.email;
    const totalCost = services.find((s) => s.id === serviceId)?.rate * duration;
    console.log(duration, location, totalCost);

    const newBooking = {
      duration,
      location,
      name,
      email,
      id,
      serviceId: serviceId,
      totalCost: totalCost,
    };

    axiosInstance
      .post("/booking", newBooking)
      .then((data) => {
        // console.log(data.data);
        if (data.data) {
          Swal.fire({
            title: "",
            text: "Your Booking added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          setLoading(false);
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error adding booking:", error);
        setLoading(false);
      });

    // console.log({ type, category, amount, description, date, email, name });
  };
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <section className="relative min-h-screen flex items-center py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-8">
          <div className="overflow-hidden rounded-3xl shadow-2xl group">
            <img
              src={service?.image}
              alt="service"
              className="w-full h-96 object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4 leading-tight">
              {service?.name}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {service?.description}
            </p>

            <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-xl font-semibold shadow-lg">
              {service?.rate} BDT / Hour
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40 hover:shadow-blue-200 transition duration-500">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">
              Complete Your Booking
            </h2>
            <p
              onClick={() => router.back()}
              className="text-blue-600 hover:text-blue-800 cursor-pointer mb-10 font-semibold"
            >
              ← Back
            </p>
          </div>

          <div>
            <form className="space-y-7" onSubmit={handleAddBooking}>
              <label className="block mb-2 font-semibold text-gray-700">
                Service Duration
              </label>
              <select
                name="duration"
                defaultValue="1"
                onChange={(e) => setDuration(e.target.value)}
                className="w-full border border-gray-200 rounded-md  px-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                <option value="1">1 Hour</option>
                <option value="2">2 Hours</option>
                <option value="3">3 Hours</option>
              </select>

              <label className="block mb-2 font-semibold text-gray-700">
                Select Location
              </label>
              <select
                name="location"
                defaultValue="Dhaka"
                className="w-full border border-gray-200 rounded-md  px-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Khulna</option>
              </select>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-md  flex justify-between items-center text-lg font-semibold">
                <span>Total Cost</span>
                <span className="text-blue-600 text-xl">
                  {service?.rate * duration} BDT
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-md text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:scale-[1.03] hover:shadow-xl transition duration-300"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
