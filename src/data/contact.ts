// data/contact.ts
import { ContactData } from "@/types/contact";

export const contactData: ContactData = {
  badgeText: "Let's work together",
  title: "Let’s Build Something Great Together",
  description:
    "I enjoy turning ideas into real digital products and collaborating with others to create meaningful solutions. I’m always open to new challenges, teamwork, and learning opportunities. You can check out my projects on GitHub or reach out to me through LinkedIn.",
  cards: [
    {
      id: "github",
      platform: "GitHub",
      linkText: "github.com/IamSyaiful",
      url: "https://github.com/IamSyaiful", // Ganti dengan link aslimu
      description: "Explore repositories & projects",
      iconType: "github",
    },
    {
      id: "linkedin",
      platform: "LinkedIn",
      linkText: "linkedin.com/in/syaiful-amin",
      url: "https://www.linkedin.com/in/syaiful-amin-738649361/", // Ganti dengan link aslimu
      description: "Professional profile & contact",
      iconType: "linkedin",
    },
  ],
  footerName: "Syaiful Amin",
  footerYear: 2026,
  socialLinks: [
    { id: "github", platform: "GitHub", url: "https://github.com/IamSyaiful", iconType: "github" },
    { id: "linkedin", platform: "LinkedIn", url: "https://www.linkedin.com/in/syaiful-amin-738649361/", iconType: "linkedin" },
    { id: "instagram", platform: "Instagram", url: "https://instagram.com/saipul05___", iconType: "instagram" }, // Sesuaikan link
    { id: "email", platform: "Email", url: "mailto:saipulamin32467@gmail.com", iconType: "mail" }, // Sesuaikan email
  ],
};