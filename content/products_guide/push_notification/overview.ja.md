---
title: プッシュ通知
weight: 10
aliases: /ja/push_notification/manual/overview
---

{{<note>}}
    Cordova6.2プロジェクトでアドホックビルドしたアプリに対しては、リリースを選択する必要があります。
{{</note>}}

## プッシュ通知とは

プッシュ通知とは、ユーザー側からのリクエストの有無に関わらず、アプリ側から端末側へ情報を発信するときに使用される機能です。

1.  **Text (テキスト)** : テキストメッセージです。
2.  **バッジ (バッジ)** : アプリのアイコンの右上に表示される数字です。
3.  **Sound (サウンド)** : 新しい通知が到着したときに鳴る音です。
4.  **JSON データ**: アプリ側で使用する、JSON 形式のデータです。

{{<note>}}
サウンドは、Monaca では現在使用できません。
{{</note>}}

プッシュ通知を受信したときの挙動は、アプリの状態 ( 起動中か否か ) と OS
の種類により異なります。Android
端末では、画面上部の通知用のバーに、テキストメッセージが表示されます。iOS
端末では、ポップアップ ダイアログ上に、メッセージが表示されます。

このページでは、MonacaのクラウドIDEからプッシュ通知を送る方法を説明します。

{{<note>}}
他のサーバーからMonacaのプッシュ通知を送ることもできます。 詳細は {{<link title="バックエンド マネジメント API" href="/en/reference/monaca_api/cloud_management/">}} を参照して下さい。
{{</note>}}

## 事前準備

Monaca クラウド IDE からプッシュ通知を送信するには、Monaca バックエンドを事前に準備しておく必要があります。 プロジェクトに Monaca バックエンドを追加するには、[Monaca バックエンド 入門](../../backend/getting_started/) を参照してください。


## プッシュ通知の設定 ( Monaca 上での処理 )

プッシュ通知を実際に使用する前に、対象のプラットフォームに応じた設定を
\[ プッシュ通知設定 \]
上で行う必要があります。次のリンク先をご確認ください。

- [iOS のプッシュ通知設定]({{< ref "apns.ja.md" >}})
- [Android のプッシュ通知設定]({{< ref "gcm.ja.md" >}})

{{<note>}}
Monaca デバッガー上では、プッシュ通知は受け取れません。プッシュ通知の検証時には、アプリを実際にビルドする必要があります。
{{</note>}}

## プッシュ通知の送信 ( Monaca 上での処理 )

Monaca クラウド IDE からプッシュ通知を行うときは、次の手順に従います。

1.  Monaca Backend ウィンドウから、{{<guilabel name="プッシュ通知">}} を選択します。

    {{<img src="/images/backend/overview/push_notification.png">}}

2.  [ プッシュ通知履歴 ] タブが表示されます。{{<guilabel name="アプリ宛に作成">}} をクリックすると、プッシュ通知を作成するダイアログが表示されます。

    {{<img src="/images/backend/overview/push_dialog.png" width="500">}}

3.  送信先の OS を選択し、プッシュ通知情報を入力します。

    | パラメーター | 説明 |
    |------------|-----|
    | 件名 | [ Android 専用 ] 通知のタイトルです。 |
    | メッセージ | 通知の本文です。 |
    | バッジ | [ iOS 専用 ] このオプションを有効し、1 以上の整数を指定すると、アプリ側のアイコン右上に数値が表示されます。| 
    | JSON データ | [ 任意 ] ユーザーが通知を開いたときに、アプリ側に渡される JSON データです。詳細は、[JSON データの受信方法について](#json-データの受信方法について) をご確認ください。|

4.  {{<guilabel name="追加する">}} ボタンをクリックして、プッシュ通知を送信します。通知は、キューに置かれたあとに送信されます。プッシュ通知を行うサーバー側に負荷 ( 大きなトラフィック量 ) がかかっている場合には、送信までに時間がかかります。プッシュ通知の送信状況に関しては、次の解説をご確認ください。

## 配信状況の監視

プッシュ通知画面では、通知の送信状況を確認できます。次の情報が表示されます。

| パラメーター | 説明 |
|------------|-----|
| プラットフォーム | 配信先のプラットフォーム |
| ステータス | 配信状況 |
| 日時 | 配信したときの日付 |
| 配信端末 | 成功した配信の数です。`成功した配信数/合計配信数` の形式で、結果が表示されます。「 成功した配信数 」 は通知に成功した数を示し、「 合計配信数 」 は実際に発信した通知の数を指します。次のスクリーンショットをご確認ください。|
| メッセージ | 通知の内容 |

{{<figure src="/images/backend/overview/3.png">}}

## JSON データの受信方法について

プッシュ通知とともに、JSON データも送信できます。JSON
データは、`monaca.cloud.Push.setHandler`
関数を使用して処理できます。送信された JSON データは、`data1` と `data3`
変数に代入されコールバック側へ渡されます。処理の例は次のとおりです。

{{<highlight javascript>}}
monaca.cloud.Push.setHandler(function(data1, data2, data3) {
  // JSON data within push notification
  console.log(JSON.stringify(data1));
  console.log(JSON.stringify(data2));
  console.log(JSON.stringify(data3));
});
{{</highlight>}}

`data2` と `data3` では、プッシュ通知の受信状況を判断する `coldstart` と `foreground` 情報を取得することができます。

{{<note>}}
コールバック関数は、ページが読み込まれた後に呼び出されます。呼び出しには、多少の時間がかかるため、この点を留意ください。
{{</note>}}

参考ページ

- [プッシュ通知用の Monaca バックエンド API](/ja/reference/monaca_api/cloud/push)
- [プッシュ通知用の Monaca バックエンド マネジメント API](/ja/reference/monaca_api/cloud_management/push)
