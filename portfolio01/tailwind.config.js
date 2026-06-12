/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00FFD1',
        'accent-hover': '#00E6BC',
        dark: {
          900: '#0A0A0F',
          800: '#12121A',
          700: '#1A1A25',
          600: '#222230',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
