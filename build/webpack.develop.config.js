const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

  module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: { app: './src/index.js'},
    output: {
        filename:  './js/[name].js',
        path: path.join(__dirname, '../develop')
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.pug$/,
            use: {
              loader: 'pug-loader',
              options: {
                pretty: true
              }
            }
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              { 
                loader: 'css-loader',
                options: { sourceMap: true, url: false } 
              },
              { 
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  config: { path: 'src/js/postcss.config.js'} 
                } 
              },
              { 
                loader: 'sass-loader',
                options: { sourceMap: true }
              },
            ],
          },
          {
            test: /\.css$/,
            use: [ 
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: true , url: false}
              }, 
              {
                loader: 'postcss-loader',
                options: { 
                  sourceMap: true,
                  config: {path: 'src/js/postcss.config.js'} 
                }
              }
            ]
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
              }
            ]
          }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        hash: false,
        template: './src/index.pug',
        filename: 'index.html',
        inject: true
      }),
      new MiniCssExtractPlugin({
        filename: './style/[name].css'
      }),
      new CopyWebpackPlugin([
        { from: './src/assets', to: './assets' },
        { from: './src', to: '' }
      ])
    ]
};