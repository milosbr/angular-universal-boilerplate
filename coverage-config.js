const compress = require('compression');

module.exports = function(browserSync) {
  return {
    port: 3001,
    https: false,
    server: {
      baseDir: './coverage',
      middleware: [compress()]
    }
  }
};
