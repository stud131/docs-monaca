---
title: "パート 3 : Monaca アプリのビルド"
weight: 4
aliases: /ja/monaca_ide/tutorial/building_app/
---

こちらのチュートリアルでは、iOS 向けと Android 向けの Monaca
アプリのビルド方法を解説します。

1.  [iOS 向け Monaca アプリのビルド](#ios-向け-monaca-アプリのビルド)
2.  [Android 向け Monaca アプリのビルド](#android-向け-monaca-アプリのビルド)

他のプラットフォーム向けの Monaca アプリのビルドに関しては、
[ビルド](/ja/products_guide/monaca_ide/build) をご確認ください。

## iOS 向け Monaca アプリのビルド

端末にインストールできるデバッグビルド版 iOS
アプリの作成方法を解説します。ビルドの種類に関する詳細は、
[ビルドの種類]({{<ref "build_ios.ja.md#ビルドの種類">}}) をご確認ください。

*事前準備*

-   [Apple Developer Program](https://developer.apple.com/programs/ios/) への登録 ( 必須 )

*必要事項*

Apple Developer Program 登録後、iOS Provisioning Portal
上で、次のアイテムを作成します。

-   `App ID` ( [App ID の登録]({{<ref "build_ios.ja.md#app-id-の登録">}}) と [開発用端末の登録]({{<ref "build_ios.ja.md#開発用端末の登録">}}) を参照のこと )
-   `デベロッパー証明書` ( 別名 「 開発用証明書 」、[証明書の作成]({{<ref "build_ios.ja.md#証明書の作成">}})
    を参照のこと )
-   `開発用 プロビジョニング プロファイル` ( [プロビジョニング プロファイルの作成]({{<ref "build_ios.ja.md#プロビジョニング-プロファイルの作成">}}) を参照のこと )

### ステップ 1 : iOS アプリの設定

1.  Monaca クラウド IDE から、{{<menu menu1="設定" menu2="iOS アプリ設定">}} を選択します。

2.  アプリに関する情報を入力します。

    - アプリケーション名 : マーケット上で公開されるアプリ名です。

    - App ID : アプリを識別する一意の ID です。App ID には、逆ドメイン形式 ( 例 : mobi.monaca.appname ) を推奨します。英数字とピリオドのみ使用できます ( ピリオドは、最低限、1 つ使用 )。各レベルのドメイン ( 各節 ) は、ピリオドで区切られ、英字から始まります。

    - バージョン : App Store Connect 経由で、アプリをアップロード ( 配布のため ) するときに必要となる、アプリのバージョン番号です。ドットで区切った、3 つの数字 ( 例 : 1.10.2 ) を使用します。各数字は、[`0-99`] の範囲にします。

    - 他の設定項目は、任意です。こちらの設定画面では、アイコン、スプラッシュ画像などを設定できます。

    {{<img src="/images/monaca_ide/tutorial/building_app/ios_1.png">}}

    {{<warning>}}
        Monaca のビルド設定で使用する App ID には、iOS Provisioning Portal で登録した App ID と同じ ID を使用します。なお、Monaca のビルド設定で使用する App ID には、アスタリスク ( * ) は使用できません。使用した場合、ビルドが失敗します。
    {{</warning>}}

3.  設定後、{{<guilabel name="保存する">}} をクリックします。

### ステップ 2 : iOS ビルドの設定

1.  Monaca クラウド IDE から、{{<menu menu1="設定" menu2="iOS ビルド設定">}} を選択します。

2.  新しい秘密鍵または [秘密鍵と証明書の Monaca へのインポート](/ja/products_guide/monaca_ide/build/ios/import_export/#ステップ-2-秘密鍵と証明書の-monaca-へのインポート) を作成することができます。 このチュートリアルでは、新しい秘密鍵の作成方法を示します。 {{<guilabel name="秘密鍵と CSR の生成">}} ボタンをクリックします。

    {{<img src="/images/monaca_ide/tutorial/building_app/ios_2.png">}}

3.  Apple ID 情報 ( ユーザー名とメールアドレス )
    および国コードを入力して、{{<guilabel name="秘密鍵と CSR の生成">}}
    ボタンをクリックします。

    {{<img src="/images/monaca_ide/tutorial/building_app/ios_3.png" width="600">}}

4.  認証後、次のダイアログが表示されます。CSR のダウンロード
    ボタンをクリックして、CSR
    ファイルをダウンロードします。ダウンロードしたファイルは、後ほど、iOS
    Provisioning Portal で、証明書を発行するときに必要となります。

    {{<img src="/images/monaca_ide/tutorial/building_app/ios_5.png" width="500">}}

{{<note>}}
既存の秘密鍵をインポートする場合、インポートする秘密鍵を使用して発行した証明書が必要になります。また、秘密鍵と
CRS ファイルを新規作成する場合、新規作成した CRS
ファイルを使用して、証明書を新規発行する必要があります。
{{</note>}}

### ステップ 3 : アプリのビルド

1.  Monaca クラウド IDE から、
    {{<menu menu1="ビルド" menu2="iOS アプリのビルド">}} を選択します。

2.  \[ デバッグ向けビルド \] の デバッグビルド
    オプションを選択し、加えて、対応するプロビジョニング
    プロファイルを選択します。次に、{{<guilabel name="ビルドを開始する">}}
    ボタンをクリックします。

    {{<img src="/images/monaca_ide/tutorial/building_app/ios_6.png">}}

3.  ビルドが完了するまで数分かかる場合もありますので、しばらく待ちます。ビルドが完了すると、次の画面が表示されます。

    {{<img src="/images/monaca_ide/tutorial/building_app/ios_7.png">}}

### ステップ 4 : ビルドしたアプリのインストール

デバッグビルド版アプリのインストール方法は、下記になります。

1.  ビルド済みアプリをダウンロードし、Apple Configurator 2 を使用して、iOS 端末にインストールします。（ Mac のみ ）
2.  QR コードを使用して、インストールします。
3.  [配信/配布支援サービス ( デプロイサービス )](/ja/products_guide/monaca_ide/monaca_ci/supported_services) 経由でインストールします。

## Android 向け Monaca アプリのビルド

デバッグビルド版 Android
アプリの作成方法を解説します。ビルドの種類に関する詳細は、[ビルドの種類]({{<ref "build_android.ja.md#ビルドの種類">}}) をご確認ください。

### ステップ 1 : Android アプリの設定

1.  Monaca クラウド IDE から、{{<menu menu1="設定" menu2="Android アプリ設定">}} を選択します。

2.  アプリに関する情報を入力します。

    - アプリケーション名 : マーケット上で公開されるアプリ名です。

    - パッケージ名 : アプリを識別する一意の ID です。ID には、逆ドメイン形式 ( 例 : mobi.monaca.appname ) の使用を推奨します。英数字とピリオドのみ使用できます ( ピリオドは、最低限、1 つ使用 )。各レベルのドメイン ( 各節 ) は、ピリオドで区切られ、英字から始まります。

    - バージョン : アプリのバージョン番号です。ドットで区切った、3 つの数字 ( 例 : 1.10.2 ) を使用します。各数字は、[0-99] の範囲にします。

    - ビルド種別ごとにパッケージ名を分ける : チェックをした場合、デバッグビルド版アプリのパッケージ名とカスタムビルド版デバッガーのパッケージ名は、異なる名になります。デバッグビルド版アプリのパッケージ名の拡張子は `.debug` となり、プロジェクトのデバッガーのパッケージ名の拡張子は `.debugger` となります。ただし、デフォルトでは、このオプションは無効になっています。常時有効にしてしまうと、決まったパッケージ名 ( In-App Purchase など ) に紐付けされているプラグインが存在する場合、デバッグができなくなるためです。

    - 他の設定項目は、任意です。こちらの設定画面では、アイコン、スプラッシュ画像などを設定できます。
        {{<img src="/images/monaca_ide/tutorial/building_app/android_1.png">}}

3.  設定後、{{<guilabel name="保存する">}} をクリックします。

### ステップ 2 : Android キーストア ( Keystore ) の設定

Android キーストアを使用して、パッケージの署名に必要な鍵 ( エイリアス )
を格納します。キーストアを紛失した場合、または、別のキーストアで上書きした場合は、既に署名されているパッケージは、同じ鍵では再署名できません。1
つのキーストアには、複数のエイリアスを格納できますが、アプリのコード署名
( Code Sign ) 時には、エイリアスを 1 つのみ、使用します。

Monaca での Android キーストアの設定方法は、次のとおりです。

1.  Monaca クラウド IDE から、{{<menu menu1="設定" menu2="Android キーストア設定">}} を選択します。

2.  これまでにキーストアを作成したことがない場合、キーストアを新規に作成します。新規作成の他にも、既存のキーストアがあれば、インポートもできます。このチュートリアルでは、キーストアを新規に作成することを前提として解説します。{{<guilabel name="クリアして作成 ...">}} ボタンをクリックして、\[ キーストアを作成する \]
    ダイアログを表示させます。

    {{<img src="/images/monaca_ide/tutorial/building_app/android_2.png">}}

3.  キーストアに関する情報を入力します。

    -   エイリアス名 : キーストアに格納する秘密鍵の名前です。秘密鍵は、パッケージの署名時に使用します。
    -   エイリアスのパスワード : エイリアス用のパスワードです。
    -   キーストアのパスワード : 新規のキーストア用のパスワードです。

    {{<img src="/images/monaca_ide/tutorial/building_app/android_3.png">}}

4.  {{<guilabel name="キーストアとエイリアスを作成する">}} ボタンをクリックします。

### ステップ 3 : アプリのビルド

1.  Monaca クラウド IDE から、{{<menu menu1="ビルド" menu2="Android アプリのビルド">}} を選択します。

2.  \[ デバッグ向けビルド \] の \[ デバッグビルド \]
    を選択して、{{<guilabel name="ビルドを開始する">}} ボタンをクリックします。

    {{<img src="/images/monaca_ide/tutorial/building_app/android_4.png">}}

3.  ビルドが完了するまで数分かかる場合もありますので、しばらく待ちます。ビルドが完了すると、次の画面が表示されます。

    {{<img src="/images/monaca_ide/tutorial/building_app/android_5.png">}}

### ステップ 4 : ビルドしたアプリのインストール

次のいずれかの方法を使用すれば、ビルドしたアプリをインストールできます。

1.  [ネットワーク インストール]({{<ref "debugger_android.ja.md#ネットワーク-インストール">}}) を使用します。
2.  QR コードを使用して、インストールします。
3.  ビルド済みアプリをコンピューターに直接ダウンロードし、USB
    ケーブル経由でインストールします。
4.  登録されているメールアドレスに、ダウンロードするための URL を送信します。
5.  [配信/配布支援サービス ( デプロイサービス )](/ja/products_guide/monaca_ide/monaca_ci/supported_services) 経由でインストールします。

**Next**: 

- [パート 4 : Monaca アプリの配布申請](../publishing_app/)