// section/portofolio.tsx
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
    <section id="portofolio" className="relative py-28 px-6 bg-black text-white overflow-hidden">
      {/* Container ditingkatkan ke max-w-7xl agar sejajar dengan section lain */}
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Dibuat rata kiri di desktop agar presisi dengan judul Education/About */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-16"
        >
          <span className="text-2xl font-bold text-blue-500">Portfolio</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto md:mx-0">
            Selected works that showcase my skills and learning.
          </p>
        </motion.div>

        {/* Grid Project - Tetap di bawah header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-4xl" 
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card 
                className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-[2rem] overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] hover:border-blue-500/50"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    src={project.imageUrl}
                    radius="none"
                  />
                </div>

                <CardBody className="p-6 sm:p-8">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
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
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-black text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                      {project.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base line-clamp-3 group-hover:text-zinc-300 transition-colors">
                    {project.description}
                  </p>
                </CardBody>

                <CardFooter className="px-6 sm:px-8 pb-8 pt-0">
                  <Button
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    className="w-full bg-white text-black font-bold text-sm rounded-xl h-12 flex items-center justify-center gap-2 hover:bg-zinc-200"
                  >
                    <GithubIcon size={18} />
                    View Source Code
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