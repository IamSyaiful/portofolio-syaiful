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
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
          </div>
          <p className="text-zinc-400 text-base">
            Selected works that showcase my skills and learning.
          </p>
        </motion.div>

        {/* Grid Project */}
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
                // Menambahkan animasi melayang (hover:-translate-y-2), glow shadow, dan perubahan border saat di-hover
                className="w-full bg-zinc-950 border border-zinc-800/50 rounded-[2rem] overflow-hidden group shadow-none transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] hover:border-blue-500/50"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    src={project.imageUrl}
                    radius="none"
                  />
                </div>

                <CardBody className="p-6">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        variant="flat"
                        size="sm"
                        className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase"
                      >
                        {tech}
                      </Chip>
                    ))}
                  </div>

                  {/* Title & Date */}
                  <div className="flex justify-between items-start mb-3">
                    {/* Judul dibuat putih, saat di-hover berubah jadi biru */}
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-medium text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded-full uppercase tracking-tighter border border-zinc-800">
                      {project.date}
                    </span>
                  </div>

                  {/* Description - Warna putih */}
                  <p className="text-white leading-relaxed text-sm line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
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