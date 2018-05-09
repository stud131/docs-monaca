---
title: JS・CSS コンポーネント
weight: 20
aliases: /ja/monaca_ide/manual/dependencies/components
---

JS・CSS コンポーネントとは、プロジェクトにインクルード ( include )
する、JavaScript と CSS ライブラリー群 ( jQuery、jQuery mobile、Onsen UI
など ) を指します。

JavaScript/CSS ライブラリーを追加する場合、次の手順に従います。

1.  Monaca クラウド IDEから {{<menu menu1="設定" menu2="JS/CSS コンポーネントの追加と削除">}} を選択します。

2.  `JS/CSS コンポーネントの追加と削除` 画面が表示されます。画面上では、複数のライブラリーが一覧化されています。必要なライブラリーを見つけられない場合には、検索ボックスを使用します。

    {{<img src="/images/monaca_ide/manual/dependencies/components/components.png">}}

3.  Angularを検索する場合、{{<guilabel name="検索">}} ボタンをクリックすると、一致するライブラリのリストが表示されます。

    {{<img src="/images/monaca_ide/manual/dependencies/components/search_component.png">}}

4.  {{<guilabel name="追加">}} ボタンをクリックし、対象のライブラリを追加します。 次に、プロジェクトに追加するライブラリのバージョンを選択できます。

    {{<img src="/images/monaca_ide/manual/dependencies/components/select_version.png" width="500px">}}>}}

5.  追加するライブラリのファイルを選択し、{{<guilabel name="インストール">}} をクリックします。

    {{<img src="/images/monaca_ide/manual/dependencies/components/select_file.png" width="500px">}}

6.  追加したライブラリーが一覧上に表示されていることを確認します。ライブラリのバージョンと選択したファイルを変更する場合には、{{<guilabel name="設定">}} をクリックします。

    {{<img src="/images/monaca_ide/manual/dependencies/components/configure_component.png">}}

ライブラリーを追加すると、そのファイルは、`www/components`
フォルダーに追加されます。また、次の JavaScript ファイルと CSS
ファイルも自動的に更新されます。プロジェクトに追加したライブラリーの種類にかかわらず、こちらのファイルは、常にこのフォルダー内に置かれています。

| ファイル名 | 説明 |
|----------|-------------|
| `loader.js` | Monaca が JavaScript ライブラリを読み込むために使用する JavaScript ファイル |
| `loader.css` | Monaca が CSS ライブラリを読み込むために使用するスタイルシートファイル |

{{<figure src="/images/monaca_ide/manual/dependencies/components/component_files.png">}}

HTML ファイルから、 上記の 2 つのファイルを参照するだけで、ライブラリーの読み込みが行えます。記述例を次に記します。HTML
ファイルの `<head>` タグ内で、次の記述を行うだけで、ライブラリーが使用できます。

{{<note>}}
    <code>loader.js</code> file also loads <code>cordova.js</code> file.
{{</note>}}

{{<note>}}
ライブラリー内の画像を使用する場合、 <code>components</code>
フォルダーから対象の画像ファイルを、直接、読み込めます。
{{</note>}}
