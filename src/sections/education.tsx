// sections/education.tsx
"use client";

import { educationData } from "@/data/education";
import { Card, CardBody } from "@heroui/react";
import { motion, Variants } from "framer-motion";

export default function EducationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      },
    },
  };

  return (
    <section id="edukasi" className="relative py-28 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* SISI KIRI: Judul Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left md:sticky md:top-28 mb-10 md:mb-0"
        >
          <span className="text-2xl font-bold text-blue-500">Education</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
            Riwayat <br className="hidden md:block" /> Akademik
          </h2>
          
          {/* Garis biru telah dihapus dari sini */}
          
          <p className="mt-6 text-zinc-400 max-w-sm text-lg mx-auto md:mx-0">
            Berikut adalah perjalanan pendidikan formal yang telah saya tempuh hingga saat ini.
          </p>
        </motion.div>

        {/* SISI KANAN: List Kartu Pendidikan */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-6"
        >
          {educationData.map((edu) => (
            <motion.div key={edu.id} variants={itemVariants}>
              <a 
                href={edu.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block outline-none"
              >
                <Card 
                  className="bg-zinc-950/80 border border-zinc-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] group"
                >
                  <CardBody className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
                      
                      <div className="flex items-center gap-6 flex-1 w-full text-left">
                        <div className="bg-white p-3 rounded-2xl shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={edu.imageUrl}
                            alt={`Logo ${edu.institution}`}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                          />
                        </div>

                        <div className="flex flex-col">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {edu.institution}
                          </h3>
                          <p className="text-zinc-400 font-medium mt-1 text-base">
                            {edu.major}
                          </p>
                        </div>
                      </div>

                      <div className="flex-shrink-0 self-end sm:self-start">
                        <span className="text-[10px] sm:text-xs font-black bg-white text-black px-4 py-1.5 rounded-full shadow-xl uppercase tracking-tighter">
                          {edu.period}
                        </span>
                      </div>

                    </div>
                  </CardBody>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}