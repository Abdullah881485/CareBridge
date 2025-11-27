"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/Hooks/useAuth";
import Loader from "@/components/Loader/Loader";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return <Loader />;

  return children;
}
