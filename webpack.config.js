const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    test: resolve('tests/index.js'),
  },
  output: {
    publicPath: '/',
    path: resolve('dist'),
    filename: '[name].[hash].js',
  },
  devServer: {
    compress: true,
    port: 8080,
    open: false,
    openPage: 'test.html',
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: {
                    version: 3,
                    proposals: true,
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      src: resolve('src'),
    },
  },
  externals: {
    mocha: 'mocha',
    chai: 'chai',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('tests/index.html'),
      filename: 'test.html',
    }),
  ],
};

// 解析当前路径
function resolve(dir) {
  return path.join(__dirname, dir);
}
