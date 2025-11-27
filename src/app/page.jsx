"use client";
import AboutUs from "@/components/About/About";
import Achievements from "@/components/Achievements/Achievements";
import Banner from "@/components/Banner/Banner";
import WhyChooseUs from "@/components/choseUs/ChoseUs";
import Testimonials from "@/components/Reviews/Reviews";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <div className="">
      <Banner></Banner>
      <AboutUs />
      <WhyChooseUs />
      <Achievements />
      <Testimonials />
    </div>
  );
}
