const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const pages = ['html', 'css', 'javascript', 'about']
let htmlWebpackPluginPages = pages.map((page) => {
  return new HtmlWebpackPlugin({
    title: `⚀ Two Devs - ${page} ⚀`,
    filename: `${page}.html`,
    template: `src/pages/${page}/${page}.hbs`,
    chunks: [`${page}`],
  })
})

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src/index.js'), // If entry is an object, key is name of bundled file, and you can use it as [name] in output for example ⬇️
    html: path.resolve(__dirname, 'src/pages/html/html.js'),
    css: path.resolve(__dirname, 'src/pages/css/css.js'),
    javascript: path.resolve(__dirname, 'src/pages/javascript/javascript.js'),
    about: path.resolve(__dirname, 'src/pages/about/about.js')
  },
  // entry: path.resolve(__dirname, 'src/index.js'), // Simpler way to define entry, without object
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js', // [name] = index, [contenthash] creates hash on every build so no caching issues, . is not needed, I just like it there :)
    // filename: 'index.js' // Simpler way to define it
    clean: true, // Delete previous files so hashed files don't pile up
    assetModuleFilename: '[name][ext]' // Keep name of resources (images etc) and extension instead of hashing it by default
  },
  devtool: 'source-map', // Creates a source map file in *build* - Look into the actual file where for example error is, instead of compiled, minified and uglified file.
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build')
    },
    port: 3000, // Default 8080
    // open: true, // Open page automatically
    hot: true, // Hot Module Replacement - See all changes immediately on save, without restarting whole application
    compress: true, // ??? gzip conversion so quicker data/file sending ???
    historyApiFallback: true // ??? when we go to route that doesn't exist we fallback to index.html ???
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.hbs$/,
        use: {
          loader: "handlebars-loader",
          // query: {
          // inlineRequires: "/images/" // ??? Check this option ???
          // }
        }
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(), // If you want to see visual representation of what takes how much space etc

    // HtmlWebpackPlugin - Usefull for not having index.html in build. I wanna delete whole build and still have index.html remade, and also I want to add some things in there that always remain when being recreated.
    new HtmlWebpackPlugin({
      title: '⚀ Two Devs ⚀',
      filename: 'index.html',
      template: 'src/index.hbs',
      chunks: ['index'],
    })
  ].concat(htmlWebpackPluginPages)
}