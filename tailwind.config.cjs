/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: {
          light: '#DAF24F'
        },
        black: {
          // secondary: '#141414'
          secondary: '#1d1f26'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
