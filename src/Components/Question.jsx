import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Why is Shaadi.com better compared to other matrimonial websites?",
    answer:
      "Shaadi.com stands out as India’s leading matchmaking platform with over 80 Lakh success stories, a testament to its trust and effectiveness. Unlike traditional matrimonial sites, Shaadi.com offers verified profiles, personalized matchmaking services, and advanced search tools that help users find compatible partners with ease and confidence. Its focus on safety, authenticity, and meaningful connections makes it a preferred choice for millions.",
  },
  {
    question: "Is Shaadi.com a trustworthy matchmaking platform?",
    answer:
      "Absolutely. With a 20+ year legacy, millions of users, and rigorous profile verification processes, Shaadi.com is one of the most trusted platforms for finding life partners in India and abroad.",
  },
  {
    question: "What is the difference between free membership vs paid membership?",
    answer:
      "Free membership lets you browse profiles and express interest. Paid members get access to contact details, premium support, and higher visibility on the platform.",
  },
  {
    question: "What additional benefits do I get as a Premium Member?",
    answer:
      "Premium members enjoy priority matchmaking, advanced search filters, direct contact access, and a personal relationship manager (on some plans).",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl p-4 transition-all ${
                openIndex === index ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-700 w-8">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-lg text-gray-900">
                    {faq.question}
                  </span>
                </div>
                <div className="text-gray-500">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>

              {/* Animate answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 text-gray-700 text-sm border-t pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
