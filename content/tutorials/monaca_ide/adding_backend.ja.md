---
title: "パート 3 : Monaca バックエンドのセットアップ"
weight: 3
hidden: true
aliases: /ja/monaca_ide/tutorial/adding_backend/
---

## ステップ 1 : バックエンドとプロジェクトの紐付け

1.  Monaca クラウド IDE のメニューにある `バックエンド` ( 雲
    ) をクリックして、バックエンド管理画面へ行きます。次に、
    {{<guilabel name="バックエンドを作成して利用する">}} ボタンをクリックします。

    {{<img src="/images/monaca_ide/tutorial/adding_backend/3.png">}}

2.  次のダイアログが表示されます。バックエンドの新規作成、または、既存バックエンド
    ( 他のプロジェクトで使用中 )
    の再利用のどちらかを選択できます。次に、 {{<guilabel name="適用">}}
    をクリックして、バックエンドとプロジェクトの紐付け処理を行います。

    {{<img src="/images/monaca_ide/tutorial/adding_backend/4.png">}}

3.  バックエンドの紐付けが完了すると、バックエンド管理画面が次のようになります。

    {{<img src="/images/monaca_ide/tutorial/adding_backend/5.png">}}

{{<note>}}
    プッシュ通知を使用しない場合は、<span class="guilabel"><b>
    設定 → Cordova プラグインの管理</b></span> から <span class="guilabel">MonacaBackend</span> を <span class="guilabel">無効</span> にします。
{{</note>}}

## ステップ 2 : コレクションの新規作成

コレクションとは、バックエンドの使用時に、データの格納を行う、汎用的なストレージのことを指します。

1.  バックエンド管理画面上で、`コレクションの作成` アイコンをクリックします。

    {{<img src="/images/monaca_ide/tutorial/adding_backend/6.png">}}

2.  コレクションの作成ダイアログが表示されます。コレクション名を入力して、
    追加する ボタンをクリックします。

    {{<img src="/images/monaca_ide/tutorial/adding_backend/7.png">}}

{{<note>}}
    データの追加をアプリから行う場合、{{<guilabel name="JavaScript からのアイテム追加を許可する">}} にチェックを入れます。コレクション管理の詳細に関しては、{{<link href="/ja/products_guide/backend/control_operations/#コレクション管理" title="コレクション管理">}} をご確認ください。
{{</note>}}

ここまでの手順を行うことで、Monaca
バックエンドを使用したアプリを作成できるようになります。
[バックエンド メモ帳アプリ]({{<ref "backend_memo.ja.md">}}) では、アプリから Monaca
バックエンドを操作する方法を段階的に解説しています。こちらも参考にして、Monaca
バックエンドを使用したアプリのコーディングをお試しください。

See Also:

- [パート 1 : プロジェクトの作成](../starting_project/)
- [パート 2 : Monaca クラウド IDE と Monaca デバッガーとの連携](../testing_debugging/)
- [パート 3 : Monaca アプリのビルド](../building_app/)
- [パート 4 : Monaca アプリの配布申請](../publishing_app/)
- [サンプルアプリ](/ja/sampleapp/samples)
