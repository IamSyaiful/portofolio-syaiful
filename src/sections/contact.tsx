// sections/contact.tsx
"use client";

import { contactData } from "@/data/contact";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Handshake, 
  Leaf 
} from "lucide-react";

export default function ContactSection() {
  // Fungsi pembantu untuk merender ikon berdasarkan tipe dari data
  const renderIcon = (iconType: string, size: number = 24) => {
    switch (iconType) {
      case "github": return <Github size={size} />;
      case "linkedin": return <Linkedin size={size} />;
      case "instagram": return <Instagram size={size} />;
      case "mail": return <Mail size={size} />;
      default: return null;
    }
  };

  return (
    <section id="contact" className="w-full py-24 px-6 overflow-hidden flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto flex flex-col">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            <Handshake size={16} />
            <span>{contactData.badgeText}</span>
          </div>

          {/* Title & Description */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {contactData.title}
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
            {contactData.description}
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-24">
          {contactData.cards.map((card, index) => (
            <motion.a
              key={card.id}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Animasi hover biru
              className="group flex items-center gap-5 p-6 rounded-[2rem] bg-zinc-950 border border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.3)] cursor-pointer"
            >
              {/* Box Ikon Kiri */}
              <div className="flex-shrink-0 w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                {renderIcon(card.iconType, 28)}
              </div>

              {/* Teks Kanan */}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-500 mb-1">
                  {card.platform}
                </span>
                <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {card.linkText}
                </span>
                <span className="text-sm text-zinc-400 mt-1">
                  {card.description}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer Minimalis di Dalam Section Contact */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Sisi Kiri: Nama & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <span>{contactData.footerName}</span>
            </div>
            <p className="text-zinc-500 text-sm">
              © {contactData.footerYear} All rights reserved.
            </p>
          </div>

          {/* Sisi Kanan: Social Links (Lingkaran) */}
          <div className="flex items-center gap-3">
            {contactData.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300"
              >
                {renderIcon(social.iconType, 18)}
              </a>
            ))}
          </div>
        </motion.footer>

      </div>
    </section>
  );
}