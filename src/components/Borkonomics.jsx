import React from "react";

export default function Borkonomics() {
  return (
    <section id="borkonomics" className="relative py-16">
      {/* scratchy background — no tape */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(255,255,255,.14) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,.14) 1px, transparent 1px)",
          backgroundSize: "14px 14px, 16px 16px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="font-hand text-4xl md:text-5xl font-black -rotate-1">
          BORKONOMICS
        </h2>

        {/* trash ledger card (dog-chewed cardboard, no tape) */}
        <div
          className="mt-6 relative rounded-md border border-black/30 shadow-[0_18px_40px_rgba(0,0,0,.35)]"
          style={{
            background:
              "repeating-linear-gradient( 45deg, #c49c6b, #c49c6b 12px, #b98d58 12px, #b98d58 14px )",
            filter: "saturate(.9) brightness(.95)",
          }}
        >
          {/* chewed top/bottom edges */}
          <div
            aria-hidden
            className="absolute -top-2 left-0 right-0 h-2"
            style={{
              background:
                "repeating-linear-gradient(90deg, transparent 0 8px, rgba(0,0,0,.15) 8px 9px)",
            }}
          />
          <div
            aria-hidden
            className="absolute -bottom-2 left-0 right-0 h-2"
            style={{
              background:
                "repeating-linear-gradient(90deg, transparent 0 8px, rgba(0,0,0,.15) 8px 9px)",
            }}
          />

          {/* inner paper where we hand-write numbers */}
          <div className="m-3 rounded-sm bg-white/85 dark:bg-white/[0.06] border border-black/20 p-5">
            {/* scratchy row: Supply */}
            <Row
              label="Supply"
              value={
                <>
                  69,420,000,000{" "}
                  <span className="opacity-70 text-base">tokens.</span>
                </>
              }
            />

            <ScratchDivider />

            {/* scratchy row: Taxes */}
            <Row
              label="Taxes"
              value="0% tax"
              note="because bork doesn’t understand math."
            />

            <ScratchDivider />

            {/* scratchy row: Utility */}
            <Row label="Utility" value="Absolutely none." note="Just bork." />
          </div>

          {/* small dog-trash doodles (no tape) */}
          <img
            src="/src/assets/dogshit.svg"
            alt=""
            className="absolute -left-3 bottom-2 w-8 rotate-[10deg] opacity-90"
            aria-hidden
          />
          <svg
            viewBox="0 0 64 64"
            className="absolute right-3 -top-3 w-8 h-8 opacity-80 rotate-[-8deg]"
            fill="currentColor"
            aria-hidden
          >
            {/* bone */}
            <path d="M10 22c-4 0-6 3-6 6s2 6 6 6c1 0 2-.2 3-.6l9.6 5.6c2.3 1.3 5.2 1.3 7.5 0l9.6-5.6c.9.4 1.9.6 3 .6 4 0 6-3 6-6s-2-6-6-6c-1.1 0-2.1.2-3 .6l-9.6-5.6c-2.3-1.3-5.2-1.3-7.5 0l-9.6 5.6c-.9-.4-1.9-.6-3-.6z" />
          </svg>
        </div>

        {/* exact footnote text from the first file */}
        <p className="mt-5 text-xs opacity-70 font-display">
          Not financial advice. Not even dog advice.
        </p>
      </div>
    </section>
  );
}

/* --- tiny helpers for the trash ledger --- */

function Row({ label, value, note }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-3 items-baseline">
      <div className="font-hand text-base opacity-90 -rotate-1">{label}</div>
      <div className="flex flex-wrap items-baseline gap-x-2">
        <div className="font-hand text-3xl font-black tracking-tight rotate-[-1.5deg]">
          {value}
        </div>
        {note && (
          <div className="text-xs opacity-80 mt-1 sm:mt-0 -rotate-1">
            {note}
          </div>
        )}
      </div>
    </div>
  );
}

function ScratchDivider() {
  return (
    <div
      className="my-4 h-[14px] w-full"
      aria-hidden
      style={{
        backgroundImage:
          "linear-gradient(to right, transparent, rgba(0,0,0,.25), transparent)",
        mask: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='14'><path d='M0,7 L60,7 M80,7 L140,7 M160,7 L210,7 M230,7 L400,7' stroke='black' stroke-width='2' stroke-linecap='round'/></svg>\")",
        WebkitMask:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='14'><path d='M0,7 L60,7 M80,7 L140,7 M160,7 L210,7 M230,7 L400,7' stroke='black' stroke-width='2' stroke-linecap='round'/></svg>\")",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
      }}
    />
  );
}
