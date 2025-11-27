"use client";
import Loader from "@/components/Loader/Loader";
import useAuth from "@/Hooks/useAuth";
import useAxios from "@/Hooks/useAxios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function page() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxios();

  const handleAddBike = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const title = form.bikeTitle.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const image = form.image.value;
    const price = form.price.value;
    const email = form.email.value;

    const newBike = {
      title,
      short_description,
      long_description,
      image,
      price,
      email,
    };
    axiosInstance
      .post("/products", newBike)
      .then((data) => {
        // console.log(data.data);
        if (data.data) {
          Swal.fire({
            title: "",
            text: "Your Bike added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          setLoading(false);
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error adding bike:", error);
        setLoading(false);
      });

    // console.log({ type, category, amount, description, date, email, name });
  };
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="my-10">
      <form
        onSubmit={handleAddBike}
        className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800">Add Bike</h2>

        <input
          type="email"
          name="email"
          value={user?.email || ""}
          readOnly
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 "
        />

        <input
          type="text"
          name="bikeTitle"
          placeholder="Bike Title"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 "
          required
        />

        <input
          type="text"
          name="short_description"
          placeholder="Short Description"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 "
          required
        />

        <textarea
          name="long_description"
          placeholder="Long Description"
          rows={4}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 "
          required
        />

        <input
          type="url"
          name="image"
          placeholder="Image URL"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 "
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#1D4ED8] text-white py-2 px-4 rounded hover:shadow-[#5175d8] shadow-md cursor-pointer transition"
        >
          Add Bike
        </button>
      </form>
    </div>
  );
}
