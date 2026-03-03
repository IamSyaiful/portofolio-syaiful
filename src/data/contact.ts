// data/contact.ts
import { ContactData } from "@/types/contact";

export const contactData: ContactData = {
  badgeText: "Let's Connect",
  title: "Open for Collaboration",
  description:
    "I'm always excited to collaborate on meaningful projects, learn from new experiences, and contribute to a team. You can find my work on GitHub or reach out professionally via LinkedIn.",
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