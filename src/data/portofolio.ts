// data/portofolio.ts
import { Project } from "@/types/portofolio";

export const projects: Project[] = [
  {
    id: 1,
    title: "SABI – Sahabat Cabai",
    description: 
      "Sahabat Cabai is an IoT-based smart farming system integrated with a website. It monitors soil moisture in chili plants using a soil moisture sensor and detects leaf diseases through an ESP32-CAM camera, with real-time data accessible via the website",
    imageUrl: "/Foto/Sahabat Cabai.png", // Pastikan file gambar ada di folder public
    technologies: ["PHP", "Laravel 12", "Livewire", "TailwindCSS3", "Fast API", "JavaScript", "Python", "Embedded Systems"],
    date: "Jan 2024",
    githubUrl: "https://github.com/username/sabi",
  },
  {
    id: 2,
    title: "JTI Care",
    description: 
      "JTICARE is a web and mobile donation platform with Payment Gateway Midtrans application developed in the Information Technology department to help students and staff easily make donations for members who are facing emergencies or difficult situations.",
    imageUrl: "/Foto/JTICare.png",
    technologies: ["PHP", "Laravel 10", "TailwindCSS3", "JavaScript", "Flutter", "Dart", "MySQL", "Midtrans API"],
    date: "Des 2023",
    githubUrl: "https://github.com/username/jticare",
  },
];