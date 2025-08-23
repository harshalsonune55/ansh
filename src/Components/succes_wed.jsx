import React, { useState } from "react";

const couples = [
  {
    name: "Shreyashree & Sukdev",
    image: "https://img2.shaadi.com/assests/2025/images/homepage/shaadi_reviews/shreyashree_sukdev.jpg", // Replace with actual path
    description:
      "Swipe, match, chat—our bond on Shaadi.com was instant. From shared values to laughter and dreams, we just clicked. After meeting, we knew it wa...",
  },
  {
    name: "Piyas & Anindita",
    image: "https://img2.shaadi.com/assests/2025/images/homepage/shaadi_reviews/shreyashree_sukdev.jpg", // Replace with actual path
    description:
      "Thanks to Shaadi.com, my life has truly settled. Grateful to have found my partner through this platform.",
  },
  {
    name: "Amit & Sneha",
    image: "https://img2.shaadi.com/assests/2025/images/homepage/shaadi_reviews/shreyashree_sukdev.jpg",
    description:
      "We matched during the lockdown and our conversations never stopped. Now we're engaged and planning a beautiful future together.",
  },
];

export default function RealStoriesCarousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? couples.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === couples.length - 1 ? 0 : prev + 1));
  };

  const visibleCouples = [couples[index], couples[(index + 1) % couples.length]];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Text Left */}
        <div className="md:col-span-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Stories, True Connections
          </h2>
          <p className="text-gray-600 mb-6">
            Discover how Shaadi has brought together couples through meaningful
            connections and shared journeys. Your success story could be next!
          </p>
          <button className="bg-teal-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-teal-600 transition-all">
            Know more →
          </button>
        </div>

        {/* Carousel Right */}
        <div className="md:col-span-2 relative">
          <div className="grid sm:grid-cols-2 gap-6">
            {visibleCouples.map((couple, i) => (
              <div
                key={i}
                className="bg-white border rounded-2xl overflow-hidden shadow-sm"
              >
                <img
                  src={couple.image}
                  alt={couple.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{couple.name}</h3>
                  <p className="text-sm text-gray-700 mt-2">{couple.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-end items-center mt-4 gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100"
            >
              →
            </button>
          </div>

          {/* Progress bar mimic */}
          <div className="h-1 bg-red-300 mt-6 rounded-full relative overflow-hidden">
            <div
              className="h-1 bg-red-500 transition-all duration-500"
              style={{
                width: `${((index % couples.length) + 1) * (100 / couples.length)}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
