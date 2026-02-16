"use client";
import AboutUs from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import WhyChooseUs from "@/components/choseUs/ChoseUs";
import CTA from "@/components/CTA/CTA";
import ServicesSection from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
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
      <ServicesSection></ServicesSection>
      <AboutUs />
      <WhyChooseUs />
      <Testimonials />
      <CTA></CTA>
    </div>
  );
}
