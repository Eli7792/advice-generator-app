/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,php}"],
  theme: {
    extend: {

      colors: {
        background: '#1f2632',
        advice_generator: '#323a49',
        neon_green: '#52ffa8',
        neon_green_hover: '#4be698',
        neon_green_active: '#3ebb7c'
      },
      fontfamily: {
        advice: 'Manrope'
      },
      fontSize: {
        xxs: '12px'
      },
      spacing: {
        '200': '500px'
      }
    },
  },
  plugins: [],
}

