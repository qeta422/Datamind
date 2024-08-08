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
      keyframes: {
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideInFromBottom: 'slideInFromBottom 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}

