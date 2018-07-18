---
title: AndroidManifest.xml
weight: 30
---

{{<note>}}
  Cordova 6.2 以降では、<code>AndroidManifest.xml</code> ファイルを使用しない仕様となりました。  
  Cordova 6.2 以降は、{{<link href="../../third_party_phonegap/custom_config" title="Custom Config プラグイン">}} をご利用ください。
{{</note>}}

Android アプリの基本的な挙動を設定する場合、`AndroidManifest.xml`
ファイルを編集します。このファイルは、Monaca プロジェクトの `android`
フォルダー下に置かれています。

{{<figure src="/images/reference/config/android/1.png">}}

#### AndroidManifest.xml ( 主な要素のみ記載 )

{{<highlight xml>}}
<?xml version="1.0" encoding="utf-8"?>
<manifest>

  <uses-permission />
  <uses-sdk />
  <uses-feature />
  <supports-screens />

  <application>
    <activity>
        <intent-filter>
            <action />
            <category />
        </intent-filter>
    </activity>
  </application>

</manifest>
{{</highlight>}}

#### &lt;manifest&gt;

`AndroidManifest.xml` でルートとなる要素です。この要素内で、`xlmns:android`
属性と `package` 属性を指定します。また、この要素下に `<application>`
などの子要素を置きます。

属性 | 型 | 解説
----------|------|----------------
`xmlns:android`	| 文字列 | Android の名前空間を宣言するための属性です。この属性値には、常に、 `http://schemas.android.com/apk/res/android` を設定します。
`android:versionCode` |	文字列 | 内部で使用するバージョン番号です。最新バージョンを決定するときに使用されます。比較して、数が多いほうが、より新しいバージョンとなります。このバージョン番号は、ユーザー側には表示されません。
`android:versionName` | 文字列 | ユーザー側に表示するバージョン番号です。
`package` | 文字列 | Package name

**例**

{{<highlight xml>}}
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    android:versionCode="%%%VERSION_CODE%%%"
    android:versionName="%%%VERSION_NAME%%%" package="%%%PACKAGE_NAME%%%">
</manifest>
{{</highlight>}}

#### &lt;uses-sdk&gt;

アプリで使用する API のレベルを設定します。 `<manifest>` タグ下に、この要素を記述します。

属性 | 型 | 解説
----------|------|----------------
`android:minSdkVersion` | 数値 | アプリの実行に必要な、最低レベルの API です。Android では、この値を確認して、端末にアプリをインストールできる否かを決定します。
`android:targetSdkVersion` | 数値 | 要求する API レベルを指定します。

**例**

{{<highlight xml>}}
<uses-sdk android:minSdkVersion="14" android:targetSdkVersion="22" />
{{</highlight>}}

#### &lt;uses-permission&gt;

パーミッション ( 権限 ) の設定です。アプリのインストール時に、パーミッションも有効になります。`<manifest>` 下に、この要素を記述します。

属性 | 型 | 解説
----------|------|----------------
`android:name` | 文字列 | Android 側のリソースを使うためのパーミッションです。アプリが使用するリソース ( Camera、Network など ) を指定します。

**&lt;uses-permission&gt;の定義方法**

`<components/loader.js>` を読み込む場合には、 `ACCESS_NETWORK_STATE` パーミッションが必要となります。 このファイルをアプリ側で必要としない場合には、 `<uses-permission>` の対象から外せます。

{{<highlight xml>}}
<uses-permission android:name="%%%PERMISSION_NAME%%%"></uses-permission>
{{</highlight>}}

