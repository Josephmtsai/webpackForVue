webpackForVue

# 設定教學

### npm init

> 設定基本 package json

### npm install vue -s

> 安裝 vue 設定

### copy gitignore from github

> 自己在加上 node_modules

### 安裝開發環境相關需要功能

原本我們之前都是安裝 babel-preset-2015 ，但是看到一篇文章

Babel 的官網上在 9 月宣布 ES2015 / ES2016/ ES2017 等等 ES20xx 時代的 presets 通通被廢棄（deprecated），取而代之的是 babel-preset-env，並且承諾它將成為"未來不會過時的（future-proof ）"解決方案。

> 在 2018 08 Babel 更新了 七版 過去的版本使用的
> npm i babel-core 改成了 npm i @babel/core 相對應其他都是

```
npm i webpack webpack-dev-server webpack-merge css-loader style-loader file-loader url-loader vue-loader vue-hot-reload-api -D

npm i @babel/preset-env @babel/core babel-loader -D @babel/polyfill
```

> "@babel/core": // babel 核心程式
>
> "babel-loader" // webpack 使用的 babel 編譯器
>
> http://babeljs.io/docs/plugins/transform-runtime/
>
> "@babel/preset-env": // 取代原本的 ES2015 支援 ES2015 語法
>
> "css-loader": // webpack 使用於處理 css
>
> "file-loader": // webpack 使用於處理檔案
>
> "style-loader": // webpack 將 css 整合進元件中
>
> "url-loader": // 編譯匯入檔案類型的資源，把檔案轉成 base64
>
> "vue-hot-reload-api": // 支援 Hot Reload
>
> "vue-loader": // 使用 Vue Component Spec
>
> "webpack":
>
> "webpack-dev-server": // webpack 開發伺服器
>
> "webpack-merge": // 合併 webpack 設定參數

### 手動 create webpack.config.js 以及 .babelrc

因為我們範例有使用 es 6 語法 所以預設一定要使用 babel

> @babel/preset-env 這是七版的引用方法

並且在 package.json 加上 "dev" 以及 build 設定

```
dev: "webpack-dev-server --config webpack.config.js --open  --progress --colors"
build: "webpack --devtool eval --progress --colors --content-base dist",
```

- --devtool eval: 將把 source 加到我的 code.
- --progress 與 --colors 只是反應現在程序執行到哪邊。
- --content-base build 將會把 build 裡的 index.html 作為你的啟始網頁
- --open : 會把預設的瀏覽器打開 在 run 的時候

### 設定 webpack dev server run 的時候 預設可以指定 html

我們利用了 HtmlWebpackPlugin .index.html 的 template，它會產生一個檔案叫做 index.html 在我們的 dist 資料夾，而網頁的內容是 .index.html

```
npm i -D html-webpack-plugin
```

然後將 webpack 改成這樣

```
const path = require('path');
const webpack = require('webpack');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
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
  devServer: {
    port: 7777,
    contentBase: './',
    hot: true,
    inline: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
```

> 如果安裝 VUE 一定要設定 resolve 的 alias 才有辦法在 dev server 引用

### 設定 dev server 有辦法 loader .vue file

除了要安裝 vue-loader 也要安裝

```
npm i -D vue-template-compiler
```

> webpack 4 的版本

接著再把 webpack.config 裡面的 rules 改成這樣

```
 module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      }
    ],
  },
```

以及 plugins 改成這樣讓他在跑的時候可以使用 vue loader plugin

```
new VueLoaderPlugin()
```

### 設定其他 loader for webpack

```
npm i -D webpack-merge
npm i -D clean-webpack-plugin
```

1. 使用 uglifyjs-webpack-plugin ( 這在 webpack 4 使用 主要是用來 remove js 空格 等等的東西)

2. css loader

3. html compresser

4. 設定成 hash 檔案

5. clean-webpack-plugin (每次 build 的時候自動清掉 folder 內的所有檔案)

> 其實這裡想法很簡單 就是先把 common 的部分拆開 然後用 webpack merge 的方法把 dev& prod 設定分開
> 基本上可以不拆 沒有太大差異

Common 會長這樣

```
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const buildPath = path.resolve(__dirname, 'dist');
module.exports = {
    entry: {
        'index': './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin([buildPath]),
        new HtmlWebpackPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: buildPath,
        publicPath: '/dist/'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        /**
         * Vue v2.x 之後 NPM Package 預設只會匯出 runtime-only 版本，若要使用 standalone 功能則需下列設定
         */
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [new VueLoaderPlugin()]
};
```

dev 因為加 webpack dev 設定 所以分開來 其實沒有太大差別

```
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const dev = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 7777,
        contentBase: './',
        hot: true,
        inline: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
console.log(dev);
module.exports = dev;
```

- 這裡有一些設定需要注意

> 像是 css loader & style loader 順序

> url-loader 他會把檔案小於你設定的 size 改成 base64string 存在 js 內

> HtmlWebpackPlugin 把你的 index html 搬走

### 遇到es6 語法 build出來 他會跳錯誤

regeneratorRuntime is not defined

這個問題是因為 babel (不安裝額外東西）並不是支持完整的ES6語言，加上瀏覽器也不是支持所有的ES6語言

![Alt text](/images/issue2.jpg)

```
npm install --save-dev @babel/plugin-transform-runtime

npm install --save @babel/runtime
```

### WHY USE PLUGIN

https://hk.saowen.com/a/380f254fc2a0e01fac0d80423af1903353a2d0f3dc0fc47e20abaccb9ae50f06

### 設定 env 參數給 webpack bundle 使用

### 安裝 eslint format

為了我寫的 js code 風格能夠符合規範 + 我希望可以自動幫我修正格式 所以我使用

eslint + airbnb 格式

```
npm install eslint --save-dev
eslint --init
```

> 照著步驟安裝好了以後 在安裝 prettier-vscode
> 然後對著 vs code ( ctrl+shift +p)

> 把下面設定貼上去 讓他可以存檔的時候自動 format

```
{
    "window.zoomLevel": 1,
    "extensions.ignoreRecommendations": false,
    "editor.fontSize": 22,
    "eslint.autoFixOnSave": true,
    "editor.formatOnSave": true,
    "eslint.alwaysShowStatus": true,
    "prettier.singleQuote": true
}
```

> 如果要確定 eslint server 有沒有起來 請看輸出 選 eslint

![Alt text](/images/eslint%20server.jpg)

> 接著測試一下 存檔的功能看一下可不可以


# VUE Route , HTTPS ,VUES

# Reference

https://github.com/qq20004604/webpack-study

https://github.com/github/gitignore

https://segmentfault.com/q/1010000005596587?from=singlemessage&isappinstalled=1

https://segmentfault.com/a/1190000005363030

https://zhuanlan.zhihu.com/p/29506685

https://juejin.im/entry/5acca3ae5188257cc20d9ece

https://medium.com/html-test/webpack-%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B-585f2bc952b9

https://www.ithome.com.tw/news/125533

https://ithelp.ithome.com.tw/articles/10197052

https://webpack.js.org/configuration/dev-server/#devserver-open

https://neighborhood999.github.io/webpack-tutorial-gitbook/Part1/AddMorePlugin.html

https://my.oschina.net/hyzccc/blog/1797358

https://blog.csdn.net/weixin_40814356/article/details/80625747

https://www.kancloud.cn/hfpp2012/webpack-tutorial/467001

https://github.com/chemdemo/chemdemo.github.io/issues/13

https://medium.com/@alphaorange/cwebpack-1-css-loader-68a86fbe389f

# vs code 安裝套件

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

GITLens
ESLint
