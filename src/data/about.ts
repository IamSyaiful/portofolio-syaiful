// data/about.ts
import { AboutData } from "@/types/about";

export const aboutData: AboutData = {
  subtitle: "Tentang Saya",
  titleLine1: "IT Programmer",
  titleLine2: "Web Backend Developer",
  descriptionHtml: `Saya adalah seorang <span class="font-semibold text-white">IT Programmer</span> dengan pengalaman dalam pengembangan solusi perangkat lunak berbasis web. Sebagai alumni <span class="font-semibold text-white">Sistem Informasi Universitas Gunadarma (2020–2024)</span>, fokus utama saya adalah merancang dan mengimplementasikan sistem yang efisien, terukur, dan stabil menggunakan pendekatan <em>full-stack development</em>.`,
  skillsTitlePrefix: "Spesialisasi &",
  skillsHighlight: "Tech Stack",
  skillsTitleSuffix: "Inti",
  skills: [
    {
      category: "Frontend",
      technologies: [
        { name: "Vue.js", icon: "vue" },
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Tailwind", icon: "tailwind" },
        { name: "shadcn/ui", icon: "shadcn" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Laravel", icon: "laravel" },
        { name: "CodeIgniter", icon: "ci" },
        { name: "Livewire", icon: "livewire" },
        { name: "PHP", icon: "php" },
      ],
    },
    {
      category: "Database",
      technologies: [
        { name: "MySQL", icon: "mysql" },
        { name: "MariaDB", icon: "mariadb" },
      ],
    },
    {
      category: "Bahasa Pemrograman",
      technologies: [
        { name: "PHP", icon: "php" },
        { name: "JavaScript", icon: "js" },
        { name: "Python", icon: "python" },
      ],
    },
  ],
};