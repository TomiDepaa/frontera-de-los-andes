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
        "bg-color": "#fdfefe",
        "surface": "#f4f7f4",
        "ink": "#0d1f10",
        "muted": "#6b7568",
      },
      boxShadow: {
        card: "0 2px 8px rgba(3,30,13,0.05)",
        "card-hover": "0 10px 24px rgba(3,30,13,0.10)",
        soft: "0 20px 50px -12px rgba(3,30,13,0.20)",
      },
    },
  },
  plugins: [],
};