module.exports = {
    prefix: '',
    important: true,
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      screens: {
        'sm': '600px',
        'md': '960px',
        'lg': '1280px',
        'xl': '1920px',
        '2xl': '4000px',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        blue: '#1D4ED8',
        blackcard: '#434242'
      },
      extend:{
        fontFamily:{
          'poppins': ['Poppins', 'sans-serif']
        },
      },
    }
};
