---
title: "パート 2 : Monaca クラウド IDE と Monaca デバッガーとの連携"
weight: 2
aliases: /ja/monaca_ide/tutorial/testing_debugging/
---

[Monaca デバッガー](/ja/products_guide/debugger/) は、Monaca
アプリの検証とデバッグを、端末上でリアルタイムに行うためのアプリです。

Monaca アプリの開発時、Monaca クラウド IDE ( PC 側 ) と Monaca
デバッガー ( 端末側 ) がインターネットに接続されていれば、IDE
上のプロジェクトファイルに加えられた変更は、保存後、即座にデバッガー側に
「 プッシュ 」 されます。

Monaca クラウド IDE で Monaca アプリを開発する場合、プロジェクトファイルに加えられたすべての変更は、保存後 Monaca デバッガーとリアルタイムで同期されます。

## はじめに

Monaca デバッガーを端末にインストールします。

{{<img src="/images/monaca_ide/tutorial/testing_debugging/App_Store.jpg" width="100" link="https://itunes.apple.com/jp/app/monaca/id550941371?mt=8">}}

{{<img src="/images/monaca_ide/tutorial/testing_debugging/Google_play.png" width="100" link="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=ja">}}

{{<note>}}
Monaca デバッガーのインストール方法 ( プラットフォーム別 )
は、{{<link href="/ja/products_guide/debugger/installation/" title="こちら">}} をご確認ください。
{{</note>}}

## ステップ 1 : Monaca デバッガー上でのプロジェクトの実行

1.  Monaca デバッガーを起動し、Monaca アカウントを使用してログインします。ログインのユーザー名とパスワードは、Monaca クラウド IDE のログイン時に使用したものと同じものを使用します。

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/1.png" width="300">}}

2.  プロジェクトのリストが表示されます。 Monaca クラウド IDE 上のプロジェクトは、`Monaca.io プロジェクト` に表示されます。 プロジェクトを実行するには、Monaca デバッガーでプロジェクト名をタップするか、Monaca クラウド IDE から {{<menu menu1="実行" menu2="実機で実行">}} をクリックします。

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/4.png" width="300">}}

3.  デバッガー上でプロジェクトが実行されていることを確認します。

4. デモアプリケーションのさまざまな機能を試してみてください。

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/4.png" width="300">}}

    {{<note>}}
    プロジェクトリスト画面に戻るには、デバッガメニューの、<i>戻る</i> ボタンをタップします。
    {{</note>}} 

    {{<multi_figures>}}
        {{< img src="/images/monaca_ide/tutorial/testing_debugging/3.png" width="300">}}
        {{< img src="/images/monaca_ide/tutorial/testing_debugging/6.png" width="300">}}  
    {{</multi_figures>}}

## ステップ 2 : Monaca クラウド IDE と Monaca デバッガー間のリアルタイム更新

ここまでの手順で、Monaca デバッガー上でプロジェクトを実行できることを確認しました。次に、このプロジェクトを編集し、Monaca デバッガー側に反映されるか確認してみましょう。

1.  Monaca デバッガー上で、プロジェクトを実行します。

2.  Monaca クラウド IDEでは、 `index.html` を開き、ページのタイトルを `Monaca Memo` から `My Memo` に変更しましょう。 次に、変更を保存します。

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/7.png" >}}

3.  保存された変更は、端末の Monaca デバッガー側に送られます。アプリ側で変更が反映されない場合は、デバッガーメニュー上の {{<guilabel name="更新">}} ボタンをタップすることで、最新の内容を取得することができます。

    {{<multi_figures>}}
        {{< img src="/images/monaca_ide/tutorial/testing_debugging/5.png" width="300">}}
        {{< img src="/images/monaca_ide/tutorial/testing_debugging/8.png" width="300">}}  
    {{</multi_figures>}}

{{<note>}}
Monaca デバッガーが提供する機能に関しては、{{<link href="/en/products_guide/debugger/features/" title=" 機能の概要">}} をご確認ください。
{{</note>}}

{{<note>}}
    Monaca CLI で USBデバッグを使用することもできます。{{<link title="Monaca 提供のローカル環境用の開発ツールと Monaca デバッガーとの連携" href="ja/products_guide/debugger/debug/#monaca-提供のローカル環境用の開発ツールと-monaca-デバッガーとの連携">}} を参照してください。
{{</note>}}

ここでは、Monaca デバッガーの基本的な使用方法について解説しました。他の箇所も変更して、デバッガー上で確認してみましょう。

**次へ**: 

- [パート 3 : Monaca アプリのビルド](../building_app/)
