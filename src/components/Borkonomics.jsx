import React from "react";

const items = [
  { label: "Liquidity", value: "80%" },
  { label: "Airdrops", value: "10%" },
  { label: "Community Mgmt", value: "1%" },
  { label: "Listings / Mktg", value: "9%" },
];

export default function Borkonomics(){
  return (
    <section id="borkonomics" className="relative">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-hand text-4xl md:text-5xl font-black">$BORKONOMICS</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, idx)=>(
            <div key={idx} className="torn p-5">
              <div className="font-hand text-3xl font-black">{it.value}</div>
              <div className="mt-1 text-sm font-display opacity-80">{it.label}</div>
              <div className="tape -top-3 left-6" />
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs font-display opacity-80">
          Supply: 69,420,000,000 tokens. Taxes: 0/0. Renounced brain cells.
        </p>
      </div>
    </section>
  );
}
