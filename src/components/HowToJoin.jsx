import React from "react";

const steps = [
  { title: "Install Wallet", body: "Install an EVM-compatible wallet (MetaMask)." },
  { title: "Fund with KAS", body: "Bridge or acquire KAS on Kasplex L2." },
  { title: "Find $BORK", body: "Grab the token address from official socials." },
  { title: "Swap", body: "Use ZealousSwap. Click, bark, confirm. Done." },
  { title: "Join the Pack", body: "Spam memes. Howl on X. Convert friends." }
];

export default function HowToJoin(){
  return (
    <section id="how" className="relative">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-hand text-4xl md:text-5xl font-black">How to Join</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i)=> (
            <div key={i} className="sticky rotate-[1.5deg]">
              <div className="bg-banana/90 ring-1 ring-black/20 rounded-md p-4 shadow-sticky">
                <div className="font-hand text-xl font-black">{s.title}</div>
                <p className="mt-1 text-sm font-display">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
