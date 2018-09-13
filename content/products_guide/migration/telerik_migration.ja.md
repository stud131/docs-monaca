---
title: Telerik プラットフォームからの移行
weight: 10
aliases: /ja/products_guide/telerik_migration
---

このページでは、Telerik AppBuilder プロジェクトを Monaca に移行するための簡単な手順を解説します。Monaca を使って telerik プロジェクトの実行、テスト、デバッグ、ビルドを行うことができます。

## Cordova バージョンとビルド環境

移行を開始する前に、Monaca で新しく作成されたプロジェクトは、すべてデフォルトでサポートされている最新の Cordova バージョン (現在は <b>Cordova 7.1</b>) を使用します。下位バージョンを使用する場合は、[問い合わせ窓口](https://ja.monaca.io/service/index.html) までご連絡ください。

<br />
Cordova 7.1 のビルド環境:

- Cordova Android platform: `6.4.0` (API level 26)
- Gradle version: `4.3.1`
- Cordova iOS platform: `4.5.4` 
- Xcode: `9`

下位の Cordova バージョンの対応環境については、[対応環境](/ja/environment/) を参照してください。

## ステップ 1: 準備

Telerik ツールを使用してプロジェクトを Cordova プロジェクトに変換します。 次に、プロジェクトを ZIP ファイルに圧縮します。

## ステップ 2: Monaca クラウド IDE へのインポート

1. Monaca [ダッシュボード](https://monaca.mobi/ja/dashboard)から、 {{<guilabel name="インポート">}} を選択します。

2. プロジェクト名を入力し、`プロジェクトのパッケージをアップロード` オプションを選択します。 次に、プロジェクトの ZIP ファイルを参照します。

    {{<img src="/images/monaca_ide/manual/2.png" width="500px">}}

3. {{<guilabel name="インポート">}} をクリックして、プロジェクトをMonaca にインポートします。

4. Monaca クラウド IDE でプロジェクトを開くには、{{<guilabel name="開く">}} をクリックします。

    {{<img src="/images/monaca_ide/manual/3.png" width="400px">}}

5. IDE が表示されたら、[プレビュー](https://docs.monaca.io/ja/products_guide/monaca_ide/overview/#プレビュー) でアプリを表示できます。

    {{<img src="/images/monaca_ide/manual/4.png">}}

    {{<note>}}
        Ajax リクエストまたは Cordova API が使用されている場合、プレビューウィンドウの表示や操作が正しく機能しないことがあります。詳しくは、{{<link title="プレビューの制限" href="https://docs.monaca.io/ja/products_guide/monaca_ide/overview/#プレビューの制限">}} を参照してください。 この場合は、Monaca デバッガーを使用してプロジェクトを テスト/デバッグ することができます (次の項目で解説します) 。
    {{</note>}}

## ステップ 3: Monaca でのデバッグ

[Monaca デバッガー](/ja/products_guide/debugger/) は、端末上で Monaca アプリをリアルタイムでテスト、デバッグするためのアプリケーションです。Monaca クラウド IDE で Monaca アプリを開発する場合、プロジェクトファイルに加えられた変更は、保存後すぐに Monaca デバッガーに同期されます。

Monaca デバッガーの使い方は、以下になります。

1. Google Play または App Store から端末に Monaca デバッガーをインストールします。

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/App_Store.jpg" width="100" link="https://itunes.apple.com/us/app/monaca/id550941371?mt=8">}}
    {{<img src="/images/monaca_ide/tutorial/testing_debugging/Google_play.png" width="100" link="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en">}}

    {{<note>}}
        Android エミュレータに Monaca デバッガーをインストールする場合は、 {{<link href="/ja/products_guide/debugger/installation/debugger_emulator/" title="Android エミュレーター向け Monaca デバッガー">}} を参照してください。
    {{</note>}}

2. Monaca デバッガーを起動し、Monaca アカウントでサインインします。 Monaca クラウド IDE と同じアカウントを使用していることを確認してください。

    {{<img src="/images/monaca_ide/manual/5.png" width="350px">}}

3. プロジェクトを実行するには、Monaca デバッガーのプロジェクト名をタップするか、Monaca クラウド IDE の {{<guilabel name="実機で実行">}} をクリックします。

    {{<img src="/images/monaca_ide/manual/6.png" width="350px">}}

4. プロジェクトが Monaca デバッガーで実行されているはずです。 プロジェクトのさまざまな操作を試してみてください。

5. Monaca クラウド IDE からプロジェクトのソースコードを変更し、保存します。 Monaca デバッガーに変更が反映されます。

## ステップ 4: アプリのビルド

デバッグの次は、ビルドを行います。このステップでは、Android 用デバッグビルドについて解説します。

1. Monaca クラウド IDE から {{<menu menu1="ビルド" menu2="Androidアプリのビルド">}} を選択します。

    {{<img src="/images/monaca_ide/manual/7.png">}}

2. デフォルトでは、デバッグビルドが選択されています。{{<guilabel name="ビルドを開始する">}} をクリックすると、ビルド画面が新しいタブで開かれます。

    {{<img src="/images/monaca_ide/manual/8.png">}}

3. ビルドが完了するまでに数分かかる場合があります。ビルドが正常に完了すると、次の画面が表示されます。ビルドアプリを端末にインストールするさまざまな方法を選択することができます。

    {{<img src="/images/monaca_ide/manual/9.png">}}


## 備考

プロジェクトを Monaca に移行する際には、次のような注意点があります。

### サードパーティー製プラグインを使用する場合

Google Play または App Store で公開されているストア版 Monaca デバッガーには、[基本プラグイン](/ja/reference/cordova_6.5/) のみが含まれています。プロジェクトに 基本プラグイン以外のサードパーティー製プラグインが含まれている場合は、プロジェクトをテストするカスタムデバッガーをビルドする必要があります。カスタムデバッガーには、プロジェクトで使用されているプラグインのみが含まれます。 詳しくは、以下を参照してください。

- [カスタムビルド版 Monaca デバッガーのビルド方法 ( iOS )]({{<ref "debugger_ios.ja.md#カスタムビルド版-monaca-デバッガーのビルド方法">}})
- [カスタムビルド版 Monaca デバッガーのビルドとインストール ( Android )]({{<ref "debugger_android.ja.md#カスタムビルド版-monaca-デバッガーのビルドとインストール">}})

### JS/CSS コンポーネントページを使用する場合

Monaca クラウド IDE には、CSS/JavaScript ライブラリを追加するためのページがあります。{{<menu menu1="設定" menu2="JS/CSSコンポーネントの追加と削除">}} を選択すると、次のページが表示されます。

{{<img src="/images/monaca_ide/manual/10.png">}}

このページでは、さまざまな CSS/JavaScript ライブラリを追加することができますが、実際にプロジェクトで利用するためには、`index.html` ファイルに、次の 2 行を記述する必要があります。

{{<highlight html>}}
<!--Load selected JavaScript libraries-->
<script src="components/loader.js"></script>
<!--Load selected CSS libraries-->
<link rel="stylesheet" href="components/loader.css”> 
{{</highlight>}}


`loader.js` ファイルには、 `cordova.js` ファイルをロードするための設定が追加されているため、上記を追加した場合は、次の行を削除することができます。

{{<highlight html>}}
<script src="cordova.js"></script>
{{</highlight>}}

## さらに詳しく

Monaca の詳細については、以下を参照してください。

- [Monaca クラウド IDE チュートリアル](/ja/tutorials/monaca_ide/)
- [Monaca クラウド IDE](/ja/products_guide/monaca_ide/)
- [サンプルアプリ & テンプレート](/ja/sampleapp/samples/)