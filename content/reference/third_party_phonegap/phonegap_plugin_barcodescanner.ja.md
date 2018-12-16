---
title: PhoneGap BarcodeScanner プラグイン
weight: 10
---

{{<note>}}
PhoneGap BarcodeScanner プラグインは、Cordova 7.1 から利用することができます。
<br />
Android カスタムビルドデバッガーで使用する場合は、config.xml に次の設定をしてビルドする必要があります。
<br /><br />
&lt;reference name="monaca:ANDROID_DEBUGGER_APPCOMPAT_VERSION" value="27.+" /&gt;
{{</note>}}

{{<note>}}
Cordova 7.1 で提供している MonacaBackend プラグインと組み合わせる場合は、プラグイン設定画面の「インストールパラメータ」に下記の設定が必要になります。
<br /><br />
ANDROID_SUPPORT_V4_VERSION=26.+
{{</note>}}

## iOS 特有の動作

iOS 10以降、プライバシーに関連するデータにアクセスする場合は、 `info.plist` に使用の説明を設定することが必須になります。アクセスを許可するようにシステムに指示すると、この使用の説明はアクセス許可ダイアログボックスの一部として表示されますが、使用の説明を入力しない場合は、ダイアログが表示される前にアプリが強制終了します。また、Apple は個人データにアクセスするアプリをリジェクトしますが、使用の説明は提供していません。

このプラグインでは、次の使用の説明が必要になります。

- `NSCameraUsageDescription` には、アプリがユーザーのカメラにアクセスする理由を記述します。

この設定を `info.plist` に追加するには、`config.xml` ファイルの `<edit-config>` タグに以下のように設定します。

{{<highlight xml>}}
<edit-config target="NSCameraUsageDescription" file="*-Info.plist" mode="merge">
    <string>To scan barcodes</string>
</edit-config>
{{</highlight>}}

## プラグインの追加方法 ( Monaca 上での処理 )

1.  Monaca クラウド IDE から {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} を選択します。

2.  *利用可能なプラグイン* 項目の `Phonegap BarcodeScanner` プラグインにカーソルを置き、{{<guilabel name="有効">}} ボタンをクリックします。

    {{<img src="/images/reference/third_party_phonegap/phonegap_plugin_barcodescanner/1.png">}}

## PhoneGap BarcodeScanner プラグインのデモ

PhoneGap BarcodeScanner プラグインの使用例を、次に記します。

{{<highlight javascript>}}
<!DOCTYPE HTML>
<html>
<head>
  <title>PhoneGap BarcodeScanner Plugin DEMO</title>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta http-equiv="Content-Security-Policy" content="default-src * data: gap: https://ssl.gstatic.com; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'">
  <script src="components/loader.js"></script>
  <link rel="stylesheet" href="components/loader.css">
  <link rel="stylesheet" href="css/style.css">
  <script>
    function scanBarcode() {
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
        },
        function (error) {
          alert("Scanning failed: " + error);
        },
        {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
        }
      );
    }
  </script>
</head>
<body>
  <hr> BarcodeReader DEMO <hr><br>
  <input type="button" onClick ="scanBarcode()" value ="Scan" />
</body>
</html>
{{</highlight>}}

関連項目:

- [基本プラグイン](../../cordova_7.1)
- [Monaca 提供プラグイン](../../power_plugins)
