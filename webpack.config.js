module.exports = {

  entry: {
    app: ['./js/main-vdom.js']
  },
  
  debug: true,
  devtool: 'eval',

  output: {
    path: "./js",
    filename: "vdom-kefir-index.js"
  },
  
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.html$/, loader: "ractive" }
    ]
  }
};