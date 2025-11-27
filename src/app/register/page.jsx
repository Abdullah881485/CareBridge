"use client";

import Loader from "@/components/Loader/Loader";
import useAuth from "@/Hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function page() {
  const { createUser, signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const _user = result.user;
        // console.log(user);
        Swal.fire({
          title: "",
          text: "You Registered Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
        router.push("/");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        const _user = result.user;
        // console.log(user);
        Swal.fire({
          title: "",
          text: "You registered Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
        router.push("/");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="flex justify-center my-20">
      <div className="card bg-base-100 w-9/10 max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-center py-2 text-2xl font-semibold">
          Register to Bike<span className="text-[#3863da]">Mart</span>{" "}
        </h1>
        <div className="card-body">
          <form className="fieldset" onSubmit={handleRegister}>
            <label className="label text-[17px]">Username</label>
            <input
              type="text"
              className="input focus:outline-none focus:border-blue-500"
              placeholder="Username"
              name="name"
            />
            <label className="label text-[17px]">Email</label>
            <input
              type="email"
              className="input focus:outline-none focus:border-blue-500"
              placeholder="Email"
              name="email"
            />
            <label className="label text-[17px]">Password</label>
            <input
              type="password"
              className="input focus:outline-none focus:border-blue-500"
              placeholder="Password"
              name="password"
            />

            <button className="btn text-white mt-4 border-0 bg-[#1D4ED8] hover:shadow-indigo-500 hover:shadow-lg">
              Register
            </button>
            <p className="text-center text-lg font-semibold">Or</p>
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Register with Google
            </button>

            <p className="mt-4 text-center text-sm font-semibold">
              Already have an account?{" "}
              <Link className="text-[#1D4ED8] hover:underline" href="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
