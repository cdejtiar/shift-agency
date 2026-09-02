import type { Config } from "tailwindcss";

// Tokens de marca de Shift Agency.
// El negro de fondo es un placeholder (#0A0A0A) hasta tener el hex exacto del brief.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: "#614CDE",
          light: "#7C68E8",
          dark: "#4B3AB0",
        },
        cream: "#F2EFEB",
        ink: "#626262", // gris de texto
        surface: {
          DEFAULT: "#000000", // placeholder — confirmar hex exacto del fondo oscuro
          raised: "#141414",
        },
      },
      fontFamily: {
        display: ["var(--font-magnetik)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
      },
      fontSize: {
        h1: "100px",
        h2: "70px",
        h3: "40px",
        h4: "24px",
        h5: "20px",
        body: "18px",
      },
      maxWidth: {
        prose: "70ch",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
