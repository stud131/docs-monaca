---
title: iOS アプリ アップロード機能
weight: 20
aliases: /ja/monaca_ide/manual/deploy/appstore/app_store_connect
---

{{<note>}}
    iOS アプリ アップロード機能を使用するためには、対応するプランへの加入が必要です。詳細は、 {{<link href="https://ja.monaca.io/pricing.html" title="こちら">}} をご確認ください。
{{</note>}}

{{<note>}}
    プロジェクトを他のメンバーと共有している場合には、プロジェクトのオーナーだけが iOS アプリ アップロード機能を使用できます。
{{</note>}}

{{<warning>}}
    アクティベーション コードを使用し、アカウントをアップグレードさせて、アップロード機能を使用する場合には、アップグレード後のプランがこの機能をサポートしている必要があります。なにかご質問がございましたら、こちらの {{<link href="https://ja.monaca.io/service/index.html" title="お問い合わせ">}} までご連絡ください。
{{</warning>}}


Monaca 提供のアップロード機能を使用すれば、Monaca クラウド IDE から
App Store Connect
に、アプリをアップロードできます。手順は、次のとおりです。

1.  リリースビルド版のアプリを Monaca 上で作成します。詳細は、[iOS アプリのビルド](../../../build/ios/build_ios/) をご確認ください。

2.  リリースビルド版アプリの作成後、次のページが表示されます。次に、`AppStore` ボタン ( 下のスクリーンショットの赤枠部分 ) をクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/upload.png">}}

3.  アプリのアップロード用のウィンドウが表示されます。{{<guilabel name="次へ">}} をクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/2.png">}}

4.  有効な Apple アカウント情報を入力して、{{<guilabel name="次へ">}} をクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/3.png">}}

5.  App Store Connect 上でアプリの登録を事前に行っておく必要があります。詳細は、[こちら](../itunes_connect/#アプリの登録) をご確認ください。ここでは、登録済みであることを前提として、`App Store Connect にアプリ情報を登録しました。` にチェックを入れます。次に、{{<guilabel name="Upload">}} をクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/4.png">}}

6.  アップロードが完了するまで、しばらく待ちます。

    {{<note>}}
        バージョンが異なる同一アプリをアップロードする場合、ファイル内のバージョン情報を、対応するバージョンに変更しておく必要があります。それ以外の場合、アップロードが失敗します。
    {{</note>}}

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/5.png">}}

7.  アップロード完了後、次のページが表示されます。なお、App Store Connect 上にアプリが表示されるまでには、しばらく時間がかかる場合があります。

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/6.png">}}

    {{<note>}}
        App Store Connect へのアップロード時、Apple 側でなんらかのエラーを出力する場合があります ( アカウントに登録しているメールアドレス宛にもエラー通知が送信されます )。その場合には、エラー内容を確認して、適切に対処してください。エラーの解消後、再度、アプリをアップロードします。
    {{</note>}}

8.  これで、アプリのアップロードが完了しました。この後に、App Store Connect 上にて、申請に向けた手続きがありますので、詳細は、[アップロード後に行うアプリの設定](../app_store_connect/#アップロード後に行うアプリの設定) をご確認ください。
