module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'app-bg': '#edf2f7'
    }),
    textColor: (theme) => theme('colors'),
    textColor: {
      primary: '#1a202c',
      secondary: 'white',
      'bt-white': 'white',
      danger: '#e3342f'
    },
    minWidth: {
      0: '0',
      2: '2rem',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%'
    },
    maxWidth: {
      16: '16rem',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
