"use client";

import { motion } from "framer-motion";

export default function AnimatedGlow() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      
      {/* Glow 1 */}
      <motion.div
        animate={{
          x: [0, 200, -150, 0],
          y: [0, -150, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500 opacity-30 rounded-full blur-[160px]"
      />

      {/* Glow 2 */}
      <motion.div
        animate={{
          x: [0, -250, 200, 0],
          y: [0, 200, -150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-500 opacity-25 rounded-full blur-[180px]"
      />

      {/* Glow 3 (lebih halus) */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -100, 150, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-pink-500 opacity-15 rounded-full blur-[200px]"
      />
    </div>
  );
}