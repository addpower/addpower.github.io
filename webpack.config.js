const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    devtool:'eval-source-map',
    entry: {
        index: './js/index.js',
        registerBundle: './js/register.bundle.js',
        detail:'./js/detail.js',
        show:'./js/show.js',
        common:'./js/common.js'
    },
    output: {
        // 输出js
        filename: 'js/[name].js',
        path: __dirname + '/out',
        publicPath: 'http://localhost:8080/out'
    },
    devServer: {
        // 一切服务都启用gzip 压缩：
        compress: true,
        host: "127.168.0.1",
        // 启动https请求
        // https: true,
        open: true,
        port: 8080
      },
    plugins: [
        new MiniCssExtractPlugin({
            // css文件单独打包
            filename: "css/[name].css"
        }),
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
            })
        ]
    },
    module: {
        rules: [
            // 打包css
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            // 打包less
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            },
            {
                test: /.jpg|png|gif|svg$/,
                use: ['url-loader?limit=8192&name=./[name].[ext]']
            },
        ]
    },
}