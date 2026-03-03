// data/about.ts
import { AboutData } from "@/types/about";

export const aboutData: AboutData = {
  subtitle: "About",
  titleLine1: "IT Programmer",
  titleLine2: "Web Backend Developer",
  descriptionHtml: `A dual degree student majoring in Computer Engineering at Jember State Polytechnic with a strong interest in web development. Experienced as a Project Manager, Backend Web Developer, and Database Designer in academic projects. Skilled in managing team workflows, developing backend logic, and optimizing database structures. Highly motivated to continue learning and contributing to innovative digital solutions.

Translated with DeepL.com (free version).`,
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