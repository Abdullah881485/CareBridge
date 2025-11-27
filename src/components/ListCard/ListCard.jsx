"use client";
import useAxios from "@/Hooks/useAxios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function ListCard({ bike, bikes, setBikes }) {
  const axiosInstance = useAxios();
  const router = useRouter();
  const handleDelete = (bike_Id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/products/${bike_Id}`).then((data) => {
          // console.log(data);
          if (data.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your transaction has been deleted.",
              icon: "success",
            });

            const remaining = bikes.filter((card) => card._id !== bike_Id);
            setBikes(remaining);
          }
        });
      }
    });
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col sm:flex-col md:flex-row justify-between items-start hover:shadow-lg transition gap-4 w-full"
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center w-full md:w-2/3">
        <img
          src={bike.image}
          alt={bike.bikeTitle}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-16 md:h-16 object-cover rounded flex-shrink-0"
        />
        <div className="flex flex-col gap-1 w-full">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold">
            {bike.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-base line-clamp-2">
            {bike.short_description}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 items-start sm:items-center w-full sm:w-auto">
        <span className="font-bold text-blue-500 text-base sm:text-lg md:text-xl">
          ${bike.price}
        </span>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button
            className="w-full sm:w-auto px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
            onClick={() => router.push(`/products/${bike._id}`)}
          >
            View
          </button>
          <button
            className="w-full sm:w-auto px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition cursor-pointer"
            onClick={() => handleDelete(bike._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
