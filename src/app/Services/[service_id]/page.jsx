"use client";

import useAuth from "@/Hooks/useAuth";
import { useParams, useRouter } from "next/navigation";

export default function ServiceDetails() {
  const { service_id } = useParams();
  const { user } = useAuth();
  const router = useRouter();
  const services = {
    baby: {
      title: "Baby Care",
      desc: "Professional baby care service ensuring safety, hygiene, emotional bonding, and healthy development in a secure home environment.",
      image: "https://i.ibb.co.com/m5zpxT46/Pediatrics1.jpg",
      details: `
Our Baby Care service is designed to provide complete support for infants and toddlers in a safe, nurturing, and structured environment. 
Our trained caregivers are experienced in handling newborns, infants, and young children with patience and compassion.

We assist with feeding schedules, diaper changing, bathing, sleep routines, and hygiene maintenance. 
Beyond basic care, we focus on early childhood development by engaging babies in interactive play, storytelling, and learning-based activities 
that promote cognitive and emotional growth.

Parents can feel confident knowing that our caregivers maintain a safe atmosphere, monitor health conditions, 
and follow customized instructions based on the child’s specific needs. 
Whether you require part-time assistance or full-time support, our Baby Care service ensures peace of mind 
while your child receives professional, loving care.
`,
    },

    elderly: {
      title: "Elderly Service",
      desc: "Compassionate and respectful support for senior family members to ensure comfort, dignity, and improved quality of life.",
      image: "https://i.ibb.co.com/d0fVK4DJ/R.jpg",
      details: `
Our Elderly Care service provides dependable assistance for senior citizens who require daily support, companionship, 
and medical supervision at home. We understand the importance of maintaining dignity, independence, and emotional well-being 
for elderly individuals.

Our caregivers assist with daily living activities such as bathing, dressing, meal preparation, medication reminders, 
light exercise, and mobility support. In addition, we offer emotional companionship to reduce loneliness and improve 
mental health through friendly conversations and engagement.

We closely monitor health conditions and report any concerns to family members promptly. 
Whether your loved one needs short-term recovery care or long-term assistance, 
our Elderly Service ensures they receive respectful, attentive, and professional support in the comfort of their own home.
`,
    },

    sick: {
      title: "Sick People Service",
      desc: "Professional home-based care for patients recovering from illness, surgery, or long-term medical conditions.",
      image: "https://i.ibb.co.com/xt686Xm3/OIP.webp",
      details: `
Our Sick People Service is tailored for individuals recovering from illness, surgery, or managing chronic health conditions. 
We provide structured and attentive home-based care that supports faster recovery and improved comfort.

Our caregivers assist with medication management, hygiene support, wound care monitoring, mobility assistance, 
and regular health observation. We work carefully to follow medical instructions and ensure that recovery plans 
are implemented effectively.

Beyond physical care, we provide emotional encouragement and mental support to help patients stay positive during recovery. 
Families can rely on our trained professionals to deliver responsible, compassionate, and consistent care 
that prioritizes safety and well-being.

This service is ideal for short-term recovery needs as well as long-term medical supervision at home.
`,
    },
  };

  const service = services[service_id];

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
      </div>
    );
  }

  const handleBooking = () => {
    if (user?.email) {
      router.push("/booking");
    } else {
      router.push("/login");
    }
  };

  return (
    <section className="py-24 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-96 object-cover"
        />

        <div className="p-10">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>

          <p className="text-gray-600 mb-6">{service.desc}</p>

          <p className="text-gray-700 leading-relaxed mb-8">
            {service.details}
          </p>

          <button
            onClick={handleBooking}
            className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition cursor-pointer"
          >
            Book Service
          </button>
        </div>
      </div>
    </section>
  );
}
