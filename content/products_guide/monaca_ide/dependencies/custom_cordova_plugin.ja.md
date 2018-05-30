---
title: ユーザー Cordova プラグイン
weight: 40
aliases: /ja/monaca_ide/manual/dependencies/custom_cordova_plugin
---

{{%excerpt%}}

Cordova プラグインを利用すると、ネイティブ機能をプログラムに簡単に組み込めます。ここでは、ユーザー
Cordova プラグインの作成方法とプロジェクトへの組み込み方法を解説します。

<div class="admonition note">
    ユーザー Cordova プラグインのご利用には、対応するプランへの加入が必要です ( <a href="https://ja.monaca.io/pricing.html">料金プラン</a> を参照のこと )。
</div>

ユーザー Cordova プラグインは、以下の要件を満たす必要があります。

-   Cordova 4.2 以上との互換性
-   `plugin.xml` ファイルを使用すること、および、`plugman` ( コマンド
    ライン ツール ) を使用してインストールができること
-   iOS と Android のサポート

さまざまな Cordova プラグインをインターネット上で見つけることができますが、メンテナンスが不十分だったり、バージョンが古い場合があります。そのため、ここでは、プラグインを最初から自作する方法について解説します。

## ユーザー Cordova プラグインの構成

Cordova プラグインの典型的なディレクトリー構成を、次に記します (
ディレクトリー名には、太字を使用 )。

- *plugin_name*
    - *src*
        - *ios*
            - plugin_name.h
            - plugin_name.h
    - *www*
        - plugin_name.js
    - plugin.xml

最初にサンプルプラグインのコードを、次のリンクからダウンロードします (
zip ファイル )。

<div class="download">
    <a class="reference internal" href="/download/cordova_plugin_sample.zip" download="">
        サンプル Cordova プラグインのダウンロード
    </a>
</div>

パッケージを解凍すると、次のようなディレクトリー構成が表示されます。

<figure>
    <img data-action="zoom" src="/images/monaca_ide/manual/dependencies/custom_cordova_plugin/1.png" width="">
    <figcaption>
        
    </figcaption>
</figure>

### plugin.xml ファイル

