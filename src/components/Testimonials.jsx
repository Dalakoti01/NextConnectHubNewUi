"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Albert Flores",
    role: "Founder of GearUp",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    role: "Co-Founder of Womenia",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Courtney Henry",
    role: "Founder of CH Beauty",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-4"
          >
            Over 1000+ people trust us
          </motion.h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            The Psychologist has been an invaluable resource for everyone.
            Here&apos;s what our customers says about us.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-5 sm:p-6 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg">
                      {item.name}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {item.role}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play size={16} className="text-white fill-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="aspect-[9/16] rounded-3xl bg-black p-6 sm:p-8 flex flex-col justify-between cursor-pointer group hover:bg-gray-900 transition-colors"
          >
            <h3 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
              See all <br />
              reviews <br />
              by our <br />
              clients
            </h3>

            <div className="flex justify-end">
              <ArrowRight className="text-white w-10 h-10 sm:w-12 sm:h-12 transform group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
