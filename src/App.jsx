import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Lore from "./components/Lore.jsx";
import HowToJoin from "./components/HowToJoin.jsx";
import Borkonomics from "./components/Borkonomics.jsx";
import FAQ from "./components/FAQ.jsx";
import Community from "./components/Community.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    const header = document.querySelector("header"); // your sticky navbar
    const headerH = header ? header.offsetHeight : 80;

    function onClick(e) {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;

      const id = a.getAttribute("href");
      const el = document.querySelector(id);
      if (!el) return;

      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: "smooth" });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-20">
        <Hero />
        <Lore />
        <HowToJoin />
        <Borkonomics />
        <FAQ />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
