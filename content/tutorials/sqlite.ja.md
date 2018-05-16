---
title: "Cordova Sqlite Storage プラグイン"
weight: 50
---

この Cordova/PhoneGap プラグインは、HTML5/Web SQL API を使用して Android、iOS、Windows 上で sqlite データベースを開き、使用します。

- Repo: https://github.com/litehelpers/Cordova-sqlite-storage
- Plugin ID/Package Name: `cordova-sqlite-storage`
- Tested Version: 2.3.0

## デモ 

{{<import pid="5ac33652e78885cd208b4567" title="Sqlite Storage Plugin Demo">}}

{{< figure src="/images/samples/sqlite.png">}}

## Monaca クラウド IDE でプラグインを有効にする

1. IDE メニューから {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} へ移動します。

2. {{<guilabel name="Cordova プラグインのインポート">}}  ボタンをクリッククリックします。 次に、[ZIP ファイル] または [パッケージ名 / URL] を使用してプラグインをインポートします。

## 使い方

プラグインをプロジェクトへインポート後、データベースの初期化を開始できます。[deviceready] イベント後にプラグイン API を使用します。

{{<highlight javascript>}}
var database = null;

document.addEventListener("deviceready", function(){
    // Initialize the database after the Cordova is ready.
    initDatabase();
});

function initDatabase() {
    database = window.sqlitePlugin.openDatabase({name: 'sample.db', location: 'default'});

    database.transaction(function(transaction) {
        transaction.executeSql('CREATE TABLE SampleTable (name, score)');
    });
}
{{</highlight>}}

## API リファレンス

ここでは、[デモ](https://monaca.mobi/directimport?pid=5ac33652e78885cd208b4567) で使用されている主な API について説明します。 完全なAPIリファレンスについては、[こちら](https://github.com/litehelpers/Cordova-sqlite-storage) を参照してください。

### セルフテスト 機能

#### echoTest()

このプラグインの Javascript とネイティブ部分の両方がアプリにインストールされていることを確認してください。

{{<highlight javascript>}}
window.sqlitePlugin.echoTest(successCallback, errorCallback);
{{</highlight>}}

**戻り値**

- `Promise`

#### selfTest()

プラグインがデータベースを開き、CRUD (作成、読み取り、更新、削除) 操作を実行し、正しくクリーンアップできることを確認します。

{{<highlight javascript>}}
window.sqlitePlugin.selfTest(successCallback, errorCallback);
{{</highlight>}}

**戻り値**

- `Promise`

### データベースの操作

データベースオブジェクトを開きます。

{{<highlight javascript>}}
window.sqlitePlugin.openDatabase({name: String, [location: String], [iosDatabaseLocation: String]}, [successCallback], [errorCallback]);
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`name` | String | データベースの名前
`location` | String | [オプション] データベースの場所
`iosDatabaseLocation` | String | [オプション] iOSデータベースの場所。<ul><li>`default`: Library/LocalDatabase サブディレクトリ - iTunes には表示されず、iCloud によってバックアップされません。</li><li>`Library`: Library サブディレクトリ - iCloud によってバックアップされ、iTunes には表示されません。</li><li>`Documents`: Documents サブディレクトリ - iTunesに表示され、iCloudによってバックアップされる</li></ul>

**戻り値**

- `Promise` 

**例**

既定または指定された場所でデータベースアクセスハンドルオブジェクトを開く例：

{{<highlight javascript>}}
// use the default location
var database = window.sqlitePlugin.openDatabase({name: 'my.db', location: 'default'});

// use a specified location for iOS only
var database = window.sqlitePlugin.openDatabase({name: 'my.db', iosDatabaseLocation: 'Library'});
{{</highlight>}}

The successcb and errorcb callback parameters are optional but can be extremely helpful in case anything goes wrong. For example:

{{<highlight javascript>}}
window.sqlitePlugin.openDatabase({name: 'my.db', location: 'default'}, function(db) {
  db.transaction(function(tx) {
    // ...
  }, function(err) {
    console.log('Open database ERROR: ' + JSON.stringify(err));
  });
});
{{</highlight>}}

### SQL トランザクション

開いているデータベースで SQL を実行します。

{{<highlight javascript>}}
database.executeSql(SQL_STATEMENT: String, [] , [successCallback], [errorCallback]);
{{</highlight>}}

**戻り値**

- `Promise` 

**例**

{{<highlight javascript>}}
database.transaction(function(transaction) {
    transaction.executeSql('SELECT count(*) AS recordCount FROM SampleTable', [], function(ignored, resultSet) {
        $('#result').text('RECORD COUNT: ' + resultSet.rows.item(0).recordCount);
    });
}, function(error) {
    alert('SELECT count error: ' + error.message);
});
{{</highlight>}}

{{<highlight javascript>}}
database.transaction(function(transaction) {
    transaction.executeSql('DELETE FROM SampleTable');
}, function(error) {
    alert('DELETE error: ' + error.message);
}, function() {
    alert('DELETE OK');
});
{{</highlight>}}

### データベースの削除

データベースオブジェクトを削除します。

{{<highlight javascript>}}
window.sqlitePlugin.deleteDatabase({name: String, [location: String], [iosDatabaseLocation: String]}, [successCallback], [errorCallback]);
{{</highlight>}}

**パラメーター**

パラメーター名 | 型 | 説明
-----|------|-------------
`name` | String | データベースの名前
`location` | String | [オプション] データベースの場所
`iosDatabaseLocation` | String | [オプション] iOSデータベースの場所。<ul><li>`default`: Library/LocalDatabase サブディレクトリ - iTunes には表示されず、iCloud によってバックアップされません。</li><li>`Library`: Library サブディレクトリ - iCloud によってバックアップされ、iTunes には表示されません。</li><li>`Documents`: Documents サブディレクトリ - iTunesに表示され、iCloudによってバックアップされる</li></ul>

**戻り値**

- `Promise` 

**例**

{{<highlight javascript>}}
// use the default location
window.sqlitePlugin.deleteDatabase({name: 'my.db', location: 'default'}, successcb, errorcb);

// use a specified location for iOS only
window.sqlitePlugin.deleteDatabase({name: 'my.db', iosDatabaseLocation: 'Library'});
{{</highlight>}}