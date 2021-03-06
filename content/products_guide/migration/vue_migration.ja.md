---
title: Vue からの移行
weight: 30
---

このページでは、[Monaca CLI](/ja/products_guide/monaca_cli/)を使用して、
プロジェクトを Monaca に移行するための手順を説明します。このガイドを終えたら、Monaca を使って プロジェクトからアプリを実行、テスト、デバッグ、ビルドすることができます！始めましょう！

## 前提条件

1. 移行を開始する前に、[キーポイント](/ja/products_guide/migration/key_point/)を一読してみてください。

2. Monaca CLI を npm でグローバルにインストールする
{{<highlight bash>}}
$ npm install -g monaca
{{</highlight>}}

## 移行手順

<ol>

<li>
Monaca CLIのインストール後、Monacaアカウントでログインしてください。
{{<highlight bash>}}
$ monaca login
{{</highlight>}}
</li>

<li>
プロジェクトディレクトリに移動します。
{{<highlight bash>}}
$ cd <project dir>
{{</highlight>}}
</li>

<li>
次に、プロジェクトをMonacaのプロジェクト構造に変換するために<b> monaca init </b>を実行します。
{{<highlight bash>}}
$ monaca init
$ ...
$ ? Are you sure you want to continue initializing this project? Yes
$ ? Is it a transpilable project? Yes
$ ? Which command do you use to serve the app? vue-cli-service serve
$ ? Which command do you use to build the app? vue-cli-service build --dest www --no-clean
$ ? Which command do you use to watch the changes from your app? vue-cli-service build --dest www --no-clean --watch
{{</highlight>}}

次のように<b> package.json </b>ファイルに3つの新しいコマンドを注入する必要があります：

{{<highlight javascript>}}
"scripts": {
    "monaca:preview": "vue-cli-service serve & vue-cli-service build --dest www --no-clean --watch",
    "monaca:transpile": "vue-cli-service build --dest www --no-clean",
    "monaca:debug": "vue-cli-service build --dest www --no-clean --watch"
}
{{</highlight>}}

</li>

<li>Config ビルド出力ディレクトリ
<p>
<b> vue.config.js </b>を作成し、<b> file：// </b>プロトコルで<b> index.html </b>を提供できるように次のコンテンツを追加します。
</p>

{{<highlight javascript>}}
module.exports = {
    baseUrl: './'
}
{{</highlight>}}

</li>
</ol>

## アプリをデバッグする
{{% include "parts/products_guide/migration/debug_with_cli.ja.md" %}}

## アプリをビルドする
{{% include "parts/products_guide/migration/build_app.ja.md" %}}

## 参考ページ

- [Monaca CLI チュートリアル](/ja/tutorials/monaca_cli/)
- [Monaca CLI マニュアル](/ja/products_guide/monaca_cli/)
- [サンプルアプリ](/ja/sampleapp/samples/)
