---
title: "Phonegap Push プラグイン"
weight: 140
---

この Cordova プラグインでは、プッシュ通知の登録と受信を行います。

- Repo: https://github.com/phonegap/phonegap-plugin-push
- Plugin ID/Package Name: `phonegap-plugin-push`
- Tested Version: `2.2.3`

## デモ  

{{<import pid="5b2b3b4ce788850e4fdba6d4" title="Phonegap Push デモ">}}

{{<figure src="/images/samples/phonegap_push.png">}}

{{%excerpt-include filename="tutorials/firebase.ja.md" /%}}

## Monaca クラウド IDE でプラグインを有効にする

1. IDE メニューから {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} へ移動します。

2. {{<guilabel name="Cordova プラグインのインポート">}}  ボタンをクリックします。 次に、[ZIP ファイル] または [パッケージ名 / URL] を使用してプラグインをインポートします。

## 使い方

プラグインをプロジェクトにインポート後、プッシュ通知の初期化を行います。 deviceready イベント後、プラグイン API 使用します。 例：

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);        
function onDeviceReady() {

    // Notification initialization
    push = PushNotification.init({
        ios: {
            badge: true
        }
    });
    
    // Checking notification permission
    $interval(checkNotifPermiss, 500);
    // Updating App Icon Badge Number
    $interval(updateAIBN, 500);  

    // When receiving a push notification
    push.on('notification', data => {
        receiveNotifCB(data);
    });
}
{{</highlight>}}

## API リファレンス

