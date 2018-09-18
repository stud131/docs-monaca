### CLI コマンドのみを使用

1. プロジェクトディレクトリに移動します。
   {{<highlight bash>}}
   $ cd <project dir>
{{</highlight>}}

1. Android Debug Buildを開始する
   {{<highlight bash>}}
   $ monaca remote build android --build-type=debug
{{</highlight>}}

### GUI での使用

1. プロジェクトディレクトリに移動します。
   {{<highlight bash>}}
   $ cd <project dir>
{{</highlight>}}

2. ビルドウィンドウを開いてビルドを開始します。
   {{<highlight bash>}}
   $ monaca remote build --browser
{{</highlight>}}

3. デバッグビルドはデフォルトで選択されています。{{<guilabel name = "Start Build">}}をクリックしてください。
    {{<img src="/images/migration/cli_build.png">}}

4. ビルドが完了するまでに数分かかることがあります。ビルドが正常に完了すると、次の画面が表示されます。アプリをデバイスにインストールするさまざまな方法を選択できます。

    {{<img src="/images/migration/localkit_build_success.png">}}
