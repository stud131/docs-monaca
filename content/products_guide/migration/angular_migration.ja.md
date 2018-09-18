---
title: Angular からの移行
weight: 30
---

このページでは、[Monaca CLI](/ja/products_guide/monaca_cli/)を使用して、
プロジェクトを Monaca に移行するための手順を説明します。  
このガイドを終えたら、Monaca を使って プロジェクトからアプリを実行、テスト、デバッグ、ビルドすることができます！始めましょう！

## 前提条件

1. 移行を開始する前に、[キーポイント](/ja/products_guide/migration/vue_migration/introduction/)を一読ください。

2. Monaca CLI を npm でグローバルにインストールする。
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
次に、プロジェクトをMonacaのプロジェクト構造に変換するために <code>monaca init</code> を実行します。
{{<highlight bash>}}
$ monaca init
$ ...
$ ? Are you sure you want to continue initializing this project? Yes
$ ? Is it a transpilable project? No
$ ? Which command do you use to serve the app? ng serve --base-href='.'
$ ? Which command do you use to build the app? ng build --base-href='.' --output-path='www'
$ ? Which command do you use to watch the changes from your app? ng build --base-href='.' --output-path='www' --watch
{{</highlight>}}

次のように<b> package.json </b>ファイルに3つの新しいコマンドを注入する必要があります：

{{<highlight javascript>}}
"scripts": {
    "monaca:preview": "ng serve --base-href='.' & ng build --base-href='.' --output-path='www' --watch",
    "monaca:transpile": "ng build --base-href='.' --output-path='www'",
    "monaca:debug": "ng build --base-href='.' --output-path='www' --watch"
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
