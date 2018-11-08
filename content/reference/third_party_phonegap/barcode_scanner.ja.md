---
title: BarcodeScanner プラグイン
weight: 10
---

{{<note>}}
BarcodeScanner プラグイン ( Monaca クラウド IDE に組み込まれているプラグイン ) は、Android バージョン 6 以上では動作しません。また、プロジェクトの Cordova バージョンが 6.5 の場合、iOS では動作しない場合があります。プラグインが動作しない場合は、Cordova 7.1 で提供している {{<link href="https://docs.monaca.io/ja/reference/third_party_phonegap/phonegap_plugin_barcodescanner/" title="PhoneGap BarcodeScanner プラグイン">}} をご使用下さい。
{{</note>}}

## プラグインの追加方法 ( Monaca 上での処理 )

1.  Monaca クラウド IDE から {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} を選択します。

2.  *利用可能なプラグイン* 項目の `BarcodeScanner` プラグインにカーソルを置き、{{<guilabel name="有効">}} ボタンをクリックします。

    {{<img src="/images/reference/third_party_phonegap/barcode_scanner/1.png">}}

## BarcodeScanner プラグインのデモ

BarcodeScanner プラグインの使用例を、次に記します。

{{<highlight javascript>}}
<!DOCTYPE HTML>
<html>
<head>
    <title>Barcode Scanner DEMO</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <script src="components/loader.js"></script>
    <link rel="stylesheet" href="components/loader.css">

    <script type="text/javascript">

    function scanBarcode() {
        window.plugins.barcodeScanner.scan( function(result) {
                alert("We got a barcode\n" +
                          "Result: " + result.text + "\n" +
                          "Format: " + result.format + "\n" +
                          "Cancelled: " + result.cancelled);
            }, function(error) {
                alert("Scanning failed: " + error);
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