---
title: ファイル・フォルダー構成
weight: 10
aliases: /ja/monaca_ide/manual/dependencies/file_dir
---

{{%excerpt%}}
<!-- using full HTML code for other shortcodes otherwise `excerpt` shortcode will break them -->

## Cordova バージョン

Cordova バージョンによっては、Monaca プロジェクトのファイルとフォルダ構造が異なる場合があります。

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

### www フォルダー

アプリ本体のファイルを格納します。ファイルとフォルダーは、`www`
フォルダー下であれば、自由に配置できますが、次のファイルとフォルダーだけは、特別な意味を持ちます。

| ファイル・フォルダ名 | 説明 |
|------------------|-------------|
| `index.html` | アプリの起動時に、最初に表示されるページです ( デフォルト設定 )。なお、最初に読み込むファイルは、自由に変更できます。 |
| [components/](#components-folder) | プロジェクトで使用する、すべての JS/CSS コンポーネントを格納するフォルダーです ( Monaca 側で作成 )。 | 

### components フォルダー

`www/components/` フォルダー下に、プロジェクトで使用する、すべての
JS/CSS コンポーネントを格納します。次の 2
つのファイルは、プロジェクトに追加したコンポーネントの種類にかかわらず、デフォルトで、このフォルダーに常に置かれているファイルです。

| ファイル名 | 説明 |
|----------|-------------|
| `loader.js` | コンポーネントを読み込むときに、Monaca が使用する JavaScript ファイル |
| `loader.css` | コンポーネントを読み込むときに、Monaca が使用する スタイルシート ファイル |

`loader.js` と `loader.css` を、HTML から読み込む必要があります ( どの HTML ファイルでも良い )。

各コンポーネントのフォルダーは、`www/components/`
フォルダーのサブフォルダーとして作成されます。

<div class="admonition note">
    <code>loader.js</code> file also loads <code>cordova.js</code> file.
</div>

### plugins フォルダー

ZIP ファイルを使用して Cordova プラグインをインポートした場合、このフォルダ内に保存されます。 URL または プラグインID を使用してプラグインをインポートした場合は、ビルドの際にプラグインファイルがダウンロードされます。

### config.xml ファイル

`config.xml` には、Cordova
の挙動を制御するための設定が定義されています。`config.xml`
ファイルを使用した、Android アプリと iOS
アプリ向けの設定は、次のリンク先をご確認ください。

-   [Android 向けの config.xml の設定]({{<ref "android_configuration.ja.md#config-xml">}})
-   [iOS 向けの config.xml の設定]({{<ref "ios_configuration.ja.md#config-xml">}})

<div class="admonition note">
Cordova 6.2 以降では、Android アプリまたは iOS
アプリの挙動を制御するときには、<code>config.xml</code>
が使用されます。詳細は、<a href="/ja/reference/third_party_phonegap/custom_config/">
Custom Config プラグイン</a> をご確認ください。
</div>

参考ページ

- [サードパーティー製プラグイン](/ja/reference/third_party_phonegap/)
- [基本プラグイン](/ja/reference/cordova_6.5/)

{{%/excerpt%}}