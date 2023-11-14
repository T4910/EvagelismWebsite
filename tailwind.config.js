/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {  
        backgroundImage: {
          'background': "url('/images/bg.jpg')",
          'background2': "url('/images/bg2.jpg')",
          'background3': "url('/images/bg(edit)2.jpg')",
        },
    },
  },
  plugins: [],
}
