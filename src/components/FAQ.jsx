import React, { useState } from "react";

const data = [
  { q: "What is $BORK?", a: "Sniffed the wrong butt and unlocked DeFi on Kasplex L2." },
  { q: "Supply?", a: "69,420,000,000 tokens." },
  { q: "Tax?", a: "0/0. We can't do math anyway." },
  { q: "Utility?", a: "None. Stop asking. Look at the dog." },
  { q: "Contract?", a: "Check official socials for the legit address." },
];

function Item({ q, a }){
  const [open, setOpen] = useState(false);
  return (
    <div className="torn p-4">
      <button className="w-full text-left font-hand text-2xl flex items-center justify-between" onClick={()=>setOpen(!open)}>
        <span>{q}</span><span>{open ? "–" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-sm font-display">{a}</p>}
    </div>
  );
}

export default function FAQ(){
  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-hand text-4xl md:text-5xl font-black">FAQ</h2>
        <div className="mt-6 grid gap-4">
          {data.map((it,i)=> <Item key={i} {...it} />)}
        </div>
      </div>
    </section>
  );
}
