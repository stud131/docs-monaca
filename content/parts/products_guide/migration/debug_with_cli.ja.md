---
weight: -999999
Hidden: true
---

[Monaca デバッガー](/ja/products_guide/debugger/) は、端末上で Monaca アプリをリアルタイムでテスト、デバッグするためのアプリケーションです。  
Monaca クラウド IDE で アプリを開発する場合、ファイルに加えられた変更は、保存後すぐに Monaca デバッガーに同期されます。

Monaca デバッガーの使い方は、以下になります。

1. Google Play または App Store から端末に Monaca デバッガーをインストールします。

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/App_Store.jpg" width="100" link="https://itunes.apple.com/us/app/monaca/id550941371?mt=8">}}
    {{<img src="/images/monaca_ide/tutorial/testing_debugging/Google_play.png" width="100" link="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en">}}

    {{<note>}}
        Android エミュレータに Monaca デバッガーをインストールする場合は、 {{<link href="/ja/products_guide/debugger/installation/debugger_emulator/" title="Android エミュレーター向け Monaca デバッガー">}} を参照してください。
    {{</note>}}

2. Monaca デバッガーを起動し、Monaca アカウントでサインインします。 Monaca クラウド IDE と同じアカウントを使用していることを確認してください。

    {{<img src="/images/migration/debugger.png" width="350px">}}

3.  デバッグを開始する前に、Monaca DebuggerとローカルPCをペアリングする必要があります。ペアリング前に次の点に注意してください。

    -  Monaca DebuggerとローカルPCは、同じネットワーク接続（LANまたはWi-Fi）に接続する必要があります。
    - ローカルPCのファイアウォールを無効にする。

4.  上の点を確認後、ペアリングを開始できます。ターミナルでプロジェクトディレクトリに移動し、 `monaca debug`と入力します。

    {{<highlight bash>}}
    $ cd <project dir>
    $ monaca debug{{</highlight>}}

5.  次に、デバッガとローカルPCをペアリングするよう促すポップアップメッセージがMonaca Debuggerの中に表示されます。

    {{<img src="/images/monaca_cli/tutorial/testing_debugging/2.png" width="350">}}

6.  ペアリングが成功した場合、ローカルプロジェクト名がMonaca Debuggerの `Local Projects`に表示されます。  ペアリングに失敗した場合は、[Fail to Pair Monaca Debugger](/ja/products_guide/debugger/troubleshooting/#fail-to-pair-monaca-debugger)を参照してください。

    {{<img src="/images/migration/debugger_cli.png" width="350">}}

7.  プロジェクトを実行するには、Monaca Debuggerのプロジェクト名をタップします.

8.  プロジェクトがデバッガで実行されているはずです。プロジェクトのさまざまな操作を試してみてください！ その後、コードを変更して保存してみてください。次に、デバッガに反映された変更が表示されます。

 
{{<note>}}
デバッグを停止し、デバッガのペアを解除するには、<code> Ctrl + c </code>を押します。
{{</note>}}
