/**
 * Created by harsh on 15/12/16.
 */

var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        main: './app.js'
    },
    output: {
        filename: 'bundle.js'
    },
    node:{
      fs:'empty'
    },
    externals: [
        {'./cptable':'var cptable'},
        {'./jszip':'jszip'}
    ],
    module: {
        loaders: [
           {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,

            query: {
                cacheDirectory: true,
                presets: ['react', 'es2015','stage-2']
            }
        }]
    }
};