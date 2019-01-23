---
title: GitHub との連携
weight: 20
aliases: /ja/monaca_ide/manual/version_control/github_integration
---

{{<note>}}
ここでは、Public 指定されたレポジトリを対象として解説を進めます。Private 指定のレポジトリに接続する場合には、対応する Monaca プランに加入する必要があります。詳細は、{{<link href="https://ja.monaca.io/pricing.html" title="料金プラン">}} をご確認ください。
{{</note>}}

## セットアップ

この項目では、Monaca アカウントと GitHub アカウントをリンクする方法を解説します。

1.  [GitHubアカウント連携](https://monaca.mobi/ja/vcs) ページへ移動します。

2.  {{<guilabel name="連携する">}} ボタンをクリックします。GitHub
    にログインする必要があります。

    {{<figure src="/images/monaca_ide/manual/version_control/2.png" >}}

3.  \[ Authorize application \] ページでは、Monaca と GitHub の連携に必要となる認証手続きを行います。{{<guilabel name="Authorize application">}} ( アプリケーションの認証 ) をクリックます。

    {{<figure src="/images/monaca_ide/manual/version_control/3.png" >}}

4.  ここまでの手順で、Monaca アカウントと GitHub アカウントの連携が完了しました。

    {{<figure src="/images/monaca_ide/manual/version_control/4.png" >}}

{{<warning>}}
    1 つの GitHub アカウントに対して、1 つの Monaca アカウントのみ、連携を行えます。「 一対多数 」の設定はできません。設定した場合、エラーになります。
{{</warning>}}

## Monaca プロジェクトを新しい GitHub レポジトリに接続する

### ステップ 1: 新しい空のレポジトリを作成する

GitHub アカウントに移動し、新しい空のレポジトリを作成します（Readme
ファイルなし）。

### ステップ 2: レポジトリと Monaca プロジェクトの接続

連携完了後、次に、レポジトリとプロジェクトを接続させるため、Monaca
クラウド IDE 側で行う設定があります。なお、ここでは、Monaca と GitHub
間の連携が完了していることを前提に解説します。

次の手順に従い、設定を行います。

1.  Monaca Dashboard から、レポジトリに接続するプロジェクトを開きます。

2.  Monaca クラウド IDE のメニューから、{{<menu menu1="プロジェクト" menu2="バージョン管理設定">}} を選択します。

3.  `GitHub` を選択します。

    {{<img src="/images/monaca_ide/manual/version_control/git_service.png" width="500px">}}

4. リモートの空のレポジトリを選択します。 次に、{{<guilabel name="設定する">}} ボタンをクリックして設定を保存します。

    {{<img src="/images/monaca_ide/manual/version_control/initialization.png" width="500px">}}

    {{<note>}}
        設定後に別のレポジトリに変更することはできませんのでご注意ください。
    {{</note>}}

5.  GitHub 上の新規のレポジトリにプロジェクトがアップロードされます。デフォルトでは、作業ブランチは master として設定されます。別の作業ブランチに切り替える場合は、{{<menu menu1="プロジェクト" menu2="バージョン管理設定">}} へ移動します。

    {{<img src="/images/monaca_ide/manual/version_control/branch.png" width="500px">}}

## プロジェクトを GitHub レポジトリから Monaca にインポートする

Monaca と GitHub の連携後、GitHub レポジトリ―に置かれているプロジェクトを、Monaca クラウド IDE にインポートすることもできます。

1.  ダッシュボード上で、{{<guilabel name="インポート">}} を選択します。

2.  \[ プロジェクトのインポート \] ダイアログが表示されます。必要な情報の入力後、`GitHubのレポジトリからインポート` を選択します。次に、対象のレポジトリを選択して、 {{<guilabel name="インポート">}} ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/version_control/import.png" width="500px">}}

3.  インポートの完了後、ダッシュボード上で対象のプロジェクトが表示されていることを確認します。デフォルトでは、master ブランチのコンテンツがインポート対象となります。ブランチは、{{<menu menu1="プロジェクト" menu2="VCS バージョン管理設定">}} で切り替えることができます。

    {{<img src="/images/monaca_ide/manual/version_control/branch.png" width="500px">}}

## リモートレポジトリを使用した作業

レポジトリとプロジェクト間の接続完了後は、チームメンバーと同じプロジェクトで作業を開始し、Monaca
クラウド IDE から最新のアップデートと同期させることができます。

Monaca クラウド IDE
では、ユーザーフレンドリーなバージョン管理用のインターフェイスを提供しています。このインターフェイスを使用すれば、Git
のコマンドの詳細を意識せずに、基本的な操作を一通り行うことができます。

### ブランチの切り替え ( Git コマンドの checkout )

複数のブランチを使用したプロジェクトで、ブランチの切り替えを行う場合は、次の手順に従います。

1.  Monaca クラウド IDE のメニューから、{{<menu menu1="プロジェクト" menu2="バージョン管理設定">}} を選択します。

2. 現在の作業ブランチから切り替えたいブランチを選択し、{{<guilabel name="アップデート">}} ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/version_control/branch.png" width="500px">}}

{{<note>}}
    現在のブランチで行った変更をコミットせずに、ブランチの切り替えを行う場合、エラーが表示されます。ブランチを切り替える場合には、最初に、作業内容をコミット ( 場合によっては、リモートにプッシュまで ) してください。
{{</note>}}

### リモートレポジトリから最新の内容を取得

Git
コマンドでは、リモートレポジトリから最新の情報を取得/ダウンロードする場合、`git pull`
( git プル ) コマンドを使用します。Monaca クラウド IDE
では、リモートレポジトリから最新の情報を取得する場合、Monaca クラウド
IDE のメニューから、{{<menu menu1="プロジェクト" menu2="プル">}}
を選択します。リモートレポジトリ側の内容が更新されている場合、その内容がダウンロードされ、対応するブランチ側に反映されます。

{{<note>}}
    IDE 上でプロジェクトを作成した場合、開発者側が自由に作業できるファイルのほとんどは、<code>www</code> フォルダー内に置かれています。これ以外にも、IDE 上には表示されないシステム側のファイルもありますが、リモートレポジトリとの同期時には、これらのファイルも一緒にアップロード・ダウンロードされています。
{{</note>}}

### 変更箇所のコミットとリモートレポジトリへの反映

現在作業をしているブランチで行った変更を、リモートレポジトリ側に反映させます。最初に、次の手順に従い、コミットを行い、リモートレポジトリ側へプッシュします
( コミット前に、ファイルを保存する必要があります )。

1.  Monaca クラウド IDE のメニューから、{{<menu menu1="プロジェクト" menu2="コミット">}} を選択します。
2.  コミットメッセージを入力して、コミット対象のファイルにチェックを入れます。次に、{{<guilabel name="コミット">}} ボタンをクリックします。
3.  ここまでの手順で、リモートレポジトリに更新を反映させる準備ができました。次に、{{<menu menu1="プロジェクト" menu2="プッシュ">}} を選択します。コミット後、リモートレポジトリ側が更新されているか確認します。

### リモートレポジトリ側のコミット履歴の表示 ( GitHub 側の履歴ページ )

リモートレポジトリ側 ( GitHub 側 )
のコミット履歴を確認する場合、{{<menu menu1="プロジェクト" menu2="リモートのコミット履歴">}} を選択します。現在作業しているブランチのコミット履歴が表示された、GitHub 側のサイト ( 外部ページ ) にリダイレクトされます。

### ローカルコミットの履歴表示 ( Monaca クラウド IDE 側の履歴ページ )

ローカルコミットとは、Monaca クラウド IDE 上で行ったコミットを指します。{{<menu menu1="プロジェクト" menu2="コミット履歴">}} を選択すれば、ローカルコミットの履歴を表示できます。各コミットの内容を確認する場合には、コミットメッセージ横の ID をクリックします。

## Monaca アカウントと GitHub アカウントとの連携の解除

1. [GitHubアカウント連携](https://monaca.mobi/ja/vcs) ページへ移動します。

2.  {{<guilabel name="連携を解除する">}} ボタンをクリックします。

{{<figure src="/images/monaca_ide/manual/version_control/4.png" >}}

## GitHub との再度の連携時にエラーが発生した場合

Monaca と GitHub の連携を解除して、再び上記の [セットアップ](#セットアップ) に従い、連携を行ったところ、次のようなエラーが表示される場合があります。

{{<figure src="/images/monaca_ide/manual/version_control/14.png" >}}

この場合、次の手順に従います。

1.  Monaca クラウド IDE からログアウトします。
2.  [Monaca ログイン](https://monaca.mobi/ja/login)
    ページに移動して、{{<guilabel name="Sign In With GitHub">}} をクリックします。

    {{<figure src="/images/monaca_ide/manual/version_control/15.png" >}}

3.  GitHub のアカウント情報を入力します。
4.  GitHub の \[ Authorize application \]
    ページにリダイレクトされます。{{<guilabel name="Authorize application">}}
    ボタンをクリックして、先に進みます。

    {{<figure src="/images/monaca_ide/manual/version_control/3.png" >}}

5.  ここまでの手順を行えば、Monaca と GitHub が再び連携されています。\[ GitHub アカウント連携 \] ページに移動して、次のような画面が表示されていることを確認します。

    {{<figure src="/images/monaca_ide/manual/version_control/4.png" >}}