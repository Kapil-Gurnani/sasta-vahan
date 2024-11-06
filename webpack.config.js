const webpack = require('webpack');

module.exports = {
  // other config options
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "buffer": require.resolve("buffer"),
      "process": require.resolve("process/browser"),
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      // Add other polyfills as needed
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    })
  ]
};
