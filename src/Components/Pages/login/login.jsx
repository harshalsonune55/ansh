import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; 
import ShaadiNavbar from "../../Navbar/navbar";
import Footer from "../../footer/footer";


const LoginPage = () => {
  const navigate = useNavigate(); 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://shadi-back-p2xz.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include" ,
        body: JSON.stringify({
          email: data.email,   // or username: data.email if backend expects that
          password: data.password,
        }),
      });
  
      if (response.ok) {
        const result = await response.json();
  
        toast.success("Login successful!");
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(result.user));
  
        reset();
        navigate("/people");
      } else {
        const errorText = await response.text();
        toast.error(`Login failed: ${errorText}`);
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ShaadiNavbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center text-rose-600 mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <div>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Email"
                className="w-full px-3 py-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Password"
                className="w-full px-3 py-2 border rounded"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 text-white rounded transition ${
                isSubmitting
                  ? "bg-rose-300 cursor-not-allowed"
                  : "bg-rose-500 hover:bg-rose-600"
              }`}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
