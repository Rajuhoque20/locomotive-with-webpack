const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require('webpack');

module.exports={
    mode:'development',
    entry:'./src/index.js',

    output: 
    {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#framework': path.resolve(__dirname, 'src/framework/utilities'),
      },
      extensions: ['.js', '.jsx', '.json'], // make sure this includes what you use
    },
    module: {
      rules: [
        {
          test: /\.(?:js|mjs|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
       
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset/resource',
        },
       {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      },
       
      ]
      },  

      cache: {
        type: 'filesystem', // Ensure cache is used
        buildDependencies: {
          config: [__filename], // Rebuild on config change
        },
      },

      devServer: {
        static: './dist',
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true
      },
      plugins: [
       new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
  new webpack.DefinePlugin({
            API_URL: JSON.stringify('https://5s6bjpkt-8080.inc1.devtunnels.ms/'),
        }),
      ],        
}