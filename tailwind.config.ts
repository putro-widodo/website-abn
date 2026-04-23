import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        abn: {
          gold: '#D4AF37',
          dark: '#1A1A1A',
          gray: '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
};
export default config;