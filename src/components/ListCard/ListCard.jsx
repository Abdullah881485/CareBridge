"use client";

import { useRouter } from "next/navigation";
import { Eye, Trash2, MapPin, Clock } from "lucide-react";

export default function ListCard({ booking }) {
  const router = useRouter();

  return (
    <div className="group relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl px-3 py-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className=" space-y-2">
          <h2 className="text-lg font-semibold text-gray-800 tracking-tight">
            {booking?.name}
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin size={16} />
              <span>{booking?.location}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock size={16} />
              <span>{booking?.duration} Hours</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium shadow-md">
            ${booking?.totalCost}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => router.push(`/Services/${booking.id}`)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm font-medium"
            >
              <Eye size={16} />
              View
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 text-sm font-medium">
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-blue-200 transition duration-300 pointer-events-none"></div>
    </div>
  );
}
