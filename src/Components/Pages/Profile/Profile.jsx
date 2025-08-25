import React, { useEffect, useState } from "react";
import ShaadiNavbar from "../../Navbar/navbar";
import Footer from "../../footer/footer";
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";

export default function ProfileCards() {
  const [profiles, setProfiles] = useState([]);
  const [liked, setLiked] = useState([]);
  const [disliked, setDisliked] = useState([]);

  // filters
  const [statusFilter, setStatusFilter] = useState("all"); // all | liked | disliked
  const [casteFilter, setCasteFilter] = useState(""); // empty = no filter
  const [hobbyFilter, setHobbyFilter] = useState(""); // empty = no filter

  useEffect(() => {
    fetch("https://shadi-back-p2xz.onrender.com/api/profiles")
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((err) => console.error(err));
  }, []);

  const handleLike = (id) => {
    if (!liked.includes(id)) {
      setLiked([...liked, id]);
      setDisliked(disliked.filter((d) => d !== id));
    }
  };

  const handleDislike = (id) => {
    if (!disliked.includes(id)) {
      setDisliked([...disliked, id]);
      setLiked(liked.filter((l) => l !== id));
    }
  };

  // filter profiles
  const filteredProfiles = profiles.filter((profile) => {
    // status filter
    if (statusFilter === "liked" && !liked.includes(profile._id)) return false;
    if (statusFilter === "disliked" && !disliked.includes(profile._id)) return false;

    // caste filter
    if (casteFilter && profile.caste !== casteFilter) return false;

    // hobby filter (assuming profile.hobbies is an array)
    if (hobbyFilter && !profile.hobbies?.includes(hobbyFilter)) return false;

    return true;
  });

  // extract unique caste & hobbies for dropdown
  const casteOptions = [...new Set(profiles.map((p) => p.caste))];
  const hobbyOptions = [...new Set(profiles.flatMap((p) => p.hobbies || []))];

  return (
    <>
      <ShaadiNavbar />
      <div className="bg-gray-50 py-10 px-4 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">
          Matched Profiles
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All</option>
            <option value="liked">Liked</option>
            <option value="disliked">Disliked</option>
          </select>

          {/* Caste filter */}
          <select
            value={casteFilter}
            onChange={(e) => setCasteFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">All Castes</option>
            {casteOptions.map((caste) => (
              <option key={caste} value={caste}>
                {caste}
              </option>
            ))}
          </select>

          {/* Hobby filter */}
          <select
            value={hobbyFilter}
            onChange={(e) => setHobbyFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">All Hobbies</option>
            {hobbyOptions.map((hobby) => (
              <option key={hobby} value={hobby}>
                {hobby}
              </option>
            ))}
          </select>
        </div>

        {/* Profiles */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredProfiles.length === 0 ? (
            <p className="text-center text-gray-600">No profiles found.</p>
          ) : (
            filteredProfiles.map((profile) => (
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
                  <p className="text-gray-600">Caste: {profile.caste}</p>
                  <p className="text-gray-600">
                    Hobbies: {profile.hobbies?.join(", ")}
                  </p>

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
                    className={`p-2 rounded-full ${
                      liked.includes(profile._id)
                        ? "bg-green-500"
                        : "bg-green-100 hover:bg-green-200"
                    }`}
                  >
                    <Check className="text-green-600 w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleDislike(profile._id)}
                    className={`p-2 rounded-full ${
                      disliked.includes(profile._id)
                        ? "bg-red-500"
                        : "bg-red-100 hover:bg-red-200"
                    }`}
                  >
                    <X className="text-red-600 w-6 h-6" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
