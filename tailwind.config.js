/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        black: '#070707',
        grey: '#E9E9EA',
        red: {
          light: '#FDE7E',
          lightHover: '#FBDBDC',
          lightActive: '#F7B4B7',
          normal: '#E60E16',
          normalHover: '#CF0D14',
          normalActive: '#B80B12',
          dark: '#AD0B11',
          darkHover: '#8A080D',
          darkActive: '#67060A',
          darker: '#510508',
        },
        blue: {
          light: '#E6ECF6',
          lightHover: '#D9E2F2',
          lightActive: '#B0C3E3',
          normal: '#003DA5',
          normalHover: '#003795',
          normalActive: '#003184',
          dark: '#002E7C',
          darkHover: '#002563',
          darkActive: '#001B4A',
          darker: '#00153A',
        },
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to bottom, rgba(0,0,0,.7), rgba(0,0,0,.9)), url('/images/hero-image.jpg')",
      },
    },
  },
  plugins: [],
};
