"use client";
import useAuth from "@/Hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";
import Drop from "../Drop/Drop";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const links = (
    <>
      <li className="px-2">
        <Link href="/">Home</Link>
      </li>

      <li className="px-2">
        <Link href="/products">All Products</Link>
      </li>
      <li className="px-2">
        <Link href="/manageProducts">Manage Products</Link>
      </li>
      <li className="px-2">
        <Link href="/addProducts">Add Products</Link>
      </li>
      <li className="px-2">
        <Link href="/contact">Contacts Us</Link>
      </li>
    </>
  );
  const handleLogOut = () => {
    setLoading(true);
    logOut()
      .then(() => {
        console.log("log out successfully");
        Swal.fire({
          title: "",
          text: "You logged out Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
        router.push("/login");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-full md:w-9/10 mx-auto">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Drop></Drop>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content -left-2 bg-white/40 backdrop-blur-md

 rounded-box z-10 mt-3 w-screen font-semibold items-center p-2 shadow gap-2 `}
            >
              {links}
            </ul>
          </div>
          <a className=" font-bold text-xl md:text-2xl">BikeMart</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div>
        <div className="navbar-end flex gap-2 items-center">
          {user?.email ? (
            <div className="flex items-center gap-3">
              <Link
                href="/myProfile"
                title={user && user.displayName}
                className="rounded-full bg-gray-300 cursor-pointer hover:shadow-xl"
              >
                <img
                  className=" w-7 md:w-10 rounded-full"
                  src={`${
                    user
                      ? `${user.photoURL}`
                      : "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                  }`}
                  alt="User Profile"
                />
              </Link>
              <div>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm md:btn-md bg-[#3863da] hover:bg-[#5175d8] border-0 text-white"
                >
                  LogOut
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div>
                <Link
                  href="/login"
                  className="btn btn-sm md:btn-md bg-white hover:shadow-md hover:text-blue-900"
                >
                  Login
                </Link>
              </div>
              <div>
                <Link
                  href="/register"
                  className="btn btn-sm md:btn-md bg-[#1D4ED8] hover:bg-[#5175d8] border-0 text-white"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
