/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize:{
        'xs':'10px',
        'sm':'12px',
        'lable':'14px',
        'md':'16px',
        'xl':'20px',
        '2xl':'24px',
        '3xl':'32px',
        '4xl':'40px',
        '5xl':'48px',
        '6xl':'56px'
      },
      colors:{
        'primary':'#8A33FD',
        'gray':'#807D7E',
        'dark-gray':'#3C4242',
        'error':'#EE1D52',
        'white':'#FFFFFF',
        'light-gray':'#EDEEF2'

      },
      backgroundImage:{
        'card1':"url('/Card1.png')",
        'card2':"url('/Card2.png')"
      }
    },
  },
  plugins: [],
}
