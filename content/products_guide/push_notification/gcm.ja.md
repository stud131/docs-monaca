---
title: Android のプッシュ通知設定
weight: 20
aliases: /ja/push_notification/manual/gcm
---

　Monaca では、FCM ( Firebase Cloud Messaging )
経由でプッシュ通知を行っています。FCM とは、Google 社が提供する Firebase
( MBaas の一種 )を基盤とした、クロスプラットフォーム向けのメッセージングサービスです。  

　このサービスを利用すると、費用をかけずに、通知タイプ ( プッシュ通知、案内メールなど ) およびデータ転送タイプ ( ペイロードサイズの上限は 4 KB )
のメッセージを、クライアント側アプリに対して配信できます ( 通知とデータを併せて使用することもできます )。

ここでは、Android アプリ向けにプッシュ通知を行うための手順を解説します。

{{<note>}}
    事前準備として Google アカウントが必要となります。
{{</note>}}

## 1. サーバーキーの取得 ( Firebase Console 上 )

Firebase Console ページ上で `サーバーキー`を確認します。

1.  [Firebase Console](https://console.firebase.google.com/)
    へ行き、Google アカウントを使用してサインインします。
2.  {{<guilabel name="+ プロジェクトを追加">}} をクリックします。

    {{<img src="/images/backend/gcm/1.png">}}

3.  [ プロジェクト名 ] と [ 国/地域 ] を入力して、{{<guilabel name="プロジェクトを作成">}}
    をクリックします。

    {{<img src="/images/backend/gcm/2.png">}}

4.  プロジェクトの作成後、表示されたダッシュボード上の左メニューから、[ Settings/歯車 ] のアイコンをクリックし、`プロジェクトの設定` を選択します。

    {{<img src="/images/backend/gcm/3.png">}}

5.  設定画面上で、`クラウドメッセージング` タブを選択し、`サーバーキー`を確認します。
    `サーバーキー` は、この後 Monaca 側の `Server Key` に使用します。

    {{<img src="/images/backend/gcm/4.png">}}

## 2. 構成ファイルの取得 ( Firebase Console 上 )

1. 対象のプロジェクトを開きます。

2. `Android アプリに Firebase を追加` をクリックします。

    {{<img src="/images/backend/gcm/add_andrpid_app.png">}}

3. `アプリの登録` 項目の `Android パッケージ名` に、Monacaプロジェクトの `パッケージ名` を入力して `アプリを登録` をクリックします。

    {{<img src="/images/backend/gcm/register_app.png">}}

4. `設定ファイルのダウンロード` 項目の `google-service.json　をダウンロード` をクリックして、`google-service.json` をダウンロードし、`次へ` をクリックします。

    {{<img src="/images/backend/gcm/download_config_file.png">}}

5. `Firebase SDK の追加`項目では、`次へ` をクリックします。

6. `アプリを実行してインストールを確認` 項目では、`このステップをスキップ` をクリックします。

7. `google-service.json` ファイルは、コンソール画面の `歯車アイコン` をクリックし、{{<menu menu1="プロジェクトの設定" menu2="全般">}} からもダウンロードすることができます。

    {{<img src="/images/backend/gcm/download_google_services_json.png">}}

## 3. FCM 関連のパラメーター設定 ( Monaca 上 )

1.  Monaca Backend ウィンドウから、{{<guilabel name="プッシュ通知">}} を選択します。
2.  右上隅にある `歯車` アイコンをクリックし、{{<guilabel name="プッシュ通知設定">}} を選択します。

    {{<img src="/images/backend/gcm/settings.png">}}

3.  プッシュ通知設定の [ Android ] エリアの FCMを設定する場合の
    {{<guilabel name="設置">}} ボタンをクリックします。

    {{<img src="/images/backend/gcm/select_fcm_setting.png">}}

4.  FCM の設定フォーム上の `google-services.json` には、先程取得した構成ファイルを、
    `Server Key` には `サーバーキー` を入力して、{{<guilabel name="保存する">}}
    ボタンをクリックします。  

    {{<img src="/images/backend/gcm/fcm_setting_form.png">}}

    ここまでの手順で、Android 向けプッシュ通知の準備が整いました。