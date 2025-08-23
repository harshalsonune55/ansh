import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('https://img2.shaadi.com/assests/2025/images/homepage/marathi_mobile_bg.jpeg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center gap-2">
          Find your forever <span className="text-rose-500">❤️</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">Discover a world beyond matrimony</p>
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md">
          Find Your Match
        </button>
      </div>

      {/* Bottom Info Strip */}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-sm flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 px-4 py-2 md:px-10">
        <span>#1 Matchmaking Service</span>
        <span className="flex items-center gap-1">
          ⭐⭐⭐⭐⭐ Ratings on Playstore by 2.4 lakh users
        </span>
        <span>80 Lakh Success Stories</span>
      </div>
    </div>
  );
};

export default HeroSection;
