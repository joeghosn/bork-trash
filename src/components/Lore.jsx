import React from "react";

export default function Lore() {
  return (
    <section id="lore" className="relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative torn p-6 md:p-10 mt-6">
          <h2 className="font-hand text-4xl md:text-5xl font-black crayon">
            What is $BORK?
          </h2>

          <p className="mt-4 opacity-90 font-display">
            BORK is not a meme coin. It’s a lifestyle. It’s a dog that:
          </p>

          <ul className="mt-5 space-y-3 list-disc pl-6 font-display">
            <li>Sniffed the wrong butt and unlocked DeFi on Kasplex L2.</li>
            <li>Pissed on Satoshi’s whitepaper.</li>
            <li>Shit in Vitalik’s living room.</li>
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
            he doesn’t even freaking pay bills. Enter at your own risk.
          </p>

          {/* trash tape */}
          <div className="tape -top-4 left-10" />
          <div className="tape -bottom-3 right-16 rotate-[10deg]" />

          {/* dog shit + trash doodles */}
          <img
            src="/src/assets/dogshit.svg"
            alt="dog shit"
            className="absolute -left-8 bottom-0 w-14 rotate-[8deg] opacity-90"
          />
          <img
            src="/src/assets/banana.svg"
            alt="banana peel"
            className="absolute right-4 -top-6 w-12 rotate-[-12deg] opacity-80"
          />
          <img
            src="/src/assets/can.svg"
            alt="crushed can"
            className="absolute left-1/3 -bottom-8 w-10 rotate-[15deg] opacity-85"
          />
        </div>
      </div>
    </section>
  );
}
