"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  priority = false,
}) {
  // Quiet ease curve: cubic-bezier(0.25, 0.1, 0.25, 1)
  const transition = {
    duration: 0.9,
    ease: [0.25, 0.1, 0.25, 1],
    delay,
  };

  if (priority) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        margin: "-10%",
      }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
