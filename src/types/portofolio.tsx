// types/portofolio.tsx
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;      // Untuk gambar utama proyek
  technologies: string[]; // Daftar teknologi (Tags/Chips)
  date: string;          // Format "Bulan Tahun" (Contoh: "Mar 2024")
  githubUrl: string;     // Tautan ke repositori kode
}