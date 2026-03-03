"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["beranda", "tentang", "edukasi", "portofolio", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (id: string, label: string) => (
    <a
      href={`#${id}`}
      onClick={() => setOpen(false)} // supaya auto close saat klik
      className={`relative block w-fit md:w-auto transition duration-300 ${
        active === id ? "text-blue-400" : "text-white"
      }`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
          active === id ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </a>
  );

  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur-md z-50 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">Syaiful Amin</h1>

        {/* Desktop Menu */}
        <div className="space-x-7 hidden md:flex">
          {navLink("beranda", "Beranda")}
          {navLink("tentang", "About")}
          {navLink("edukasi", "Education")}
          {navLink("portofolio", "Portfolio")}
          {navLink("contact", "Contact")}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden relative w-8 h-8"
          onClick={() => setOpen(!open)}
        >
          <Menu
            size={28}
            className={`absolute transition-all duration-300 ${
              open ? "opacity-0 rotate-90 scale-75" : "opacity-100"
            }`}
          />
          <X
            size={28}
            className={`absolute transition-all duration-300 ${
              open ? "opacity-100" : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </button>
      </div>

      {/* Mobile */}
      <div
        className={`md:hidden bg-black overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLink("beranda", "Beranda")}
          {navLink("tentang", "About")}
          {navLink("edukasi", "Education")}
          {navLink("portofolio", "Portfolio")}
          {navLink("contact", "Contact")}
        </div>
      </div>
    </nav>
  );
}