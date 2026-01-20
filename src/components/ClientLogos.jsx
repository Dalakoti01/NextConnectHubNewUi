"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "REALMS", logo: "REALMS" },
  { name: "NETFLIX", logo: "NETFLIX" },
  { name: "SONY", logo: "SONY" },
  { name: "INK GAMES", logo: "INK GAMES" },
  { name: "CURVE", logo: "CURVE" },
  { name: "Discord", logo: "Discord" },
  { name: "Google", logo: "Google" },
  { name: "AUTODESK", logo: "AUTODESK" },
  { name: "Sketchfab", logo: "Sketchfab" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Trusted By
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center items-center p-4"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 hover:text-black transition-colors">
                {client.logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
