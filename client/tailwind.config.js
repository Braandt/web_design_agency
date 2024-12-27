/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans-1': 'Nunito',
        'sans-2': 'BebasNeue',
        'sans-3': 'Tanker'
      },
    },
  },
  plugins: [],
}

