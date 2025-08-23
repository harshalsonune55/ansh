import React from "react";

export default function ShaadiExperience() {
  const features = [
    {
      icon: "💸",
      title: "30 Day Money Back Guarantee",
      description:
        "Get matched with someone special within 30 days, or we’ll refund your money—guaranteed!",
    },
    {
      icon: "✅",
      title: "Blue Tick to find your Green Flag",
      description:
        "Did you know our blue-tick profiles get 40% more connection requests than others?",
    },
    {
      icon: "🤖",
      title: "Matchmaking Powered by AI",
      description:
        'Cutting-edge technology with two decades of matchmaking expertise to help you find "the one".',
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          The Shaadi Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 shadow hover:shadow-md transition-all"
            >
              <div className="bg-blue-100 w-14 h-14 mx-auto flex items-center justify-center rounded-xl text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* VIP Section */}
      <div className="bg-purple-100 rounded-2xl mt-16 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <div className="text-purple-700 font-bold text-xl md:text-3xl">
            VIPSHAADI.com
          </div>
          <div className="text-xs text-gray-600">NO.1 MATCHMAKING SERVICE FOR ELITES</div>
        </div>
        <div className="text-center md:text-left flex-grow">
          <p className="text-lg font-semibold">
            Experience the world of elite personalised matchmaking by Shaadi.com
          </p>
        </div>
        <button className="mt-4 md:mt-0 bg-purple-800 text-white px-6 py-2 rounded-full font-semibold">
          Free Consultation
        </button>
      </div>
    </section>
  );
}
