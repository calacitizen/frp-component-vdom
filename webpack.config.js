module.exports = {

  entry: {
    kefir: './js/kefir/main-vdom.js',
    bacon: './js/bacon/bacon-vdom.js'
  },

  debug: true,
  devtool: 'eval',

  output: {
    path: "./js",
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js"
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.html$/, loader: "ractive" }
    ]
  }
};