Permission | PERMISSION_NAME | 解説
-----------|-----------------|------------------
Access Coarse Location | `android.permission.ACCESS_COARSE_LOCATION` | 位置情報の取得を許可
Access Fine Location | `android.permission.ACCESS_FINE_LOCATION` | 位置情報関連のサービスの使用を許可
Access Network State | `android.permission.ACCESS_NETWORK_STATE` | ネットワーク状態の取得を許可
Access Location Extra Commands | `android.permission.ACCESS_LOCATION_EXTRA_COMMANDS` | 位置情報プロバイダーが提供するコマンドへのアクセスを許可
Bluetooth | `android.permission.BLUETOOTH` | ペアリング済みの BlueTooth 機器への接続を許可
Bluetooth (Admin)| `android.permission.BLUETOOTH_ADMIN` | BlueTooth 機器の検知とペアリング ( 接続 ) を許可
Camera | `android.permission.CAMERA` | カメラ機能の使用を許可
Flashlight | `android.permission.FLASHLIGHT` | フラッシュライトへのアクセスを許可
Internet | `android.permission.INTERNET` | インターネット接続を許可
Modify Audio Setting | `android.permission.MODIFY_AUDIO_SETTINGS` | オーディオ設定の変更を許可
Read Phone State | `android.permission.READ_PHONE_STATE` | 電話関連の情報へのアクセスを許可 ( 読み取り専用 )
Receive SMS | `android.permission.RECEIVE_SMS` | SMS メッセージの受信を許可
Record Audio | `android.permission.RECORD_AUDIO` | 録音を許可
Read Contacts	| `android.permission.READ_CONTACTS` | 連絡先の読み込みを許可
Vibrate | `android.permission.VIBRATE` | バイブレーション機能の使用を許可
Write Contacts | `android.permission.WRITE_CONTACTS` | 連絡先へのアクセスを許可 ( 書き込み )
Write External Storage | `android.permission.WRITE_EXTERNAL_STORAGE` | 外部ストレージへのアクセスを許可 ( 書き込み )

**例**

カメラのパーミッション

{{<highlight xml>}}
<uses-permission android:name="android.permission.CAMERA"></uses-permission>
{{</highlight>}}

#### &lt;uses-feature&gt;

アプリ側で使用する、ハードウェアまたはソフトウェアを宣言します。たとえば、アプリ側でカメラを使用する場合、カメラが搭載されていない端末では、アプリは動作しません。`<manifest>` 下に、この要素を記述します。

属性 | 型 | 解説
----------|------|----------------
`android:name` | 文字列 | アプリ側で使用する機能の名前です。
`android:required` | 真偽値 | 真偽値を使用して、`android:name` に指定した機能を、アプリ側で使用するか否か指定します。`true` に設定した場合、該当機能がないときには、アプリは動作しません。`false` に設定した場合には、該当機能がないときでも動作します。

**例**

アプリ側でカメラを使用する場合のコードを、次に記します。

{{<highlight xml>}}
<uses-feature android:name="android.hardware.camera" android:required="true" />
{{</highlight>}}

#### &lt;application&gt;

application タグです。 `<manifest>` タグ下に、この要素を記述します。

{{<highlight xml>}}
<application android:icon="@drawable/icon"
             android:label="%%%APPLICATION_NAME%%%"
             android:name="mobi.monaca.framework.MonacaApplication">
</application>
{{</highlight>}}

属性 | 型 | 解説
----------|------|----------------
`android:name` | 文字列 | アプリ名です。完全修飾名 ( Fully Qualified Class Name / FQCN ) を指定します ( クラスは、Application クラスを継承していること ) 。
`android:icon` | 文字列 | アプリで使用するアイコンです。アプリの各コンポーネント用のデフォルトのアイコンにもなります。
`android:label`| 文字列 | アプリで使用するラベルです。
`android:theme` | 文字列 | アプリで使用するテーマです。
`android:screenOrientation` | 文字列 | 画面のオリエンテーションをアプリ毎に指定します。

#### &lt;intent-filter&gt;

インテントフィルターの処理を定義します。 `<activity>`
下に、この要素を記述します。子要素 `<action>` は、必ず定義します。

{{<highlight xml>}}
<intent-filter>
    <action android:name="android.intent.action.MAIN" />
    <category android:name="android.intent.category.LAUNCHER" />
</intent-filter>
{{</highlight>}}

#### &lt;action&gt;

インテントフィルターのアクションを指定します。 `<intent-filter>`
下に、この要素を記述します。

属性 | 型 | 解説
----------|------|----------------
`android:name` | 文字列 | アクション名です

#### &lt;category&gt;

インテントフィルターのカテゴリー名です。 `<intent-filter>`
下に、この要素を記述します。

属性 | 型 | 解説
----------|------|----------------
`android:name` | 文字列 | カテゴリー名です。


