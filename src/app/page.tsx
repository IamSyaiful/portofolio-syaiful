import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Portfolio from "@/sections/portofolio";
import Education from "@/sections/education";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Portfolio />
    </main>
  );
}