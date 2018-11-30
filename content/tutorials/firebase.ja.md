---
title: "Cordova Firebase プラグイン"
weight: 90
---

この Cordova プラグインは、プッシュ通知、分析、イベントトラッキング、クラッシュレポートなどを Google Firebase から アプリへ提供します。

- Repo: https://github.com/arnesson/cordova-plugin-firebase
- Plugin ID/Package Name: `cordova-plugin-firebase`
- Tested Version: 0.1.25

{{<note>}}
サードパーティー製 Cordova プラグインを確認する場合は、カスタムビルドデバッガー ( {{<link title="Android 版" href="https://docs.monaca.io/ja/products_guide/debugger/installation/debugger_android/#カスタムビルド版-monaca-デバッガーのビルドとインストール">}} または {{<link title="iOS 版" href="https://docs.monaca.io/ja/products_guide/debugger/installation/debugger_ios/#カスタムビルド版-monaca-デバッガーのビルド方法">}} ) を作成する必要があります。
{{</note>}}

## デモ

{{<import pid="5ac5776ee788854f3a8b456a" title="Google Firebase Plugin Demo">}}

{{<figure src="/images/samples/firebase.png">}}

{{%excerpt%}}

## iOSの準備

iOS 向けのプッシュ通知を使用する場合は、APNs の認証キーまたは APNs 証明書が必要になります。 ここでは、iOS デバッグビルド用の Development APNs 署名書の作成方法を説明します。

<div class="admonition note">
リリースビルドでは、Production APNs 証明書が必要になります。
</div>

