"use client";
import ListCard from "@/components/ListCard/ListCard";
import Loader from "@/components/Loader/Loader";
import React, { useEffect, useState } from "react";

export default function page() {
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/booking")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBookings(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="py-20">
      {bookings.length === 0 ? (
        <p className="text-gray-600">You have no bookings yet.</p>
      ) : (
        <div className="flex flex-col gap-5 w-8/10 mx-auto">
          {" "}
          {bookings.map((booking) => (
            <ListCard
              key={booking._id}
              booking={booking}
              bookings={bookings}
              setBookings={setBookings}
            ></ListCard>
          ))}{" "}
        </div>
      )}
    </div>
  );
}
