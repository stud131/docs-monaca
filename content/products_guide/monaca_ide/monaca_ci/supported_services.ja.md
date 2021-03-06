---
title: アプリ配信/配布支援サービス (デプロイサービス)
weight: 20
aliases: 
    - /ja/monaca_ide/manual/monaca_ci/supported_services
    - /ja/manual/monaca_ci/supported_services
---

サポートしている支援サービス
----------------------------

### DeployGate

[DeployGate](https://deploygate.com/) を使用すれば、開発中の iOS と
Android
アプリを、参加メンバー間で簡単に共有できます。また、このサービスを使用すれば、さまざまな段階
( プロトタイプ、開発、検証、マーケティングなど )
におけるアプリの配信作業を、滞りなく行えます。

#### API キーの取得方法

1.  [DeployGate](https://deploygate.com/) にログインします。
2.  {{<guilabel name="アカウント設定/Account Settings">}} を選択します。

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/1.png">}}

3.  \[ プロフィール \]
    画面が表示されます。ページの最下部まで移動して、\[ API key \]
    を確認します。

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/2.png" width="600">}}

#### 設定パラーメーター

Monaca CI では、次のパラメーターをサポートしています ( JSON 形式 )。詳細は、[DeployGate API ドキュメント ( 日本語サイト )](https://deploygate.com/docs/api) をご確認ください。

パラメーター | 説明 | 備考
-----------|-----|-------
`token` | 「 API キー 」を指定します。グループでの利用の場合には、グループのページに表示されている API キー を使用します。これにより、メンバーの種類 ( 役割/権限 ) とは関わりなく、アプリをアップロードすることができます。| このキーは、自動的に生成されます。DeplyGate サイトの [ 配信支援サービス設定 ]、または、Monaca クラウド IDE の [ デプロイサービス一覧 ] 上で、API キーを確認できます。
`file` | 対象アプリのバイナリ―ファイルを設定します。 | 自動で生成されます。
`message` | [ 任意 ] プッシュ時に表示する通知メッセージを設定します。|
`distribution_key` | [ 任意 ] 配布キー ( Distribution Key ) を設定します。配布キーとは、配布ページを指し示す URL に使用されている hash 値です ( たとえば、`https://deploygate.com/distributions/` [ 配布キー ] )。また、配布ページとは、配布対象者向けに作成された、アプリのダウンロード用のページです。配布ページの作成は、DeployGate のサイト上から行えます。|
`release_note` | [ 任意 ] 配布ページ ( ダウンロード用ページ ) からアプリをダウンロードするときに表示するメッセージ | 
`disable_notify` | [ 任意 ]\(`iOS 専用`\) `yes` を設定した場合、email での通知を行いません。|
`visibility` | [ 任意 ] アップロードするアプリのセキュリティー設定です。`private` ( デフォルト ) または `public` を指定します。個人開発者向けの無料プラン ( Personal Free ) を利用している場合、`public` に設定します。無料プランの場合、プライベート ( 非公開 ) 設定は利用できません。また、private に指定しても、無視されます。|

### HockeyApp

[HockeyApp](https://hockeyapp.net/) では、モバイルアプリ開発の DevOps
に役立つ、さまざまな機能 (
ベータ版アプリの配信、クラッシュレポート、ユーザーの監視、ユーザーからのフィードバック、ユーザーの監視、他のシステムとの連携
) が提供されています。

#### API トークンの取得方法

1.  [HockeyApp](https://hockeyapp.net/) にログインします。
2.  {{<guilabel name="アカウント設定/Account Settings">}} を選択します。

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/3.png">}}

3.  \[ Account Settings \] 画面の左側に表示された一覧から、`API Tokens`
    を選択します。次に表示される画面上では、既存の API トークン
    の確認、および、API
    トークンの新規作成を行えます。ここでは、既存のトークンが存在しないことを前提に解説します。次の赤枠で囲まれた項目を指定して、トークンを作成します。

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/4.png">}}

4.  API
    トークンの作成後、画面の最下部まで移動して、作成されたトークンが表示されていることを確認します。

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/5.png">}}

#### 設定パラーメーター

Monaca CI では、次のパラメーターをサポートしています ( JSON 形式 )。詳細は、[HockeyApp API ドキュメント ( 英語サイト )](https://support.hockeyapp.net/kb/api/api-apps) をご確認ください。

<table>
    <tr>
        <th>パラメーター</th>
        <th>説明</th>
        <th>備考</th>
    </tr>
    <tr>
        <td><code>ipa</code></td>
        <td><code>.ipa</code> ( iOS の場合 )、<code>.app.zip</code> ( OS X の場合 )、または、<code>.apk</code> ( Android の場合 ) を指定します。</td>
        <td>自動で生成されます。</td>
    </tr>
    <tr>
        <td><code>dsym</code></td>
        <td>[ 任意 ] <code>.dSYM.zip</code> ファイル ( iOS・OS X の場合 ) または<code>mapping.txt</code> ( Android の場合 ) を指定します。iOS・OS X の場合、拡張子は <code>.dsym.zip</code>となります ( 大文字・小文字を区別します )。Andorid の場合には、ファイル名は <code>mapping.txt</code> となります。</td>
        <td></td>
    </tr>
    <tr>
        <td><code>notes</code></td>
        <td>[ 任意 ] リリースノートの形式を指定します ( Textile または Markdown 形式。5k を超えるサイズの場合、超えた分の文字は省略されます )。</td>
        <td></td>
    </tr>
    <tr>
        <td><code>notes_type</code></td>
        <td>[ 任意 ] リリースノートの形式を指定します。
            <ul>
                <li>Textile 形式の場合、<code>0</code> を設定します。</li>
                <li>Markdown 形式の場合、<code>1</code> を設定します。</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>notify</code></td>
        <td>[ 任意 ] テスターへ通知します。「 Full-Access トークン 」 を設定した場合だけ、有効となります。Full-Access トークン に関しては、HockeyAPP サイトの [ API Token ] 項目をご確認ください。
            <ul>
                <li>テスターに通知しない場合には、<code>0</code> を指定します。</li>
                <li>アプリのインストールを許可するテスターだけに通知する場合には、<code>1</code> を指定します。</li>
                <li>すべてのテスターに通知する場合には、<code>2</code> を指定します。</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>status</code></td>
        <td>[ 任意 ] ダウンロードに関するパーミッションを設定します。「 Full-Access トークン 」 を設定した場合だけ、有効となります。Full-Access トークン に関しては、HockeyAPP サイトの API 解説 「 API: Basics and Authentication 」 をご確認ください。
            <ul>
                <li>対象バージョンのダウンロードを禁止する場合には、<code>1</code> を指定します。</li>
                <li>対象バージョンのダウンロードを許可する場合には、<code>2</code>  を指定します。</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>tags</code></td>
        <td>[ 任意 ] ダウンロードを行えるユーザーを絞り込みます [ Tags ( 文字列 ) を指定します。Tags を複数指定する場合は、カンマで区切ります ]。 [ 翻訳者メモ : Tags とは、開発者が自由に設定できるユーザーカテゴリーを指します ]</td>
        <td></td>
    </tr>
    <tr>
        <td><code>teams</code></td>
        <td>[ 任意 ] ダウンロードを行えるチームを絞り込みます ( Team ID を指定します。Team ID を複数指定する場合は、カンマで区切ります )。
            <ul>
                <li>たとえば、<code>teams=12,23,42</code> のように指定します。数値は、Team ID です。</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>users</code></td>
        <td>[ 任意 ] ダウンロードを行えるユーザーを絞り込みます ( User ID を指定します。User ID を複数指定する場合は、カンマで区切ります )。
            <ul>
                <li>たとえば、<code>users=1224,5678</code> のように指定します。数値は、User ID です。</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>mandatory</code></td>
        <td>[ 任意 ] 対象バージョンのインストールを、必須または任意にするか指定します。
            <ul>
                <li>任意の場合、<code>0</code> を設定します。</li>
                <li>必須の場合、<code>1</code> を設定します。</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>release_type</code></td>
        <td>[ 任意 ] リリースの種類に応じて、値を設定しています。
            <ul>
                <li>ベータ版の場合、<code>0</code>  を設定します ( デフォルト )。</li>
                <li>ストア版の場合、<code>1</code> を設定します。</li>
                <li>アルファ版の場合、<code>2</code> を設定します。</li>
                <li>エンタープライズ版の場合、<code>3</code> を設定します。</li>
            </ul>
        </td>
        <td></td>
    </tr>
</table>

### Appetize.io

[Appetize.ios](https://appetize.io/) では、AndroidとiOSアプリをブラウザ上でシミュレートすることができます。  
このサービスを利用すると、iOS証明書やプロビジョニングファイルなしで、アプリの動作確認が可能となります。

まずは、Appetize.ioの[デモ](https://appetize.io/demo)を体験してみてください。  

![image](/images/monaca_ide/manual/monaca_ci/supported_services/appetize_demo.png)


#### API トークンの取得方法

1.  [Appetize.io](https://appetize.io/) のアカウントを作成し、ログインします。  
2.  [APIトークン取得用フォーム](https://appetize.io/docs#request-api-token)にメールアドレスを入力し、トークンを取得します。  

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/appetize_get_api_token.png" width="450">}}

#### Monaca へのサービスの追加

API トークンを取得後、Appetize.io を Monaca に追加する方法は、以下になります。

1.  Monaca クラウド IDE メニューの {{<menu menu1="設定" menu2="デプロイサービス">}} を選択します。

2.  {{<guilabel name="新しく追加する">}} をクリックします。

3.  `AppetizeIo` を選択し、以下の必要情報を入力します。
    
    -   `エイリアス名`: 各サービスの一意の識別子
    -   `API トークン`: Appetize.io から取得した API トークン

    {{<figure src="/images/monaca_ide/manual/monaca_ci/overview/appetize.png" width="500">}}

4. {{<guilabel name="追加">}} をクリックします。

以上で、Appetize のシミュレータを使用してビルドアプリをインストールできるようになります。

#### 設定パラーメーター

Monaca CI では、次のパラメーターをサポートしています ( JSON 形式 )。  
詳細は、[Appetize.io ドキュメント ( 英語サイト )](https://appetize.io/docs#creating-apps) をご確認ください。

パラメーター | タイプ | 説明
-----------|-------|-------
`platform` | string | [必須項目] `ios` or `android`
`timeout`| number | セッションが自動的に終了するまで待機する秒数。`30`, `60`, `90`, `120`, `180`, `300` または `600` を指定。(デフォルトは`120`。)
`disableHome` | boolean | ホームボタンを無効にします。
`disabled` | boolean | このアプリのストリーミングを無効にします。
`useLastFrame` | boolean | セッションが終了した後、シミュレータの画面上に、最後の表示されていた画像を表示します。
`buttonText` | string | セッションの開始を促すメッセージをカスタマイズします。 (デフォルトは「Tap to play」)
`postSessionButtonText` | string | セッションを再開するように促すメッセージをカスタマイズします。 (デフォルトは「Tap to play」)
`launchUrl` | string | アプリの起動時に、特定の場所にユーザーを誘導するためのディープリンクを指定します。
`note` | string | メモを残せます。メモは管理ダッシュボードに表示されます。
`appPermissions` | JSON オブジェクト | 値は `authenticated`、`public`、または`null`(デフォルトにリセット)に設定します。キーは次のいずれかです。<ul><li>`run`: アプリ実行</li><li>`networkProxy`: アプリ実行時のネットワークプロキシを指定する</li><li>`networkIntercept`: アプリ実行時にAppetize.ioプロキシを使用する</li><li>`debugLog`: アプリのNSLogまたはLogcatの出力を見る</li><li>`adbConnect`: ホストされているエミュレータにADBを接続してアプリケーションをデバッグする</li><li>`androidPackageManager`: アプリの実行中に追加のAPKをインストールできるようにする</li></ul>

### サポート予定の支援サービス

上述のサービス以外にも、今後、次の配信/配布サービスを追加していく予定です。

-   [Test Flight](https://developer.apple.com/testflight/)

参考ページ  
- [Monaca CI について](../overview)