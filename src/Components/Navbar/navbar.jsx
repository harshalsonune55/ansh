import { a } from "framer-motion/client";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ShaadiNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLogout = async () => {
    try {
      await fetch("https://shadi-back-p2xz.onrender.com/logout", {
        method: "GET",
        credentials: "include",
      });

      localStorage.removeItem("isAuthenticated");
      setIsAuthenticated(false);
      setIsOpen(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <Link to="/people">
      <div className="flex items-center text-3xl font-bold text-rose-500 relative">
        shaadi
        <span className="text-cyan-400 text-xs align-top ml-1 relative">
          .com
          <span className="absolute -top-2 -right-3 text-rose-500 text-[10px]">❤️</span>
        </span>
      </div>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6 relative" ref={dropdownRef}>
        <a href="#" className="text-gray-700 font-medium text-sm hover:text-rose-500">About us</a>
        <a href="#" className="text-gray-700 font-medium text-sm hover:text-rose-500">Help</a>
        {isAuthenticated && (
  <Link to="/people" className="text-gray-700 font-medium text-sm hover:text-rose-500">
    People
  </Link>
)}
        

        {/* Auth Dropdown */}
        <button
          onClick={toggleDropdown}
          className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
        >
          {isAuthenticated ? "Account" : "Login"} <span className="text-xs ml-1">▾</span>
        </button>

        {isOpen && (
          <div className="absolute right-0 top-14 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            {isAuthenticated ? (<>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
              <Link
                              to="/profile"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setIsOpen(false)}
                            >
                              <i class="fa-solid fa-user"></i> Profile
              </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default ShaadiNavbar;
