---
title: In-App アップデーター プラグイン
weight: 20
---

アプリの再ビルド・再パッケージ化を行わずに、アプリで使用している HTML5
アセットを更新するためのプラグイン ( Monaca In-App Updater )
です。なお、更新ファイルをホストする Web
サーバーが、別途、必要になります (
アプリから、これらのファイルへアクセスできること )。

{{<note>}}
    このプラグインを使用するためには、対応するプランへの加入が必要となります。詳細は、 {{<link href="https://ja.monaca.io/pricing.html" title="料金プラン">}} をご確認ください。
{{</note>}}

## サポート対象のプラットフォーム

-   Cordova 6.2 以降
-   iOS 8 以上
-   Android 4 以降

## プラグインの追加方法

1.  Monaca クラウド IDE から {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} を選択します。

2.  *利用可能なプラグイン* 項目の `InAppUpdater` プラグインにカーソルを置き、{{<guilabel name="有効">}} ボタンをクリックします。

    {{<img src="/images/reference/power_plugins/inapp_updater/8.png">}}

3.  次に、*有効なプラグイン* 項目へ行き、先ほど追加したプラグイン上に、カーソルを置き、{{<guilabel name="設定">}} ボタンをクリックします。

    {{<img src="/images/reference/power_plugins/inapp_updater/9.png">}}

