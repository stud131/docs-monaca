---
title: "Cordova Google Analytics プラグイン"
weight: 70
---

このCordovaプラグインは、Google のユニバーサルアナリティクス SDK に接続するために使用されます。

- Repo: https://github.com/danwilson/google-analytics-plugin
- Plugin ID/Package Name: `cordova-plugin-google-analytics`
- Tested Version: 1.8.3

## デモ 

{{<import pid="5ac33902e7888548428b4567" title="Google Analytics Plugin Demo">}}

{{< figure src="/images/samples/analytics.png">}}

## Monaca クラウド IDE でプラグインを有効にする

1. IDE メニューから {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} へ移動します。

2. {{<guilabel name="Cordova プラグインのインポート">}}  ボタンをクリッククリックします。 次に、[ZIP ファイル] または [パッケージ名 / URL] を使用してプラグインをインポートします。

## 使い方

プラグインをプロジェクトへインポート後、トラッキングID の初期化を開始することができます。[deviceready] イベント後にプラグイン API を使用します。

{{<highlight javascript>}}
//Replace your app tracking id here
var trackingID="YOUR_APP_TRACKING_ID";

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    console.log('Google analytics is ready now');
    window.ga.startTrackerWithId(trackingID);
}
{{</highlight>}}

## API リファレンス

ここでは、[デモ](https://monaca.mobi/directimport?pid=5ac33902e7888548428b4567) で使用されている主な API について説明します。 完全なAPIリファレンスについては、[こちら](https://github.com/danwilson/google-analytics-plugin) を参照してください。

### startTrackerWithId()

Analytics トラッカーを設定します。

{{<highlight javascript>}}
window.ga.startTrackerWithId(trackingId, [interval]);
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`trackingId` | String | Google Analytics モバイルアプリのプロパティ
`interval` | Number | [オプション] 秒単位でのディスパッチ期間 (default: `30`)

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
window.ga.startTrackerWithId('UA-XXXX-YY', 30);
{{</highlight>}}

### trackView()

画面を追跡します。

{{<highlight javascript>}}
window.ga.trackView(title, campaignUrl, [newSession]);
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`title` | String | 画面のタイトル
`campaignUrl` | String | 参照を測定するためのキャンペーンURL
`newSession` | Boolean | [オプション] 新しいセッションを作成するには `true` を設定します。

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
//To track a Screen (PageView):
window.ga.trackView('Screen Title')

//To track a Screen (PageView) w/ campaign details:
window.ga.trackView('Screen Title', 'my-scheme://content/1111?utm_source=google&utm_campaign=my-campaign')

//To track a Screen (PageView) and create a new session:
window.ga.trackView('Screen Title', '', true)
{{</highlight>}}

### trackEvent()

イベントを追跡します。

{{<highlight javascript>}}
window.ga.trackEvent(category, action, [label], [value], [newSession])
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`category` | String | イベントカテゴリー (例：'Video')
`action` | String | Action type (例： 'play')
`label` | String | [オプション] イベントラベル (例：'Fall Campaign')
`value` | Number | [オプション] イベントに関連付けられた数値 (例：42)
`newSession` | Boolean | [オプション] 新しいセッションを作成するには `true` を設定します。

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
//To track an Event
window.ga.trackEvent('Videos', 'play', 'Fall Campaign', 42)

//To track an Event and create a new session:
window.ga.trackEvent('Videos', 'play', 'Fall Campaign', 42, true)
{{</highlight>}}

### setUserId()

UserId を設定します.

{{<highlight javascript>}}
window.ga.setUserId(id);
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`id` | String | 特定のユーザーに関連付けられた一意の識別子は、ヒットごとに送信する必要があります

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
//user ID for testing purpose
var myUserId="35009a79-1a05-49d7-b876-2b884d0f825b";
window.ga.setUserId(myUserId);
{{</highlight>}}

### setAppVersion()

特定のアプリのバージョンを設定します。

{{<highlight javascript>}}
window.ga.setAppVersion(appVersion)
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`appVersion` | String | アプリバージョン

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
window.ga.setAppVersion('1.33.7');
{{</highlight>}}


### debugMode()

冗長ロギングを有効にします。

{{<highlight javascript>}}
window.ga.debugMode()
{{</highlight>}}

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
window.ga.debugMode();
{{</highlight>}}


