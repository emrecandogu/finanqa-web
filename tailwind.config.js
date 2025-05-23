/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'finanqa': {
          'green-1': '#005652',
          'light-green': '#17f187',
          'cream': '#f9f9f3',
          'green-2': '#c8f567',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'breathing': 'breathing 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 