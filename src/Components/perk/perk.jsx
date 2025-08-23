import React, { useState } from "react";
import "./perk.css";

const sections = [
  {
    title: "Explore Matrimonial Profiles By",
    tabs: ["Community", "Country", "Marital Status", "Religion", "City", "State", "Mother Tongue"],
    content: {
      "Marital Status": [
        "Widow Matrimony",
        "Divorcee matrimony",
        "Second Marriage Matrimony",
      ],
    },
  },
  {
    title: "Dating",
    tabs: ["Country", "City Wise", "Country Singles", "City Singles"],
    content: {
      Country: [
        "Dating in Australia",
        "Dating in Canada",
        "Dating in UK",
        "Dating in USA",
        "Dating in India",
      ],
    },
  },
  {
    title: "Horoscope",
    tabs: [],
    content: {
      default: [
        "Kundali Matching",
        "Tamil Kundali Matching",
        "Telugu Kundali Matching",
        "Malayalam Kundali Matching",
        "Marathi Kundali Matching",
        "Gujarati Kundali Matching",
        "Kannada Kundali Matching",
      ],
    },
  },
];

const communityLinks = [
  "Marathi Shaadi", "Assamese Shaadi", "Bengali Shaadi", "Buddhist Shaadi", "Christian Shaadi",
  "Hindi Shaadi", "Gujarati Shaadi", "Jain Shaadi", "Kannada Shaadi", "Kashmiri Shaadi",
  "Konkani Shaadi", "Malayalee Shaadi", "Marwari Shaadi", "Muslim Shaadi", "NRI Shaadi",
  "Punjabi Shaadi", "Tamil Shaadi", "Telugu Shaadi",
];

export default function ExploreTabs() {
  const [activeTab, setActiveTab] = useState({
    0: "Marital Status",
    1: "Country",
    2: "default",
  });

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-10">


        {/* Tabbed Sections */}
        {sections.map((section, secIndex) => (
          <div key={secIndex} className="rounded-xl p-6 bg-white shadow-sm space-y-4">
            <h2 className="text-2xl font-semibold">{section.title}</h2>

            {/* Tabs */}
            {section.tabs.length > 0 && (
              <div className="flex flex-wrap gap-4 font-medium border-b pb-2">
                {section.tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() =>
                      setActiveTab((prev) => ({ ...prev, [secIndex]: tab }))
                    }
                    className={`pb-2 border-b-2 transition-all ${
                      activeTab[secIndex] === tab
                        ? "border-black text-black font-bold"
                        : "border-transparent text-gray-500"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3 text-sm text-blue-800 underline">
              {(section.content[activeTab[secIndex]] ||
                section.content.default ||
                []).map((link, idx) => (
                <a href="#" key={idx} className="hover:text-blue-600">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
                {/* Community Matrimony Section */}
                <div className="rounded-2xl p-6 bg-white shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold">Community Matrimony Services</h2>
          <div className="flex flex-wrap gap-2 text-sm text-blue-800 underline">
            {communityLinks.map((link, index) => (
              <a key={index} href="#" className="hover:text-blue-600">
                {link}
                {index !== communityLinks.length - 1 && <span className="text-gray-400 mx-1">|</span>}
              </a>
            ))}
          </div>
        </div>
                {/* About Section */}
                <div className="rounded-2xl p-6 bg-white shadow-sm text-gray-700 leading-7 space-y-4 text-sm sm:text-base">
          <p>
            Shaadi.com, one of India’s most trusted names in the matchmaking space, is redefining how individuals find their life partners. As part of India’s leading matchmaking beyond matrimony service, Shaadi.com was founded with a clear mission — to help people find lasting happiness through meaningful connections.
          </p>
          <p>
            A true pioneer in the evolving matchmaking category, Shaadi.com has enabled over 80 lakh success stories and continues to be a trusted platform across communities worldwide. It is more than just a matrimonial service, blending credibility with the ease and personalization of modern matchmaking.
          </p>
          <p>
            With powerful filters for preferences like city — including Mumbai, Delhi, Bengaluru, Kolkata, Hyderabad, Pune, and Chennai — and community-specific searches such as Gujarati, Tamil, Marathi, and more, Shaadi.com makes discovering compatible matches more efficient and tailored to individual needs.
          </p>
        </div>
      </div>
    </section>
  );
}
