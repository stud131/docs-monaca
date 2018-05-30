---
title: JS・CSS コンポーネント
weight: 20
aliases: /ja/monaca_ide/manual/dependencies/components
---

{{%excerpt%}}
<!-- using full HTML code for other shortcodes otherwise `excerpt` shortcode will break them -->

JS・CSS コンポーネントとは、プロジェクトにインクルード ( include )
する、JavaScript と CSS ライブラリー群 ( jQuery、jQuery mobile、Onsen UI
など ) を指します。

JavaScript/CSS ライブラリーを追加する場合、次の手順に従います。

1.  Monaca クラウド IDEから <span class="guilabel"><b>
設定 → JS/CSS コンポーネントの追加と削除</b></span> を選択します。

2.  `JS/CSS コンポーネントの追加と削除` 画面が表示されます。画面上では、複数のライブラリーが一覧化されています。必要なライブラリーを見つけられない場合には、検索ボックスを使用します。

    <img src="/images/monaca_ide/manual/dependencies/components/components.png" width="" class="single_img">

3.  Angularを検索する場合、<span class="guilabel">検索</span> ボタンをクリックすると、一致するライブラリのリストが表示されます。

    <img src="/images/monaca_ide/manual/dependencies/components/search_component.png" width="" class="single_img">

4.  <span class="guilabel">追加</span> ボタンをクリックし、対象のライブラリを追加します。 次に、プロジェクトに追加するライブラリのバージョンを選択できます。

    <img src="/images/monaca_ide/manual/dependencies/components/select_version.png" width="500px" class="single_img">

5.  追加するライブラリのファイルを選択し、<span class="guilabel">インストール</span> をクリックします。

    <img src="/images/monaca_ide/manual/dependencies/components/select_file.png" width="500px" class="single_img">

6.  追加したライブラリーが一覧上に表示されていることを確認します。ライブラリのバージョンと選択したファイルを変更する場合には、<span class="guilabel">設定</span> をクリックします。

    <img src="/images/monaca_ide/manual/dependencies/components/configure_component.png" width="" class="single_img">

ライブラリーを追加すると、そのファイルは、`www/components`
フォルダーに追加されます。また、次の JavaScript ファイルと CSS
ファイルも自動的に更新されます。プロジェクトに追加したライブラリーの種類にかかわらず、こちらのファイルは、常にこのフォルダー内に置かれています。

| ファイル名 | 説明 |
|----------|-------------|
| `loader.js` | Monaca が JavaScript ライブラリを読み込むために使用する JavaScript ファイル |
| `loader.css` | Monaca が CSS ライブラリを読み込むために使用するスタイルシートファイル |

<figure>
    <img data-action="zoom" src="/images/monaca_ide/manual/dependencies/components/component_files.png" width="">
    <figcaption>
        
    </figcaption>
</figure>

HTML ファイルから、 上記の 2 つのファイルを参照するだけで、ライブラリーの読み込みが行えます。記述例を次に記します。HTML
ファイルの `<head>` タグ内で、次の記述を行うだけで、ライブラリーが使用できます。


<div class="admonition note">
    <code>loader.js</code> file also loads <code>cordova.js</code> file.
</div>

<div class="admonition note">
ライブラリー内の画像を使用する場合、 <code>components</code>
フォルダーから対象の画像ファイルを、直接、読み込めます。
</div>

{{%/excerpt%}}