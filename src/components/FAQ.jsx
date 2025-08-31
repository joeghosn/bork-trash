import React, { useState } from "react";

/* ===== exact copywriting from the SECOND file (do not change) ===== */
const faqs = [
  {
    q: "What is $BORK?",
    a: "Sniffed the wrong butt and unlocked DeFi on Kasplex L2.",
  },
  { q: "Supply?", a: "69,420,000,000 tokens." },
  { q: "Taxes?", a: "“0% tax because bork doesn’t understand math." },
  { q: "Utility?", a: "Absolutely none. Just bork." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative py-16 overflow-hidden">
      {/* grubby paw-print + scratch backdrop (no tape) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(255,255,255,.14) 2px, transparent 2px), radial-gradient(circle at 66% 70%, rgba(255,255,255,.14) 2px, transparent 2px)",
          backgroundSize: "18px 18px, 22px 22px",
        }}
      />
      <div
        aria-hidden
        className="absolute -rotate-2 left-1/2 -translate-x-1/2 top-12 h-24 w-[120%] opacity-[0.06]"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,.25), rgba(255,255,255,.25) 2px, transparent 2px, transparent 8px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="font-hand text-4xl md:text-5xl font-black -rotate-1">
          FAQ
        </h2>

        {/* ripped newspaper stack */}
        <div className="mt-8 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <article
                key={i}
                className="relative border border-black/30 rounded-md shadow-[0_14px_40px_rgba(0,0,0,.35)] rotate-[-1.5deg] overflow-hidden"
                style={{
                  background:
                    "repeating-linear-gradient( 0deg, #f8f3e7, #f8f3e7 18px, #efe7d6 18px, #efe7d6 20px )",
                  filter: "saturate(.9) brightness(.97)",
                }}
              >
                {/* torn top/bottom edges */}
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

                {/* headline row */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-hand text-2xl leading-none -rotate-[.5deg]">
                    {item.q}
                  </span>

                  {/* janky chevron drawn with css boxes instead of icons */}
                  <span
                    aria-hidden
                    className={`relative inline-block h-3 w-3 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <span className="absolute inset-0 rotate-45 border-r-2 border-b-2 border-black/70" />
                  </span>
                </button>

                {/* answer area */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="font-display text-sm opacity-90">{item.a}</p>

                    {/* grime + doodles per item (dog-themed only) */}
                    <div className="mt-3 flex items-center gap-3 opacity-80">
                      {i === 0 && (
                        <svg
                          viewBox="0 0 64 64"
                          className="w-5 h-5"
                          fill="currentColor"
                          aria-hidden
                        >
                          {/* bone */}
                          <path d="M10 22c-4 0-6 3-6 6s2 6 6 6c1 0 2-.2 3-.6l9.6 5.6c2.3 1.3 5.2 1.3 7.5 0l9.6-5.6c.9.4 1.9.6 3 .6 4 0 6-3 6-6s-2-6-6-6c-1.1 0-2.1.2-3 .6l-9.6-5.6c-2.3-1.3-5.2-1.3-7.5 0l-9.6 5.6c-.9-.4-1.9-.6-3-.6z" />
                        </svg>
                      )}
                      {i === 1 && (
                        <div className="text-[10px] font-hand rotate-[6deg]">
                          nice number lol
                        </div>
                      )}
                      {i === 2 && (
                        <img
                          src="/src/assets/dogshit.svg"
                          alt=""
                          className="w-5 h-5 rotate-[8deg]"
                        />
                      )}
                      {i === 3 && (
                        <div className="text-[10px] font-hand -rotate-[6deg]">
                          literally none
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* random marker scratches */}
                <div
                  aria-hidden
                  className="absolute right-3 top-2 h-8 w-20 opacity-[0.2]"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(0,0,0,.6) 1px, transparent 1px), linear-gradient(0deg, rgba(0,0,0,.4) 1px, transparent 1px)",
                    backgroundSize: "6px 100%, 100% 6px",
                  }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
