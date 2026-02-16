import Image from "next/image";

export default function AboutUs() {
  return (
    <section data-aos="fade-up" className="my-20 w-9/10 md:w-8/10 mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[260px] md:h-[380px] relative">
          <Image
            src="/aboutImage.avif"
            alt="About CareBridge"
            fill
            className="object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-blue-600">CareBridge</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            CareBridge is a trusted caregiving platform dedicated to connecting
            families with reliable and compassionate caregivers. We provide
            professional baby sitting, elderly care, and special home care
            services tailored to your needs.
          </p>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Our mission is simple — to make caregiving easy, secure, and
            accessible for everyone by ensuring safety, trust, and quality
            service at every step.
          </p>
        </div>
      </div>
    </section>
  );
}
