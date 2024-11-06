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
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenYardDark: "#009142",
        greenYardLight: "#38b74c",
        customGray: "#1e1e1e",
      },
      boxShadow: {
        customShadow:
          "0 -15px 30px -5px rgba(0, 0, 0, 0.3), 0 15px 30px 5px rgba(0, 0, 0, 0.3)",
        customUpShadow: "0 -20px 20px -5px rgba(0, 0, 0, 0.3)",
        customDownShadow: "0 15px 30px 5px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
