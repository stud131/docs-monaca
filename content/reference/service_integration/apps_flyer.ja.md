---
title: AppsFlyer
weight: 20
---

[AppsFlyer](https://www.appsflyer.com/overview/)
は、モバイル広告に関する宣伝効果の測定 ( アトリビューション )
および収集したデータの分析 ( アナリティクス )
において、業界における標準のツールになりつつあります。AppsFlyer
が提供する正確な測定・分析結果に基づき、広告の提供元は、広告のターゲットの絞り込み、投資額の見直しなどを行え、よって、投資対効果 ( ROI ) を最適化できます。

AppsFlyer
を使用すれば、アプリのインストール状況、ダウンロード状況、コンバージョン情報
( conversion/目的達成の成否 ) などを監視・追跡できます。また、AppsFlyer
提供の API
を使用すれば、他のアプリ/プラットフォームと連携することができます。

## 事前準備

AppsFlyer を使用した監視・追跡を行う前に、次の情報が必要となります。

1.  `devKey`: AppsFlyer 提供の devKey です。
2.  `appId`: ( iOS の場合 ) App Store で使用する App ID です。

## Monaca プロジェクトに AppsFlyer を追加する方法

1.  Monaca クラウド IDE から、 {{<menu menu1="設定" menu2="外部サービス連携">}} を選択します。

2.  *AppsFlyer* サービスの {{<guilabel name="詳細を見る">}} ボタンをクリックします。

3.  {{<guilabel name="インストール">}} ボタンをクリックします。

    {{<img src="/images/reference/service_integration/apps_flyer/1.png" width="500">}}

4.  インストールを継続するか確認する画面が表示されます。 {{<guilabel name="OK">}}
    をクリックして、インストールを開始します。

## 設定

次の記述を追加します。devKey ( および appID )
を渡して、監視・追跡処理を初期化します。

{{<highlight javascript>}}
document.addEventListener("deviceready", function(){

    var options = {
        devKey:  'xxXXXXXxXxXXXXxXXxxxx8'  // your AppsFlyer devKey
    };

    var userAgent = window.navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test(userAgent)) {
        options.appId = "123456789";       // your ios app id in app store
    }

    window.plugins.appsFlyer.initSdk(options);

}, false);
{{</highlight>}}

## 使い方

### SDK の初期化

SDK を初期化します。

{{<highlight javascript>}}
initSdk(options, onSuccess, onError): void
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`options` | オブジェクト | SDK の設定を行います ( 設定値に関しては、下の 「 オプション 」 表をご確認ください )。
`onSuccess` | (`message`: 文字列) => void | 成功時のコールバック : SDK の初期化が成功したときに呼ばれます ( 任意 )。
`onError` | (`message`: 文字列) => void | 失敗時のコールバック : SDK の初期化時に、エラーが発生した場合に呼ばれます ( 任意 )。

**options オブジェクト**

