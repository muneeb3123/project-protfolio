/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '899px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '900px', 'max': '1300px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1300px', 'max': '2000px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'bg-color': '#1f242d',
        'second-bg-color': '#323943',
        'main-color': '#0ef',
        'text-color': '#fff',
      },
    },
  },
  plugins: [],
}

