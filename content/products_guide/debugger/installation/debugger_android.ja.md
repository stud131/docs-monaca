---
title: Android 向けの Monaca デバッガー
weight: 10
aliases: /ja/debugger/manual/installation/debugger_android
---

{{<figure src="/images/debugger/manual/installation/debugger_android/3.png" title="Android 向けの Monaca デバッガー" width="300">}}  

<table class="small">
    <tr>
        <th width="25%">Monaca デバッガー</th>
        <th>ストア版</th>
        <th>カスタムビルド版</th>
    </tr>
    <tr>
        <td>説明</td>
        <td>GooglePlayストアやAppStoreで配布されているMonaca デバッガー</td>
        <td>Monaca クラウド IDE にて、ビルドして作成するMonaca デバッガー</td>
    </tr>
    <tr>
        <td>インストール方法</td>
        <td>
            <ul>
                <li><a href="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=ja">Google Playストア</a></li>
                <li><a href="https://itunes.apple.com/jp/app/monaca/id550941371">App Store</a></li>
            </ul>
        </td>
        <td><a href="#カスタムビルド版-monaca-デバッガーのビルドとインストール">カスタムビルド版 Monaca デバッガーのビルドとインストール</a> </td>
    </tr>
        <tr>
        <td><a href="#cordova-プラグイン">Cordova プラグイン</a></td>
        <td>基本プラグインおよび複数のサードパーティー製プラグインがあらかじめ実装されています。</td>
        <td>基本プラグインやサードパーティー製プラグインに加えて、ユーザー自作の プラグインなどを組み込むことができます。</td>
    </tr>
    <tr>
        <td>パッケージ名<br>(<code>Android:PackageName</code>)</td>
        <td><code>mobi.monaca.debugger</code</td>
        <td>設定画面にてユーザー側で設定</td>
    </tr>
        <tr>
        <td>アプリのリリース番号<br>(<code>Android:versionName</code>)<br> (表示用) </td>
        <td>固定 (ユーザー設定不可)</td>
        <td>ユーザー側で設定</td>
    </tr>
    <tr>
        <td>アプリのビルド番号<br>(<code>Android:versionCode</code>)<br> (内部処理用) </td>
        <td>固定 (ユーザー設定不可)</td>
        <td>ユーザー側で設定</td>
    </tr>
        <tr>
        <td><a href="#usb-デバッグ">USB デバッグ</a></td>
        <td colspan="2">利用可 ( Chrome DevTools )</td>
    </tr>
    <tr>
        <td><a href="#localkit-のインスぺクタ機能">Localkit のインスぺクタ機能</a></td>
        <td colspan="2">利用可</td>
    </tr>
    <tr>
        <td><a href="#webview">WebView</a></td>
        <td colspan="2">Stock と Crosswalk</td>
    </tr>
    <tr>
        <td><a href="#ネットワーク-インストール">ネットワーク インストール</a></td>
        <td colspan="2">利用可</td>
    </tr>
</table>

{{<warning>}}
下のプラグインは、ストア版およびカスタム版デバッガーの両方ともにインストールされません。<br>
利用する際は、デバッグビルドかリリースビルドにてご利用ください。
<ul style="margin:5px;">
    <li>Monacaバックエンドプラグイン</li>
    <li>プッシュ通知に関するプラグイン
        <ul>
            <li>phonegap-plugin-push</li>
            <li>onesignal-cordova-plugin</li>
            <li>cordova-plugin-firebase</li>
        </ul>
    </li>
</ul>
{{</warning>}}

{{<note>}}
    Cordova 5.2 より前のバージョンを実装したプロジェクトを、Monaca デバッガー 5 系上で実行する場合、不具合が生じることがあります。修復方法を次に記します。
    <li>プロジェクトに実装されている <a href="/ja/products_guide/monaca_ide/dependencies/cordova_plugin/#cordova-のバージョン変更">Cordova のバージョンを更新</a></li>
    <li><a href="#カスタムビルド版-monaca-デバッガーのビルドとインストール">カスタムビルド版 Monaca デバッガー</a> を使用 ( 旧バージョンの Cordova に対応するため )</li>
{{</note>}}

