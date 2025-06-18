const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack=require('webpack');

module.exports={
    mode:'production',
    devtool:"source-map",
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
     performance: {
        hints: 'warning',
         maxAssetSize: 40000000,
          maxEntrypointSize: 40000000,
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
         MiniCssExtractPlugin.loader,
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
      new MiniCssExtractPlugin(
        {
          filename: '[name].[contenthash].css',
         ignoreOrder: true, // ✅ Add this line
        }
      ),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify('https://z4mcbdmx-8080.inc1.devtunnels.ms/'),
        }),
      ],  
       optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
        chunks: 'async',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name:"vendor",
          chunks:"all",
          reuseExistingChunk: true,
          
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          name:"common",
           chunks:"all",

        },
      },
    },
  },      
}