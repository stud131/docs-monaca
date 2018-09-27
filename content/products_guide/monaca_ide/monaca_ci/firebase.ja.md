---
title: Firebase への配信
weight: 30
---

[Firebase](https://firebase.google.com) への配信方法について説明します。  
Firebaseへの配信は、[Firebase Hosting機能](https://firebase.google.com/docs/hosting/quickstart?hl=ja)を利用しています。また、Firebaseへの配信は、PWAビルドされたアプリのみ対応しています。

## 準備
配信のするための事前準備として、`プロジェクトID`と`APIトークン`を用意する必要があります。

### プロジェクトID

1. [Firebaseコンソール](https://console.firebase.google.com)にて、プロジェクトを作成します。
2. プロジェクトIDは、下の赤枠に表示されます。

    {{<img src="/images/monaca_ide/manual/monaca_ci/firebase/project_id.png" width="500">}}

### API トークンの取得方法

1.  [Firebase CLI ガイド](https://firebase.google.com/docs/hosting/quickstart?hl=ja) に沿って`Firebase CLI をインストール`します。
2.  Firebase CLIをインストールした後、次のコマンドにてトークンを取得します。

    {{<highlight bash>}}firebase login:ci{{</highlight>}}

## デプロイサービスの登録

事前に用意したFirebaseの情報をMonacaへ登録する方法は、次のとおりです。

1.  Monaca クラウド IDE メニューの {{<menu menu1="設定" menu2="デプロイサービス">}} を選択します。

2.  {{<guilabel name="新しく追加する">}} をクリックします。

3.  `Firebase` を選択し、以下の必要情報を入力します。
    
    -   `エイリアス名`: 各サービスの一意の識別子 (Monaca内で管理するための識別子)
    -   `API トークン`: Firebase CLI で取得した API トークン
    -   `プロジェクト ID`: Firebase コンソールから取得したID

4. {{<guilabel name="追加">}} をクリックします。

## デプロイを実施

登録したデプロイサービスを利用して、Firebaseへの配信を行います。

1. PWAビルドを行います。ビルドの手順は、[PWA アプリのビルド](/ja/products_guide/monaca_ide/build/build_pwa/)を参照ください。

2. ビルド完了後に、ビルド結果画面に遷移します。

3. ビルド結果画面からデプロイを実行します。画面下部に登録したデプロイサービスが表示されますので、クリックし配信を開始します。

    {{<img src="/images/monaca_ide/manual/monaca_ci/firebase/start_deploy.png" width="650">}}

参考ページ  

  - [PWA アプリのビルド](/ja/products_guide/monaca_ide/build/build_pwa/)