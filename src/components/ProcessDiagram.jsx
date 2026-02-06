"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProcessDiagram() {
  return (
    <section className="py-20 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Diagram */}
        <div className="relative">
          {/* Background Typography */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10">
            <span className="text-[6rem] sm:text-[10rem] md:text-[16rem] lg:text-[20rem] font-bold text-black whitespace-nowrap leading-none">
              Next Connect
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center relative z-10">
            {/* Left Phone */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:flex justify-center translate-y-10"
            >
              <div className="relative h-[380px] w-[240px] rounded-[2.5rem] border-2 border-black shadow-2xl rotate-[-5deg] overflow-hidden bg-white">
                <Image
                  src="/mobileImage1.jpeg"
                  alt="Mobile UI"
                  fill
                  className="object-cover"
                  sizes="240px"
                  priority
                />
              </div>
            </motion.div>

            {/* Center Phone */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <h3 className="text-2xl sm:text-3xl font-serif text-center mb-8">
                Mobile First
                <br />
                Approach
              </h3>

              <div className="relative h-[460px] w-[260px] sm:h-[500px] sm:w-[280px] rounded-[3rem] border-4 border-black shadow-2xl overflow-hidden bg-white">
                <Image
                  src="/mobileImage2.jpeg"
                  alt="App Screen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 260px, 280px"
                  priority
                />

                {/* Speaker notch */}
                <div className="w-16 h-1 bg-black/30 rounded-full absolute top-4 left-1/2 -translate-x-1/2 z-10" />
              </div>
            </motion.div>

            {/* Right Phone */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:flex justify-center translate-y-10"
            >
              <div className="relative h-[380px] w-[240px] rounded-[2.5rem] border-2 border-black shadow-2xl rotate-[5deg] overflow-hidden bg-white">
                <Image
                  src="/mobileImage3.jpeg"
                  alt="App Preview"
                  fill
                  className="object-cover"
                  sizes="240px"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24 sm:mt-32 relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black -translate-x-1/2 hidden md:block" />

          {[1, 2, 3].map((step, index) => (
            <div
              key={step}
              className={`flex flex-col md:flex-row items-center justify-between mb-16 sm:mb-24 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-[45%] text-center md:text-right"
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0
                      ? "md:items-end"
                      : "md:items-start md:text-left"
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl font-serif mb-2">
                    Get Started And
                    <br />
                    Follow
                  </h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Write something here and then ask me back. This section
                    explains how the process flows step by step.
                  </p>
                </div>
              </motion.div>

              {/* Timeline Dot */}
              <div className="w-[10%] hidden md:flex justify-center relative z-10">
                <div className="w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg" />
              </div>

              {/* Spacer */}
              <div className="w-full md:w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
