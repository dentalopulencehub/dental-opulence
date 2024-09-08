import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "450px",
        xxs: "250px",
        big: "992px",
        large: "1300px",
        "4xl": "1800px",
      },
      colors: {
        "primary-10": "#cfcfcf",
        "primary-20": "#afafaf",
        "primary-30": "#878687",
        "primary-40": "#605e60",
        "primary-50": "#383638",
        "base-color": "#110e10",
        "primary-60": "#0e0c0d",
        "primary-70": "#0b090b",
        "primary-80": "#080708",
        "primary-90": "#050505",
        "primary-100": "#030303",
        "secondary-10": "#f8f8f8",
        "secondary-20": "#f4f4f4",
        "secondary-30": "#f0f0f0",
        "secondary-40": "#ededed",
        "secondary-50": "#e9e9e9",
        "secondary-60": "#c2c2c2",
        "secondary-70": "#9b9b9b",
        "secondary-80": "#757575",
        "secondary-90": "#4e4e4e",
        "secondary-black": "#1e1e1e",
      },
      fontFamily: {
        Pangram: ["Pangram", "sans-serif"],
        "Pangram-Regular": ["Pangram-Regular", "sans-serif"],
        "Pangram-Bold": ["Pangram-Bold", "sans-serif"],
        "Pangram-Medium": ["Pangram-Medium", "sans-serif"],
        "Pangram-Light": ["Pangram-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
