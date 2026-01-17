"use client";
import Card from "@/components/Card/Card";
import Loader from "@/components/Loader/Loader";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Page() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  const term = search.trim().toLowerCase();

  const handleSearch = (e) => {
    setLoading(true);
    setSearch(e.target.value);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const searchBikeData =
    term.length > 0
      ? bikes.filter((bike) => bike.title.toLowerCase().includes(term))
      : bikes;

  const sortedData = [...searchBikeData].sort((a, b) => {
    if (sortOption === "low") return a.price - b.price;
    if (sortOption === "high") return b.price - a.price;
    return 0;
  });

  useEffect(() => {
    setLoading(true);
    fetch("https://bikemart-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setBikes(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="py-10 w-8/10 mx-auto">
      <div className="flex flex-col gap-2 justify-center my-5 text-center">
        <h1 className="text-2xl  font-semibold">All Bikes Collection</h1>
        <p className="text-gray-500">
          Discover our full collection of bikes, designed for speed, comfort,
          and everyday performance.
        </p>
      </div>

      <div className="flex items-center justify-between flex-col md:flex-row gap-4">
        <label className="input flex items-center gap-2 w-full md:w-auto">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            className="focus:outline-none"
            placeholder="Search Bikes..."
          />
        </label>

        <select
          className="select select-bordered w-full md:w-[200px] focus:outline-none"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {loading ? (
          <div className="col-span-4 flex justify-center items-center">
            <Loader />
          </div>
        ) : sortedData.length > 0 ? (
          sortedData.map((bike) => <Card bike={bike} key={bike._id} />)
        ) : (
          <div className="flex flex-col items-center gap-5 col-span-4">
            <img
              className="w-1/5"
              src="https://i.ibb.co.com/6RbLL5XD/error-icon-24.png"
              alt="error-icon"
            />
            <h1 className="text-3xl font-bold">OPPS!! Bike NOT FOUND</h1>
            <p className="text-gray-500">
              The bike you searched for is not available. Try another search.
            </p>
            <Link
              className="btn text-white bg-blue-500 hover:bg-blue-600 border-0"
              href="/"
            >
              Back Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
