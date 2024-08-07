/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#04B7A1',
      },
      boxShadow: {
        'custom': '0px 5px 15px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}

