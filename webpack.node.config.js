var webpack = require('webpack');
var path = require('path');
var nodeModules = {};
var fs = require('fs');

var BUILD_DIR = path.resolve(__dirname, 'lib');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/server.jsx',
    target: 'node',
    output: {
        path: BUILD_DIR,
        publicPath: 'http://res.ichangemun.com/iseat-admin-lib/',
        filename: 'server.js'
    },
    externals: nodeModules,
    resolve: {
        root: [__dirname + '/src', __dirname + '/node_modules'],
        extensions: ['', '.js', '.jsx', '.css', '.scss', '.png', '.jpg'],
        alias: {
            components: path.join( __dirname,'src/components'),
            actions: path.join( __dirname,'src/actions'),
            constants: path.join( __dirname,'src/constants'),
            res: path.join(__dirname,'res')
        }
    },
    plugins: [
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({
            warnings: false,
            minimize: true
        }),
        // //把入口文件里面的数组打包成verdors.js
        // //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // Reference: https://github.com/felixge/node-formidable/issues/337
        new webpack.DefinePlugin({ "global.GENTLY": false }),
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=500&name=img/[hash:8].[name].[ext]',
                    //'image?{bypassOnDebug: true, progressive:true, \
                    //    optimizationLevel: 3, pngquant:{quality: "65-80"}}'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/i,
                loader: 'url?limit=500&name=fonts/[hash:8].[name].[ext]'
            },
            {
                test: /\.jsx$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
            },
            {
                test: /\.mp4/,
                loader: 'file-loader'
            },
            {
                test: /\.json/,
                loader: 'json-loader'
            }
        ]
    }
};