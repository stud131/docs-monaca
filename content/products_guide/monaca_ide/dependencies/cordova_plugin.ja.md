---
title: Cordova プラグイン
weight: 30
aliases: /ja/monaca_ide/manual/dependencies/cordova_plugin
---

{{%excerpt%}}
<!-- using full HTML code for other shortcodes otherwise `excerpt` shortcode will break them -->

カメラ、ファイルシステム、端末側のストレージなど、端末側のネイティブ機能を使用する場合には、通常、ネイティブコードが必要となりますが、Cordova
を使用すれば、JavaScript
を使用して、これらのネイティブ機能へアクセスすることができます。

具体的には、Cordova が提供しているデバイス系の API
を使用すれば、端末側のネイティブ機能に、JavaScript
からアクセスできるようになります。Monaca では、Cordova
を採用し、JavaScript
経由で、ハイブリッドアプリ内から端末側のネイティブ機能へアクセスしています。

Cordova に関する詳細は、 [こちら](https://cordova.apache.org/)
をご確認ください。

## Cordova の読み込み

Cordova が完全に読み込まれる前に、デバイス API (Cordova プラグイン) を使用することはできません。`deviceready` イベントは、Cordova が完全に読み込まれた際に起動します。 deviceready イベント発生後、安全に Cordova API を呼び出すことができます。 アプリケーションは通常、HTML ドキュメントの DOM がロードされると、イベントリスナを `document.addEventListener` でアタッチします。

例として、Camera API を使用して Camera 機能を起動します。 下記のコードをコピーして Monaca クラウド IDE のプロジェクトに貼り付け、[Monaca デバッガー](/ja/products_guide/debugger) で実行してみましょう。

<div class="admonition note">
このコードは、Cordova 4.1 向けです。端末の種類によっては、動作が異なる場合があります。
</div>

```html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no">
    <script src="components/loader.js"></script>
    <script>
        document.addEventListener ("deviceready", onDeviceReady, false);

        //these functions runs when Cordova is ready
        function onDeviceReady () {
            alert ('Cordova is ready!');
        }

        function snapPicture () {
            navigator.camera.getPicture (successCallback, FailCallback, {destinationType: Camera.DestinationType.DATA_URL});

            //Success Callback
            function successCallback (imageData) {
                //Display image
                var image = document.getElementById ('picture');
                image.src = "data:image/jpeg;base64, " + imageData;
            }

            //Error CallBack
            function FailCallback (message) {
                alert ('Error!!!: ' + message);
            }
        }
    </script>
</head>
<body>
    <h1>Camera Sample</h1>
    <input type="button" onclick="snapPicture()" value="Snap" ><br><br>
    <img id="picture" src="" width="150" height="150">
</body>
</html>
```

## Cordova のバージョン変更

<div class="admonition note">
    MonacaのCordovaバージョンはダウングレードできません。
</div>

<div class="admonition note">
    Cordovaバージョンをアップグレードすると、プロジェクトのバックアップが変換前に自動的に作成されます。
</div>

新規に作成されたプロジェクトについては、Monaca で利用可能な最新の Cordova バージョンが自動的に適用されます。

プロジェクトの Cordova バージョンのアップグレードは、次の手順になります。

1.  Monaca クラウド IDE から、 <span class="guilabel"><b>
設定 → Cordova プラグインの管理</b></span> を選択します。

2.  ドロップダウンリストから対象の Cordova バージョンを選択します。

    <img src="/images/monaca_ide/manual/dependencies/cordova_plugin/3.png" width="" class="single_img">

## Monaca 側で用意している Cordova プラグイン

Monaca クラウド IDE の Cordova プラグインページから直接、「 基本プラグイン 」と、いくつかの「 サードパーティー製プラグイン」を簡単に有効にすることができます。

-   基本プラグインとは、バッテリー情報の取得 API、カメラ API、住所録の取得 API、端末情報の取得 API など、以前から Cordova 側で提供していた API を指します。詳細は、 [ 基本プラグイン ](/ja/reference/cordova_6.5/) をご確認ください。

-   サードパーティー製プラグインとは、上記以外の Cordova プラグインを指します。Monaca クラウド IDE でも、複数の [サードパーティー製プラグイン](/ja/reference/third_party_phonegap/) を提供しており、プロジェクトに追加することができます。

<figure>
    <img data-action="zoom" src="/images/monaca_ide/manual/dependencies/cordova_plugin/built-in_plugins.png" width="">
    <figcaption>
        Built-in Cordova Plugins
    </figcaption>
</figure>

## Cordova プラグイン のインポート

プロジェクトへの Cordova プラグインのインポートは、次の手順になります。

1.  Monaca クラウド IDE 上で、 <span class="guilabel"><b>
設定 → Cordova プラグインの管理</b></span> を選択します。

2.  [ Cordova プラグイン ] ページが表示されます。ここでは、基本プラグインとサードパーティー製プラグインが一覧表示されます。プロジェクトにプラグインを追加する場合には、対象プラグインの横に表示された <span class="guilabel">有効</span> ボタンをクリックします ( 対象のプラグインのアイコン上に、マウスを持ってきます )。希望するプラグインが一覧上にない場合には、<span class="guilabel">Cordova プラグインのインポート</span> ボタンをクリックして、サードパーティー製ラグインもインポートできます。なお、サードパーティー製プラグインを追加したプロジェクトを、Monaca デバッガー上で実行する場合には、カスタムビルド版の Monaca デバッガーが必要になります。詳細は、[ユーザー Cordova プラグインと Monaca デバッガー ]({{<ref "custom_cordova_plugin.ja.md#ユーザー-cordova-プラグインと-monaca-デバッガー">}}) をご確認ください。

    <img src="/images/monaca_ide/manual/dependencies/cordova_plugin/1.png" width="" class="single_img">

3.  プラグインを有効化またはインポートした後、プラグイン側の設定を行う必要があれば、対象のプラグインの横に表示された <span class="guilabel">設定</span> ボタンをクリックします ( 対象のプラグインのアイコン上に、マウスを持ってきます )。設定用のダイアログが表示されるので、プラグインのバージョン、必要なパラメーターなどを設定します。

    <img src="/images/monaca_ide/manual/dependencies/cordova_plugin/config_plugin.png" width="" class="single_img">

    <figure>
        <img data-action="zoom" src="/images/monaca_ide/manual/dependencies/cordova_plugin/parameter.png" width="">
        <figcaption>
            Setting Dialog
        </figcaption>
    </figure>

{{%/excerpt%}}