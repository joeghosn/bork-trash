import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded -rotate-6 overflow-hidden ring-2 ring-black/30">
            <img
              src="/src/assets/bork.jpg"
              className="w-full h-full object-cover"
              alt="bork"
            />
          </div>
          <div className="font-hand text-2xl font-black text-ink animate-wiggle">
            $BORK
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 font-display">
          <a href="#lore" className="messy-link">
            Lore
          </a>
          <a href="#how" className="messy-link">
            How
          </a>
          <a href="#borkonomics" className="messy-link">
            Borkonomics
          </a>
          <a href="#faq" className="messy-link">
            FAQ
          </a>
          <a href="#community" className="messy-link">
            Community
          </a>
        </nav>
        <button
          className="md:hidden px-3 py-1 border border-black/20 rounded"
          onClick={() => setOpen(!open)}
        >
          {open ? "X" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden mx-auto max-w-6xl px-4 pb-3 grid gap-2">
          <a className="messy-link" href="#lore">
            Lore
          </a>
          <a className="messy-link" href="#how">
            How
          </a>
          <a className="messy-link" href="#borkonomics">
            Borkonomics
          </a>
          <a className="messy-link" href="#faq">
            FAQ
          </a>
          <a className="messy-link" href="#community">
            Community
          </a>
        </div>
      )}
    </header>
  );
}
