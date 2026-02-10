"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUp, Play, X } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Client",
    poster: "/priyaTestimonials.jpeg",
    youtubeId: "f-gLiwtJ-J0",
  },
  {
    id: 2,
    name: "Kapil Ade",
    role: "Client",
    poster: "/kapilTestimonials.jpeg",
    youtubeId: "p8exHFHU_pc",
  },
  {
    id: 3,
    name: "Shantanu Rao",
    role: "Client",
    poster: "/shantanuTestimonials.jpeg",
    youtubeId: "5QuEegZFJBk",
  },
  {
    id: 4,
    name: "Aviral Sharma",
    role: "Client",
    poster: "/aviralTestimonials.jpeg",
    youtubeId: "YQoxbJLSQC4",
  },
];

const moreTestimonials = [
  "/testimonials5.jpeg",
  "/testimonials6.jpeg",
  "/testimonials7.jpeg",
];

function VideoCard({ item, index, isLast, onExpand }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Poster OR Video */}
      {!isPlaying ? (
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${item.poster})` }}
        />
      ) : (
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[320%] h-[300%] -translate-x-1/2 -translate-y-1/2 scale-110"
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={item.name}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      )}

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      {/* Play / Close */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
        {!isPlaying ? (
          <button
            onClick={() => setIsPlaying(true)}
            className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer"
          >
            <Play size={20} className="text-white fill-white" />
          </button>
        ) : (
          <button
            onClick={() => setIsPlaying(false)}
            className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer"
          >
            <X size={20} className="text-white" />
          </button>
        )}
      </div>

      {/* Expand arrow ONLY on last card */}
      {isLast && (
        <button
          onClick={onExpand}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center cursor-pointer z-30 hover:scale-110 transition"
        >
          <ArrowRight className="text-white w-5 h-5" />
        </button>
      )}

      {/* Name */}
      <div className="absolute bottom-0 left-0 p-5 sm:p-6 w-full pointer-events-none z-10">
        <h3 className="text-white font-bold text-base sm:text-lg">
          {item.name}
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm">{item.role}</p>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [showMore, setShowMore] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

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
            Here&apos;s what our customers say about us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <VideoCard
              key={item.id}
              item={item}
              index={index}
              isLast={index === testimonials.length - 1 && !showMore}
              onExpand={() => setShowMore(true)}
            />
          ))}

          {showMore &&
            moreTestimonials.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setActiveImage(img)}
              >
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </motion.div>
            ))}
        </div>

        {/* Collapse arrow BELOW grid */}
        {showMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowMore(false)}
              className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center cursor-pointer hover:scale-110 transition"
            >
              <ArrowUp size={22} />
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-h-[90vh] max-w-[90vw] rounded-xl"
            />
            <button
              className="absolute top-6 right-6 text-white cursor-pointer"
              onClick={() => setActiveImage(null)}
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
