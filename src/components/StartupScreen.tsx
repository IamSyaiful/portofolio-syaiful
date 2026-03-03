"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function StartupScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1.3, opacity: 0.35 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-[350px] h-[350px] bg-blue-500 rounded-full blur-[120px]"
      />
    </motion.div>
  );
}