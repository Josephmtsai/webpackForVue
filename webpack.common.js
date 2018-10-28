const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');
module.exports = {
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin([buildPath]),
        new HtmlWebpackPlugin({
            template: './index.html',
            hash: true,
        }),
        new VueLoaderPlugin(),
        new UglifyJsPlugin({
            parallel: true,
            uglifyOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                },
            },
        }),
    ],
    output: {
        filename: 'js/[name].bundle.js',
        path: buildPath,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.vue'],
        /**
     * Vue v2.x 之後 NPM Package 預設只會匯出 runtime-only 版本，若要使用 standalone 功能則需下列設定
     */
        alias: {
            vue: 'vue/dist/vue.js',
        },
    },
};
