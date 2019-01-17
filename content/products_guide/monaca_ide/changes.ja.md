---
title: Monaca クラウド IDE の機能
weight: 20
aliases: /ja/monaca_ide/manual/changes/
---

Monaca クラウド IDE は、アプリケーション開発を容易にし、開発体験を向上させるための機能を開発者へ提供します。 主な機能は、次のとおりです。

- ターミナル機能: Monaca クラウド IDE でトランスパイル処理(コード変換)を実行。
- Golden Layout: IDE レイアウトの自由度。
- マルチ プレビューア: テスト効率の向上。
- Monaco Editor: 開発プロセスをスピードアップする優れたコードエディタ。
- Monaca バックエンド: Monaca バックエンドのためのより良い GUI。

## ターミナル機能

ターミナル機能により、React、VueJS、Angular などのトランスパイルが必要となるプロジェクトを作成、管理、開発すること可能となります。
また、プレビューアもターミナル機能より起動されます。さらに、ホットリローディングに対応するプロジェクトは、Monaca クラウド IDE でもその機能を利用できます。ターミナル機能についてと使用法の詳細については、[ターミナル機能](../terminal) を参照してください。

{{<figure src="/images/monaca_ide/manual/changes/terminal.png">}}

## Golden Layout

開発体験の重要性を考慮して、Monaca クラウド IDE にさまざまな機能を追加し、ユーザーインターフェイスを更新しています。

これらの機能の 1 つは、柔軟なレイアウトです。Monaca クラウド IDE では、すべてのパネルをドラッグして任意の位置に配置することができます。 各パネルは、最大化 / 最小化も簡単に行うことができます。 そのため、自由にレイアウトを配置することができます。 この新しいレイアウトは、 [Golden layout](http://golden-layout.com/) によって作成されています。Golden layout は、Web アプリケーションのマルチスクリーンレイアウトマネージャー
です。

{{<figure src="/images/monaca_ide/manual/changes/1.png" >}}

## マルチ プレビューア

柔軟なレイアウトに加えて、さまざまなデバイスのレイアウトでアプリを同時にプレビューする機能も追加されています。 Monaca クラウド IDE では、複数のプレビューウィンドウを同時に開くことができます。

マルチプラットフォーム対応のアプリ開発者にとって、この機能は有効です。特に、モバイルアプリのリアルタイムプレビューアを提供する別のクラウド IDE を試したことがない場合は、一度体験してください。

{{<figure src="/images/monaca_ide/manual/changes/2.png">}}

## Monaco Editor

アプリ開発の大部分はコードの作成に費やされます。Monaca クラウド IDE では、次のような理由から、 [Monaco](https://microsoft.github.io/monaco-editor/) を使用しています。

- 言語サーバーを使用して拡張できる自動補完システム。Monaca が提供する言語には、HTML、JavaScript、TypeScript、Onsen UI があります。React や Vue も対応予定です。

- 基本的な構文の色付け。

- 高機能なインテリセンスと検証。

{{<figure src="/images/monaca_ide/manual/changes/3.png">}}

Monaca クラウド IDE のショートカットキーについては、 [エディターのショートカット一覧](../code_editor/editor/) を参照してください。

## Monaca バックエンド

Monaca バックエンドは、別ウィンドウに表示されます。これにより、ユーザー、コレクション、プッシュ通知、メールテンプレートなどのすべてのバックエンドコンポーネントが管理しやすくなっています。 ナビゲーションもユーザーフレンドリーになっています。

{{<figure src="/images/monaca_ide/manual/changes/4.png">}}

