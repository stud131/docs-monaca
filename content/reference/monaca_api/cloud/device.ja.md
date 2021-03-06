---
title: 端末情報
weight: 60
---

次の JavaScript API を使用して、端末側を管理できます。


メソッド/プロパティー  | 解説
--------------------|-------------------------------------------
[monaca.cloud.Device.getProperty()](#device-getproperty) | 端末のプロパティーを 1 つ取得します
[monaca.cloud.Device.getProperties()](#device-getproperties) | 端末のプロパティー群を一括で取得します。
[monaca.cloud.Device.saveProperty()](#device-saveproperty) | 端末のプロパティーを 1 つ更新します。
[monaca.cloud.Device.saveProperties()](#device-saveproperties) | 端末のプロパティー群を一括更新します。

Device.getProperty()
-----------------------------------------------

端末のプロパティーを取得します。

{{<highlight javascript>}}
monaca.cloud.Device.getProperty(name: String) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`name` | 文字列 | プロパティー名です。

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

`done()` コールバック関数の `result` パラメーター

- プロパティーの値

**例**

端末のプロパティー値を取得する例を、次に記します。

{{<highlight javascript>}}
monaca.cloud.Device.getProperty("nickname")
.done
(
    function(result)
    { console.log("Device's nickname: " + result); }
)
.fail
(
    function(err)
    { /* error handling codes */ }
)
.always
(
    function()
    { /* what must be done despite the outcome of the getProperty function */ }
);
{{</highlight>}}

Device.getProperties()
---------------------------------------------------

端末のプロパティー群を一括で取得します。.

{{<highlight javascript>}}
monaca.cloud.Device.getProperties(names: Array) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`names` | Array of String | プロパティー名の配列です。

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

`done()` コールバック関数の `result` パラメーター

- プロパティー名

**例**

端末のプロパティーを、2 つ取得する例を、次に記します。

{{<highlight javascript>}}
monaca.cloud.Device.getProperties(["nickname", "color"])
.done
(
    function(result)
    {
        console.log("Properties: " + JSON.stringify(result));
        console.log("Device's nickname: " + result.nickname);
    }
)
.fail
(
    function(err)
    { /* error handling codes */ }
)
.always
(
    function()
    { /* what must be done despite the outcome of the getProperties function */ }
);
{{</highlight>}}

Device.saveProperty()
-----------------------------------------------------

端末のプロパティーを 1 つ更新します。

{{<highlight javascript>}}
monaca.cloud.Device.saveProperty(name: String, value: String) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 | 必須
-----|------|-------------|---------------
`name` | 文字列 | プロパティー名です。 | `[a-zA-Z0-9]` を使用して、 `[a-zA-Z]` で始まらなければなりません。
`value` | 文字列 | 追加または更新対象のプロパティーの値です。

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

**エラーコード**

エラーが発生すると、 [Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

**例**

端末側のニックネームを `"Monaca"` に変更する例を、次に記します。

{{<highlight javascript>}}
monaca.cloud.Device.saveProperty("nickname", "Monaca")
.done
(
    function()
    { console.log("Saved."); }
)
.fail
(
    function(err)
    { /* error handling codes */ }
)
.always
(
    function()
    { /* what must be done despite the outcome of the saveProperty function */ }
);
{{</highlight>}}

Device.saveProperties()
--------------------------------------------------------

端末のプロパティー群の値を格納した配列を更新します。

{{<highlight javascript>}}
monaca.cloud.Device.saveProperties(properties: Object) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 | 必須
-----|------|-------------|---------------
`properties` | JSON オブジェクト |  追加または更新する端末の追加のプロパティー群。 | Key 名には、 `[a-zA-Z0-9]` を使用して、 `[a-zA-Z]` から始まる必要がります。データサイズは、`500 KB` 内です。

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、 `fail()` 、 `always()` メソッドを使用します。

**エラーコード**

エラーが発生すると、 [Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

**例**

端末の `nickname` と `color` の 2 つのプロパティーを追加・更新する例を、次に記します。

{{<highlight javascript>}}
monaca.cloud.Device.saveProperties({"nickname": "Monaca", "color": "#9999FF"})
.done
(
    function()
    { console.log("Saved."); }
)
.fail
(
    function(err)
    { /* error handling codes */ }
)
.always
(
    function()
    { /* what must be done despite the outcome of the saveProperties function */ }
);
{{</highlight>}}


関連項目：

- [バックエンド API](../../cloud)
- [バックエンド メモ帳アプリ](/ja/sampleapp/samples/backend_memo)
- [バックエンド マネジメント API](../../cloud_management)
