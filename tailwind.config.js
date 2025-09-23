/*********************
 * TailwindCSS Config *
 *********************/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0f19",
        foreground: "#e6edf3",
        muted: "#94a3b8",
        primary: {
          DEFAULT: "#6ee7b7",
          foreground: "#0b0f19"
        },
        accent: "#60a5fa"
      },
      fontFamily: {
        sans: ["Inter var", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0,0,0,0.4)"
      }
    }
  },
  plugins: [],
};
