import React from "react";

export default function FounderQuote() {
  return (
    <section className="relative bg-gradient-to-br from-[#fce8f0] to-[#fdf6f8] py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="relative z-10">
          <div className="text-6xl text-gray-300 mb-4">“</div>
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed">
            At Shaadi.com, it is our life’s mission to use technology for good
            and bring back deep and meaningful relationships.
          </p>
          <p className="mt-6 text-gray-700 font-medium">
            – Anupam Mittal, Founder & CEO
          </p>
        </div>

        {/* Image Section */}
        <div className="relative z-10">
          <img
            src={"https://founders-journey.org/wp-content/uploads/2019/07/dinesh-web-brick-wall-e1564421013333.jpeg"}
            alt="Anupam Mittal"
            className="w-full max-w-md mx-auto md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
