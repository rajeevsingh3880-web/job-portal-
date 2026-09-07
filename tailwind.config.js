/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mine-shaft': {
        '50': '#fafafa',
        '100': '#f5f5f5',
        '200': '#e6e6e6',
        '300': '#d6d6d6',
        '400': '#a5a5a5',
        '500': '#767676',
        '600': '#575757',
        '700': '#434343',
        '800': '#2d2d2d',
        '900': '#1a1a1a',
        '950': '#0a0a0a',
      },
       'bright-sun': {
       '50': '#fffbeb',
  '100': '#fff3c6',
  '200': '#ffe588',
  '300': '#ffd149',
  '400': '#ffbd20',
  '500': '#f99b07',
  '600': '#dd7302',
  '700': '#b74f06',
  '800': '#943d0c',
  '900': '#7a320d',
  '950': '#461802',
}
      }
    },
  },
  plugins: [],
}