---
title: "パート 2 : Monaca CLI と Monaca デバッガーとの連携"
weight: 2
aliases: /ja/monaca_cli/tutorial/testing_debugging/
---

[Monaca デバッガー](/ja/products_guide/debugger) は、Monaca
アプリの検証とデバッグを、端末上でリアルタイムに行うためのアプリです。

Monaca アプリの開発時、Monaca CLI ( ローカル PC 側 ) と Monaca
デバッガー ( 端末側 )
がペアリングされていれば、プロジェクトファイルに加えられた変更は、保存後、即座にデバッガー側に
「 プッシュ 」 されます。

## はじめに

Monaca デバッガーを端末にインストールします。

{{<img src="/images/monaca_ide/tutorial/testing_debugging/App_Store.jpg" width="100" link="https://itunes.apple.com/jp/app/monaca/id550941371?mt=8">}}

{{<img src="/images/monaca_ide/tutorial/testing_debugging/Google_play.png" width="100" link="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=ja">}}

{{<note>}}
Monaca デバッガーのインストール方法 ( プラットフォーム別 )
は、{{<link href="/ja/products_guide/debugger/installation/" title="こちら">}} をご確認ください。
{{</note>}}

## ステップ 1 : Monaca デバッガーとローカル PC のペアリング

ローカル PC 上で作成した Monaca アプリを、Monaca
デバッガー上でデバッグ・検証をする場合には、ローカル PC と Monaca
デバッガーをペアリングする必要があります。

{{<note>}}
    Monaca デバッガーとローカル PC を接続する前に、次の点をご確認ください。
    <ol>
        <li>同じ WiFi または LAN ネットワーク上に、Monaca デバッガーとローカル PC が接続されていること。.</li>
        <li>同じ Monaca アカウントを使用して、Monaca デバッガーとローカル PC にサインインしていること。</li>
        <li>ローカル PC 側のファイアーウォールを無効化していること。</li>
    </ol>
{{</note>}}

1.  コマンドウィンドウ上で、プロジェクトのフォルダーまで移動し、[monaca debug]({{<ref "cli_commands.ja.md#monaca-debug" >}}) コマンドを実行して、Monaca デバッガーに接続します。実行すると、Monaca CLI 側では、デバッガーからのリクエストの待ち受けを開始します。

    {{<img src="/images/monaca_cli/tutorial/testing_debugging/3.png">}}

2.  Monaca デバッガーを起動し、Monaca
    アカウントを使用してログインします。ログインのユーザー名とパスワードは、Monaca
    CLI のログイン時に使用したものと同じものを使用します。

    {{<img src="/images/monaca_cli/tutorial/testing_debugging/1.png" width="300">}}

3.  Monaca デバッガー上に、ポップアップメッセージが表示され、Monaca
    デバッガーとホスト PC をペアリングするか聞かれます。\[ ペアリング \]
    ボタンをタップします。

    {{<img src="/images/monaca_cli/tutorial/testing_debugging/2.png" width="300">}}

4.  ペアリング後、Monaca デバッガーの `ローカルプロジェクト`
    欄に、ローカルに置かれているプロジェクト名が表示されます。ペアリングに失敗した場合には、[Monaca デバッガーとのペアリングが失敗する場合](/ja/products_guide/debugger/troubleshooting/#monaca-デバッガーとのペアリングが失敗する場合) をご確認ください。

    {{<img src="/images/monaca_cli/tutorial/testing_debugging/4.png" width="300">}}

{{<note>}}
    デバッグを停止し、デバッガのペアを解除するには、<code>Ctrl+c</code> を押します。
{{</note>}}

## ステップ 2 : Monaca デバッガー上でのプロジェクトの実行

1.  Monaca デバッガーの \[ ローカルプロジェクト \]
    上に表示されたプロジェクト名をタップして、アプリを実行します。
2.  下のスクリーンショットのように、プロジェクトが実行されます。プロジェクト一覧へ戻る場合には、デバッガーのメニュー画面へいったん戻り、{{<guilabel name="戻る">}} ボタンをタップします。

    {{<img src="/images/monaca_cli/tutorial/testing_debugging/5.png" width="300">}}
    {{<img src="/images/monaca_cli/tutorial/testing_debugging/6.png" width="300">}}

## ステップ 3 : Monaca CLI と デバッガー間のリアルタイムでの同期

1.  Monaca デバッガー上で、プロジェクトを実行します。
2.  ファイル内のコードを変更してみましょう。たとえば、アプリの起動時に表示するページを
    「 Page 2 」
    に変更してみましょう。変更を行うには、最初に、`index.html`
    ファイルを開き、次に、`<ons-sliding-menu>` タグ内の `main-page`
    属性の値を、`page2.html`
    に変更・保存します。変更後のコードは、次のとおりです。

    {{<highlight bash>}}
...
<ons-sliding-menu
    var="app.slidingMenu"
    menu-page="menu.html"
    main-page="page2.html"
    side="left" type="overlay"
    max-slide-distance="200px">
</ons-sliding-menu>
...{{</highlight>}}

3.  PC が Monaca Debugger に接続されている場合は、自動的にアップデートが更新され Page 2 が表示されます。

    {{<img src="/images/monaca_cli/tutorial/testing_debugging/7.png" width="300">}}

{{<note>}}
    Monaca Debugger が提供する他の機能については、{{<link href="/ja/products_guide/debugger/features/" title="デバッガーの機能">}} を参照してください。
{{</note>}}

{{<note>}}
    Monaca CLI で USBデバッグを使用することもできます。{{<link title="Monaca 提供のローカル環境用の開発ツールと Monaca デバッガーとの連携" href="ja/products_guide/debugger/debug/#monaca-提供のローカル環境用の開発ツールと-monaca-デバッガーとの連携">}} を参照してください。
{{</note>}}

Monaca デバッガーを使うのは簡単です。 プロジェクトをさらに変更し、デバッガ上でどのように動作するかを確認してください。 モナカで開発をお楽しみください！

**次へ**: 

- [パート 3 : Monaca アプリのビルド](../building_app)