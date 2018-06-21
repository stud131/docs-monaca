---
title: "Cordova AppVersion プラグイン"
weight: 110
---

この Cordova/PhoneGap プラグインは、対象のビルド設定からアプリ情報を取得します。

- Repo: https://github.com/whiteoctober/cordova-plugin-app-version
- Plugin ID/Package Name: `cordova-plugin-app-version`
- Tested Version: 0.1.9

## デモ 

{{<import pid="5b29c488e78885f330dba6cf" title="AppVersion Plugin デモ">}}

{{<figure src="/images/samples/app_version.png">}}

## Monaca クラウド IDE でプラグインを有効にする

1. IDE メニューから {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} へ移動します。

2. {{<guilabel name="Cordova プラグインのインポート">}}  ボタンをクリックします。 次に、[ZIP ファイル] または [パッケージ名 / URL] を使用してプラグインをインポートします。

## API リファレンス

このページでは、[デモ](https://monaca.mobi/directimport?pid=5b29c488e78885f330dba6cf) で使用されている主な API についてのみ説明します。API リファレンスについては、[こちら](https://github.com/whiteoctober/cordova-plugin-app-version) を参照してください。

### getAppName()

アプリの名前を取得します。

{{<highlight javascript>}}
cordova.getAppVersion.getAppName()
{{</highlight>}}

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
cordova.getAppVersion.getAppName(function (appName) {
    alert( appName );
});
{{</highlight>}}

### getPackageName()

アプリのパッケージ名を取得します。

{{<highlight javascript>}}
cordova.getAppVersion.getPackageName()
{{</highlight>}}

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
cordova.getAppVersion.getPackageName(function (packName) {
    alert( packageName );
});
{{</highlight>}}

### getVersionCode()

アプリのバージョンコードを取得します。

{{<highlight javascript>}}
cordova.getAppVersion.getVersionCode()
{{</highlight>}}

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
cordova.getAppVersion.getVersionCode(function (verCode) {
    alert( versionCode );
});
{{</highlight>}}

### alertVersionNum()

アプリのバージョン番号を取得します。

{{<highlight javascript>}}
cordova.getAppVersion.alertVersionNum()
{{</highlight>}}

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
cordova.getAppVersion.getVersionNumber(function (versionNum) {
    alert( versionNum );
});
{{</highlight>}}

