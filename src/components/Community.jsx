import React from "react";
import dogshit from "../assets/dogshit.svg";

/**
 * COMMUNITY — Trashier layout, no tape, hero-style trash buttons.
 * Text matches the FIRST Community file exactly:
 * - Title: JOIN THE BUTT SNIFFER BRIGADE
 * - Meme rule line
 * - Socials: Telegram / X (Twitter) / Discord (same labels + links)
 * - Roadmap: Q1..Q4 with same titles & descriptions
 */

export default function Community() {
  return (
    <section id="community" className="relative py-20 overflow-hidden">
      {/* grubby paw-print + scratch backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(255,255,255,.14) 2px, transparent 2px), radial-gradient(circle at 70% 80%, rgba(255,255,255,.14) 2px, transparent 2px)",
          backgroundSize: "18px 18px, 22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Heading — exact text */}
        <h2 className="text-center font-hand text-5xl md:text-6xl font-black -rotate-1">
          JOIN THE BUTT SNIFFER BRIGADE
        </h2>

        {/* Meme rule — exact text */}
        <p className="mt-4 text-center opacity-80 max-w-2xl mx-auto font-display">
          Meme rule: If you sell, you hate dogs.{" "}
          <span className="opacity-60 text-xs">I know where you live</span>
        </p>

        {/* Socials — hero-style trash buttons (no tape) */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/"
            className="px-4 py-2 bg-trashNote text-trashInk font-hand font-bold shadow-crumple
                       border-2 border-black/40 rotate-[-3deg] -skew-x-3
                       hover:brightness-110 transition relative
                       before:content-[''] before:absolute before:-top-2 before:-left-2
                       before:w-3 before:h-3 before:bg-trashBrown before:rounded-full"
          >
            Telegram
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://x.com/"
            className="px-4 py-2 bg-white/70 text-black font-hand font-bold shadow-crumple
                       border-2 border-black/40 rotate-[3deg] skew-y-1
                       hover:bg-white transition relative
                       before:content-['x'] before:absolute before:-top-3 before:right-1
                       before:text-[10px] before:rotate-12 before:text-red-600"
          >
            X (Twitter)
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.com/"
            className="px-4 py-2 bg-[#ececec] text-black font-hand font-bold shadow-crumple
             border-2 border-black/40 -rotate-[2deg] -skew-x-1
             hover:bg-white transition relative
             before:content-['wow'] before:absolute before:-top-3 before:left-1
             before:text-[10px] before:rotate-6 before:text-black/70"
          >
            Discord
          </a>
        </div>

        {/* Trashy SCRATCH TIMELINE — different layout than before; NO announcements card */}
        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <RoadItem
            quarter="Q1"
            title="Piss on tree"
            desc="Tree goes to moon"
          />
          <RoadItem
            quarter="Q2"
            title="Bite mailman"
            desc="Global adoption and mass pooping"
          />
          <RoadItem quarter="Q3" title="Sniff butt" desc="So refreshing" />
          <RoadItem
            quarter="Q4"
            title="Shit in house"
            desc="Track it everywhere"
          />
        </ul>
      </div>
    </section>
  );
}

/* --------------------------- Subcomponents -------------------------- */

function RoadItem({ quarter, title, desc }) {
  return (
    <li className="relative">
      {/* paw pin */}
      <div className="absolute -top-3 left-3">
        <PawIcon />
      </div>

      {/* NEW card background: scribbled graph paper / dirty index card (no tape) */}
      <div
        className="relative rounded-md border border-black/30 rotate-[-1.5deg] shadow-[0_14px_40px_rgba(0,0,0,.35)] overflow-hidden"
        style={{
          background:
            "linear-gradient(#f7f3e8, #f2eee2) padding-box, radial-gradient(circle at 20% 10%, rgba(0,0,0,.06), transparent 40%) border-box",
        }}
      >
        {/* graph lines (marker scratches) */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,.45) 0 1px, transparent 1px 22px), repeating-linear-gradient(90deg, rgba(0,0,0,.25) 0 1px, transparent 1px 26px)",
          }}
        />

        {/* torn edges via repeat pattern (no tape) */}
        <div
          aria-hidden
          className="absolute -top-2 left-0 right-0 h-2"
          style={{
            background:
              "repeating-linear-gradient(90deg, transparent 0 10px, rgba(0,0,0,.12) 10px 11px)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-2 left-0 right-0 h-2"
          style={{
            background:
              "repeating-linear-gradient(90deg, transparent 0 10px, rgba(0,0,0,.12) 10px 11px)",
          }}
        />

        <div className="relative px-4 py-5">
          {/* EXACT TEXT FIELDS */}
          <div className="inline-block text-[11px] px-2 py-0.5 rounded-full border-2 border-black/40 font-hand bg-white/10">
            {quarter}
          </div>

          <div className="mt-1 font-hand text-xl -rotate-[.5deg]">{title}</div>
          <p className="text-sm opacity-80 font-display">{desc}</p>

          {/* scratch underline */}
          <div
            aria-hidden
            className="mt-3 h-[12px] w-full opacity-[0.3]"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent, rgba(0,0,0,.35), transparent)",
              mask: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='12'><path d='M0,6 L60,6 M80,6 L160,6 M180,6 L260,6 M280,6 L380,6' stroke='black' stroke-width='2' stroke-linecap='round'/></svg>\")",
              WebkitMask:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='12'><path d='M0,6 L60,6 M80,6 L160,6 M180,6 L260,6 M280,6 L380,6' stroke='black' stroke-width='2' stroke-linecap='round'/></svg>\")",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
            }}
          />

          {/* tiny dog-themed doodles (no tape) */}
          <div className="absolute right-2 top-2 opacity-80" aria-hidden>
            {title === "Piss on tree" && <DripIcon />}
            {title === "Bite mailman" && <BiteIcon />}
            {title === "Sniff butt" && <NoseIcon />}
            {title === "Shit in house" && (
              <img src={dogshit} alt="" className="w-4 h-4 rotate-[10deg]" />
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

function PawIcon() {
  return (
    <svg viewBox="0 0 64 64" width="18" height="18" aria-hidden>
      <circle cx="20" cy="22" r="5" fill="#0b0b0f" />
      <circle cx="32" cy="18" r="5" fill="#0b0b0f" />
      <circle cx="44" cy="22" r="5" fill="#0b0b0f" />
      <path d="M18 34c0-6 28-6 28 0s-6 10-14 10-14-4-14-10z" fill="#0b0b0f" />
    </svg>
  );
}
function DripIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      <path
        d="M12 2c4 6 6 8 6 11a6 6 0 1 1-12 0c0-3 2-5 6-11z"
        fill="currentColor"
      />
    </svg>
  );
}
function BiteIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      <path
        d="M4 6h16v8a6 6 0 1 1-12 0z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 10a3 3 0 1 1 0 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function NoseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      <circle
        cx="9"
        cy="12"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M13 9c4 2 4 6 0 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
