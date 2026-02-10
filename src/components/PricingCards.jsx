"use client";

import { motion } from "framer-motion";
import { Check, IndianRupee } from "lucide-react";

const plans = [
  {
    name: "Basic Package",
    price: "15000",
    description: "For small teams or startups that need basic web presence",
    features: [
      "Up to 10 pages",
      "Responsive Design",
      "3 months free maintenance",
      "Database up to 512MB",
      "Basic SEO setup",
      "Priority support",
      
    ],
    isDark: false,
  },
  {
    name: "Standard Package",
    price: "45000",
    description: "For big teams or companies that need advanced features",
    features: [
      "Up to 30 pages",
      "Responsive Design",
      "3 months free maintenance",
      "Free domain for 1 year",
      "Free Database up to 512MB",
      "24/7 Priority support",
      "Advanced analytics",
      "API access",
      "Payment gateway integration",
      "Advanced SEO setup",
    ],
    isDark: true,
  },
  {
    name: "Custom",
    price: "Custom",
    description:
      "Let us tailor a custom solution that perfectly aligns with your needs",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Advanced security",
      "Custom training",
      "White-label options",
      "Enterprise support",
    ],
    isDark: false,
  },
];

export default function PricingCards() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Pricing Plans
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Choose the perfect plan for your business needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-[2rem] p-6 sm:p-8 flex flex-col ${
                plan.isDark
                  ? "bg-black text-white shadow-2xl md:scale-105 md:z-10"
                  : "bg-white text-black shadow-lg"
              }`}
            >
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-bold mb-4">
                  {plan.name}
                </h3>

                <div className="flex items-baseline mb-4">
                  {plan.price !== "Custom" && (
                    <span className="text-xl font-bold mr-1"><IndianRupee/ ></span>
                  )}
                  <span className="text-4xl sm:text-5xl font-bold">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span
                      className={`ml-2 text-sm ${
                        plan.isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      / month
                    </span>
                  )}
                </div>

                <p
                  className={`text-sm ${
                    plan.isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-4 rounded-full font-bold mb-8 transition-transform hover:scale-105 ${
                  plan.isDark
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {plan.price === "Custom" ? "Contact us" : "Get Started"}
              </button>

              {/* Features */}
              <ul className="space-y-4 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check
                      size={18}
                      className={`mr-3 mt-0.5 flex-shrink-0 ${
                        plan.isDark ? "text-white" : "text-black"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer note */}
              <div className="mt-8 pt-8 border-t border-gray-200/20">
                <p
                  className={`text-xs ${
                    plan.isDark ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Billed annually or  
                  <IndianRupee size={14} className="inline mr-1" />{plan.price === "Custom"
                    ? "Call"
                    : parseInt(plan.price) + 10}{" "}
                  month-to-month
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
