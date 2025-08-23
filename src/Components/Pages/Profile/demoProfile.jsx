import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShaadiNavbar from "../../Navbar/navbar";
import Footer from "../../footer/footer";
import ProfileHobbies from "./component/hobbies";
import ChatRoom from "../../chatRoom/chat";

export default function ProfileCardp() {
  const [profiles, setProfiles] = useState([]);
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://shadi-back-p2xz.onrender.com/api/users") 
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((err) => console.error("Error fetching profiles:", err));
  }, []);


  const profile = profiles.find((p) => p._id === id);

  if (!profile) {
    return (
      <div className="text-center mt-20 text-red-500">
        Profile not found
      </div>
    );
  }

  const tabs = [
    "Overview",
    `${profile.name}'s Availability`,
    "Chat",
    "Experiences",
    "Reviews (15)",,
  ];

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % profile.photos.length);

  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + profile.photos.length) % profile.photos.length
    );

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <>
            <h3 className="font-bold">About Me:</h3>
            <p className="text-gray-600 mt-1">{profile.description}</p>

            <h3 className="font-bold mt-4">Basic Info:</h3>
            <p className="text-gray-600 mt-1">
              <strong>Age:</strong> {profile.age} <br />
              <strong>Gender:</strong> {profile.gender} <br />
              <strong>City:</strong> {profile.city}
            </p>
          </>
        );
      case "Chat":
        return(<ChatRoom/>);
      default:
        return <p className="text-gray-600">Content coming soon...</p>;
    }
  };

  return (
    <>
      <ShaadiNavbar />
      <div
        className="min-h-screen bg-gray-100 p-6 flex justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1500x800?text=Banner+Background')`,
        }}
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
            />
            <h2 className="text-xl font-bold mt-4">{profile.name}</h2>
            <p className="text-gray-500 text-center">{profile.city}</p>
            <button className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-700">
              Book {profile.name.split(" ")[0]}
            </button>
            <h2 className="text-lg font-bold mt-4 text-gray-500">Hobbies</h2>
            <br />
            <ProfileHobbies hobbies={profile.hobbies || []} />
          </div>

          {/* Middle Section */}
          <div className="bg-white p-6 rounded-2xl shadow-md md:col-span-2">
            {/* Image Slider */}
            <div className="relative w-full overflow-hidden rounded-lg mb-4">
              {profile.photos && profile.photos.length > 0 && (
                <>
                  <img
                    src={profile.photos[currentIndex]}
                    alt="slider"
                    className="w-full h-100 object-cover"
                  />
                  <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-pink-600 text-white px-3 py-1 rounded-full"
                  >
                    ❮
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-pink-600 text-white px-3 py-1 rounded-full"
                  >
                    ❯
                  </button>
                </>
              )}
            </div>

            {/* Tabs */}
            <nav className="flex gap-6 border-b pb-3 text-gray-600 font-medium">
              {tabs.map((tab) => (
                <span
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer pb-2 ${
                    activeTab === tab
                      ? "text-pink-600 border-b-2 border-pink-600"
                      : "hover:text-pink-500"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </nav>

            {/* Tab Content */}
            <div className="mt-4">{renderContent()}</div>

          </div>

          {/* Right Section */}
          <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold mb-2">Availability This Month</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { date: "8 Feb", slots: "3 Timeslots" },
                { date: "13 Feb", slots: "1 Timeslot", highlight: true },
                { date: "17 Feb", slots: "3 Timeslots" },
              ].map((day, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border text-center ${
                    day.highlight
                      ? "bg-pink-100 border-pink-400"
                      : "bg-gray-50"
                  }`}
                >
                  <p className="font-semibold">{day.date}</p>
                  <p className="text-gray-500 text-sm">{day.slots}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
