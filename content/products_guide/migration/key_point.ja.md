---
title: 移行時の確認ポイント
weight: 10
---

プロジェクトをMonacaに移行する前に、下記の点を確認してください。

## ビルド環境 

新規に作成されたプロジェクトは、Monacaでサポートしている最新のCordovaバージョン（現在は<b> Cordova 7.1 </b>）を使用します。

|Cordova |Android platform|iOS platform|Windows platform|
|:-:|:-:|:-:|:-:|
| **cordova-7.1.0** |**6.4.0** |**4.5.4** |**5.0.0**|


旧Cordovaバージョンのビルド環境の詳細については、[こちら](/ja/environment/)を参照ください。

## インストール済みプラグイン

Monacaでは、Cordovaプラグインは `package.json`ファイルによって管理されます。  

プラグイン情報が `config.xml`ファイルで定義されている場合は、それらを再度Monacaのプラグイン管理画面でインポートする必要があります。
詳細は[こちら](/ja/products_guide/monaca_ide/dependencies/cordova_plugin/#import-cordova-plugins)を参照ください。

## サードパーティ製プラグイン

ストアバージョンの Monaca Debugger（Google PlayまたはAppStore）には[コア Cordovaプラグイン](/ja/reference/cordova_6.5/) が含まれています。

コア Cordovaプラグイン以外のサードパーティCordovaプラグインを含める場合は、カスタムデバッガをビルドする必要があります。カスタムデバッガは、サードパーティ製プラグインも含めてプロジェクトで使用されているプラ​​グインが含まれます。  

詳細は下の項目を参照してください：

- [iOS用 Monaca デバッガー]({{<ref "/products_guide/debugger/installation/debugger_ios.ja.md#how-to-build-custom-monaca-debugger">}})
- [Android用 Monaca デバッガー]({{<ref "/products_guide/debugger/installation/debugger_android.ja.md#build-and-install-custom-monaca-debugger">}})

## JS/CSS コンポーネント

CSS/JavaScript ライブラリを管理するための専用画面があります。

- Monaca CLI では、コマンド `monaca remote config` にてプロジェクトディレクトリから開くことができます。
- Monaca Localkit では、`設定`メニューをクリックすると画面を開くことができます。
  
{{<img src="/images/migration/js_css_components.png">}}

さまざまなCSS/JavaScriptライブラリを追加できます。ただし、次の2行を`index.html`ファイルに含めた場合にのみ動作します。

{{<highlight html>}}
<!--Load selected JavaScript libraries-->
<script src="components/loader.js"></script>
<!--Load selected CSS libraries-->
<link rel="stylesheet" href="components/loader.css"> 
{{</highlight>}}

`loader.js` ファイルも`cordova.js`を内部の処理にてロードしています。  
そのため、上記の行をインクルードする場合は、下記の行を削除することができます。

{{<highlight html>}}
<script src="cordova.js"></script>
{{</highlight>}}

## その他の注意点

-  トランスパイルの出力先フォルダは `www` である必要があります。
  -  Monacaの各種プロダクトは、`www` ディレクトリを対象に読み込み処理を実施しています。
-  `file：//` をとおして `index.html` が開けることを確認してください。

   
**参考ページ**

- [他のプラットフォームからの移行](/ja/products_guide/migration/)
- [サンプル アプリ](/ja/sampleapp/samples/)