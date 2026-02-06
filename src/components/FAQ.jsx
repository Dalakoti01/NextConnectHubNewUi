"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";

const faqs = [
  {
    question: "What services do you offer in web development?",
    answer:
      "We provide end-to-end web development services including custom websites, scalable web applications, Next.js and MERN stack development, WordPress solutions, API integrations, and AI-powered features designed for performance and long-term growth.",
  },
  {
    question: "Which technologies do you specialize in?",
    answer:
      "Our core expertise includes Next.js, React, Node.js, MongoDB, WordPress, Tailwind CSS, REST & GraphQL APIs, cloud deployments, and AI/ML integrations, ensuring modern, fast, and secure applications.",
  },
  {
    question: "Do you build SEO-friendly websites?",
    answer:
      "Yes. All our websites are built with SEO best practices such as clean code, fast loading speed, mobile responsiveness, structured data, and optimized metadata to help improve search engine rankings.",
  },
  {
    question: "Can you integrate AI features into existing websites or apps?",
    answer:
      "Absolutely. We integrate AI chatbots, smart search, automation tools, recommendation systems, and third-party AI APIs into both new and existing websites without disrupting current functionality.",
  },
  {
    question: "Do you offer custom AI chatbot development?",
    answer:
      "Yes. We design custom AI chatbots tailored to your business needs, including customer support bots, lead generation bots, booking assistants, and internal workflow automation.",
  },
  {
    question: "Why should I choose Next.js or MERN stack for my project?",
    answer:
      "Next.js offers high performance, SEO advantages, and server-side rendering, while the MERN stack provides flexibility and scalability for complex applications. We help you choose the right stack based on your business goals.",
  },
  {
    question : "Do you provide website maintenance and ongoing support?",
    answer :
      "Yes, we offer comprehensive maintenance packages including regular updates, security monitoring, performance optimization, backups, and technical support to ensure your website or app runs smoothly.",
  }
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const router = useRouter()


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

          <button onClick={() => router.push("/contactUs")} className="px-8 py-3 bg-white cursor-pointer border border-gray-200 rounded-full font-semibold text-black hover:bg-black hover:text-white transition-all duration-300 shadow-sm">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
