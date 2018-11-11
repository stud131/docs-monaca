---
title: プッシュ通知機能
weight: 10
---

次の API を使用して、プッシュ通知受信時の処理を定義できます。

メソッド | 解説
-------|-------------------
[monaca.cloud.Push.setHandler()](#push-sethandler) | プッシュ通知の受信時の JavaScript ハンドラーを設定します。

## Push.setHandler()

プッシュ通知の受信時に呼び出す、プッシュ通知用のハンドラーを定義します。

{{<highlight javascript>}}
monaca.cloud.Push.setHandler(callback: Function) : void
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説
-----|------|------------------
`callback` | 関数 | プッシュ通知を処理するコールバック関数です。送信された JSON データは、第 1、第 3 引数に設定されます。

**戻り値**

- なし  

**例**

次のサンプルコードでは、プッシュ通知から受け取ったデータを、`Console` ( コンソール ) に表示しています。

{{<highlight javascript>}}
monaca.cloud.Push.setHandler(function(data1, data2, data3) {
  // JSON data within push notification
  console.log(JSON.stringify(data1));
  console.log(JSON.stringify(data2));
  console.log(JSON.stringify(data3));
});
{{</highlight>}}


関連項目：

- [プッシュ通知](/ja/products_guide/push_notification/overview)
- [プッシュ通知機能](../../cloud_management/push)
- [バックエンド API](../../cloud)
- [バックエンド メモ帳アプリ](/ja/sampleapp/samples/backend_memo)
- [バックエンド マネジメント API](../../cloud_management)
