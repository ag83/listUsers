var env = process.env.NODE_ENV || 'development';

var webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin')
    autoprefixer = require('autoprefixer'),
    poststylus = require('poststylus'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    context: __dirname + '/assets',

    entry: {
        app: "js/app",
        libs:   "js/libs",
    },

    resolve: {
        modulesDirectories: ["node_modules", "bower_components", "assets"],
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"],
        extensions: ['', '.js']
    },

    watch: env == 'development',
    devtools: "cheap-source-map",

    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: "[name].js"
    },

    module: {
        preLoaders: [
            {test: /\.js$/, exclude: [/node_modules/, /bower_components/], loader: "jshint-loader"}
        ],
        loaders: [
            { test: /.*\/assets\/.*\.js$/, loader: "uglify-loader"},
            { test: /\.jade$/, loader: "jade-loader"},
            { test: /\.styl$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")},
            { test: /\.css/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'}
        ],
        noParse: /\.min\.js/
    },

    'uglify-loader': {mangle: false},
    'stylus-loader': {use: poststylus([ autoprefixer({ browsers: ['last 2 versions'] }) ])},

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "template/index.jade"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'libs'
        }),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        host: 'localhost',
        port: 8080,
        //proxy: {    '*': 'http://localhost:3000'}
    }
};