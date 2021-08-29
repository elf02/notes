module.exports = {
    purge: [
      './public/**/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          indigo: {
            darker: '#2f365f',
          },
          teal: {
            dark: '#38a89d',
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
