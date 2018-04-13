---
title: "パート 1 : プロジェクトの作成"
weight: 1
aliases: /ja/monaca_ide/tutorial/starting_project/
---

## ステップ 1 : Monaca へのログイン

1.  [Monaca](https://monaca.mobi/ja/login) にログインします。
2.  Monaca アカウント情報を入力します。

    {{<figure src="/images/monaca_ide/tutorial/starting_project/9.png" width="400">}}

## ステップ 2 : プロジェクトの新規作成

ログインすると、Monaca
ダッシュボードへ自動的に遷移します。次の手順に従い、初めての Monaca
プロジェクトを早速作ってみましょう。
ログインすると、ダッシュボードへ自動的に遷移します。 これで、初めての Monaca プロジェクトを作成する準備が整いました。 新規プロジェクトの作成は、次のとおりです。

1.  ダッシュボードから、{{<guilabel name="新規プロジェクトの作成">}} または {{<guilabel name="インポート">}} を選択することで、新しい Monaca プロジェクトを作成することができます。`新規プロジェクトの作成` を選択すると、さまざまなテンプレートから新しいプロジェクトを作成することができます。`インポート` を選択した場合は、既存の [Cordova / Monaca] プロジェクトから、以下のような方法で、新しいプロジェクトを作成することができます：

    - URL を指定してインポート (zip 形式) 
    - プロジェクトのパッケージをアップロード (zip 形式)
    - Git のレポジトリからインポート ([Git SSH との連携]({{<ref "git_ssh_integration.ja.md">}}) を参照)
    - GitHubのレポジトリからインポート ([GitHub との連携]({{<ref "github_integration.ja.md">}}) を参照).

    {{< figure src="/images/monaca_ide/tutorial/starting_project/11.png" title="Import Project Dialog" >}}
    {{< figure src="/images/monaca_ide/tutorial/starting_project/10.png" title="Create Project Dialog" >}}

2.  ここでは、新規プロジェクトの作成 を選択します。表示される `新規プロジェクトの作成` ダイアログ上で サンプルアプリを選択し、次に、`jQuery TODO App` テンプレートの {{<guilabel name="作成">}} ボタンをクリックします。

3. {{<guilabel name="プロジェクトを作成する">}} ボタンをクリックします。

    {{<figure src="/images/monaca_ide/tutorial/starting_project/3.png" >}}

4. ダッシュボードの `オンライン` タブ上に、新規作成したプロジェクトが表示されます。

## ステップ 3 : プロジェクトのプレビュー

端末を使用しなくても「 プレビューウィンドウ 」を使用すれば、Monaca
クラウド IDE 上でプロジェクトをプレビューできます。

{{<note>}}
プレビューウィンドウを使用して実際に検証できる機能には制限があります。制限としては、使用できる
Cordova プラグイン/API の種類、Ajax リクエストなどがあります。詳細は、{{<link href="/ja/products_guide/monaca_ide/overview#ライブプレビューの制限" title="ライブプレビューの機能と制限">}} をご確認ください。
{{</note>}}

1.  ダッシュボードからプロジェクトを開きます。Monaca クラウド IDE が起動し、デフォルトでは右側にはプレビューウィンドウが表示されます。

    {{<figure src="/images/monaca_ide/tutorial/starting_project/5.png" >}}

2.  プレビューウィンドウ上で、TODO をいくつか追加してみましょう。

    {{<figure src="/images/monaca_ide/tutorial/starting_project/6.png" >}}

## ステップ 4 : プロジェクトファイルの編集

{{<note>}}
編集できるファイルは、<code>www</code> フォルダーの下にあるファイルになります。
{{</note>}}

1.  左側のプロジェクトツリー画面から、編集対象のファイルを選択します。コードエディターを使用して index.html ファイルの内容を変更してみましょう。

2.  ファイルの編集後、変更を保存します。次に、プレビューウィンドウ上で変更点が反映されていることを確認してみましょう。他の箇所も変更して、プレビュー上で確認してみましょう。
今回使用したテンプレートの詳細は、[TODO 管理アプリ](/ja/sampleapp/samples/todo/) をご確認ください。

{{<note>}}
Monaca クラウド IDE
に実装されているコードエディターの詳細は、{{<link href="/ja/products_guide/monaca_ide/overview/#コードエディター" title="コードエディター">}} をご確認ください。
{{</note>}}


**次へ**: 

- [パート 2 : Monaca CLI と Monaca デバッガーとの連携](../testing_debugging/)