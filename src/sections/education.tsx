"use client";

import { educationData } from "@/data/education";
import { motion, Variants } from "framer-motion";

export default function EducationSection() {
  // Konfigurasi animasi untuk container (pembungkus list)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Memberikan jeda muncul antar kartu
      },
    },
  };

  // Konfigurasi animasi untuk setiap kartu
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" // Sekarang TypeScript tidak akan protes
      },
    },
  };

  return (
    // Background utama hitam pekat
    <section className="w-full bg-black py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section dengan Animasi */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          {/* Garis dekoratif biru agar terlihat modern di background hitam */}
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* List Kartu Pendidikan */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-6"
        >
          {educationData.map((edu) => (
            <motion.a
              key={edu.id}
              variants={itemVariants}
              href={edu.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              // Card: Hitam transparan dengan border halus agar terlihat premium
              className="group block bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 shadow-2xl hover:bg-zinc-900 hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
                
                {/* Sisi Kiri: Logo & Info Instansi */}
                <div className="flex items-center gap-6 flex-1 w-full">
                  {/* Wrapper Putih untuk Logo agar kontras dengan background hitam */}
                  <div className="bg-white p-2.5 rounded-2xl shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={edu.imageUrl}
                      alt={`Logo ${edu.institution}`}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-md sm:text-lg font-medium text-zinc-400 mt-1">
                      {edu.major}
                    </p>
                  </div>
                </div>

                {/* Sisi Kanan: Badge Periode Tahun */}
                {/* Dibuat Putih-Hitam agar kontras tinggi dan mudah dibaca */}
                <div className="flex-shrink-0 self-end sm:self-start">
                  <span className="text-xs sm:text-sm font-bold bg-white text-black px-5 py-2 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.1)] uppercase tracking-wider">
                    {edu.period}
                  </span>
                </div>

              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}