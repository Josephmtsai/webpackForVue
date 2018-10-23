const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const dev = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 7777,
        contentBase: './',
        hot: true,
        inline: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});
console.log(dev);
module.exports = dev;