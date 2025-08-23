import React from "react";

const ProfileHobbies = ({ hobbies }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {hobbies.map((hobby, index) => (
        <span
          key={index}
          className="px-4 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700 shadow-sm hover:bg-gray-100 transition"
        >
          {hobby}
        </span>
      ))}
    </div>
  );
};

export default ProfileHobbies;