4.  [CheckUpdate URL](#checkupdate-url) と [Download URL](#download-url) 欄を適宜入力して、 {{<guilabel name="OK">}} ボタンをクリックします。

    {{<img src="/images/reference/power_plugins/inapp_updater/10.png" width="500">}}

## 使い方

### プラグインの設定

本プラグインを利用するためには、[CheckUpdate URL](#checkupdate-url)
と [Download URL](#download-url) の二つのWeb API（URL）が必要となります。

###  CheckUpdate URL

サーバーにある更新バージョンを確認します

**Request パラメーター**

パラメーター | 型 | 解説
----------|-----------|---------------------
`project_id` | 文字列 | プロジェクトの一意の ID
`my_update_number` | 文字列 | [ 任意 ] アプリの現在の更新番号
`os` | 文字列 | [ 任意 ] 更新対象となる OS の種類
`build_type` | 文字列 | [ 任意 ] ビルドの種類
`app_version` | 文字列 | [ 任意 ] アプリのバージョン
`plugin_version` | 文字列 | [ 任意 ] InAppUpdater プラグインのバージョン

**Response パラメーター**

成功時のレスポンス例

{{<highlight javascript>}}
{
  "ios": {
    "2.1.0": {　// app version
      "1": { // update number
        "date": 20170113,
        "url": "https://hogehoge.com/app/ios-v2.1.0.zip" // This parameter is optional.
      }
    }
  }
}
{{</highlight>}}

静的ファイルを使用する場合、すべてのバージョンを次のように列挙しておきます。

{{<highlight javascript>}}
{
  "ios": {
    "2.1.0": {　// app version
      "1": { // update number
        "date": 20170113,
        "url": "https://hogehoge.com/app/1/ios-v2.1.0.zip" //  This parameter is optional.
      },
      "2": { // update number
        "date": 20170113,
        "url": "https://hogehoge.com/app/2/ios-v2.1.0.zip" //  This parameter is optional.
      }
    },
    "2.2.0": {　// app version
      "1": { // update number
        "date": 20170210,
        "url": "https://hogehoge.com/app/1/ios-v2.2.0.zip" //  This parameter is optional.
      }
    }
  }
}
{{</highlight>}}

上の例に示すように、更新番号の値は「日付」「URL」などの更新情報で構成されるJSONオブジェクトです。これは、
[getServerVersion()](#getserverversion) メソッドの Promise によって返される JSON オブジェクトの `updateInfo` パラメータによって取得できます。

### Download URL

更新用のパッケージファイル ( ZIP 形式 ) をダウンロードします。

{{<note>}}
    {{<link title="download()" href="#download">}} メソッドでダウンロード URL を設定すると、この設定を省略できます。
{{</note>}}

**Request パラメーター**

パラメーター | 型 | 解説
----------|-----------|---------------------
`update_number` | 文字列 | ダウンロードするバージョンの番号 ( 更新バージョン番号 )
`project_id` | 文字列 | プロジェクトの一意の ID
`my_update_number` | 文字列 | [ 任意 ] アプリの現在の更新番号
`os` | 文字列 | [ 任意 ] 更新対象となる OS の種類
`build_type` | 文字列 | [ 任意 ] ビルドの種類
`app_version` | 文字列 | [ 任意 ] アプリのバージョン
`plugin_version` | 文字列 | [ 任意 ] InAppUpdater プラグインのバージョン

**Response パラメーター**

成功時のレスポンスには、処理結果 ( Zip 形式 ) が入っています。

## API リファレンス

このプラグインの最もシンプルな使用方法は、[autoUpdate()](#autoupdate) を使用して、更新ファイルのダウンロード ( [プラグインの設定](#プラグインの設定) を参照のこと ) とアプリの更新を自動で行うことです。

[getServerVersion()](#getserverversion)、[download()](#download)、[updateAndRestart()](#updateandrestart) などのメソッドを組わせて使用すれば、更新処理をカスタマイズすることもできます。

このプラグインが提供しているメソッドは次のとおりです。

メソッド                    | 解説
---------------------------|------------------------------------------------------------
[getServerVersion()](#getserverversion) | 更新ファイルの情報をサーバー側から取得します。
[forceStopGetServerVersion()](#forcestopgetserverversion) | [getServerVersion()](#getserverversion) の処理を中断します。
[getLocalVersion()](#getlocalversion) | 現在のアプリの更新番号を確認します。
[download()](#download) | 更新用ファイルをダウンロードします。
[forceStopDownload()](#forcestopdownload) | [download()](#download) の処理を中断します。
[updateAndRestart()](#updateandrestart) | ダウンロードした更新用ファイルを展開し、アプリを再起動します。
[status()](#status) | プラグインの状態を確認します。
[showAlertDialog()](#showalertdialog) | ダイアログ ( タイトルとメッセージ ) を表示します。
[dismissAlertDialog()](#dismissalertdialog) | 警告 ( Alert ) ダイアログを閉じます。
[showProgressDialog()](#showprogressdialog) | 進捗表示 ( Progress ) 用ダイアログを表示します。
[changeProgressDialog()](#changeprogressdialog) | 進捗表示 ( Progress ) 用ダイアログを更新します。
[dismissProgressDialog()](#dismissprogressdialog) | 進捗表示 ( Progress ) 用ダイアログを閉じます。
[networkStatus()](#networkstatus) | ネットワークの状態 ( Wifi、3G/LTE、接続なし など ) を確認します。
[terminateApp()](#terminateapp) | アプリを強制終了します。
[autoUpdate()](#autoupdate) | 更新ファイルのダウンロードとアプリの更新を自動的に行います。

### getServerVersion()

更新ファイルの情報をサーバー側から取得します。

{{<highlight javascript>}}
monaca.InAppUpdater.getServerVersion([args: JSON object]): Promise
{{</highlight>}}

**パラメーター ( JSON オブジェクト)**

プロパティ | 型 | 解説
----------|------|----------------
`connectDelay` | 数値 | サーバー接続を開始するまでの待機時間 ( ミリ秒単位 )
`connectTimeout` | 数値 | ( Android 専用 ) サーバー接続時に適用するタイムアウト時間 ( ミリ秒単位 )
`readTimeout` | 数値  | ( Android 専用 ) サーバーからのレスポンス受信時に適用するタイムアウト時間 ( すべてのレスポンスを受け取るまでの時間、ミリ秒単位 )
`timeoutForRequest` | 数値 | ( iOS 専用 ) サーバーへのリクエスト送信時に適用するタイムアウト時間。タイムアウトが発生した場合でも、リクエストは自動的に再送信されます。エラーは出力されません。
`timeoutForResponse` | 数値 | ( iOS 専用 ) サーバーからのレスポンス受信時に適用するタイムアウト時間 ( すべてのレスポンスを受け取るまでの時間、ミリ秒単位 )

**戻り値 (Promise)**

- 成功時のコールバックには、次のような内容の JSON オブジェクトが渡されます。

    プロパティ | 型 | 解説
    ----------|------|----------------
    `needsUpdate` | 真偽値 | アプリのバージョンを更新する必要があるかを示します。
    `updatable` | 真偽値 | 更新用のファイルがサーバー側に置かれているかを示します。
    `latestVersion` | 文字列 | アプリの最新バージョン
    `myVersion` | 文字列 | 現在のアプリバージョン
    `latestUpdateNumber` | 文字列 | 現在のアプリバージョンに適用できる最新の更新番号
    `myUpdateNumber` | 文字列 | 現在のアプリバージョンが使用している更新番号
    `updateInfo` | JSON オブジェクト | サーバー側の設定が、次のようになっている場合、{{<highlight javascript>}}{
  "ios": {
    "2.1.0": {　// app version
      "1": { // update number
        "date": 20170113,
        "url": "https://hogehoge.com/app/ios-v2.1.0.zip" // This parameter is optional.
      }
    }
  }
}{{</highlight>}} `updateInfo` は、以下の内容となります。 {{<highlight javascript>}}updateInfo = {
  "date": 20170113,
  "url": "https://hogehoge.com/app/ios-v2.1.0.zip"
}{{</highlight>}}

- 失敗時のコールバックには、エラーを示す JSON オブジェクトが渡されます。

**例**

{{<highlight javascript>}}
monaca.InAppUpdater.getServerVersion().then(
    function(json) {
        alert( JSON.stringify(json) );
        targetVersion = json.myVersion;
        targetUpdateNumber = json.latestUpdateNumber;
        url = json.updateInfo.url;
        alert( targetVersion );
        alert( targetUpdateNumber );
        alert( url );
    } ,
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

### forceStopGetServerVersion()

`getServerVersion()` の処理を中断します。

{{<highlight javascript>}}
monaca.InAppUpdater.forceStopGetServerVersion(): Promise
{{</highlight>}}

**パラメーター**

- なし

**戻り値 (Promise)**

-   成功時のコールバックには、結果を格納した JSON オブジェクトが渡されます。
-   失敗時のコールバックには、エラーを示す JSON オブジェクトが渡されます。

**例**

{{<highlight javascript>}}
monaca.InAppUpdater.forceStopGetServerVersion().then(
    function(str) { alert("stop success"); } ,
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

### getLocalVersion()

現在のアプリの更新番号を確認します。

{{<highlight javascript>}}
monaca.InAppUpdater.getLocalVersion(): Promise
{{</highlight>}}

**パラメーター**

- なし

**戻り値 (Promise)**

-   成功時のコールバックには、結果を格納した JSON オブジェクトが渡されます。
-   失敗時のコールバックには、エラーを示す JSON オブジェクトが渡されます。

**例**

{{<highlight javascript>}}
monaca.InAppUpdater.getLocalVersion().then(
    function(json) { alert( JSON.stringify(json) ); } ,
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

### download()

更新用ファイルをダウンロードします。

{{<highlight javascript>}}
monaca.InAppUpdater.download(args: JSON object): Promise
{{</highlight>}}

**パラメーター ( JSON オブジェクト)**

プロパティ | 型 | 解説
----------|------|----------------
`version` | 数値 | 対象のアプリバージョン
`updateNumber` | 数値 | 更新番号
`bufferSize` | 数値 | ( Android 専用 ) バッファーサイズ ( バイト単位 )。デフォルト値は `8192` です。
`url` | 文字列 | 設定された URL から Zip ファイルをダウンロードします。この値を設定しない場合には、[Download URL](#download-url) の値 ( `config.xml` 内の `monaca:updater_DownloadUrl` ) が代わりに使用されます。
`connectDelay` | 数値 | サーバー接続を開始するまでの待機時間 ( ミリ秒単位 )
`connectTimeout` | 数値 | ( Android 専用 ) サーバー接続時に適用するタイムアウト時間 ( ミリ秒単位 )
`readTimeout` | 数値 | ( Android 専用 ) サーバーからのレスポンス受信時に適用するタイムアウト時間 ( すべてのレスポンスを受け取るまでの時間、ミリ秒単位 )
`timeoutForRequest` | 数値 | ( iOS 専用 ) サーバーへのリクエスト送信時に適用するタイムアウト時間。タイムアウトが発生した場合でも、リクエストは自動的に再送信されます。エラーは出力されません。
`timeoutForResponse` | 数値 | ( iOS 専用 ) サーバーからのレスポンス受信時に適用するタイムアウト時間 ( すべてのレスポンスを受け取るまでの時間、ミリ秒単位 )

**戻り値 (Promise)**

-   成功時のコールバックには、結果を格納した JSON オブジェクトが渡されます。

-   失敗時のコールバックには、エラーを示す JSON オブジェクトが渡されます。

-   進捗表示コールバックには、ダウンロードの進捗状況を示す、次のような JSON オブジェクトが渡されます。

    名前 | 型 | 解説
    -----|-----------|----------------------
    `count` | 数値 | これまでにダウンロードされたファイルのサイズ
    `total` | 数値 | ダウンロードされるファイルの予想サイズ

**例**

{{<highlight javascript>}}
monaca.InAppUpdater.download( { version : targetVersion, updateNumber : targetBuildNumber, url : url } ).then(
    function(json) { alert( JSON.stringify(json) ); } ,
    function(fail) { alert( JSON.stringify(fail) ); } ,
    function(json) { console.log( json.count + "/" + json.total + " are done." ); }
);
{{</highlight>}}

### forceStopDownload()

`download()` の処理を中断します。

{{<highlight javascript>}}
monaca.InAppUpdater.forceStopDownload(): Promise
{{</highlight>}}

**パラメーター**

- なし

**戻り値 (Promise)**

-   成功時のコールバックには、結果を格納した JSON オブジェクトが渡されます。
-   失敗時のコールバックには、エラーを示す JSON オブジェクトが渡されます。

**例**

{{<highlight javascript>}}
monaca.InAppUpdater.forceStopDownload().then(
    function(str) { alert("stop success"); } ,
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

### updateAndRestart()

ダウンロードした更新用ファイルを展開し、アプリを再起動します。

{{<highlight javascript>}}
monaca.InAppUpdater.updateAndRestart(): Promise
{{</highlight>}}

**パラメーター**

- なし

**戻り値 (Promise)**

-   成功時のコールバックには、結果を格納した JSON オブジェクトが渡されます。

-   失敗時のコールバックには、エラーを示す JSON オブジェクトが渡されます。

-   進捗表示コールバックには、展開処理の進捗状況を示す、次のような JSON オブジェクトが渡されます。

    名前  | 型 | 解説
    -----|-----------|----------------------
    `count` | 数値 | Zip ファイルを展開して得られた、現在までのファイル数
    `total` | 数値 | 展開予定の更新ファイル数

**例**

{{<highlight javascript>}}
monaca.InAppUpdater.updateAndRestart().then(
    function() { },
    function(fail) { alert( JSON.stringify(fail) ); },
    function(json) { console.log( json.count + "/" + json.total + " are done." ); }
);
{{</highlight>}}

### status()

プラグインの状態を確認します。

{{<highlight javascript>}}
monaca.InAppUpdater.status(): Promise
{{</highlight>}}

**パラメーター**

- なし

**戻り値 (Promise)**

-   成功時のコールバックには、次のような内容の JSON オブジェクトが渡されます。

    名前  | 型 | 解説
    -----|-----------|----------------------
    `running` | 真偽値 | プラグインが処理中の場合、`true` を返します。
    `status` | 文字列 | 処理に関する情報が格納されています。

-   失敗時のコールバックには、エラーを示す JSON オブジェクトが渡されます。

**例**

{{<highlight javascript>}}
monaca.InAppUpdater.status().then(
    function(json) { alert( JSON.stringify(json) ); },
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

### showAlertDialog()

ダイアログ ( タイトルとメッセージ ) を表示します。

{{<highlight javascript>}}
monaca.InAppUpdater.showAlertDialog(args: JSON object): Promise
{{</highlight>}}

**パラメーター ( JSON オブジェクト)**

プロパティ | 型 | 解説
----------|------|----------------
`title` | 文字列 | ダイアログのタイトル
`message` | 文字列 | メッセージ本文
`button` | JSON オブジェクト | ボタンは、次の 2 つの要素で構成されます。 <ul><li>`label`: [ 文字列 ] ボタンのラベル</li><li>`handler`: ボタンがクリックされたときに呼ばれる関数</li></ul>例 : {{<highlight javascript>}}{
    label : "OK",
    handler : function() { alert("OK is clicked"); }
}{{</highlight>}}
`cancel` | JSON オブジェクト | キャンセルボタンは、次の 2 つの要素で構成されます。 <ul><li>`label`: [ 文字列 ] キャンセルボタンのラベル</li><li>`handler`: キャンセルボタンがクリックされたときに呼ばれる関数</li></ul>例 : {{<highlight javascript>}}{
    label : "Close",
    handler : function() { alert("Close is clicked"); }
}{{</highlight>}}

**戻り値 (Promise)**

-   成功時のコールバックには、結果を格納した JSON オブジェクトが渡されます。
-   失敗時のコールバックには、エラーを示す JSON オブジェクトが渡されます。

**例**

{{<highlight javascript>}}
monaca.InAppUpdater.showAlertDialog({
    title : "Title" ,
    message : "Message" ,
    button : { label : "OK" , handler : function() { alert( "OK is clicked"); } },
    cancel : { label : "Cancel" , handler : function() { alert( "Cancel is clicked"); } },
    dismiss : function() { alert("Dismissed!"); }
} ).then(
    function(btnLabel) { alert( "open" ); },
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

### dismissAlertDialog()

警告 ( Alert ) ダイアログを閉じます。

{{<highlight javascript>}}
monaca.InAppUpdater.dismissAlertDialog(): Promise
{{</highlight>}}

**パラメーター**

- なし

**戻り値 (Promise)**

-   成功時のコールバックには、結果を格納した JSON オブジェクトが渡されます。
-   失敗時のコールバックには、エラーを示す JSON オブジェクトが渡されます。

**例**

{{<highlight javascript>}}
setTimeout( function() {
    monaca.InAppUpdater.dismissAlertDialog().then(
        function(json) { alert( "OK auto close" ); },
        function(fail) { alert( JSON.stringify(fail) ); }
    );
} , 1000 );
{{</highlight>}}

### showProgressDialog()

進捗表示 ( Progress )
用ダイアログを表示します。こちらのダイアログでは、更新の進捗状況が表示されます。

{{<highlight javascript>}}
monaca.InAppUpdater.showProgressDialog(args: JSON object): Promise
{{</highlight>}}

**パラメーター ( JSON オブジェクト)**

プロパティ | 型 | 解説
----------|------|----------------
`title` | 文字列 | ダイアログのタイトル
`message` | 文字列 | メッセージ本文
`max` | 数値 | カウンターの最大値です。ファイルをダウンロードする場合には、ファイル総数となります。
`progress` | 数値 | 進捗を示す値です。ファイルをダウンロードする場合には、ダウンロード済みのファイル総数となります。
`cancel` | JSON オブジェクト | キャンセルボタンは、次の 2 つの要素で構成されます。 <ul><li>`label`: [ 文字列 ] キャンセルボタンのラベル</li><li>`handler`: キャンセルボタンがクリックされたときに呼ばれる関数</li></ul>例 : {{<highlight javascript>}}{
    label : "Close",
    handler : function() { alert("Close is clicked"); }
}{{</highlight>}}
`dismiss` | コールバック関数 | ダイアログを閉じたときに呼ばれる関数です。

**戻り値 (Promise)**

-   成功時のコールバックには、結果を格納した JSON オブジェクトが渡されます。
-   失敗時のコールバックには、エラーを示す JSON オブジェクトが渡されます。

**例**

{{<highlight javascript>}}
monaca.InAppUpdater.showProgressDialog(
    { title : "Title" ,
    message : "Message" ,
    max : 100 ,
    progress : 50 ,
    cancel : { label : "Cancel" , handler : function() { log("cancel handler"); } } ,
    dismiss : function() { log("dismissed."); }
    } ).then(
    function(json) {
    alert(JSON.stringify(json));
    },
    function(fail) {
    alert( JSON.stringify(fail));
    }
);
{{</highlight>}}

### changeProgressDialog()

進捗表示 ( Progress ) 用ダイアログを更新します。

{{<highlight javascript>}}
monaca.InAppUpdater.changeProgressDialog(args: JSON object): Promise
{{</highlight>}}

**パラメーター ( JSON オブジェクト)**

プロパティ | 型 | 解説
----------|------|----------------
`progress` | 数値 | 進捗を示す値

**戻り値 (Promise)**

-   成功時にも引数は渡しません。
-   失敗時のコールバックはありません。

**例**

{{<highlight javascript>}}
monaca.InAppUpdater.changeProgressDialog( { progress: progress } ).then(
    function() {
    if (progress < 100) {
        setTimeout( function() { changeProgressDialog(progress+10); } , 500 );
    } else {
        monaca.InAppUpdater.dismissProgressDialog().then(
        function(json) { log("complete"); } ,
        function(error) { alert( JSON.stringify(error) ); }
        );
    }
    }
)
{{</highlight>}}

### dismissProgressDialog()

進捗表示 ( Progress ) 用ダイアログを閉じます。

{{<highlight javascript>}}
monaca.InAppUpdater.dismissProgressDialog(): Promise
{{</highlight>}}

**パラメーター**

- なし

**戻り値 (Promise)**

-   成功時のコールバックには、結果を格納した JSON オブジェクトが渡されます。
-   失敗時のコールバックには、エラーを示す JSON オブジェクトが渡されます。

**例**

{{<highlight javascript>}}
setTimeout( function() {
    monaca.InAppUpdater.dismissProgressDialog().then(
    function(json) { alert(JSON.stringify(json)); } ,
    function(error) { alert( JSON.stringify(error) ); }
    );
} , 1000 );
{{</highlight>}}

### networkStatus()

ネットワークの状態 ( Wifi、3G/LTE、接続なし など ) を確認します。

{{<highlight javascript>}}
monaca.InAppUpdater.networkStatus(): Promise
{{</highlight>}}

**パラメーター**

- なし

**戻り値 (Promise)**

- 成功時のコールバックには、次のような内容の JSON オブジェクトが渡されます。

    名前  | 型 | 解説
    -----|-----------|----------------------
    `network` | 真偽値 | 通信事業者のネットワークが利用できる場合には、`true` を返します。
    `wifi` | 真偽値 | WiFi が利用できる場合には、`true` を返します。
    `mobile` | 真偽値 | ネットワーク接続 ( 通信事業者のネットワークまたは WiFi ) を利用できる場合には `true` を返します。利用できない場合には、 `false` を返します。

- 失敗時のコールバックには、エラーを示す JSON オブジェクトが渡されます。

**例**

{{<highlight javascript>}}
monaca.InAppUpdater.networkStatus().then(
    function(json) { alert( JSON.stringify(json) ); },
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

### terminateApp()

アプリを強制終了します。

{{<note>}}
このメソッドは、旧 <code>InAppUpdater</code> ( Cordova 5 向けの v2.0.4 )
との互換性を維持するために提供されているメソッドです。
{{</note>}}

{{<warning>}}
こちらはクラッシュに相当するので、iOS での使用は推奨しません。Apple
側から申請をリジェクトされる可能性があります。
{{</warning>}}

{{<highlight javascript>}}
monaca.InAppUpdater.terminateApp()
{{</highlight>}}

**パラメーター**

- なし

**戻り値 (Promise)**

- なし

**例**

{{<highlight javascript>}}
monaca.InAppUpdater.terminateApp();
{{</highlight>}}

### autoUpdate()

更新ファイルのダウンロードとアプリの更新を自動的に行います。

{{<highlight javascript>}}
monaca.InAppUpdater.autoUpdate(options: JSON object): Promise
{{</highlight>}}

**パラメーター ( JSON オブジェクト)**

プロパティ | 型 | 解説
----------|------|----------------
`connectDelay` | 数値 | サーバー接続を開始するまでの待機時間 ( ミリ秒単位 )
`dialogMessages` | JSON オブジェクト | アプリの更新時に表示されるダイアログ。次の変数が使用できます。 <ul><li>`confirm3G`: [ 文字列 ] 更新ファイルのダウンロード時に、WiFi の代わりに通信事業者のネットワークを使用している場合に表示されるテキストです。</li><li>`prepare`:  [ JSON オブジェクト ] 2 つの変数を格納したオブジェクトです。変数は、 `title` と `message` です。更新ファイルのダウンロードを開始 ( 準備 ) するときに表示されます。</li><li>`download`: [ JSON オブジェクト ] 2 つの変数を格納したオブジェクトです。変数は、 `title` と `message` です。更新ファイルをダウンロードしているときに表示されます。</li></ul>例 : {{<highlight javascript>}}{
    confirm3G : 'These updates will be downloaded with your mobile data.',
    prepare : {
        title : 'Preparing to Dowload the Updates',
        message : 'Now checking the server version ...'},
    download : {
        title : 'Dowloading the Updates',
        message : 'Now downloading ...'}
}{{</highlight>}}
`nextTask` | コールバック関数 | 更新成功時に呼ばれる関数
`failTask` | コールバック関数 | 更新失敗時に呼ばれる関数

**戻り値 (Promise)**

- なし

**例**

{{<highlight javascript>}}
monaca.InAppUpdater.autoUpdate( {
    connectDelay : 0000,
    connectTimeout : 30000,
    readTimeout: 300000,
    nextTask : function(res) {
    if (res.requireRestart) {
        monaca.InAppUpdater.updateAndRestart().then(
        function() { },
        function(fail) { alert( JSON.stringify(fail) ); }
        );
    } else {
        alert("App is started!");
    }
    },
    failTask : function(res) {
    monaca.InAppUpdater.showAlertDialog(
        { title : "Error Code "+res.error.code ,
        message : res.error.message ,
        button : { label : "OK" , handler : function() { } }
        } ).then(
        function(json) {  },
        function(fail) { }
    );
    }
});
{{</highlight>}}

