/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/blocks/**/*.scss",
    "./src/styles/global/*.scss",
    "./src/styles/plugins/plugins-rewrite.scss",
    "./src/styles/*.scss",
    "./src/blocks/**/*.js",
    "./src/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      'sans': ['\'Poppins\'', 'sans-serif'],
      'inter': ['\'Inter\'', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '19px': ['19px', 'normal'],
      },
      minWidth: {
        '24px': '24px',
      },
      width: {
        '154px': '154px',
      },
      minHeight: {
        '24px': '24px',
      },
      height: {
        '170px': '170px',
      },
      opacity: {
        '56': '.56',
      },
      spacing: {
        '90px': '90px',
      },
      colors: {
        primary: '#131315',
        secondary: '#FFFFFF',
        gray: '#7C7E84',
        gray2: '#A1A3AC',
        gray3: '#7F7F90',
        gold: '#FFBA08',
        darkBlue: '#202328',
        darkBlueHover: '#24282e',
        dark: '#05050A',
        dark2: '#121214',
        light: '#F0F0F0',
        green: '#0B9F31',
        yellow: '#EBE7DD',
      }
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
      'smMax': {'max': '575.98px'},
      // => @media (max-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdMax': {'max': '767.98px'},
      // => @media (max-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }
      'lgMax': {'max': '991.98px'},
      // => @media (max-width: 992px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xlMax': {'max': '1023.98px'},
      // => @media (max-width: 1024px) { ... }

      '2xl': '1170px',
      // => @media (min-width: 1280px) { ... }
      '2xlMax': {'max': '1169.98px'},
      // => @media (max-width: 1280px) { ... }

      '3xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '3xlMax': {'max': '1279.98px'},
      // => @media (max-width: 1280px) { ... }
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: { sm: '100%', md: '100%', lg: '100%', xl: '992px', '2xl': '992px', '3xl': '992px' },
      gridGutterWidth: '24px',
      gridColumns: 12
    }),
  ],
  safelist: [
    'mb-3',
  ]
  /*safelist: [
    {
      pattern: /.*!/
    }
  ]*/
}
