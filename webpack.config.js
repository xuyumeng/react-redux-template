var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',//资源服务器地址
        'webpack/hot/only-dev-server',
        './src/app.dev.jsx'
    ],
    devServer: {
        hot: true,
        inline: true,
        //其实很简单的，只要配置这个参数就可以了
        // proxy: {
        //     '/api/*': {
        //         target: 'http://localhost:3000',
        //         secure: false
        //     }
        // }
    },
    output: {
        publicPath: "http://127.0.0.1:8080/static/dist/",
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
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
    plugin: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    node: {
        "net": "empty"
    },
    module: {
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=10000&name=img/[hash:8].[name].[ext]',
                    //'image?{bypassOnDebug: true, progressive:true, \
                    //    optimizationLevel: 3, pngquant:{quality: "65-80"}}'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/i,
                loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
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
                loader: "style!css"
            },
            {
                test: /\.scss$/, 
                loader: 'style!css!scss'
            },
            {
                test: /\.mp4/,
                loader: 'file-loader'
            }
        ]
    }
};