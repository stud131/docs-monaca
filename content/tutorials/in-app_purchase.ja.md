---
title: "Cordova In-app Purchase プラグイン"
weight: 100
---

このCordova/PhoneGap プラグインは、iOS、Android、Windows アプリでのアプリ内課金に使用されます。

- Repo: https://github.com/j3k0/cordova-plugin-purchase
- Plugin ID/Package Name: `cc.fovea.cordova.purchase`
- Tested Version: 7.1.3

## デモ 

{{<import pid="5ac6e55ee788855e368b4567" title="In-app Purchase Plugin Demo">}}

{{< figure src="/images/samples/in-app_purchase.png">}}

## Monaca クラウド IDE でプラグインを有効にする

1. IDE メニューから {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} へ移動します。

2. {{<guilabel name="Cordova プラグインのインポート">}}  ボタンをクリックします。 次に、[ZIP ファイル] または [パッケージ名 / URL] を使用してプラグインをインポートします。

## 使い方

ストアAPI は、主にイベントを使用します。 このプラグインを使用する場合は、イベントを登録する必要があります。

イベントの中心は `when()` メソッドです。 クエリーを使用して、1つまたは一連の製品への変更を通知することができます。

{{<highlight javascript>}}
store.when("product").updated(refreshScreen);
store.when("full version").owned(unlockApp);
store.when("subscription").approved(serverCheck);
store.when("downloadable content").downloaded(showContent);
etc.
{{</highlight>}}

`updated` イベントは、製品のフィールドの1つが変更されると起動されます (例: `owned` ステータス) 。

このイベントは、購入状況を追跡し、必要に応じてロック解除を行い、それに応じてビューを更新するための一般的な方法を提供します。

## API リファレンス

ここでは、[デモ](https://monaca.mobi/directimport?pid=5ac6e55ee788855e368b4567) で使用されている主な API について説明します。 完全なAPIリファレンスについては、[こちら](https://github.com/j3k0/cordova-plugin-purchase) を参照してください。

### store.verbosity

The `verbosity` property defines how much you want `store.js` to write on the console. Available values are as follows:
`verbosity` プロパティは、 `store.js` のコンソール出力の種類を定義します。 使用可能な設定は、次のとおりです。

- `store.QUIET` または `0` すべてのログを無効にします。 (デフォルト)
- `store.ERROR` または `1` エラーメッセージのみを表示します。
- `store.WARNING` または `2` 警告やエラーを表示します。
- `store.INFO` または `3` 情報メッセージも表示します。
- `store.DEBUG` または `4` 内部デバッグメッセージを有効にします。

{{<highlight javascript>}}
store.verbosity
{{</highlight>}}

**例**

{{<highlight javascript>}}
// Enable maximum logging level
store.verbosity = store.DEBUG;
{{</highlight>}}

### store.register()

このメソッドを使用する前に、ストアに課金アイテムを登録する必要があります。

{{<highlight javascript>}}
store.register(product);
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`product` | JSON Object | 製品情報

**例**

{{<highlight javascript>}}
store.register({
    id:    'consumable1', // id without package name!
    alias: 'Extra Life',
    type:   store.CONSUMABLE
});
{{</highlight>}}

### store.refresh()

サーバーから製品データをロードし、ユーザーが既に購入したものを復元します。

{{<highlight javascript>}}
store.refresh();
{{</highlight>}}

**例**

{{<highlight javascript>}}
// ...
// register products and events handlers here
// ...
//
// then and only then, call refresh.
store.refresh();
{{</highlight>}}

### store.get(id/alias)

`id` または `alias` で、製品を取得します。

{{<highlight javascript>}}
store.get(id/alias)
{{</highlight>}}

パラメーター名 | 型 | 説明
-----|------|-------------
`id` | String | 製品 ID 
`alias` | String | 製品名

**例**

{{<highlight javascript>}}
var product = store.get("consumable1");
{{</highlight>}}

### store.when(query, event, callback)

製品関連イベントのコールバックを登録します。 この api の詳細については、[こちら](https://github.com/j3k0/cordova-plugin-purchase/blob/master/doc/api.md#storewhenquery) を参照してください。

{{<highlight javascript>}}
store.when(query, event, callback)
{{</highlight>}}

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
store.when("subscription1", "approved", function(product) { 
    console.log("Subscription approved!");
});
{{</highlight>}}

### store.error(callback)

Register an error handler.

{{<highlight javascript>}}
store.error(callback);
{{</highlight>}}

**例**

{{<highlight javascript>}}
store.error(function(e){
    console.log("ERROR " + e.code + ": " + e.message);
});
{{</highlight>}}


### store.ready(callback)

ストアが使用できる状態なったときに呼び出されるコールバックを登録します。

ストアがすでに使用できる状態の場合は、コールバックは直ちに実行されます。 引数なしで `store.ready()` は、 `ready` ステータスを返します。


{{<highlight javascript>}}
store.ready(callback)
{{</highlight>}}

**例**

{{<highlight javascript>}}
store.ready(function() {
    console.log("Store is ready");
});

{{</highlight>}}


