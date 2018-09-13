---
title: "Cordova Ionic Keyboard プラグイン"
weight: 120
---

Cordova アプリ用のキーボードプラグインです。

- Repo: https://github.com/ionic-team/cordova-plugin-ionic-keyboard
- Plugin ID/Package Name: `cordova-plugin-ionic-keyboard`
- Tested Version: `2.1.2`

## デモ 

{{<import pid="5b29e4e1e788857854dba6d9" title="Ionic Keyboard Demo">}}

{{<figure src="/images/samples/ionic_keyboard.png">}}

## Monaca クラウド IDE でプラグインを有効にする

1. IDE メニューから {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} へ移動します。

2. {{<guilabel name="Cordova プラグインのインポート">}}  ボタンをクリックします。 次に、[ZIP ファイル] または [パッケージ名 / URL] を使用してプラグインをインポートします。

## API リファレンス

このページでは、[デモ](https://monaca.mobi/directimport?pid=5b29e4e1e788857854dba6d9) で使用されている主な API についてのみ説明します。APIリファレンスについては、[こちら](https://github.com/ionic-team/cordova-plugin-ionic-keyboard) を参照してください。

### show()

キーボードを表示します。

{{<highlight javascript>}}
Keyboard.show();
{{</highlight>}}

{{<note>}}
    <code>Keyboard.show()</code> は、プラットフォームの制限により、iOS ではサポートされていません。 代わりに <code>input</code> エレメントの <code>focus()</code> を使用してください。
{{</note>}}    

**例**

{{<highlight javascript>}}

//For Android
Keyboard.show();

//For iOS
inputElement.focus();
{{</highlight>}}


### hide()

キーボードを非表示にします。

{{<highlight javascript>}}
Keyboard.hide();
{{</highlight>}}

**例**

{{<highlight javascript>}}
Keyboard.hide();
{{</highlight>}}

