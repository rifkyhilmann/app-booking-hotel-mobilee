/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Sesuaikan dengan struktur folder proyek Anda
  ],
  theme: {
    extend: {
      fontFamily : {
        poppins: ['Poppins-Regular', 'sans-serif'],
      },
      colors : {
        primary  : '#0E4C75',
        secondary : '#818181',
        inputColor : '#4C728B'
      }
    },
  },
  plugins: [],
}