`plugin.xml` ファイルとは、プラグインの設定ファイルであり、プラグインの詳細が定義されています。詳細は、[Cordova
プラグインの仕様 ( 英語サイト )](http://cordova.apache.org/docs/en/latest/plugin_ref/spec.html)
をご確認ください。

先ほどダウンロードしたサンプルプラグインの `plugin.xml`
ファイルの内容を、次に記します。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
  id="jp.co.asial.helloworld"
  version="0.0.1">

    <name>HelloWorldPlugin</name>
    <description>HelloWorldPlugin Description</description>
    <author>Asial Corporation</author>
    <license>Apache 2.0 License</license>
    <engines>
        <engine name="cordova" version=">=3.5.0" />
    </engines>
    <js-module src="www/hello_world.js" name="helloworld">
        <clobbers target="HelloWorld" />
    </js-module>

    <platform name="ios">
        <config-file target="config.xml" parent="/*">
            <feature name="HelloWorldPlugin">
                <param name="ios-package" value="HelloWorldPlugin"/>
            </feature>
    </config-file>
    <header-file src="src/ios/HelloWorldPlugin.h" target-dir="src/ios" />
        <source-file src="src/ios/HelloWorldPlugin.m" target-dir="src/ios" />
    </platform>
    <platform name="android">
        <config-file target="res/xml/config.xml" parent="/*">
            <feature name="HelloWorldPlugin">
                <param name="android-package" value="mobi.monaca.HelloWorldPlugin"/>
            </feature>
        </config-file>
        <source-file src="src/android/mobi/monaca/HelloWorldPlugin.java" target-dir="src/mobi/monaca" />
    </platform>

</plugin>
```

### hello_world.js ファイル

`hello_world.js` は、`plugin.xml` ( 前述のプラグインの定義ファイル ) 内の
`js-module` で指定されています。このため、 `cordova.js`
から自動で読み込まれます ( この処理は、 `loader.js` 内に記述されています )。

```javascript
var HelloWorld = function() {};

HelloWorld.prototype.say = function(success, fail) {
    cordova.exec(success, fail, "HelloWorldPlugin","say", []);
};

var helloWorld = new HelloWorld();
module.exports = helloWorld;
```

Cordova のコールバック関数の記法については、[プラグインの開発ガイド (英語サイト)](http://cordova.apache.org/docs/en/latest/guide/hybrid/plugins/index.html) をご確認ください。

### iOS と Android のネイティブコード

プラットフォームにもよりますが、ネイティブコードは、Objective-C または
Java になります。関数名は、JavaScript
ファイルで定義した名と同じものを使用します。また、コールバック関数は非同期で呼び出されます。

ネイティブコードの開発に関しては、次のリンクをご確認ください。

-   [Android 向けプラグインの開発 ( 英語サイト )](http://cordova.apache.org/docs/en/latest/guide/platforms/android/plugin.html)
-   [iOS 向けプラグインの開発 ( 英語サイト )](http://cordova.apache.org/docs/en/latest/guide/platforms/ios/plugin.html)

## ユーザー Cordova プラグインのインポート

ユーザー Cordova プラグインをインポートする場合、次の手順に従います。

1.  Monaca クラウド IDE のメニューから、<span class="guilabel"><b>
設定 → Cordova プラグインの管理</b></span> を選択します。

2.  Cordova プラグインページが表示されます。<span class="guilabel">Cordova プラグインのインポート</span> ボタンをクリックします。

    <img src="/images/monaca_ide/manual/dependencies/custom_cordova_plugin/import.png" width="" class="single_img">

3.  プラグインファイル ( zip ファイル ) を選択し、<span class="guilabel">OK</span> をクリックします。

    <img src="/images/monaca_ide/manual/dependencies/custom_cordova_plugin/upload.png" width="" class="single_img">

## ユーザー Cordova プラグインと Monaca デバッガー

App Store または Google Play で入手できる Monaca
デバッガーは、通常版のデバッガーです。こちらの通常版 Monaca
デバッガーには、基本 Cordova プラグイン ( Cordova コアプラグイン )
とサードパーティー製の Cordova プラグイン ( Monaca
側であらかじめ提供しているサードパーティー製のプラグインとその詳細は、[サードパーティー製 Cordova プラグイン](/ja/reference/third_party_phonegap/) を参照のこと )
のみが実装されています。このため、デフォルトの状態では、ユーザー Cordova
プラグインまたは外部の Cordova プラグイン ( 第三者が提供する、Monaca
側で用意しているプラグイン以外 )
は、デバッガー上で使用できません。これらのプラグインを使用する場合、Monaca
デバッガーをカスタムビルドする必要があります。

カスタムビルド版の Monaca デバッガーは、Monaca クラウド IDE
上でビルドするデバッガーです ( ユーザー Cordova プラグインまたは外部の
Cordova プラグインを組み込んだプロジェクトを使用してビルドします
)。カスタムビルド版デバッガーのビルド方法、および、通常版とカスタムビルド版のデバッガーの相違に関しては、次のリンク先をご確認ください。

- [iOS 用カスタムビルド版 Monaca デバッガーのビルド方法](/ja/products_guide/debugger/installation/debugger_ios/#カスタムビルド版-monaca-デバッガーのビルド方法)
- [Android 用カスタムビルド版 Monaca デバッガーのビルドとインストール](/ja/products_guide/debugger/installation/debugger_android/#カスタムビルド版-monaca-デバッガーのビルドとインストール)

<div class="admonition note">
カスタムビルド版デバッガーをビルドする前に、ユーザー Cordova
プラグインまたは外部の Cordova プラグインを必ず 「 インポート 」
してください。
</div>

また、ユーザー Cordova プラグイン開発の技術支援 ( 有料 )
も、弊社にて承っております。サポートチームまで、お気軽に詳細を
[お問い合わせ](https://ja.monaca.io/service/index.html) ください。

## ユーザー Cordova プラグインの検証

1.  Monaca クラウド IDE
    上でプロジェクトを作成します。ここでは、`最小限のテンプレート` を使用します。
2.  [ユーザー Cordova プラグインの構成](#ユーザー-cordova-プラグインの構成) でダウンロードしたユーザー Cordova
    プラグインのサンプルをインポートします。
3.  `index.html` ファイルへ次のコードを追加します ( ユーザー Cordova プラグインのサンプルを使用して、メッセージダイアログを表示するコードです )。

    ```javascript
<script>
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        window.HelloWorld.say(
            function(result) { alert( "success: " + result ); },
            function(error) { alert( "error: " + error ); }
        );
    }
</script>
    ```

4.  通常版の Monaca デバッガー上でプロジェクトを実行してみましょう。ユーザー Cordova プラグインが標準デバッガーに存在しないため、メッセージダイアログは表示されません。

5.  カスタムビルド版 Monaca デバッガーをビルドします。ビルド方法につきましては、次のリンク先をご確認ください。

    - [iOS 用カスタムビルド版 Monaca デバッガーのビルド方法](/ja/products_guide/debugger/installation/debugger_ios/#カスタムビルド版-monaca-デバッガーのビルド方法)
    - [Android 用カスタムビルド版 Monaca デバッガーのビルドとインストール](/ja/products_guide/debugger/installation/debugger_android/#カスタムビルド版-monaca-デバッガーのビルドとインストール)

6.  カスタムビルド版 Monaca デバッガーをインストールします。
7.  デバッガーを起動させ、ログイン画面上で <span class="guilabel">デバッガー情報</span>
    をタップします。

    <figure>
        <img data-action="zoom" src="/images/monaca_ide/manual/dependencies/custom_cordova_plugin/4.png" width="350">
        <figcaption>
            
        </figcaption>
    </figure>

8.  デバッガー情報に、追加したユーザー Cordova
    プラグインが表示されていることを確認します (
    下のスクリーンショットを参照のこと )。

    <figure>
        <img data-action="zoom" src="/images/monaca_ide/manual/dependencies/custom_cordova_plugin/5.png" width="350">
        <figcaption>
                
        </figcaption>
    </figure>

9.  デバッガーにログインして、ユーザー Cordova
    プラグインを追加したプロジェクトを実行します。メッセージダイアログが表示されることを確認します。

    <figure>
        <img data-action="zoom" src="/images/monaca_ide/manual/dependencies/custom_cordova_plugin/6.png" width="350">
        <figcaption>
                
        </figcaption>
    </figure>

{{%/excerpt%}}