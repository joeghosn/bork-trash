import React from "react";
import dogshit from "../assets/dogshit.svg";
import bork from "../assets/bork.jpg";

const steps = [
  {
    title: "Install Wallet",
    body: "Install an EVM-compatible wallet (MetaMask).",
  },
  { title: "Fund with KAS", body: "Fund the wallet with KAS." },
  {
    title: "Wait for Launch",
    body: "Wait for launch info (CA) → follow the socials.",
  },
  {
    title: "Swap on Moonbound",
    body: "Connect wallet to Moonbound and swap KAS → BORK.",
  },
];

export default function HowToJoin() {
  return (
    <section id="how" className="relative">
      {/* section-level trash doodles (decor only) */}
      <img
        src={dogshit}
        alt=""
        className="pointer-events-none select-none absolute left-6 -top-4 w-10 rotate-[10deg] opacity-90"
        aria-hidden
      />
      <img
        src={dogshit}
        alt=""
        className="pointer-events-none select-none absolute right-8 -bottom-6 w-9 -rotate-[8deg] opacity-90"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4">
        {/* Keep the original heading style from the first file */}
        <h2 className="font-hand text-4xl md:text-5xl font-black">
          How to Join
        </h2>

        {/* Keep the sticky-note layout from the first file, but only 4 cards */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="sticky rotate-[1.5deg]">
              <div className="relative bg-banana/90 ring-1 ring-black/20 rounded-md p-4 shadow-sticky">
                {/* extra tape + grime to make it more trashy */}
                <div
                  className="absolute -top-3 -left-2 h-5 w-16 bg-[#d8d8d8] rotate-[-7deg] shadow-md opacity-90"
                  aria-hidden
                />
                <div
                  className="absolute -bottom-2 -right-3 h-5 w-14 bg-[#d8d8d8] rotate-[9deg] shadow-md opacity-90"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 pointer-events-none [background-image:radial-gradient(rgba(0,0,0,.08)_1px,transparent_1px)] [background-size:12px_12px] opacity-30 rounded-md"
                  aria-hidden
                />

                {/* EXACT TITLES + BODIES from the second file */}
                <div className="font-hand text-xl font-black">{s.title}</div>
                <p className="mt-1 text-sm font-display">{s.body}</p>

                {/* tiny sticker to amp trash; varies by card */}
                {i === 0 && (
                  <img
                    src={bork}
                    alt=""
                    className="absolute -right-3 -top-5 h-10 w-10 object-cover rounded rotate-[8deg] ring-1 ring-black/20"
                    aria-hidden
                  />
                )}
                {i === 1 && (
                  <img
                    src={dogshit}
                    alt=""
                    className="absolute -left-4 bottom-1 h-8 w-8 rotate-[6deg]"
                    aria-hidden
                  />
                )}
                {i === 2 && (
                  <img
                    src={dogshit}
                    alt=""
                    className="absolute right-2 -bottom-5 h-8 w-8 -rotate-[10deg]"
                    aria-hidden
                  />
                )}
                {i === 3 && (
                  <div className="absolute -left-2 -top-3 text-xs font-hand rotate-[12deg]">
                    swap??
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
