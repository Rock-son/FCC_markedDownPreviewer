var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.join(__dirname, 'build');
var APP_DIR = path.join(__dirname, 'src');
const VENDOR_LIBS = [ "react", "react-dom"];


var config = {

    entry: {
        bundle: APP_DIR + '/index.jsx',
        vendor: VENDOR_LIBS
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node-modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        //resolve-url-loader may be chained before sass-loader if necessary
                        use: ['css-loader', 'sass-loader']
                    })
                    
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css'}),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: '../index.html'
        })
    ]
}

module.exports = config;