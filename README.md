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

> 在2018 08 Babel更新了 七版 過去的版本使用的 
> npm i babel-core 改成了 npm i @babel/core  相對應其他都是


```
npm i webpack webpack-dev-server webpack-merge css-loader style-loader file-loader url-loader vue-loader vue-hot-reload-api -D

npm i @babel/preset-env @babel/core babel-loader -D @babel/polyfill

```



> "@babel/core": // babel 核心程式
>
> "babel-loader" // webpack 使用的 babel 編譯器
>
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

因為我們範例有使用es 6語法 所以預設一定要使用babel 
>@babel/preset-env 這是七版的引用方法

並且在 package.json 加上 "dev" 以及build 設定

```
webpack-dev-server --devtool eval --progress --colors --content-base build
"webpack --devtool eval --progress --colors --content-base dist",
```

- --devtool eval: 將把 source 加到我的 code.
- --progress 與 --colors 只是反應現在程序執行到哪邊。
- --content-base build 將會把 build 裡的 index.html 作為你的啟始網頁


# Reference

https://github.com/qq20004604/webpack-study

https://github.com/github/gitignore

https://segmentfault.com/q/1010000005596587?from=singlemessage&isappinstalled=1

https://segmentfault.com/a/1190000005363030

https://zhuanlan.zhihu.com/p/29506685

https://juejin.im/entry/5acca3ae5188257cc20d9ece

https://medium.com/html-test/webpack-%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B-585f2bc952b9

https://www.ithome.com.tw/news/125533

