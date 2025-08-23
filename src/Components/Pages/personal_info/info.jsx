


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ShaadiNavbar from "../../Navbar/navbar";
// import Footer from "../../footer/footer";

// export default function UserInfo() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isEditing, setIsEditing] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     city: "",
//     mobile: "",
//     description: "",
//     hobbies: "",
//     image: ""
//   });

//   useEffect(() => {
//     fetch("http://localhost:8080/me", {
//       method: "GET",
//       credentials: "include",
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Not logged in");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setUser(data);
//         setFormData({
//           name: data.name || "",
//           email: data.email || "",
//           age: data.age || "",
//           gender: data.gender || "",
//           city: data.city || "",
//           mobile: data.mobile || "",
//           description: data.description || "",
//           hobbies: data.hobbies || "",
//           image: data.image || ""
//         });
//       })
//       .catch((err) => {
//         console.error(err);
//         navigate("/login");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:8080/updateProfile", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify(formData),
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to update profile");
//         return res.json();
//       })
//       .then((updatedUser) => {
//         setUser(updatedUser);
//         setIsEditing(false);
//       })
//       .catch((err) => console.error(err));
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen text-xl">
//         Loading user data...
//       </div>
//     );
//   }

//   return (
//     <>
//       <ShaadiNavbar />
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//         <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
//           {!isEditing ? (
//             <>
//               <h2 className="text-2xl font-bold mb-4 text-center text-rose-600">
//                 User Profile
//               </h2>
//               {formData.image && (
//                 <img
//                   src={formData.image}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
//                 />
//               )}
//               <div className="text-gray-700 space-y-2">
//                 <p><span className="font-semibold">Full Name:</span> {user.name}</p>
//                 <p><span className="font-semibold">Email:</span> {user.email}</p>
//                 <p><span className="font-semibold">Age:</span> {user.age}</p>
//                 <p><span className="font-semibold">Gender:</span> {user.gender}</p>
//                 <p><span className="font-semibold">City:</span> {user.city}</p>
//                 <p><span className="font-semibold">Mobile:</span> {user.mobile}</p>
//                 <p><span className="font-semibold">Description:</span> {user.description}</p>
//                 <p><span className="font-semibold">Hobbies:</span> {user.hobbies}</p>
//               </div>
//               <button
//                 onClick={() => setIsEditing(true)}
//                 className="mt-4 w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600"
//               >
//                 Edit Info
//               </button>
//             </>
//           ) : (
//             <>
//               <h2 className="text-2xl font-bold mb-4 text-center text-rose-600">
//                 Edit Profile
//               </h2>
//               <form onSubmit={handleSave} className="space-y-3">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Full Name"
//                   className="border p-2 w-full rounded"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="border p-2 w-full rounded"
//                 />
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   placeholder="Age"
//                   className="border p-2 w-full rounded"
//                 />
//                 <input
//                   type="text"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   placeholder="Gender"
//                   className="border p-2 w-full rounded"
//                 />
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   placeholder="City"
//                   className="border p-2 w-full rounded"
//                 />
//                 <input
//                   type="text"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   placeholder="Mobile"
//                   className="border p-2 w-full rounded"
//                 />
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   placeholder="Write your description..."
//                   className="border p-2 w-full rounded"
//                 ></textarea>
//                 <textarea
//                   name="hobbies"
//                   value={formData.hobbies}
//                   onChange={handleChange}
//                   placeholder="Your hobbies..."
//                   className="border p-2 w-full rounded"
//                 ></textarea>
//                 <input
//                   type="text"
//                   name="image"
//                   value={formData.image}
//                   onChange={handleChange}
//                   placeholder="Image URL"
//                   className="border p-2 w-full rounded"
//                 />
//                 <div className="flex gap-2">
//                   <button
//                     type="submit"
//                     className="w-1/2 bg-green-500 text-white py-2 rounded hover:bg-green-600"
//                   >
//                     Save
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setIsEditing(false)}
//                     className="w-1/2 bg-gray-400 text-white py-2 rounded hover:bg-gray-500"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShaadiNavbar from "../../Navbar/navbar";
import Footer from "../../footer/footer";

