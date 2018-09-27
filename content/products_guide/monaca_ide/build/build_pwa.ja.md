---
title: PWA アプリのビルド
weight: 20
---

##  ステップ 1 : アプリの設定

1.  Monaca クラウド IDE のメニューから、{{<menu menu1="設定" menu2="PWA アプリ設定">}} を選択します。
2.  アプリに関する情報を入力します。

    -   アプリケーション情報

        <table class="small">
            <tr>
                <td width="25%">名前</td>
                <td>アプリ名を設定します。</td>
            </tr>
            <tr>
                <td>短い名前</td>
                <td>フルネームを表示する十分な領域がない場所(ホーム画面など)で使用されます。</td>
            </tr>
            <tr>
                <td>説明</td>
                <td>アプリの一般的な説明を指定します。</td>
            </tr>
            <tr>
                <td>言語</td>
                <td><code>name</code>メンバーと <code>short_name</code> メンバーで使用する言語を指定します。</td>
            </tr>
            <tr>
                <td>テキストの向き</td>
                <td>テキストの書字方向を指定します。</td>
            </tr>
            <tr>
                <td>適用範囲</td>
                <td>ウェブサイトのナビゲーション範囲を定義します。この設定により表示することができるウェブページを制限できます。範囲外にユーザーがアクセスした場合は、通常のWebページに遷移します。</td>
            </tr>
            <tr>
                <td>開始URL</td>
                <td>アプリケーションを起動したときに読み込むURLです。</td>
            </tr>
        </table>

        {{<img src="/images/monaca_ide/manual/build/pwa/app_setting.png">}}

    -   アプリケーションの表示設定

        <table class="small">
            <tr>
                <td width="20%">表示</td>
                <td>アプリケーションの表示モードを設定します。ネイティブアプリのように表示させるためデフォルトは、<code>standalone</code>に設定されています。</td>
            </tr>
            <tr>
                <td>画面の向き</td>
                <td>画面の表示向きを設定します。</td>
            </tr>
            <tr>
                <td>背景色</td>
                <td>スプラッシュ画面の背景色として利用されます。</td>
            </tr>
            <tr>
                <td>テーマカラー</td>
                <td>ステータスバーの色を設定します。</td>
            </tr>
        </table>

    -   アプリアイコン

          アプリアイコンの設定ができます。1つの画像から各サイズのアイコンを自動生成します。設定したアイコンは、端末のホーム画面に表示されるアイコンやスプラッシュ画像に表示されるアイコンとして利用されます。


3.  設定後、{{<guilabel name="保存する">}} をクリックします。

## ステップ 2 : アプリのビルド

1.  Monaca クラウド IDE のメニューから、
    {{<menu menu1="ビルド" menu2="PWA アプリのビルド">}} を選択します。

2.  目的に応じたビルドの種類を選択して、{{<guilabel name="ビルドを開始する">}} ボタンをクリックします。
    {{<img src="/images/monaca_ide/manual/build/pwa/build_start.png">}}

3.  ビルドが完了するまで、しばらく待ちます。ビルドが成功した場合には、次のような画面が表示されます。ビルドの完了後、ダウンロードやデプロイサービスでの配布ができます。
    {{<img src="/images/monaca_ide/manual/build/pwa/build_result.png">}}


参考ページ  

  - [Firebase への配信](/ja/products_guide/monaca_ide/monaca_ci/firebase/)