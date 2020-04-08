const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        prod: path.resolve(__dirname, "text.js")
    },
    output: {
        path: path.resolve(__dirname, ".."),
        filename: "bundle.[name].js"
    },
    plugins: [
        // not a complete config; only for demo purposes
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
    ]
};