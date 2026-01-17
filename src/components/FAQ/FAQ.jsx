"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What types of bikes are available on BikeMart?",
    answer:
      "BikeMart offers a wide range of bikes including commuter bikes, sports bikes, mountain bikes, and premium models suitable for different riding needs.",
  },
  {
    question: "Do I need an account to browse bikes?",
    answer:
      "No, you can freely browse all available bikes and view details without creating an account.",
  },
  {
    question: "How can I add a bike to the platform?",
    answer:
      "To add a bike, you must be logged in. Once logged in, go to the Add Bike page and fill in the required details.",
  },
  {
    question: "Is BikeMart a real store or a demo project?",
    answer:
      "BikeMart is a demo project built for learning purposes using Next.js and Express.js.",
  },
  {
    question: "Are the prices shown on BikeMart final?",
    answer:
      "Prices displayed are for demonstration only and may not represent real market prices.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section data-aos="fade-up" className="py-16 bg-white">
      <div className="w-9/10 md:w-8/10 mx-auto px-4">
   
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked <span className="text-blue-600">Question</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Find answers to common questions about BikeMart.
          </p>
        </div>

      
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="border border-gray-200 rounded-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition"
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
