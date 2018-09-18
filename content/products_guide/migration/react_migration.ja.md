---
title: React からの移行
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
$ npm run eject
$ npm install
{{</highlight>}}
</li>

<li>
ウォッチスクリプトがないので、ウォッチスクリプトを下の手順で作成します。
  <ul>
  <li><b>scripts/build.js</b> を <b>scripts/watch.js</b>としてコピーする</li>
  <li><b>build</b> 関数を下のように変更する </li>
  </ul>
{{<highlight javascript>}}
function build(previousFileSizes) {
  console.log('Creating an optimized production build...');
  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.watch({},(err, stats) => {
      if (err) {
        return reject(err);
      } else {
        copyPublicFolder();
      }
      console.log(stats.toString({
        chunks: false,
        colors: true
      }));
    });
  });
}
{{</highlight>}}
</li>

<li>
次に、プロジェクトをMonacaのプロジェクト構造に変換するために<b> monaca init </b>を実行します。
{{<highlight bash>}}
$ monaca init
$ ...
$ ? Are you sure you want to continue initializing this project? Yes
$ ? Is it a transpilable project? Yes
$ ? Which command do you use to serve the app? node scripts/start.js
$ ? Which command do you use to build the app? node scripts/build.js
$ ? Which command do you use to watch the changes from your app? node scripts/watch.js
{{</highlight>}}

次のように<b> package.json </b>ファイルに3つの新しいコマンドを注入する必要があります：

{{<highlight javascript>}}
"scripts": {
    "monaca:preview": "node scripts/start.js & node scripts/watch.js",
    "monaca:transpile": "node scripts/build.js",
    "monaca:debug": "node scripts/watch.js"
}
{{</highlight>}}

</li>

<li>Config ビルド出力ディレクトリ

<ul>
<li>
「<b>scripts/build.js</b>」と「<b>scripts/watch.js</b>」を開き、fs.emptyDirSync（paths.appBuild）を削除します。  
関数のmeasureFileSizesBeforeBuildからビルドディレクトリが削除されないようにします。
</li>
<li>
「config/paths.js」を開き、appBuildディレクトリとservePathを次のように変更します
</li>
</ul>

{{<highlight javascript>}}
module.exports = {
    appBuild: resolveApp('www'),
    servedPath: './'
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
