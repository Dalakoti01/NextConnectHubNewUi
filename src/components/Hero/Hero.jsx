"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F5F5F5]">
      {/* Background decorative circles */}
      {[1200, 1000, 800, 600, 400].map((size) => (
        <div
          key={size}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-300 opacity-60 pointer-events-none"
          style={{ width: size, height: size }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-black tracking-tight mb-6"
          >
            Welcome <br className="hidden md:block" />
            <span className="relative inline-block">
              To NCH
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-teal-600 opacity-30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium"
          >
            The ultimate Website Development Agency
          </motion.p>
        </div>

        {/* Phone Section */}
        <div className="relative max-w-lg mx-auto">
          {/* Floating badges (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-10 -left-20 bg-white p-4 rounded-xl shadow-lg z-20 hidden md:block"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-black rounded-full" />
              <span className="font-bold text-lg leading-tight">
                Mobile <br /> FIRST
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-20 -right-20 bg-white p-4 rounded-xl shadow-lg z-20 hidden md:block"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-black rounded-full" />
              <span className="font-bold text-lg leading-tight">
                Mobile <br /> FIRST
              </span>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[12px] sm:border-[14px] rounded-[2.5rem] h-[520px] sm:h-[600px] w-[260px] sm:w-[300px] shadow-xl">
              {/* Side buttons */}
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[16px] top-[72px] rounded-l-lg" />
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[16px] top-[124px] rounded-l-lg" />
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[16px] top-[178px] rounded-l-lg" />
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[16px] top-[142px] rounded-r-lg" />

              {/* Screen */}
              <div className="relative rounded-[2rem] overflow-hidden w-[236px] sm:w-[272px] h-[496px] sm:h-[572px] bg-white">
  <Image
    src="/heroMobile.png"
    alt="Mobile App Interface"
    fill
    className="object-cover"
    sizes="(max-width: 640px) 236px, 272px"
    priority
  />
</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
