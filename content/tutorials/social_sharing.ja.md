---
title: "Cordova Social Sharing プラグイン"
weight: 130
---

この Cordova プラグインでは、ソーシャルネットワーク、SMS、電子メール経由のテキスト、ファイル、画像、リンクを共有を行います。

- Repo: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
- Plugin ID/Package Name: `cordova-plugin-x-socialsharing`
- Tested Version: `5.4.0`

{{<note>}}
サードパーティー製 Cordova プラグインを確認する場合は、カスタムビルドデバッガー ( {{<link title="Android 版" href="https://docs.monaca.io/ja/products_guide/debugger/installation/debugger_android/#カスタムビルド版-monaca-デバッガーのビルドとインストール">}} または {{<link title="iOS 版" href="https://docs.monaca.io/ja/products_guide/debugger/installation/debugger_ios/#カスタムビルド版-monaca-デバッガーのビルド方法">}} ) を作成する必要があります。
{{</note>}}

## デモ  

{{<import pid="5b29ede3e788853905dba6d9" title="Social Sharing Demo">}}

{{<figure src="/images/samples/social_sharing.png">}}

## Monaca クラウド IDE でプラグインを有効にする

1. IDE メニューから {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} へ移動します。

2. {{<guilabel name="Cordova プラグインのインポート">}}  ボタンをクリックします。 次に、[ZIP ファイル] または [パッケージ名 / URL] を使用してプラグインをインポートします。

## API リファレンス

このページでは、[デモ](https://monaca.mobi/directimport?pid=5b29ede3e788853905dba6d9) で使用されている主な API についてのみ説明します。API リファレンスについては、[こちら](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin) を参照してください。

### shareViaFacebook()

Facebook に共有する。

{{<highlight javascript>}}
window.plugins.socialsharing.shareViaFacebook(message, image, url)
{{</highlight>}}

{{<note>}}
    この機能を使用するには、端末の Facebook アプリで有効な認証が必要です。
{{</note>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`message` | String | メッセージ
`image` | String | 画像のソース
`url` | String | Web サイトのURL

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
  window.plugins.socialsharing.shareViaFacebook(
    'Sharing via Facebook', 
    img.src, 
    "www.monaca.io"
  );
{{</highlight>}}

### shareViaTwitter()

Twitter に共有する。

{{<highlight javascript>}}
window.plugins.socialsharing.shareViaTwitter(message, image, url)
{{</highlight>}}

{{<note>}}
    この機能を使用するには、端末の Twitter アプリで有効な認証が必要です。
{{</note>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`message` | String | メッセージ
`image` | String | 画像のソース
`url` | String | Web サイトのURL

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
  window.plugins.socialsharing.shareViaTwitter(
    'Message and link via Twitter', 
    img.src, 
    "www.monaca.io" 
  );
{{</highlight>}}

### shareViaInstagram()

Instagram に共有する。

{{<highlight javascript>}}
window.plugins.socialsharing.shareViaInstagram(message, image)
{{</highlight>}}

{{<note>}}
    この機能を使用するには、端末の Instagram アプリに対する有効な認証が必要です。
{{</note>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`message` | String | メッセージ
`image` | String | 画像のソース

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
  window.plugins.socialsharing.shareViaInstagram(
    'Message via Instagram', 
    img.src
  );
{{</highlight>}}

