import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
 // For custom styling if needed

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 border-b">
        {/* Columns */}
        <div>
          <h4 className="font-semibold mb-3">Need Help?</h4>
          <ul className="space-y-2">
            <li>Member Login</li>
            <li>Sign Up</li>
            <li>Partner Search</li>
            <li>How to Use Shaadi.com</li>
            <li>Premium Memberships</li>
            <li>Customer Support</li>
            <li>Site Map</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Shaadi Blog</li>
            <li>Careers</li>
            <li>Awards & Recognition</li>
            <li>Cov-Aid</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Privacy & You</h4>
          <ul className="space-y-2">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Be Safe Online</li>
            <li>Report Misuse</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">More</h4>
          <ul className="space-y-2">
            <li>VIP Shaadi</li>
            <li>Select Shaadi</li>
            <li>Sangam</li>
            <li>Shaadi Centres</li>
            <li>Success Stories</li>
            <li>Shaadi Live</li>
            <li>Elite Matrimony by Shaadi.com</li>
            <li>Astrochat.com</li>
            <li>Chat with Astrologers</li>
          </ul>
        </div>

        {/* Social & App Store */}
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-3">Find us on:</h4>
            <div className="flex gap-3">
              <FaFacebookF className="text-gray-600 hover:text-blue-600" />
              <FaInstagram className="text-gray-600 hover:text-pink-500" />
              <FaLinkedinIn className="text-gray-600 hover:text-blue-500" />
              <FaXTwitter className="text-gray-600 hover:text-black" />
              <FaYoutube className="text-gray-600 hover:text-red-600" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-900 text-white text-center py-4 text-xs">
        <p>
          ©2025 Shaadi.com, The World's Leading Matchmaking Service™
          <span className="ml-2">created by slotgroup➤</span>
        </p>
      </div>
    </footer>
  );
}