export default function UserInfo() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    city: "",
    mobile: "",
    description: "",
    hobbies: "",
    image: "",
    photos: []
  });

  useEffect(() => {
    fetch("https://shadi-back-p2xz.onrender.com/me", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not logged in");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setFormData({
          name: data.name || "",
          email: data.email || "",
          age: data.age || "",
          gender: data.gender || "",
          city: data.city || "",
          mobile: data.mobile || "",
          description: data.description || "",
          hobbies: data.hobbies ? data.hobbies.join(", ") : "",
          image: data.image || "",
          photos: data.photos || []
        });
      })
      .catch((err) => {
        console.error(err);
        navigate("/login");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "photos") {
      // Split by comma into array
      setFormData((prev) => ({
        ...prev,
        photos: value
          .split(",")
          .map((link) => link.trim())
          .filter((link) => link !== "")
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    const updatedData = {
      ...formData,
      hobbies: formData.hobbies
        .split(",")
        .map((hobby) => hobby.trim())
        .filter((hobby) => hobby !== ""),
      photos: formData.photos // Already array from handleChange
    };

    fetch("https://shadi-back-p2xz.onrender.com/updateProfile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update profile");
        return res.json();
      })
      .then((updatedUser) => {
        setUser(updatedUser);
        setIsEditing(false);
      })
      .catch((err) => console.error(err));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading user data...
      </div>
    );
  }

  return (
    <>
      <ShaadiNavbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          {!isEditing ? (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center text-rose-600">
                User Profile
              </h2>
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
              )}
              <div className="text-gray-700 space-y-2">
                <p><span className="font-semibold">Full Name:</span> {user.name}</p>
                <p><span className="font-semibold">Email:</span> {user.email}</p>
                <p><span className="font-semibold">Age:</span> {user.age}</p>
                <p><span className="font-semibold">Gender:</span> {user.gender}</p>
                <p><span className="font-semibold">City:</span> {user.city}</p>
                <p><span className="font-semibold">Mobile:</span> {user.mobile}</p>
                <p><span className="font-semibold">Description:</span> {user.description}</p>
                <p><span className="font-semibold">Hobbies:</span> {user.hobbies?.join(", ")}</p>
                {user.photos?.length > 0 && (
                  <div>
                    <span className="font-semibold">Photos:</span>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {user.photos.map((photo, i) => (
                        <img
                          key={i}
                          src={photo}
                          alt={`User Photo ${i + 1}`}
                          className="w-full h-20 object-cover rounded"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600"
              >
                Edit Info
              </button>

            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center text-rose-600">
                Edit Profile
              </h2>
              <form onSubmit={handleSave} className="space-y-3">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="border p-2 w-full rounded" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full rounded" />
                <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="border p-2 w-full rounded" />
                <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" className="border p-2 w-full rounded" />
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="border p-2 w-full rounded" />
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" className="border p-2 w-full rounded" />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Write your description..." className="border p-2 w-full rounded"></textarea>
                <input type="text" name="hobbies" value={formData.hobbies} onChange={handleChange} placeholder="Hobbies (comma separated)" className="border p-2 w-full rounded" />
                <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Profile Image URL" className="border p-2 w-full rounded" />
                <input type="text" name="photos" value={formData.photos.join(", ")} onChange={handleChange} placeholder="Photo URLs (comma separated)" className="border p-2 w-full rounded" />
                <div className="flex gap-2">
                  <button type="submit" className="w-1/2 bg-green-500 text-white py-2 rounded hover:bg-green-600">Save</button>
                  <button type="button" onClick={() => setIsEditing(false)} className="w-1/2 bg-gray-400 text-white py-2 rounded hover:bg-gray-500">Cancel</button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}


