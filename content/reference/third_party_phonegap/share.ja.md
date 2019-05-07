---
title: Share プラグイン ( Android 向け )
weight: 40
---

Share プラグインを使用すれば、他のアプリ ( Gmail、Dropbox など )
とデータを共有できます。

{{<note>}}
このプラグインは、Android プラットフォーム専用です。
{{</note>}}

## プラグインの追加方法 ( Monaca 上での処理 )

1.  Monaca クラウド IDE から {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} を選択します。

2.  *利用可能なプラグイン* 項目の `Share` プラグインにカーソルを置き、{{<guilabel name="有効">}} ボタンをクリックします。

    {{<img src="/images/reference/third_party_phonegap/share/1.png">}}

## メソッド

関数名 | 解説
-------------|----------------------------------------------------------
show(func)   | データを共有するアプリの一覧を表示して、アプリの選択後に、データの共有を行います。                               

## Share プラグインの記述例

{{<highlight html>}}
<!DOCTYPE HTML>
<html>
<head>
  <title>Cordova - Share Plugin Demo</title>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta http-equiv="Content-Security-Policy" content="default-src * data: gap: content: https://ssl.gstatic.com; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'">
  <script src="components/loader.js"></script>
  <link rel="stylesheet" href="components/loader.css">

  <script type="text/javascript">

    function shareDemo() {
      window.plugins.share.show(
          {
              subject: 'Subject test',
              text: 'text http://phonegap-fan.com/'
          },
          function() {}, // Success function
          function() {alert('Share failed')} // Failure function
      );
    }
  </script>
</head>

<body bgcolor="#ffffff">
  <hr> Share Plugin Demo<hr><br>
  <input type="button" onClick ="shareDemo()" value ="shareDemo" />
</body>
</html>
{{</highlight>}}

関連項目:

- [基本プラグイン](../../cordova_7.1)
- [Monaca 提供プラグイン](../../power_plugins)
