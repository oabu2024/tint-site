import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C0392B",
          "dark-brown": "#3E2723",
          "warm-brown": "#5D4037",
          "off-white": "#FAF9F6",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      fontSize: {
        "10xl": "10rem",
      },
    },
  },
  plugins: [],
};

export default config;
