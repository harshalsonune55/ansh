import React, { useEffect, useState } from "react";
import ShaadiNavbar from "../../Navbar/navbar";
import Footer from "../../footer/footer";
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react"; // ✅ Icons

export default function ProfileCards() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("https://shadi-back-p2xz.onrender.com/api/profiles")
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((err) => console.error(err));
  }, []);

  const handleLike = (id) => {
    console.log("Liked:", id);
    // TODO: Call API to save like
  };

  const handleDislike = (id) => {
    console.log("Disliked:", id);
    // TODO: Call API to save dislike
  };

  return (
    <>
      <ShaadiNavbar />
      <div className="bg-gray-50 py-10 px-4 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-10 text-pink-600">
          Matched Profiles
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {profiles.map((profile) => (
            <div
              key={profile._id}
              className="flex items-center bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 p-4"
            >
              {/* Left: Image */}
              <img
                src={profile.image}
                alt={profile.name}
                className="w-32 h-32 object-cover rounded-xl"
              />

              {/* Middle: Profile details */}
              <div className="ml-6 flex-1">
                <h3 className="text-xl font-semibold text-gray-800">
                  {profile.name}
                </h3>
                <p className="text-gray-600">Age: {profile.age}</p>
                <p className="text-gray-600">Gender: {profile.gender}</p>
                <p className="text-gray-600">City: {profile.city}</p>

                <Link to={`/toprofile/${profile._id}`}>
                  <button className="mt-4 bg-pink-600 text-white py-2 px-6 rounded-xl hover:bg-pink-700 transition">
                    View Profile
                  </button>
                </Link>
              </div>

              {/* Right: Like / Dislike buttons */}
              <div className="flex flex-col gap-3 ml-4">
                <button
                  onClick={() => handleLike(profile._id)}
                  className="p-2 bg-green-100 hover:bg-green-200 rounded-full"
                >
                  <Check className="text-green-600 w-6 h-6" />
                </button>
                <button
                  onClick={() => handleDislike(profile._id)}
                  className="p-2 bg-red-100 hover:bg-red-200 rounded-full"
                >
                  <X className="text-red-600 w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
