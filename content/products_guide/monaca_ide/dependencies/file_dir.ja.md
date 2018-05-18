---
title: ファイル・フォルダー構成
weight: 10
aliases: /ja/monaca_ide/manual/dependencies/file_dir
---

## Cordova バージョン

Cordova バージョンによっては、Monaca プロジェクトのファイルとフォルダ構造が異なる場合があります。

### Cordova 5.2 以前の場合

| ファイル・フォルダ名 | 説明 |
|------------------|-------------|
| [android/](#android-フォルダー) | Android アプリ向けの設定を保存しているフォルダー |
| [ios/](#ios-フォルダー) | iOS アプリ向けの設定を保存しているフォルダー |
| [www/](#www-フォルダー) | アプリの中核となるファイル ( 群 ) を保存しているフォルダー |
| [config.xml](#config-xml-ファイル) | Cordova の設定ファイル |


### Cordova 6.2 と Cordova 6.5 の場合

| ファイル・フォルダ名 | 説明 |
|------------------|-------------|
| [plugins/](#plugins-フォルダー) | 追加のプラグインを保存しておくフォルダー |
| `res/` | Android、iOS、Winrt 向けの各リソースを保存しているフォルダー |
| [www/](#www-フォルダー) | アプリの中核となるファイル ( 群 ) を保存しているフォルダー |
| [config.xml](#config-xml-ファイル) | Cordova の設定ファイル |

### Cordova 7.1 の場合

| File/Folder Name | Description |
|------------------|-------------|
| [plugins/](#plugins-フォルダー) | 追加のプラグインを保存しておくフォルダー |
| `res/` | Android、iOS、Winrt 向けの各リソースを保存しているフォルダー |
| [www/](#www-フォルダー) | アプリの中核となるファイル ( 群 ) を保存しているフォルダー |
| [config.xml](#config-xml-ファイル) | Cordova の設定ファイル |
| `package.json` | Cordova プラグイン管理ファイル |

## android フォルダー

Android アプリの設定ファイルを、`android` フォルダーに保存します。

| ファイル名 | 説明 |
|----------|-------------|
| `AndroidManifest.xml` | Android アプリの実行時に使用する Manifest ファイル |

このファイルの使用方法の詳細については、[Android Configuration File]({{<ref "android_configuration.ja.md">}}) を参照してください。

{{<note>}}
Cordova 6.2 以降をサポートする Monaca
フレームワークでは、<code>AndroidManifest.xml</code>
ファイルを使用しないように、仕様が変更されました。よって、Android
アプリの設定をカスタマイズする場合には、{{<link href="/ja/reference/third_party_phonegap/custom_config/" title="Custom Config プラグイン">}}
を使用する必要があります。
{{</note>}}

## ios フォルダー

iOS アプリの設定ファイルを、 `ios` フォルダーに保存します。

| ファイル名 | 説明 |
|----------|-------------|
| `MonacaApp-Info.plist`  | iOS アプリの実行時に使用する `Info.plist` ファイル

このファイルの使用方法の詳細については、[iOS Configuration File]({{<ref "ios_configuration.ja.md">}}) を参照してください。

{{<note>}}
Cordova 6.2 以降をサポートする Monaca
フレームワークでは、<code>MonacaApp-Info.plist</code>
ファイルを使用しないように、仕様が変更されました。よって、iOS
アプリの設定をカスタマイズする場合には、{{<link href="/ja/reference/third_party_phonegap/custom_config/" title="Custom Config プラグイン">}}
を使用する必要があります。
{{</note>}}

## www フォルダー

アプリ本体のファイルを格納します。ファイルとフォルダーは、`www`
フォルダー下であれば、自由に配置できますが、次のファイルとフォルダーだけは、特別な意味を持ちます。

| ファイル・フォルダ名 | 説明 |
|------------------|-------------|
| `index.html` | アプリの起動時に、最初に表示されるページです ( デフォルト設定 )。なお、最初に読み込むファイルは、自由に変更できます。 |
| [components/](#components-folder) | プロジェクトで使用する、すべての JS・CSS コンポーネントを格納するフォルダーです ( Monaca 側で作成 )。 | 

### components フォルダー

`www/components/` フォルダー下に、プロジェクトで使用する、すべての
JS・CSS コンポーネントを格納します。次の 2
つのファイルは、プロジェクトに追加したコンポーネントの種類にかかわらず、デフォルトで、このフォルダーに常に置かれているファイルです。

| ファイル名 | 説明 |
|----------|-------------|
| `loader.js` | コンポーネントを読み込むときに、Monaca が使用する JavaScript ファイル |
| `loader.css` | コンポーネントを読み込むときに、Monaca が使用する スタイルシート ファイル |

`loader.js` と `loader.css` を、HTML から読み込む必要があります ( どの HTML ファイルでも良い )。

各コンポーネントのフォルダーは、`www/components/`
フォルダーのサブフォルダーとして作成されます。

{{<note>}}
    <code>loader.js</code> file also loads <code>cordova.js</code> file.
{{</note>}}

## plugins フォルダー

ZIP ファイルを使用して Cordova プラグインをインポートした場合、このフォルダ内に保存されます。 URL または プラグインID を使用してプラグインをインポートした場合は、ビルドの際にプラグインファイルがダウンロードされます。

## config.xml ファイル

`config.xml` には、Cordova
の挙動を制御するための設定が定義されています。`config.xml`
ファイルを使用した、Android アプリと iOS
アプリ向けの設定は、次のリンク先をご確認ください。

-   [Android 向けの config.xml の設定]({{<ref "android_configuration.ja.md#config-xml">}})
-   [iOS 向けの config.xml の設定]({{<ref "ios_configuration.ja.md#config-xml">}})

{{<note>}}
Cordova 6.2 以降では、Android アプリまたは iOS
アプリの挙動を制御するときには、<code>config.xml</code>
が使用されます。詳細は、{{<link href="/ja/reference/third_party_phonegap/custom_config/" title="Custom Config プラグイン">}} をご確認ください。
{{</note>}}

参考ページ

- [サードパーティー製 Cordova プラグイン](/ja/reference/third_party_phonegap/)
- [基本 Cordova プラグイン ( Cordova のコア プラグイン )](/ja/reference/cordova_6.5/)