var webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //context: __dirname + '/assets',

    entry: {
        app: __dirname + "/assets/js/app",    
    },

    resolve: {
        modulesDirectories: ["node_modules", "bower_components"],
    },
    //watch: true,
    //devtools: "source-map",

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
            { test: /\.jade$/, loader: "jade-loader"},
            { test: /\.css/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file-loader'}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + "/assets/template/index.jade"
        }),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        ),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
        })
    ]
};