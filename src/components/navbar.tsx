"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">Syaiful Amin</h1>

        {/* Desktop Menu */}
        <div className="space-x-7 hidden md:flex">
          <a href="#beranda">Beranda</a>
          <a href="#tentang">About</a>
          <a href="#edukasi">Education</a>
          <a href="#portofolio">Portfolio</a>
          <a href="#pengalaman">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Animated Hamburger */}
        <button
          className="md:hidden relative w-8 h-8"
          onClick={() => setOpen(!open)}
        >
          <Menu
            size={28}
            className={`absolute transition-all duration-300 ${
              open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <X
            size={28}
            className={`absolute transition-all duration-300 ${
              open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`md:hidden bg-black overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-4 pt-4">
          <a href="#beranda" className="block hover:text-blue-400 transition">Beranda</a>
          <a href="#tentang" className="block hover:text-blue-400 transition">About</a>
          <a href="#portofolio" className="block hover:text-blue-400 transition">Portfolio</a>
          <a href="#pendidikan" className="block hover:text-blue-400 transition">Education</a>
          <a href="#pengalaman" className="block hover:text-blue-400 transition">Experience</a>
          <a href="#blog" className="block hover:text-blue-400 transition">Blog</a>
          <a href="#kontak" className="block hover:text-blue-400 transition">Kontak</a>
        </div>
      </div>
    </nav>
  );
}