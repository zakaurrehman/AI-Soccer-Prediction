module.exports = {
    plugins: {
      'postcss-safe-parser': {},
      'cssnano': {
        preset: 'default',
        discardComments: {
          removeAll: true,
        },
        calc: false
      }
    }
  };