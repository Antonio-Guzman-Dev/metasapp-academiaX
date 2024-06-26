/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

    "./public/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      height: {
        sm: '8px',
        md: '16px',
        lg: '30px',
        xl: '50px',
        principal: '80px',
      },
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
}