## Cordova プラグイン

Monaca デバッガーには、「 基本プラグイン 」 および 「 サードパーティー製プラグイン 」
が、あらかじめ実装されています。

基本プラグインとは、バッテリー情報の取得 API、カメラ
API、住所録の取得 API、端末情報の取得 API
などを指します。詳細は、[基本プラグイン](/ja/reference/cordova_6.5) をご確認ください。

また、DatePicker、BarcodeScanner など、サードパーティー製プラグインも、Monaca に実装されています。詳細は、
[サードパーティー製プラグイン](/ja/reference/third_party_phonegap) をご確認ください。

これ以外の第三者提供 ( 「 外部の Cordova プラグイン 」 )
または自作のプラグイン ( 「[ユーザー Cordova プラグイン]({{<ref "custom_cordova_plugin.ja.md">}})」 )
をプロジェクトに追加することもできます。ストア版の Monaca
デバッガーには、これらのプラグインはデフォルトでは実装されていないため、このデバッガー上でアプリをそのまま実行しても、正しく動作しません。そこで、ストア版のデバッガーの代わりに、カスタムビルド版の
Monaca デバッガーを使用します。カスタムビルド版も、ストア版も、どちらも
Monaca デバッガーですが、カスタムビルド版のデバッガーは、Monaca クラウド
IDE 上で 「 ビルド 」 して、端末にインストールします ( Monaca
デバッガーは、アプリです )。詳細は、[カスタムビルド版 Monaca デバッガーのビルドとインストール](#カスタムビルド版-monaca-デバッガーのビルドとインストール)
をご確認ください。

## USB デバッグ

Android 向けの Monaca デバッガーでは、USB
デバッグをサポートしており、Google Chrome
ブラウザーを使用したリモートデバッグが行えます。リモートデバッグで行える主な処理は、次のとおりです。

-   Console を使用したデバッグ : Console
    を使用して、各種メッセージを出力できます。
-   DOM の解析 : DOM
    の構造の確認と修正を行えます。また、リアルタイムで、更新を反映できます。
-   JavaScript のデバッグ : JavaScript
    パフォーマンスのプロファイリング、分析ポイント ( ブレークポイント )
    のセット、実行処理の制御を行います。

詳細は、[Android 向けアプリのデバッグ方法 ( Monaca デバッガーと USB デバッグを使用 )]({{<ref "debug.ja.md#chrome-のリモートデバッグ機能-google-chrome-ブラウザーを使用した-android-アプリ開発が対象">}})
をご確認ください。

## Localkit のインスぺクタ機能

Windows と Mac OS の両方で、このインスペクタ機能を使用できます。

## WebView

Android 向けのデバッガーには、Stock と Crosswalk の両方の WebView
エンジンが実装されています。アプリ側で使用する WebView
の種類により、自動で、WebView が切り替わります。

## ネットワーク インストール

Android 向けの Monaca
デバッガーでは、デバッガー経由で、ビルド済みのアプリ (
デバッグビルド版のみ ) を端末にインストールできます。詳細は、
[ネットワーク インストール]({{<ref "features.ja.md#プロジェクトオプション">}})
機能を、ご確認ください。

## カスタムビルド版 Monaca デバッガーのビルドとインストール

1.  Monaca クラウド IDE メニューから、{{<menu menu1="ビルド" menu2="Androidアプリのビルド">}} を選択します。

2. `カスタムビルドデバッガー` を選択し、{{<guilabel name="ビルドを開始する">}} をクリックします。

    {{<img src="/images/debugger/manual/installation/debugger_android/start_build.png">}}  

3.  ビルドが完了するまで、時間がかかる場合があります。ビルドが完了する  と、次の画面が表示されます。ビルドしたアプリは、QR コードを使用して、端末にインストールするか、または、ファイルを PC へダウンロードすることができます。

    {{<img src="/images/debugger/manual/installation/debugger_android/result.png">}}  

参考ページ

- [エミュレーター上へのデバッガーのインストール](../debugger_emulator)
- [iOS 上へのデバッガーのインストール](../debugger_ios)
- [機能の概要](../../features)
- [使用例](../../debug)