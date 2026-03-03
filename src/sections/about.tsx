"use client";

import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="tentang"
      className="relative py-28 px-6 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="bg-zinc-900/70 border border-zinc-800 shadow-lg">
            <CardBody className="p-8">
              <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
                Tentang Saya
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                IT Programmer <br />
                Web Backend Developer
              </h2>

              <p className="mt-6 text-gray-400 leading-relaxed text-justify">
                Saya adalah seorang <span className="font-semibold text-white">IT Programmer</span>{" "}
                dengan pengalaman dalam pengembangan solusi perangkat lunak
                berbasis web. Sebagai alumni{" "}
                <span className="font-semibold text-white">
                  Sistem Informasi Universitas Gunadarma (2020–2024)
                </span>
                , fokus utama saya adalah merancang dan mengimplementasikan
                sistem yang efisien, terukur, dan stabil menggunakan pendekatan{" "}
                <em>full-stack development</em>.
              </p>
            </CardBody>
          </Card>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <Card className="bg-zinc-900/70 border border-zinc-800 shadow-lg">
            <CardBody className="p-8">
              <h3 className="text-3xl font-bold mb-6">
                Spesialisasi &{" "}
                <span className="text-blue-500">Tech Stack</span> Inti
              </h3>

              <ul className="space-y-5 text-gray-400">
                <li>
                  <span className="block text-white font-semibold mb-1">
                    Frontend
                  </span>
                  HTML, CSS, JavaScript, Tailwind CSS
                </li>

                <li>
                  <span className="block text-white font-semibold mb-1">
                    Backend
                  </span>
                  PHP (Laravel, CodeIgniter), RESTful API Development
                </li>

                <li>
                  <span className="block text-white font-semibold mb-1">
                    Database
                  </span>
                  MySQL, MariaDB (Design, Normalization, Query Optimization)
                </li>

                <li>
                  <span className="block text-white font-semibold mb-1">
                    Bahasa Pemrograman
                  </span>
                  PHP, JavaScript
                </li>
              </ul>
            </CardBody>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}