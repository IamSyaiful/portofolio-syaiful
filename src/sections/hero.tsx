"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Hero() {
  const fullText = "Hello, I am Syaiful Amin";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="beranda" className="min-h-screen flex items-center text-white px-4 md:px-6 pt-24">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {text}
            <span className="animate-pulse text-blue-500">|</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 text-justify">
          Information Technology student passionate about web development, building scalable systems, and creating impactful digital solutions.
          </p>

          <div className="flex gap-4">
           <Button as="a" href="#contact" color="primary" variant="shadow">
              Contact Me
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center">
          {/* Glow Effect */}
          <div className="absolute w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-blue-600 rounded-full blur-[120px] opacity-40 animate-float-slow"></div>

          <div className="absolute w-[220px] h-[220px] md:w-[400px] md:h-[400px] bg-purple-600 rounded-full blur-[120px] opacity-30 animate-float-slow"></div>

          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-[150px] opacity-20 animate-float-slow"></div>

          {/* Foto */}
          <div className="relative z-10">
            <Image
              src="/Foto/syaiful.jpg"
              alt="Syaiful Amin"
              width={380}
              height={380}
              priority
              className="rounded-2xl shadow-2xl object-cover border border-gray-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
}