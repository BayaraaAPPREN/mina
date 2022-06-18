module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '100px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1380px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '9rem',
    },
    fontFamily: {
      'sans': 'serif',
      'hurricane':'Hurricane',
      'SecularOne':'SecularOne',

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'back': '#F5F2ED',
      'nogoon': '#0C7561',
      'white': '#FFFFFF',
      'slate': '#F7DEE8', 
      'slate1':'#F5F2ED',
      'modelback': '#CECDD2',
      'green': '#095D4D',
      'gray': '#544D4E',
      'graybudeg':'#87797A',
      'black': '#000000',
      'red': '#dc2626',
      'red1': '#f87171',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'fuchsia': 'fuchsia',
      'fuchsia1': '#841271',
    },
     // fontFamily: {
    //   'gentium': 'Gentium Plus',
    //   'vibes': 'Great Vibes',
    // },
    extend: {
      backgroundImage: {
        'uilchilgee': "url('/img/uilchilgee.png')",
        'zurag1': "url('/img/skinnn.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}