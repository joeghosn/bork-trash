import React from "react";

export default function Hero() {
  return (
    <section className="hero-trash relative pt-28 pb-24 overflow-hidden">
      {/* duct-tape chaos */}
      <div className="tape left-6 top-6 rotate-[8deg]" />
      <div className="tape right-12 top-4 -rotate-[12deg]" />
      <div className="tape left-1/2 bottom-8 rotate-[3deg]" />
      <div className="tape left-10 bottom-6 -rotate-[6deg]" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT — text exactly from the original Hero */}
          <div>
            {/* Keep scribbly/handwritten look from the second file */}
            {/* <h1 className="scribble-heading text-ink">$BORK</h1> */}

            <p className="mt-4 font-display text-lg leading-relaxed">
              $BORK – Sniffed the wrong butt and unlocked DeFi on Kasplex L2.
            </p>

            {/* Keep the second file's sticky-note link styling, just change labels */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#borklist"
                className="px-4 py-2 bg-trashNote text-trashInk font-hand font-bold shadow-crumple
               border-2 border-black/40 rotate-[-3deg] -skew-x-3
               hover:bg-yellow-300 transition
               relative before:content-[''] before:absolute before:-top-2 before:-left-2
               before:w-3 before:h-3 before:bg-trashBrown before:rounded-full"
              >
                Join the Borklist
              </a>

              <a
                href="#kit"
                className="px-4 py-2 bg-white/70 text-black font-hand font-bold shadow-crumple
               border-2 border-black/40 rotate-[4deg] skew-y-1
               hover:bg-white transition relative
               before:content-['x'] before:absolute before:-top-3 before:right-1
               before:text-xs before:rotate-12 before:text-red-600"
              >
                Get $BORK (soon)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
