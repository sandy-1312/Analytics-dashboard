/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dae6ff",
          500: "#4f6bf6",
          600: "#3d54e0",
          700: "#2f41b3",
        },
      },
    },
  },
  plugins: [],
}
