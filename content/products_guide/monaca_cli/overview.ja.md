---
title: 概要
weight: 10
aliases: /ja/monaca_cli/manual/overview/
---

## はじめに

Monaca CLI は、ローカル環境用の開発ツールです。Monaca
アプリをローカルで開発するときに使用できます。Monaca CLI
では、コマンドライン形式のインターフェイスが提供されています。また、CLI
経由で、ローカル PC から Monaca
クラウドのサービスを使用することもできます。Monaca CLI
上では、次の作業を行えます。

-   ローカル上でのプロジェクトの新規作成、Monaca
    クラウド上に保存されたプロジェクトのインポート (
    クラウドからローカルへ ) またはクローン。
-   お好みのコードエディターを使用した、Monaca
    アプリの開発。お好きなコードエディターを使用して、プロジェクトの作成からビルドまでの工程を、ローカル上で行えるようになります。
-   インスペクタを使用した、アプリのデバッグ。
-   プロジェクトのコード変換 ( トランスパイル )。コード変換の対象となるプロジェクトは、React.js
    プロジェクト、Angular2 プロジェクトなどです。
-   プロジェクトのリモートビルド (
    ローカル上での各種セットアップは必要ありません ) 。

## 事前準備

### 要件

Monaca CLI のご利用には、[Node.js](https://nodejs.org/) が必要です (
事前に、PC にインストールされていること )。

### ステップ 1 : CLI のインストール

次のコマンドを使用して、Monaca CLI をインストールします。

{{<highlight javascript>}}
$ npm install -g monaca
{{</highlight>}}

いくつかのシステムでは、インストールする権限が必要になるため、コマンドの前に
sudo を追加する必要があります。

{{<highlight javascript>}}
$ sudo npm install -g monaca
{{</highlight>}}

{{<note>}}
現在インストールされている Monaca CLI のバージョンを確認する場合には、
<code>monaca</code> コマンドを使用します。また、最新の Monaca CLI
にアップグレードする場合には、上記のコマンドを使用して、再度、インストールを行います。
{{</note>}}

### ステップ 2 : チュートリアルの確認

Monaca CLI のインストール後は、こちらの [Monaca CLI チュートリアル](../tutorial)
の内容を参考に、Monaca CLI を使用してみましょう。

## トランスパイル処理 ( コード変換 )

最新の JS フレームワークの中には、JSX などとのやり取りを行うために独自の言語を作成したものや、ネイティブ JavaScript で利用できない拡張機能 ( TypeScriptなど ) を統合したものがあります。トランスパイル処理では、これらの言語で書かれたコードを最新のブラウザ / WebView で実行可能なネイティブ JavaScript コードに変換します。トラインスパイル処理は、WebPack を利用して実行しています。

この処理は、Vue, React, Angular2
テンプレートで実行できます。実行方法は下の 2 つがあります。

1.  `monaca transpile`:
    プロジェクトに対してトランスパイラーを実行します。
2.  `monaca preview`: `--watch`
    オプション付きのプレビューです。このコマンドを実行すると、HTTP
    サーバーが起動し、アプリのコンテンツを表示してくれます。

## アップロードとダウンロードの制御

特定のファイルやフォルダを除外して Monaca クラウドにアップロードしたくない場合があります。 この場合は、プロジェクトのルートディレクトリにある `.monacaignore` ファイルを編集して、特定のファイルやフォルダを設定することができます。

{{<note>}}
    <code>.monacaignore</code> は、<code>.gitignore</code> と同じパターンを使用しています。
{{</note>}}

`.monacaignore` ファイルのデフォルト設定は次のとおりです。

{{<highlight bash>}}
/.monaca/*
!/.monaca/project_info.json
/platforms
.DS_Store
*.swp
.vscode/
typings/
node_modules
.git
{{</highlight>}}


参考ページ

- [チュートリアル](../tutorial)
- [Monaca CLI コマンド](../cli_commands)
- [プロジェクトの構成](../dependencies)
- [ペアリングとデバッグ](../pairing_debugging)
- [リモートビルドと配布申請](../build_publish)
- [トラブルシューティング ガイド](../troubleshooting)
