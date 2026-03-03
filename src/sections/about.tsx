// sections/about.tsx
"use client";

import { aboutData } from "@/data/about";
import { Card, CardBody, Tooltip } from "@heroui/react";
import { motion } from "framer-motion";
import { 
  SiVuedotjs, SiReact, SiNextdotjs, SiTailwindcss, SiShadcnui, 
  SiLaravel, SiCodeigniter, SiLivewire, SiPhp, SiMysql, 
  SiMariadb, SiJavascript, SiPython 
} from "react-icons/si";

const getIcon = (id: string) => {
  const iconSize = 24;
  switch (id) {
    case "vue": return <SiVuedotjs size={iconSize} className="text-[#4FC08D]" />;
    case "react": return <SiReact size={iconSize} className="text-[#61DAFB]" />;
    case "nextjs": return <SiNextdotjs size={iconSize} className="text-white" />;
    case "tailwind": return <SiTailwindcss size={iconSize} className="text-[#06B6D4]" />;
    case "shadcn": return <SiShadcnui size={iconSize} className="text-white" />;
    case "laravel": return <SiLaravel size={iconSize} className="text-[#FF2D20]" />;
    case "ci": return <SiCodeigniter size={iconSize} className="text-[#EE4323]" />;
    case "livewire": return <SiLivewire size={iconSize} className="text-[#FB70A9]" />;
    case "php": return <SiPhp size={iconSize} className="text-[#777BB4]" />;
    case "mysql": return <SiMysql size={iconSize} className="text-[#4479A1]" />;
    case "mariadb": return <SiMariadb size={iconSize} className="text-white" />;
    case "js": return <SiJavascript size={iconSize} className="text-[#F7DF1E]" />;
    case "python": return <SiPython size={iconSize} className="text-[#3776AB]" />;
    default: return null;
  }
};

export default function About() {
  return (
    <section id="tentang" className="relative py-28 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT CARD */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-zinc-950/80 border border-zinc-800 transition-all hover:-translate-y-2 hover:border-blue-500/50 group">
            <CardBody className="p-8">
              <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase">{aboutData.subtitle}</span>
              <h2 className="mt-4 text-4xl font-bold leading-tight group-hover:text-blue-50 transition-colors">
                {aboutData.titleLine1} <br /> {aboutData.titleLine2}
              </h2>
              <div className="mt-6 text-gray-400 text-justify group-hover:text-gray-300" dangerouslySetInnerHTML={{ __html: aboutData.descriptionHtml }} />
            </CardBody>
          </Card>
        </motion.div>

        {/* RIGHT CARD - Bagian Tooltip yang diperbaiki */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <Card className="bg-zinc-950/80 border border-zinc-800 transition-all hover:-translate-y-2 hover:border-blue-500/50 group">
            <CardBody className="p-8">
              <h3 className="text-3xl font-bold mb-8">
                {aboutData.skillsTitlePrefix} <span className="text-blue-500">{aboutData.skillsHighlight}</span> {aboutData.skillsTitleSuffix}
              </h3>

              <div className="space-y-8">
                {aboutData.skills.map((skill, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <span className="text-white font-semibold text-sm uppercase tracking-wider opacity-60">
                      {skill.category}
                    </span>
                    <div className="flex flex-wrap gap-4">
                      {skill.technologies.map((tech, techIdx) => (
                        <Tooltip 
                          key={techIdx} 
                          content={tech.name} 
                          closeDelay={0}
                          // Tambahkan classNames di bawah ini untuk memperbaiki warna
                          classNames={{
                            content: "bg-zinc-900 text-white border border-zinc-800 font-medium py-1.5 px-3 text-xs shadow-xl",
                          }}
                        >
                          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-default">
                            {getIcon(tech.icon)}
                          </div>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}