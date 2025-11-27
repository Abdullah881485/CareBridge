import AboutUs from "@/components/About/About";
import Achievements from "@/components/Achievements/Achievements";
import Banner from "@/components/Banner/Banner";
import WhyChooseUs from "@/components/choseUs/ChoseUs";
import Testimonials from "@/components/Reviews/Reviews";

export default function Home() {
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
