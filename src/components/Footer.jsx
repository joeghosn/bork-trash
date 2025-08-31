import React from "react";

export default function Footer(){
  return (
    <footer className="mt-10 border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-xs font-display flex items-center justify-between">
        <div>© {new Date().getFullYear()} Bork. All rights ignored.</div>
        <div className="opacity-70">NOT FINANCIAL DOGVICE</div>
      </div>
    </footer>
  );
}