既に [Apple Developer Program](https://developer.apple.com/programs/) をお持ちの場合は、以下の手順に従って Development APNs 証明書を作成してください。

1. [Apple Developer page](https://developer.apple.com/) から、`Account` に移動します。

2. `Certificates, Identifiers & Profiles` を選択します。

    <img src="/images/tutorials/11.png" width="" class="single_img">

3. APNs 証明書を作成する場合は、プッシュ通知を有効にした App ID が必要になります。`Identifiers` 項目の `App IDs` 選択し、右上隅の `+` ボタンをクリックします。

    <img src="/images/tutorials/14.png" width="" class="single_img">

4. 次のような App ID 情報を入力します。

    - `App Description`: アプリ名を入力します ( 例：Cordova Firebase Demo )
    - `Explicit ID`: プッシュ通知では、ワイルドカードの App ID を使用できないため、このオプションを選択します。 アプリの固有の識別子（ io.monaca.firebase など ）を入力します。

    <img src="/images/tutorials/15.png" width="" class="single_img">

5. `App Services` 項目の `Push Notifications` オプションをチェックし、<span class="guilabel">Continue</span> をクリックします。

    <img src="/images/tutorials/16.png" width="" class="single_img">

6. `Confirm your App ID` ページにリダイレクトされます。 <span class="guilabel">Register</span> をクリックします。

7. iOS App IDs ページで作成した App ID を選択し、<span class="guilabel">Edit</span> をクリックします。

8. `Push Notifications` 項目にある `Development SSL Certificate` の <span class="guilabel">Create Cerficate</span> をクリックします。

    <img src="/images/tutorials/17.png" width="" class="single_img">

9. <span class="guilabel">Continue</span> をクリックします。

10. <span class="guilabel">Choose File</span> をクリックし、CSR ファイルを選択します。 CSR ファイルは、Monaca クラウド IDE の <span class="guilabel"><b>設定 &rarr; iOS ビルド設定</b></span> から取得することができます。 <span class="guilabel">秘密鍵と CSR の生成</span> をクリックし、CRSファイルを作成後 <span class="guilabel">エクスポート</span> ボタンをクリックしてダウンロードします。

11. 次に、<span class="guilabel">Continue</span> をクリックします。 証明書の準備でき、ダウンロード可能になったら証明書をダウンロードします。次の項目の Firebase の設定に必要になります。

## Firebase ( プッシュ通知 ) の設定

1. [Firebase console](https://firebase.google.com/) にアクセスします。

2. Firebase console にログインします。

3. <span class="guilabel">プロジェクトを追加</span> をクリックします。

    <img src="/images/tutorials/1.png" width="" class="single_img">

4. プロジェクト情報を入力し、 <span class="guilabel">プロジェクトを作成</span> をクリックします。 その後、プロジェクト概要ページにリダイレクトされます。

    <img src="/images/tutorials/2.png" width="" class="single_img">

プロジェクトを作成後、各プラットフォーム用プッシュ通知の設定を行うことができます。

### iOS の場合

1. `プロジェクトの設定`　を選択します。

    <img src="/images/tutorials/3.png" width="" class="single_img">

2. [全般] 項目で <span class="guilabel">アプリを追加</span> をクリックし、`iOS` を選択します。

3. iOS のバンドル ID を入力します。( <span class="guilabel"><b>設定 &rarr; iOS アプリ設定</b></span> ) で確認することができます)。 次に、<span class="guilabel">アプリの登録</span> をクリックします。

    <img src="/images/tutorials/4.png" width="" class="single_img">

4. `GoogleService-Info.plist` ファイルをダウンロードし、プロジェクトのルートフォルダに配置します。 次に、 <span class="guilabel">続行</span> をクリックします。

    <img src="/images/tutorials/5.png" width="" class="single_img">

5. [Firebase SDK の追加] では、Monacaで開発するアプリは、ネイティブアプリではないため、 <span class="guilabel">続行</span>  をクリックします。 次に、<span class="guilabel">終了</span> をクリックして設定を完了します。その後、Firebase の概要ページに iOS アプリが表示されます。
    
    <img src="/images/tutorials/6.png" width="" class="single_img">

6. 作成したプロジェクトに APNs 証明書を追加します。 `プロジェクトの設定` に移動し、  `クラウド メッセージング`を選択します。

    <img src="/images/tutorials/3.png" width="" class="single_img">

7. **iOS アプリの設定** 項目で、APNs 認証キーまたは APNs 証明書をアップロードします。

    <img src="/images/tutorials/7.png" width="" class="single_img">

以上で、iOS 用の設定は完了です。

### Android の場合

1. `プロジェクトの設定`　を選択します。

    <img src="/images/tutorials/3.png" width="" class="single_img">

2. [全般] 項目で <span class="guilabel">アプリを追加</span> をクリックし、`Android` を選択します。

3. パッケージ名を入力します ( <span class="guilabel"><b>設定 &rarr; Android アプリ設定</b></span> で確認することができます) 。 次に、<span class="guilabel">アプリの登録</span> をクリックします。

    <img src="/images/tutorials/8.png" width="" class="single_img">

4. `google-services.json` ファイルをダウンロードし、プロジェクトのルートフォルダに配置します。 次に、 <span class="guilabel">続行</span> をクリックします。

    <img src="/images/tutorials/9.png" width="" class="single_img">

5. [Firebase SDK の追加] では、Monacaで開発するアプリは、ネイティブアプリではないため、 <span class="guilabel">続行</span>  をクリックします。 次に、<span class="guilabel">終了</span> をクリックして設定を完了します。その後、Firebase の概要ページに iOS アプリが表示されます。
    
    <img src="/images/tutorials/10.png" width="" class="single_img">

{{%/excerpt%}}

## Monaca クラウド IDE にプラグインを追加する

1. IDE メニューから、{{<menu menu1="設定" menu2="Cordova プラグインの管理">}} へ移動します。

2. {{<guilabel name="Cordova プラグインのインポート">}}  ボタンをクリックします。 次に、[ZIP ファイル] または [パッケージ名 / URL] を使用してプラグインをインポートします。

## 使い方

Cordova プラグインをプロジェクトにインポートすることで、デバイストークンの取得や、プッシュ通知を開いたときのイベントを設定することができます。[deviceready] イベント後にプラグイン API を使用します。

{{<highlight javascript>}}
document.addEventListener("deviceready", function(){
    window.FirebasePlugin.getToken(function(token) {
        // save this server-side and use it to push notifications to this device
        console.log(token);
    }, function(error) {
        console.error(error);
    });

    // Get notified when a token is refreshed
    window.FirebasePlugin.onTokenRefresh(function(token) {
        // save this server-side and use it to push notifications to this device
        console.log("Refresh to get new token: " + token);
    }, function(error) {
        alert(error);
    });

    // Get notified when the user opens a notification
    window.FirebasePlugin.onNotificationOpen(function(notification) {
        console.log(JSON.stringify(notification));
        alert("The notification is open!");
    }, function(error) {
        console.error(error);
    });    
}, false);
{{</highlight>}}

## API リファレンス

ここでは、[デモ](https://monaca.mobi/directimport?pid=5ac5776ee788854f3a8b456a) で使用されている主な API について説明します。 完全なAPIリファレンスについては、 [こちら](https://github.com/arnesson/cordova-plugin-firebase) を参照してください。

### getToken()

デバイストークンを取得します。 トークンが確立できない場合は、null になります。

{{<highlight javascript>}}
window.FirebasePlugin.getToken();
{{</highlight>}}

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
window.FirebasePlugin.getToken(function(token) {
    // save this server-side and use it to push notifications to this device
    console.log(token);
}, function(error) {
    console.error(error);
});
{{</highlight>}}

### onTokenRefresh()

トークンがリフレッシュされたときに通知を受け取ります。 トークン確立後、すぐにデバイスの有効なトークンを取得することができます。

{{<highlight javascript>}}
window.FirebasePlugin.onTokenRefresh();
{{</highlight>}}

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
window.FirebasePlugin.onTokenRefresh(function(token) {
    // save this server-side and use it to push notifications to this device
    console.log(token);
}, function(error) {
    console.error(error);
});
{{</highlight>}}

### onNotificationOpen()

プッシュ通知を開いたときに、通知データを取得します。

{{<highlight javascript>}}
window.FirebasePlugin.onNotificationOpen();
{{</highlight>}}

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
window.FirebasePlugin.onNotificationOpen(function(notification) {
    console.log(JSON.stringify(notification));
    alert("The notification is open!");
}, function(error) {
    console.error(error);
});    
{{</highlight>}}

### hasPermission()

プッシュ通知を受信するためのアクセス許可を確認します。

{{<highlight javascript>}}
window.FirebasePlugin.hasPermission();
{{</highlight>}}

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
window.FirebasePlugin.hasPermission(function(data){
    if (data.isEnabled)
        alert("Permission to receive notification is granted.");
    else
        alert("Permission to receive notification is NOT granted.");
});
{{</highlight>}}

### grantPermission() (iOS)

iOS でプッシュ通知を受信する権限を与えます (まだ権限が与えられていない場合は、プロンプトを表示します)。

{{<highlight javascript>}}
window.FirebasePlugin.grantPermission();
{{</highlight>}}

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
window.FirebasePlugin.grantPermission(function(){
    alert("Permission is granted for iOS");    
}, function(error){
    alert(error);
});
{{</highlight>}}

### setBadgeNumber()

バッジに数字を設定します。

{{<highlight javascript>}}
window.FirebasePlugin.setBadgeNumber(badgeNumber);
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`badgeNumber` | Number | バッジ表示する数値

**戻り値**

- `Promise`

**例**

バッジに表示する数値を設定して実行した後、アプリを終了します。 次に、アプリアイコンにバッジ数が表示されます。 番号を削除する場合は、`0` を設定します。

{{<highlight javascript>}}
window.FirebasePlugin.setBadgeNumber(5);
{{</highlight>}}


### getBadgeNumber()

バッジの数値を取得します。

{{<highlight javascript>}}
window.FirebasePlugin.getBadgeNumber();
{{</highlight>}}

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
window.FirebasePlugin.getBadgeNumber(function(n) {
        alert("Badge Number is " + n);
    });
{{</highlight>}}


### unregister()

firebase からの登録を解除してプッシュ通知の受信を停止します。アプリからユーザーをログアウトするときに呼び出します。

{{<highlight javascript>}}
window.FirebasePlugin.unregister();
{{</highlight>}}

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
window.FirebasePlugin.unregister(function(){
    alert("Stop receiving push notifications."); 
}, function(error){
    alert(error);
});
{{</highlight>}}


### setScreenName()

アナリティクスで現在のスクリーン名を設定します。

{{<highlight javascript>}}
window.FirebasePlugin.setScreenName(screenName);
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`screenName` | String | スクリーン名

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
var page="FirebaseHome";
window.FirebasePlugin.setScreenName(page);
alert(page + " screen is tracked.");
{{</highlight>}}

### setUserId()

アナリティクスで使用するユーザーID を設定します。

{{<highlight javascript>}}
window.FirebasePlugin.setUserId(id);
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`id` | String | 特定のユーザーに関連付けられた一意の識別子は、ヒットごとに送信する必要があります。

**戻り値**

- `Promise`

**例**

{{<highlight javascript>}}
//user ID for testing purpose
var myUserId="35009a79-1a05-49d7-b876-2b884d0f825b";
window.FirebasePlugin.setUserId("user_id");
alert("UserID is set to: " + myUserId);
{{</highlight>}}
