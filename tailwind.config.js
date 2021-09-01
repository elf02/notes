module.exports = {
    purge: [
      './public/**/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
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
