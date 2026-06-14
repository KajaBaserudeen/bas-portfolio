/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          light: "#34D399", // Emerald Light
          DEFAULT: "#10B981", // Emerald
          dark: "#059669", // Emerald Dark
        },
      },
    },
  },
  plugins: [],
};
