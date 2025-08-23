import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ShaadiNavbar from "../../Navbar/navbar";
import Footer from "../../footer/footer";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const password = watch("password");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://shadi-back-p2xz.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Signup successful!");
        reset();
      } else {
        const errorText = await response.text();
        toast.error(`Signup failed: ${errorText}`);
      }
    } catch (err) {
      toast.error("Error during signup");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ShaadiNavbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-rose-600">
            Register on Shaadi.com
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Full Name"
              className="w-full border px-3 py-2 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <div className="flex gap-4">
              <label>
                <input type="radio" value="male" {...register("gender", { required: true })} />
                Male
              </label>
              <label>
                <input type="radio" value="female" {...register("gender", { required: true })} />
                Female
              </label>
            </div>
            {errors.gender && <p className="text-red-500 text-sm">Gender is required</p>}

            <input
              type="number"
              {...register("age", { required: true, min: 18 })}
              placeholder="Age"
              className="w-full border px-3 py-2 rounded"
            />
            {errors.age && <p className="text-red-500 text-sm">Valid age required (18+)</p>}

            <input
              type="text"
              {...register("city", { required: true })}
              placeholder="City"
              className="w-full border px-3 py-2 rounded"
            />

            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
              placeholder="Email"
              className="w-full border px-3 py-2 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">Enter a valid email</p>}

            <input
              type="tel"
              {...register("mobile", {
                required: true,
                pattern: /^\d{10}$/,
              })}
              placeholder="Mobile Number"
              className="w-full border px-3 py-2 rounded"
            />
            {errors.mobile && <p className="text-red-500 text-sm">Enter a 10-digit mobile number</p>}


            <input
              type="text"
              {...register("image")}
              placeholder="Profile Image URL"
              className="w-full border px-3 py-2 rounded"
            />





            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Password"
              className="w-full border px-3 py-2 rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">Minimum 6 characters</p>}

            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === password || "Passwords do not match",
              })}
              placeholder="Confirm Password"
              className="w-full border px-3 py-2 rounded"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 rounded text-white transition ${
                isSubmitting
                  ? "bg-rose-300 cursor-not-allowed"
                  : "bg-rose-500 hover:bg-rose-600"
              }`}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationForm;
