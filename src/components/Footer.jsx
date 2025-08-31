import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-black/20">
      <div className="mx-auto max-w-6xl px-4 py-8 text-xs font-display flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: © */}
        <div>© {new Date().getFullYear()} Bork. All rights ignored.</div>

        {/* Middle: nav links */}
        <nav className="flex flex-wrap justify-center gap-4 text-[11px] font-hand">
          <a href="#hero" className="hover:underline rotate-[-1deg]">
            Hero
          </a>
          <a href="#lore" className="hover:underline rotate-[2deg]">
            Lore
          </a>
          <a href="#how" className="hover:underline rotate-[-2deg]">
            How
          </a>
          <a href="#borkonomics" className="hover:underline rotate-[1deg]">
            Borkonomics
          </a>
          <a href="#faq" className="hover:underline rotate-[-1deg]">
            FAQ
          </a>
          <a href="#community" className="hover:underline rotate-[2deg]">
            Community
          </a>
        </nav>

        {/* Right: disclaimer */}
        <div className="opacity-70 font-hand">NOT FINANCIAL DOGVICE</div>
      </div>
    </footer>
  );
}
