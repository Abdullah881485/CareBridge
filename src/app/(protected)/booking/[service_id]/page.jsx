"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Loader from "@/components/Loader/Loader";
import useAuth from "@/Hooks/useAuth";
import useAxios from "@/Hooks/useAxios";

export default function BookingPage() {
  // const router = useRouter();
  const { serviceId } = useParams();
  console.log(serviceId);

  // const { user } = useAuth(); // logged-in user
  // const axiosInstance = useAxios();
  // const [service, setService] = useState(null);
  // const [duration, setDuration] = useState(1);
  // const [division, setDivision] = useState("");
  // const [district, setDistrict] = useState("");
  // const [city, setCity] = useState("");
  // const [area, setArea] = useState("");
  // const [totalCost, setTotalCost] = useState(0);
  // const [loading, setLoading] = useState(false);

  const services = [
    {
      id: "baby",
      name: "Baby Care",
      rate: 500,
      description: "Reliable baby care at home",
      image: "/babyCare.webp",
    },
    {
      id: "elderly",
      name: "Elderly Service",
      rate: 600,
      description: "Elderly care and companionship",
      image: "/babyCare.webp",
    },
    {
      id: "sick",
      name: "Sick People Service",
      rate: 700,
      description: "Home care for sick patients",
      image: "/babyCare.webp",
    },
  ];

  // useEffect(() => {
  //   if (!user) {
  //     Swal.fire({
  //       icon: "warning",
  //       title: "Login Required",
  //       text: "You must log in to book a service.",
  //       confirmButtonText: "Ok",
  //     }).then(() => {
  //       router.push("/login");
  //     });
  //   }
  // }, [user, router]);

  // // Load selected service
  // useEffect(() => {
  //   if (serviceId) {
  //     const selected = services.find((s) => s.id === serviceId);
  //     if (!selected) {
  //       Swal.fire("Error", "Service not found!", "error").then(() =>
  //         router.push("/"),
  //       );
  //     } else {
  //       setService(selected);
  //       setTotalCost(duration * selected.rate);
  //     }
  //   }
  // }, [serviceId, duration, router]);

  // // Update total cost dynamically
  // useEffect(() => {
  //   if (service) setTotalCost(duration * service.rate);
  // }, [duration, service]);

  // const handleBooking = async () => {
  //   if (!division || !district || !city || !area) {
  //     Swal.fire("Error", "Please fill all location fields!", "error");
  //     return;
  //   }

  //   setLoading(true);

  //   const bookingData = {
  //     userId: user.id,
  //     serviceId: service.id,
  //     serviceName: service.name,
  //     duration,
  //     location: { division, district, city, area },
  //     totalCost,
  //     status: "Pending",
  //   };

  //   try {
  //     // Save booking (localStorage fallback if backend not ready)
  //     // Replace with backend API if available:
  //     // await axiosInstance.post("/bookings", bookingData);

  //     let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  //     bookings.push(bookingData);
  //     localStorage.setItem("bookings", JSON.stringify(bookings));

  //     Swal.fire(
  //       "Success",
  //       "Booking confirmed! Status: Pending",
  //       "success",
  //     ).then(() => {
  //       router.push("/my-bookings");
  //     });
  //   } catch (error) {
  //     console.error("Error creating booking:", error);
  //     Swal.fire("Error", "Failed to create booking.", "error");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // if (!service) return <Loader />;

  return (
    // <div className="booking-page">
    //   <h1>Book Service: {service.name}</h1>
    //   <img src={service.image} alt={service.name} width="300" />
    //   <p>{service.description}</p>
    //   <p>Rate: {service.rate} BDT/hour</p>

    //   <label>
    //     Duration (hours):
    //     <input
    //       type="number"
    //       min="1"
    //       value={duration}
    //       onChange={(e) => setDuration(parseInt(e.target.value))}
    //     />
    //   </label>

    //   <label>
    //     Division:
    //     <select value={division} onChange={(e) => setDivision(e.target.value)}>
    //       <option value="">Select Division</option>
    //       <option value="Dhaka">Dhaka</option>
    //       <option value="Chattogram">Chattogram</option>
    //       <option value="Khulna">Khulna</option>
    //     </select>
    //   </label>

    //   <label>
    //     District:
    //     <input value={district} onChange={(e) => setDistrict(e.target.value)} />
    //   </label>

    //   <label>
    //     City:
    //     <input value={city} onChange={(e) => setCity(e.target.value)} />
    //   </label>

    //   <label>
    //     Area / Address:
    //     <input value={area} onChange={(e) => setArea(e.target.value)} />
    //   </label>

    //   <p>Total Cost: {totalCost} BDT</p>

    //   <button onClick={handleBooking} disabled={loading}>
    //     {loading ? "Booking..." : "Confirm Booking"}
    //   </button>
    // </div>
    <div className="text-center py-20">
      {serviceId && (
        <p className="text-blue-600 font-semibold">
          Selected Service ID: {serviceId}
        </p>
      )}
      <h2 className="text-2xl font-bold">Booking Page</h2>
      <p className="text-gray-600 mt-4">
        This is a placeholder for the booking page. Booking functionality will
        be implemented soon.
      </p>
    </div>
  );
}