このページでは、[デモ](https://monaca.mobi/directimport?pid=5b2b3b4ce788850e4fdba6d4) で使用されている主な API についてのみ説明します。API リファレンスについては、[こちら](https://github.com/phonegap/phonegap-plugin-push) を参照してください。

### init()

プッシュ通知の初期化を行います。

{{<highlight javascript>}}
PushNotification.init(options)
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`options` | Object | すべての対象プラットフォームの関連する固有のオプションを記述するオブジェクト。

- iOS の場合

{{<note>}}
    すべての iOS の <code>Boolean</code> オプションは、<code>String</code> として指定することもできます。
{{</note>}}

属性 | 型 | 標準値 | 説明
----------|------|---------|------------------
`ios.voip`| Boolean| `false` | [オプション]  `true`に設定されている場合、VoIP プッシュ通知を受信するように端末が設定され、VoIP 通知は、`notification` イベントで処理されるサイレント通知のため、他のオプションは無視されます。
`ios.alert` | Boolean | `false` | [オプション]  `true` に設定されている場合、端末は通知の受信時にアラートを表示します。*
`ios.badge` | Boolean | `false` | [オプション]  `true` に設定されている場合、端末は通知の受信時にバッジ番号を設定します。*
`ios.sound` | Boolean | `false` | [オプション]  `true` に設定されている場合、端末は通知の受信時に音声を再生します。*
`ios.clearBadge` | Boolean | `false` | [オプション]  `true` に設定されている場合、アプリの起動時にバッジがクリアされます。
`ios.categories` | Object| `{}` | [オプション]  iOS のアクションボタンを有効にするために必要なデータです。詳細については、[Action Buttons on iOS](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/PAYLOAD.md#action-buttons-1) を参照してください。

`*`: init メソッドが初めて実行されるときに設定されるオプションの値によって、アプリがどのように動作するかが決まります。
init メソッドで値が設定された場合でも、{{<menu menu1="設定" menu2="通知" menu3="アプリ名">}} からユーザが手動で設定を変更することができます。これは通常のiOSの動作になります。

- Android の場合

属性 | 型 | 標準値 | 説明
----------|------|---------|------------------
`android.icon` | String | |	[オプション]  small-icon として使用する画像リソース名。 リソース名には、拡張子は含まれません。
`android.iconColor` | String | | [オプション]  Android 5.0 以降の small-icon の背景色を設定します。 [サポートされている形式](http://developer.android.com/reference/android/graphics/Color.html#parseColor(java.lang.String))
`android.sound` | Boolean | `true` | [オプション]  `true` に設定されている場合、プッシュデータで指定された音声またはデフォルトのシステム音が再生されます。
`android.vibrate` | Boolean | `true` | [オプション]  `true` に設定されている場合、端末は通知を受け取ると振動します。
`android.clearBadge` | Boolean | `false` | [オプション]  `true` に設定されている場合、アイコンバッジは初期化時にクリアされ、プッシュメッセージが処理される前にクリアされます。
`android.clearNotifications` | Boolean | `true` | [オプション]  `true` に設定されている場合、アプリが閉じられたときに保留中の通知をすべてクリアします。
`android.forceShow` | Boolean | `false` | [オプション]  アプリがフォアグラウンドにあるときの通知動作を制御します。true の場合、アプリがフォアグラウンドになると、アプリがバックグラウンドのときと同じように、通知領域に通知が表示されます ( on('notification') コールバックは、ユーザーが通知をクリックしたときにのみ実行されます )。false で、アプリがフォアグラウンドの場合、on('notification') コールバックが実行されます。
`android.topics` | Array  | `[]` | [オプション]  配列 に1 つ以上の文字列が含まれている場合、各文字列は FcmPubSub トピックの購読に使用されます。
`android.messageKey` | String | `message` | [オプション]  通知のテキストを検索するためのキー。
`android.titleKey` | String | `title` | [オプション]  通知のタイトルを検索するためのキー。

**戻り値**

- `pushObject`

**例**

{{<highlight javascript>}}
const push = PushNotification.init({
  android: {},
  browser: {
    pushServiceURL: 'http://push.api.phonegap.com/v1/push'
  },
  ios: {
    alert: 'true',
    badge: true,
    sound: 'false'
  },
  windows: {}
});
{{</highlight>}}

### hasPermission()

プッシュ通知許可が端末で許可されているか確認します。

{{<highlight javascript>}}
PushNotification.hasPermission(successHandler)
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`successHandler` | Function | API がアクセス許可を正常に取得した際に実行されます。

**Callback パラメーター**

- successHandler

パラメーター名 | 型	| 説明
-----|------|-------------
`data.isEnabled` | Boolean | プッシュ通知の許可の状態を取得します。

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
PushNotification.hasPermission(data => {
  if (data.isEnabled) {
    console.log('isEnabled');
  }
});
{{</highlight>}}


### getApplicationIconBadgeNumber()

アプリが実行されていないときに表示されている現在のバッジの数を取得します。

{{<highlight javascript>}}
push.getApplicationIconBadgeNumber(successHandler, errorHandler)
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`successHandler` | Function | API がアイコンバッジ番号を正常に取得した際に実行されます。
`errorHandler` | Function | アイコンのバッジ番号を取得する際に API がエラーを検出したときに実行されます。

**Callback パラメーター**

- successHandler

パラメーター名 | 型	| 説明
-----|------|-------------
`n` | Number | 現在のバッジカウントの整数。

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
push.getApplicationIconBadgeNumber(
    n => {
        $scope.aibn = n;
    },
    () => {
        console.log('Error getting the number');
    }
);
{{</highlight>}}


### setApplicationIconBadgeNumber()

アプリが実行されていないときに表示されるバッジの数を設定します。

{{<highlight javascript>}}
push.setApplicationIconBadgeNumber(successHandler, errorHandler, count) 
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`successHandler` | Function | API がアイコンバッジ番号を正常に取得した際に実行されます。
`errorHandler` | Function | アイコンのバッジ番号を取得する際に API がエラーを検出したときに実行されます。
`count` | Number | バッジに表示する数を指定します。`0` を指定した場合は、バッジがクリアされます。 各 `notification` イベントには、バッジを正しい数に設定するために使用できる data.count の値が含まれています。

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
push.setApplicationIconBadgeNumber(
    () => {
        alert("Successfully setting the badge number!");
    },
    () => {
        alert("Fail to set the badge number. Something went wrong...");
    },
    badgeNum
);
{{</highlight>}}


### push.on()

`notification` イベントは、プッシュ通知サービスから送信されたプッシュ通知を受信した際に実行されます。

{{<highlight javascript>}}
push.on('notification', callback)
{{</highlight>}}

**Callback パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`data.message` | String | プッシュ通知サービスから送信されたプッシュメッセージのテキスト。
`data.title` | String | [オプション]  プッシュ通知サービスから送信されたプッシュメッセージのタイトル。
`data.count` | String | iOS / Android のバッジに表示されるメッセージ数、または Android の通知領域のメッセージ数。Windows の場合、数またはステータスグリフのバッジ通知の値を表します。
`data.sound` | String | 通知の受信時に再生される音声ファイルの名前。
`data.image` | String | 通知に表示されるイメージファイルのパス。
`data.launchArgs` | String | プッシュ通知からの起動時にアプリに渡される引数。これは通知がバックグラウンドで受信されたときに機能します。( Windows のみ )
`data.additionalData` | Object | [オプション]  上記のプロパティに適合しないプッシュ通知サービスによって送信されたデータのコレクション。
`data.additionalData.foreground` | Boolean | アプリがフォアグラウンドでプッシュ通知を受け取ったかどうか。
`data.additionalData.coldstart` | Boolean | プッシュ通知をクリックしてアプリを起動する場合は true、アプリがすでに起動されている場合は false になります。
`data.additionalData.dismissed` | Boolean | プッシュ通知がユーザによって却下された場合は true が設定されます。

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
push.on('notification', data => {
  console.log(data.message);
  console.log(data.title);
  console.log(data.count);
  console.log(data.sound);
  console.log(data.image);
  console.log(data.additionalData);
});
{{</highlight>}}

