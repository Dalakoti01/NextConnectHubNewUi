"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Saber's pricing work?",
    answer:
      "Saber's pricing is based on the number of agents, monthly tasks, and feature access. You can start free with the Starter plan, and upgrade anytime as your needs grow.",
  },
  {
    question: "What counts as a 'task'?",
    answer:
      "A task is defined as any single operation performed by our agents, such as responding to a ticket, processing an order, or updating a record.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "What happens if I exceed my monthly task limit?",
    answer:
      "If you exceed your limit, we'll notify you. You can either upgrade your plan or pay for additional tasks at a standard rate.",
  },
  {
    question: "Is there a free trial for Pro or Enterprise plans?",
    answer:
      "Yes, we offer a 14-day free trial for our Pro plan. Contact our sales team for Enterprise trials.",
  },
  {
    question: "Do I need a credit card to get started?",
    answer:
      "No, you can get started with our free tier without a credit card. Payment info is only needed when you upgrade.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-12 sm:mb-16">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-0"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span
                  className={`text-base sm:text-lg font-medium transition-colors ${
                    openIndex === index
                      ? "text-black"
                      : "text-gray-600 group-hover:text-black"
                  }`}
                >
                  {faq.question}
                </span>

                <span
                  className={`ml-4 sm:ml-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="text-teal-600" />
                  ) : (
                    <Plus className="text-gray-400 group-hover:text-black" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 sm:pb-6 text-gray-500 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 bg-gray-50 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
              Still having a question?
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">
              Can't find the answer you're looking for?
            </p>
          </div>

          <button className="px-8 py-3 bg-white border border-gray-200 rounded-full font-semibold text-black hover:bg-black hover:text-white transition-all duration-300 shadow-sm">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
