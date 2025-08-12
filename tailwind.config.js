/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cabañas-verano': "url('/images/carrouselHome/cabañasVerano.png')",
        'cabañas-invierno': "url('/images/carrouselHome/cabañasInvierno.png')",
        'footer-background': "url('/images/footerBackground.png')",
        'cabins-headCabins': "url('/images/cabins/InfoCabanas.JPG')",
        'whatToDo': "url('/images/places/DSC_0073.JPG')",
      },
      colors: {
        "green-brand": "#031e0d",
        "white-brand": "#fffbf5",
        "whitegreen-light": "#e6fff1",
        "bg-color":"#fdfefe",
      },
    },
  },
  plugins: [],
};
