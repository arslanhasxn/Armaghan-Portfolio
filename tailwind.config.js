/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(3.5rem,12vw,10rem)",
          { lineHeight: "0.95", letterSpacing: "-0.04em" },
        ],
        "display-sm": [
          "clamp(2.5rem,8vw,6rem)",
          { lineHeight: "0.95", letterSpacing: "-0.04em" },
        ],
      },
    },
  },
  plugins: [],
};
