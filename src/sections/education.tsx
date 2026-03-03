"use client";

import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { educationData } from "@/data/education";

export default function EducationSection() {
  return (
    <section
      id="pendidikan"
      className="relative py-28 px-6 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
            Pendidikan
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Riwayat <span className="text-blue-500">Akademik</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-relaxed">
            Latar belakang pendidikan formal yang menjadi fondasi keahlian saya
            di bidang teknologi informasi dan pengembangan perangkat lunak.
          </p>
        </motion.div>

        {/* EDUCATION LIST */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card className="bg-zinc-900/70 border border-zinc-800 shadow-lg">
                <CardBody className="p-10">
                  <div className="grid md:grid-cols-2 gap-8">

                    {/* LEFT */}
                    <div>
                      <h3 className="text-3xl font-bold">
                        {edu.institution}
                      </h3>

                      <p className="mt-2 text-blue-500 font-semibold">
                        {edu.major}
                      </p>

                      <p className="mt-1 text-gray-400">
                        {edu.period}
                      </p>
                    </div>

                    {/* RIGHT */}
                    <div>
                      <p className="text-gray-400 leading-relaxed text-justify">
                        {edu.description}
                      </p>

                      <ul className="mt-6 space-y-3 text-gray-400 list-disc list-inside">
                        {edu.highlights.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}