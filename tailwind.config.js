/**** Tailwind config ****/
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ['"Comic Sans MS"', "ui-rounded", "system-ui", "sans-serif"],
        hand: [
          '"Comic Sans MS"',
          '"Chalkboard SE"',
          '"Marker Felt"',
          "cursive",
        ],
        clean: ['"Inter"', "ui-sans-serif", "system-ui"],
      },
      rotate: {
        1.5: "1.5deg",
        2.5: "2.5deg",
        3.5: "3.5deg",
        5: "5deg",
        8: "8deg",
        12: "12deg",
      },
      boxShadow: {
        tape: "0 1px 0 rgba(0,0,0,.25) inset, 0 4px 6px rgba(0,0,0,.25)",
        sticky: "0 10px 25px rgba(0,0,0,.25)",
      },
      colors: {
        paper: "#fff8e7",
        banana: "#ffe066",
        marker: "#ff9900",
        ink: "#1a1a1a",
        gum: "#f3d3ff",
        puke: "#97a97c",
      },
      keyframes: {
        wiggle: {
          "0%,100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
        jitter: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(1px,-1px)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        pulsebg: { "0%,100%": { opacity: 0.1 }, "50%": { opacity: 0.25 } },
      },
      animation: {
        wiggle: "wiggle 1.8s ease-in-out infinite",
        jitter: "jitter .15s steps(2) infinite",
        float: "float 4s ease-in-out infinite",
        pulsebg: "pulsebg 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
