const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const dev = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 7777,
        contentBase: './',
        hot: true,
        inline: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
module.exports = dev;
