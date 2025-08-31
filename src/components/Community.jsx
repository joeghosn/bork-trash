import React from "react";

export default function Community(){
  return (
    <section id="community" className="relative pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="torn p-6 md:p-10 text-center">
          <h2 className="font-hand text-4xl md:text-5xl font-black">Join the Pack</h2>
          <p className="mt-3 font-display">
            Follow the chaos, spam memes, and howl at the moon.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#" className="sticky">X (Twitter)</a>
            <a href="#" className="sticky bg-gum">Telegram</a>
            <a href="#" className="sticky">ZealousSwap</a>
          </div>
        </div>
      </div>
    </section>
  );
}
