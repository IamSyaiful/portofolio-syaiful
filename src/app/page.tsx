"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Portfolio from "@/sections/portofolio";
import Education from "@/sections/education";
import ContactSection from "@/sections/contact";
import StartupScreen from "@/components/StartupScreen";
import AnimatedGlow from "@/components/AnimatedGlow";

export default function Home() {
  const [showStartup, setShowStartup] = useState(true);

  return (
    <main className="bg-black relative overflow-hidden">

      <AnimatedGlow />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Portfolio />
        <ContactSection />
      </div>

      {showStartup && (
        <StartupScreen onFinish={() => setShowStartup(false)} />
      )}

    </main>
  );
}