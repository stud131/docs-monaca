---
title: MonacaApp-Info.plist
weight: 60
---


iOS アプリの設定を行うには、 MonacaApp-Info.plist ファイルを編集します。
`plist` ファイルの情報に関しては、 [Information Property List Files ( Apple )](http://developer.apple.com/library/ios/documentation/general/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html) をご確認ください。このファイルは、次のように、Monaca プロジェクトの `ios` フォルダー下に置かれています。

{{<figure src="/images/reference/config/ios/1.png">}}

{{<note>}}
  Cordova 6.2 以降をサポートする Monaca フレームワークでは、<code>MonacaApp-Info.plist</code> ファイルを使用しないように、仕様が変更されました。よって、iOS アプリの設定をカスタマイズする場合には、 {{<link href="/ja/reference/third_party_phonegap/custom_config" title="Custom Config プラグイン">}} を使用する必要があります。
{{</note>}}

{{<highlight xml>}}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">

<plist>
  <dict>
    <key>key</key>
    <value-type>value</value-type>
      ...
    <key>key</key>
    <array>
      <value-type>value</value-type>
      <value-type>value</value-type>
    </array>
    ...
  </dict>
</plist>
{{</highlight>}}

`MonacaApp-Info.plist` ファイル内には、3 つの主な要素があります。

- `<key>` : value ( plistObject ) とアプリの設定情報間の紐付けをします。
- `<array>` : 配列を使用して、value ( plistObject ) を格納できます。
- `<dict>` : key と value ( plistObject ) の組み合わせを、<dict> 内に置きます。

例 :

{{<highlight xml>}}
<plist>
  <dict>
    ...
    <key>XXX</key>
      <string>The value(plistObject) corresponding to key(XXX)</sting>
      ...
    <key>YYY</key>
      <array>
        <string>The 1st value(plistObject) corresponding to key(YYY)</string>
        <string>The 2nd value(plistObject) corresponding to key(YYY)</string>
        <string>The 3rd value(plistObject) corresponding to key(YYY)</string>
        <string>The 4th value(plistObject) corresponding to key(YYY)</string>
      </array>
    ...
  </dict>
</plist>
{{</highlight>}}

#### Value ( plistObject ) の型の一覧

型 | 解説
------|---------------
文字列 | 文字列   
date | 日付および時刻を表示
integer | 整数
real | 浮動小数点データ
data | データ
true | 真 ( boolean )
false | 偽 ( boolean )

#### Key の一覧

key | plistObject の型 | 解説
----|-----------------|-------------------
CFBundleDevelopmentRegion	| 文字列 | 開発者の母国語を指定します。ユーザー側の使用する言語が不明な場合、デフォルトとして、この値を使用します。
CFBundleDisplayName	| 文字列 | アプリ名を指定します。完全修飾名 ( Fully Qualified Class Name / FQCN ) を指定します ( クラスは、Application クラスを継承していること ) 。
CFBundleExecutable	| 文字列 | アプリの実行可能ファイルを指定します。
CFBundleIconFile	| 文字列 | アプリのアイコンのファイル名を指定します。
CFBundleIconFiles	| \<array\>string	| アイコンのファイル名を指定します ( iOS 3.2 以降の端末用 )。端末の画面解像度に応じて、適切なファイルが選択されます。
CFBundleIdentifier	| 文字列 | アプリの識別子を指定します。Uniform Type Identifier ( UTI ) を使用します ( 例 ： 「 com.monaca.MyApp 」 )。
CFBundleInfoDictionaryVersion	| 文字列 | `MonacaApp-Info.plist` ファイルの現バージョン番号です。
CFBundleName	| 文字列 | アプリの短縮表示名です。`16` 文字以下で記述します。
CFBundlePackageType	| 文字列 | アプリのタイプを識別する 4 文字のコードです。アプリの場合、「 APPL 」 と指定します。
CFBundleShortVersionString	| 文字列 | アプリのバージョン番号を指定します。
CFBundleSignature	| 文字列 | アプリの開発者を識別する 4 文字のコードです。
CFBundleVersion	| 文字列 | アプリのビルド番号です。
LSRequiresIPhoneOS	| true	| アプリがサポートする端末を、iPhone のみにするか指定します。
UISupportedInterfaceOrientations	| \<array\>string	| アプリでサポートする、画面の方向を指定します ( iPhone 向け )。iPad の場合、「 UISupportedInterfaceOrientations~ipad 」を使用します。
BackupWebStorage	| 文字列 | cloud に設定されている場合、データのバックアップを、iCloud へすることができます。 none に設定されている場合、iCloud へのバックアップはできません。デフォルトは、 cloud です。

iOS アプリで設定すべき Key と Value を、次に記します。

#### UISupportedInterfaceOrientations

画面の方向を指定します。

-   iPhone の場合

    {{<highlight xml>}}
...
  <key>UISupportedInterfaceOrientations</key>
    <array>
      <string>UIInterfaceOrientationLandscapeLeft</string>
      <string>UIInterfaceOrientationLandscapeRight</string>
      <string>UIInterfaceOrientationPortraitUpsideDown</string>
      <string>UIInterfaceOrientationPortrait</string>
    </array>
...{{</highlight>}}

-   iPad の場合

    {{<highlight xml>}}
...
  <key>UISupportedInterfaceOrientations~ipad</key>
    <array>
      <string>UIInterfaceOrientationLandscapeLeft</string>
      <string>UIInterfaceOrientationLandscapeRight</string>
      <string>UIInterfaceOrientationPortraitUpsideDown</string>
      <string>UIInterfaceOrientationPortrait</string>
    </array>
...{{</highlight>}}

#### 画面方向に関する設定値 ( Value )

Value	| 解説
------|------------------
UIInterfaceOrientationLandscapeLeft	| ホームボタンを左側にして、横向き表示
UIInterfaceOrientationLandscapeRight	| ホームボタンを右側にして、横向き表示
UIInterfaceOrientationPortraitUpsideDown	| 縦向き表示
UIInterfaceOrientationPortrait	| 通常の縦向き表示とは逆方向に、縦向き表示

表示方向の設定に関するサンプルを、こちらからダウンロードできます。

{{<download href="/download/UISupportedInterfaceOrientations.zip" title="サンプルファイル">}}

#### ステータスバーの設定

Value | 型  | デフォルト値 | 解説
------|-----|------------|--------------------
UIStatusBarHidden | Boolean | `false` | `true` に設定した場合、アプリの画面上部のステータスバーが非表示になります。`UIStatusBarHidden` を `true` に設定して、 `UIViewControllerBasedStatusBarAppearance` を `false` に設定した場合、アプリの画面上部のステータスバーは、非表示となります。
UIViewControllerBasedStatusBarAppearance | Boolean | `false` | `true` に設定した場合、アプリの画面上部のステータスバーが非表示になります。[ステータスバーの制御プラグイン](/ja/reference/cordova_6.5/statusbar) ( StatusBar プラグイン ) を使用する場合には、`true` に設定します。

