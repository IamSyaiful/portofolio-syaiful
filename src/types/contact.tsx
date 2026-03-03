// types/contact.ts

export interface ContactCard {
  id: string;
  platform: string;
  linkText: string;
  url: string;
  description: string;
  iconType: "github" | "linkedin"; 
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  iconType: "github" | "linkedin" | "instagram" | "mail";
}

export interface ContactData {
  badgeText: string;
  title: string;
  description: string;
  cards: ContactCard[];
  footerName: string;
  footerYear: number;
  socialLinks: SocialLink[];
}