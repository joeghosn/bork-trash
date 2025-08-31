import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Lore from "./components/Lore.jsx";
import HowToJoin from "./components/HowToJoin.jsx";
import Borkonomics from "./components/Borkonomics.jsx";
import FAQ from "./components/FAQ.jsx";
import Community from "./components/Community.jsx";
import Footer from "./components/Footer.jsx";

export default function App(){
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
