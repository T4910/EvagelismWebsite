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
          'background': "url('/bg.jpg')",
          'background2': "url('/bg2.jpg')",
          'background3': "url('/bg(edit)2.jpg')",
        },
    },
  },
  plugins: [],
}
