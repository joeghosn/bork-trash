import React from "react";
import borkSuit from "../assets/bork-suit.jpeg";
import borkHat from "../assets/bork-hat.jpeg";
import bork from "../assets/bork.jpg";

export default function Lore() {
  return (
    <section id="lore" className="relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative torn p-6 md:p-10 mt-6">
          <h2 className="font-hand text-4xl md:text-5xl font-black crayon">
            What is $BORK?
          </h2>

          {/* exact copy from the polished file */}
          <p className="mt-4 opacity-90 font-display">
            BORK is not a meme coin. It’s a lifestyle. It’s a dog that:
          </p>

          <ul className="mt-5 space-y-3 list-disc pl-6 font-display">
            <li>• Sniffed the wrong butt and unlocked DeFi on Kasplex L2.</li>
            <li>• Pissed on Satoshi’s whitepaper.</li>
            <li>• Shit in Vitalik’s living room.</li>
          </ul>

          <p className="mt-6 font-semibold font-display">
            This isn’t just a coin. It’s the beginning of the butt sniffing
            regime
          </p>

          <p className="mt-6 text-sm opacity-85 font-display">
            <span className="font-extrabold tracking-wide mr-2 underline decoration-wavy">
              NOT FINANCIAL DOGVICE
            </span>
            This site was made by a dog. The dog cannot read charts, do taxes,
            he dosen&apos;t even freaking pay bills. Enter at your own risk.
          </p>

          {/* trash tape (keep from your theme) */}
          <div className="tape -top-4 left-10" />
          <div className="tape -bottom-3 right-16 rotate-[10deg]" />

          {/* doodles: dogshit + crushed can + 'banana' made from your bork image */}
          <img
            src={borkSuit}
            alt="bork"
            className="absolute -left-8 bottom-0 w-14 h-14 object-cover rounded rotate-[8deg] opacity-95"
          />
          <img
            src={borkHat}
            alt="bork"
            className="absolute left-1/3 -bottom-8 w-10 rotate-[15deg] opacity-85"
          />
          <img
            src={bork}
            alt="bork"
            className="absolute right-4 -top-6 w-14 h-14 object-cover rounded rotate-[-12deg] ring-2 ring-black/30 shadow-floof"
          />
        </div>
      </div>
    </section>
  );
}
