const colors = require('tailwindcss/colors')

module.exports = {
  content: [
        './src/**/*.js',
        './src/**/*.vue',
    ],
    theme: {
        fontSize: {
          'xs': '.7rem',
          'tiny': '.675rem',
          'sm': '.8rem',
          'base': '.9rem',
          'lg': '1rem',
          'xl': '1.25rem',
          '2xl': '1.5rem',
          '5xl': '3rem',
          '6xl': '4rem',
          '7xl': '5rem',
        },
        backgroundSize: {
          'auto': 'auto',
          'cover': 'cover',
          'contain': 'contain',
          'regular': '100% 100%',
          'bigger': '300% 300%',
        },
        fontFamily: {
            'sans': ['motiva-sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            'icon': ['KundenMeister']
        },
        extend: {
            transformOrigin: {
              "0": "0%",
            },
            zIndex: {
              "-1": "-1",
            },
            colors: {
                activeTabColor: '#2D2D30',
                inactiveTabColor: '#777777',
                underlineColor: '#2E2E31',
                tableContentBorderColor: '#EDEDED',
                headColor: '#2E2E31',
                contentTextColor: '#777777',

                primary: '#2F86FE',
                indigo: '#9D5ADA',
                danger: '#FF8087',
                default: '#9D9D9D',
                lightGrayColor: '#F5F5F5',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
