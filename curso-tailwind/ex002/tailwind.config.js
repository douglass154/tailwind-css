/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html"
  ],

  theme: {
    extend: {
      colors: {
        'minhaCor': '#7B00E8'
      },

      fontSize: {
        'titulo': '2rem',
        'sub-titulo': '1.4rem',
        'paragrafo': '0.9rem'
      },
    },
  },

  plugins: [],
}

