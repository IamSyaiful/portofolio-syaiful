"use client";

import { projects } from "@/data/portofolio";
import { motion, Variants } from "framer-motion";
import { Card, CardBody, CardFooter, Image, Chip, Button } from "@heroui/react";
import { GithubIcon } from "lucide-react";

export default function Portfolio() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="portofolio" className="py-24 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-5xl mx-auto"> {/* Mengecilkan max-width container utama */}
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-blue-500">
              <code className="font-bold text-xl">{"</>"}</code>
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
          </div>
          <p className="text-zinc-400 text-base">
            Selected works that showcase my skills and learning.
          </p>
        </motion.div>

        {/* Grid Project - Menggunakan 2 kolom yang lebih rapat */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10" 
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card 
                className="w-full bg-zinc-950 border border-zinc-800/50 rounded-[2rem] overflow-hidden group shadow-none"
              >
                {/* Image Section - Rasio disesuaikan agar tidak terlalu tinggi */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    src={project.imageUrl}
                    radius="none"
                  />
                </div>

                <CardBody className="p-6"> {/* Padding dikurangi dari 8 ke 6 */}
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        variant="flat"
                        size="sm" // Ukuran chip diperkecil
                        className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase"
                      >
                        {tech}
                      </Chip>
                    ))}
                  </div>

                  {/* Title & Date */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-blue-500 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-medium text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded-full uppercase tracking-tighter border border-zinc-800">
                      {project.date}
                    </span>
                  </div>

                  {/* Description - Ukuran font dikecilkan agar lebih clean */}
                  <p className="text-zinc-400 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>
                </CardBody>

                <CardFooter className="px-6 pb-6 pt-0">
                  <Button
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    className="w-full bg-white text-black font-bold text-sm rounded-xl h-11 flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
                  >
                    <GithubIcon size={18} />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}