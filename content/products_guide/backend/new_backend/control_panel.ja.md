---
title: バックエンド管理パネル
weight: 30
aliases: /ja/backend/manual/control_panel/
---

[バックエンドの操作](../backend_operations/) のほかに、さまざまなバックエンドの設定と情報がバックエンド管理パネルにあります。

## バックエンドの切り替え

1.  バックエンド管理パネルから、`navicon` アイコンをクリックし、`バックエンドの切り替え` を選択します。 バックエンドダイアログが表示されます。

    {{<img src="/images/backend/control_panel/1.png">}}

2.  既存のバックエンドを使用、または、新規バックエンドの作成を選択できます。選択後、{{<guilabel name="適用">}} ボタンをクリックします。

    {{<img src="/images/backend/control_panel/2.png">}}

## セキュリティー設定

1. バックエンド管理パネルから、`バックエンド設定` を選択します。次に、[ Backend Settings ] ページが表示されます。

    {{<img src="/images/backend/control_panel/3.png">}}

2. このメニュー画面では、次の設定ができます。

    - 自動ログインの有効化・無効化、自動ログインの有効時間の設定
    - ユーザー名とパスワードの最短文字数の設定
    - パスワード リセット トークンの有効時間の設定

3. {{<guilabel name="適用">}} ボタンをクリックします。

## バックエンド マネジメント API キー と エンドポイント URL

Monaca バックエンド マネジメント API の使用時には、バックエンド
マネジメント API キーが必要です。この API を使用すれば、Monaca クラウド
IDE からではなく、開発者自身のサーバーから Monaca
バックエンドを管理できます。詳細は、[バックエンド マネジメント API](/ja/reference/monaca_api/cloud_management/) をご確認ください。

バックエンド マネジメント API キーとエンドポイント URL の取得手順を、次に記します。

1.  バックエンド管理パネルから、`バックエンド設定` を選択します。次に、[ Backend Settings ] ページが表示されます。

2.  {{<guilabel name="マネジメント API">}} を選択して、{{<guilabel name="有効にする">}} をクリックします。

    {{<img src="/images/backend/control_panel/4.png">}}

3.  次に、マネジメント APIに関連するさまざまな情報が表示されます。
**マネジメント API のエンドポイント URL**は、`JSON-RPC Request URL` ([バックエンド マネジメント API](/ja/reference/monaca_api/cloud_management/) を参照）として使用されます。

    {{<img src="/images/backend/control_panel/5.png">}}

4.  次に、APIキーを作成します。 2つの方法でAPIキーを作成できます。

    - IP アドレスの範囲 : 指定した IP アドレスの範囲に対して、API キーを 1 つ設定できます。
    - 空白を設定 (推奨しません) : 任意のIPアドレス用のAPIキーを作成します。

    {{<img src="/images/backend/control_panel/6.png">}}

### レコードの項目 ( 列 ) の表示・非表示

デフォルトでは、`Oid`、`ユーザー`、`パスワード`、`オーナーユーザー`、`パーミッション`、`作成日時`、`更新日時` が表示されています。

他の列を 表示/非表示 にする場合は、次のようにします。

1.  {{<guilabel name="+">}} アイコンをクリックします。

    {{<img src="/images/backend/backend_operations/4.png">}}

2.  表示する項目 ( 列 ) を選択し、{{<guilabel name="追加する">}}をクリックします。

    {{<img src="/images/backend/backend_operations/5.png">}}

3.  項目のヘッダーをドラッグして移動することで、項目の順序を変更することができます。

    {{<img src="/images/backend/backend_operations/6.png">}}

4.  項目を非表示にする場合は、対象の項目上にカーソルを移動させ、表示されたドロップダウン アイコンから {{<guilabel name="この列を表示しない">}}を選択します ( システムプロパティー以外が対象 )。

    {{<img src="/images/backend/control_panel/7.png">}}


参考ページ

- [バックエンド API](/ja/reference/monaca_api/cloud/)
- [バックエンド メモ帳アプリ]({{<ref "backend_memo.ja.md">}}    )