名前 | 型 | デフォルト値 | 解説
-----|------|---------|------------------
`devKey` | 文字列 | | [Dev key の解説 ( AppsFlyer のサイト )](https://support.appsflyer.com/hc/ja/articles/211719806-App-Settings#sdk-dev-key)
`appId` | 文字列 | | ( iOS のみ ) App Store で使用する App ID です。
`isDebug` | 真偽値 | `false` | デバッグモード ( 任意 )
`onInstallConversionDataListener` | 真偽値 | `false` | アトリビューション/コンバージョン データに、SDK 経由でアクセスします ( ディファード ディープリンク/Deferred DeepLinking )。AppsFlyer プラグインでは、アトリビューション データを、onSuccess コールバックに返します。詳細は、次のリンク先をご確認ください。 <ul><li>[ディファードディープリンク - コンバージョンデータの取得](https://support.appsflyer.com/hc/ja/articles/207032096-ディファードディープリンク-コンバージョンデータの取得)</li></ul>

**例**

`initSdk()` 関数の使用例を、次に記します。

{{<highlight javascript>}}
var onSuccess = function(result) {
    //handle result
};

function onError(err) {
    // handle error
}

var options = {
    devKey:  'd3Ac9qPardVYZxfWmCspwL',
    appId: '123456789',
    isDebug: false,
    onInstallConversionDataListener: true
};

window.plugins.appsFlyer.initSdk(options, onSuccess, onError);
{{</highlight>}}

### アプリ内イベントトラッキング API

`trackEvent` メソッドを使用して、AppsFlyer の分析メカニズム ( AppsFlyer
analytics )
側に、アプリ内イベントの収集データを渡します。また、このメソッドを使用すれば、監視対象のイベントを、コードに直接追加して、動的に追加できるようになります。アプリ内イベントを使用すると、ユーザーの動向を分析できます。また、各種キャンペーンおよびメディアソースへの関連付けもできます
(
ユーザーの操作と、そのきっかけとなったキャンペーンなどを対応付けできます
)。ROI ( 投資対効果 ) と LTV ( 顧客生涯価値 )
の計算に必要となる、データ収集対象のイベントに関しては、慎重に選択する必要があります。

{{<highlight javascript>}}
trackEvent(eventName, eventValues): void (optional)
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`eventName` | 文字列 | イベント名 ( カスタム可能 )。ダッシュボード上に表示されます。
`eventValue` | オブジェクト | イベントの詳細

**例**

`trackEvent()` 関数の使用例を、次に記します。

{{<highlight javascript>}}
var eventName = "af_add_to_cart";

var eventValues = {
    "af_content_id": "id123",
    "af_currency":"USD",
    "af_revenue": "2"
};

window.plugins.appsFlyer.trackEvent(eventName, eventValues);
{{</highlight>}}

### 通貨コードの設定

通貨コードを変更できます。

{{<highlight javascript>}}
setCurrencyCode(currencyId): void
{{</highlight>}}

**パラメーター**

名前 | 型 | デフォルト値 | 解説
-----|------|---------|------------------
`currencyId` | 文字列 | `USD` | 使用できる通貨コードに関しては、[こちら ( ISO 4217 )](http://www.xe.com/iso4217.php) をご確認ください。

**例**

`setCurrencyCode()` 関数の使用例を、次に記します。

{{<highlight javascript>}}
window.plugins.appsFlyer.setCurrencyCode("USD");
window.plugins.appsFlyer.setCurrencyCode("GBP"); // British Pound
{{</highlight>}}

### カスタマーユーザー ID の設定 ( 詳細 )

カスタム ID をセットします。AppsFlyer 提供の ID 群 ( 端末 ID、ユーザー
ID など ) と、このカスタム ID を紐づけすれば、各種情報を、カスタム ID
下に集約できるようになります。このカスタム ID ( AppsFlyer
側とユーザー側で使用している ID の紐づけに使用 ) は、AppsFlyer
が提供する CSV レポートを出力時、および、PostBack 系の API
の使用時にも使用できます。

{{<note>}}
この ID の設定は、アプリを初めて起動するときに行う必要があります ( SDK
の初期化時 )。実装方法としては、deviceready イベントの処理時に、この API
を呼び出すことを推奨します。
{{</note>}}

{{<highlight javascript>}}
setAppUserId(customerUserId): void
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`customerUserId` | 文字列 | 独自のカスタム ID

**例**

`setAppUserId()` 関数の使用例を、次に記します。

{{<highlight javascript>}}
window.plugins.appsFlyer.setAppUserId(userId);
{{</highlight>}}

### GCM プロジェクト番号の設定

GCM のプロジェクト番号をセットします。この番号を使用して、アプリのアンインストールを監視・追跡します
( Android プラットフォーム向け )。

{{<highlight javascript>}}
setGCMProjectID(GCMProjectNumber): void
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`GCMProjectNumber` | 文字列 | GCM のプロジェクト番号。Google Developer Console 上で確認できます。詳細は、[アンインストール計測](https://support.appsflyer.com/hc/ja/articles/210289286-アンインストール計測#Androidアンインストール) ページをご確認ください。

### トラッキングのアンインストール

アプリのアンインストールを監視・追跡するため、iOS
のデバイストークンをセットします ( iOS プラットフォーム向け )。

{{<highlight javascript>}}
registerUninstall(token): void
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`token` | 文字列 | iOS のデバイストークン。 `UnityEngine.iOS.NotificationServices.deviceToken` を使用すれば、デバイストークンを取得できます。詳細は、[Unity の解説](https://support.appsflyer.com/hc/ja/articles/213766183-AppsFlyer-SDKの実装-Unity)、および、[iOS アンインストールの計測](https://support.appsflyer.com/hc/ja/articles/210289286-アンインストール計測#iOSアンインストール) をご確認ください。

### AppsFlyer のデバイスIDを取得する

この API を使用すれば、AppsFlyer 側で独自に割り振っている端末 ID
を取得できます。この端末 ID は、各種レポートの出力時、および、各種 API
で使用されます。

{{<highlight javascript>}}
getAppsFlyerUID(getUserIdCallbackFn): void
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`getUserIdCallbackFn` | () =&gt; void | 成功時のコールバック

**例**

`getAppsFlyerUID()` 関数の使用例を、次に記します。

{{<highlight javascript>}}
var getUserIdCallbackFn = function(id) {
    alert('received id is: ' + id);
}
window.plugins.appsFlyer.getAppsFlyerUID(getUserIdCallbackFn);
{{</highlight>}}

### ディープリンク トラッキング

AppsFlyer のアトリビューション
データを使用して、ディープリンクを追跡します。

{{<note>}}
Android バージョン 4.2.5 以降では、ディープリンク関連のメタデータ (
scheme、host ) は 、自動的に送付されます。
{{</note>}}

{{<highlight javascript>}}
handleOpenUrl(url): void
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`url` | 文字列 | Url

**例**

The following snippet shows how to use `handleOpenurl()` function:

{{<highlight javascript>}}
var handleOpenURL = function(url) {
    window.plugins.appsFlyer.handleOpenUrl(url);
}
{{</highlight>}}

