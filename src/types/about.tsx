// types/about.ts

export interface Technology {
  name: string;
  icon: string; // ID atau kunci untuk menentukan ikon mana yang muncul
}

export interface Skill {
  category: string;
  technologies: Technology[];
}

export interface AboutData {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  descriptionHtml: string;
  skillsTitlePrefix: string;
  skillsHighlight: string;
  skillsTitleSuffix: string;
  skills: Skill[];
}