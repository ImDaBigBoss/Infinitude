const path = require('path');

module.exports = {
  entry: './example/main.js',
  output: {
    filename: 'game.min.js',
    path: path.resolve(__dirname, 'example'),
  },
  mode: 'production',
  optimization: {
    minimize: true,
  }
};
