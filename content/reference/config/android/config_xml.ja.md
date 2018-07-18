---
title: config.xml
weight: 20
---


`config.xml` 設定ファイルを使用して、Cordova
のさまざまな設定を管理します。

{{<figure src="/images/reference/config/android/2.png">}}

設定可能な要素と preference を次に記します。必要に応じて設定します。

### &lt;widget&gt; 要素

属性 | 型 | デフォルト値 | 解説
----------|------|---------------|-------------------
`version` | 文字列 | `1.0.0` | ユーザー側に表示するバージョン番号です。
`android-versionCode` | 文字列 | 自動的にセットされます。`version` 属性に `"1.22.33"` を設定した場合、 102233 (=1 * 10000 + 22 * 100 + 33) となります。また、Crosswalk をプロジェクトで使用している場合、ARM アーキテクチャを使用しているときは、`2xxxxxx` となり、x86 アーキテクチャを使用しているときは、`7xxxxxx` となります。 | 内部で使用するバージョン番号です。最新バージョンを決定するときに使用されます。比較して、数が多いほうが、より新しいバージョンとなります。このバージョン番号は、ユーザー側には表示されません。

**例**

{{<highlight xml>}}
<widget id="com.example.helloworld" version="0.0.1" android-versionCode="7">
  ...
</widget>
{{</highlight>}}

### &lt;content&gt; 要素

属性 | 型 | デフォルト値 | 解説
----------|------|---------------|-------------------
`src` | 文字列 | `indext.html` | `<content>` 要素には、アプリ起動時のページを指定します ( 通常、Web アセットを置いた、最上位のディレクトリーにこのページは置かれます )。 `src` 属性の値に、他の URL を指定すれば、起動時のページを変更できます。

**例**

{{<highlight xml>}}
<widget id="com.example.helloworld" version="1.0.0">
  ...
  <content src="https://monaca.io/" />
</widget>
{{</highlight>}}

### &lt;access&gt; 要素

属性 | 型 | デフォルト値 | 解説
----------|------|---------------|-------------------
`origin` | 文字列 | `*` | `<access>` 要素を使用して、特定のネットワークドメインへのアクセスを宣言します。 `*` に設定された場合、アプリからすべてのドメインへのアクセスを許可します。

**例**

{{<highlight xml>}}
...
<access origin="*" />
...
{{</highlight>}}

### *&lt;preference&gt; 要素*

`<preference>` タグでは、name と value
の組み合わせ形式で、オプションを設定します。preference の name
では、大文字小文字は区別されません。preference
の多くは、各プラットフォーム毎に設定する必要があります。次の preference
に関しては、複数のプラットフォームに適用できます。

Preference 名 | 型 | デフォルト値 | 解説
----------|------|---------------|-------------------
`KeepRunning` | 真偽値 | `true` | バックグラウンドで、Cordova が動作し続けるか否かを指定します。
`DisallowOverscroll` | 真偽値 | `false` | コンテンツのスクロール中に、コンテンツの始点または終点を過ぎた場合でも、そのことをユーザーに通知しないときには、 `true` に設定します。
`Fullscreen` | 真偽値 | `false` | 画面上部のステータスバーを、非表示にできます。
`SplashScreenDelay` | 数値 | `3000` | スプラッシュ画像の表示時間を設定します ( ミリ秒単位 )。表示時間の長さは、アプリが起動するまでの最長待ち時間を意味します。
`LogLevel` | 文字列 | `ERROR` | ログの出力レベルを設定します。 `ERROR`、 `DEBUG`、 `WARN`、 `INFO`、 `VERBOSE` の 5 段階のレベルを選べます。
`AndroidPersistentFileLocation`* | 文字列 | `Internal` | ファイルの出力先を設定します。2 つの出力先を選択できます。<ul><li>`Internal` : アプリで使用している内部ストレージのディレクトリーを、ファイルの出力先として指定します。</li><li>`Compatibility` : 他の設定で指定されたストレージ ( または、端末側で指定するストレージ ) のルートを、ファイルの出力先として指定します。</li></ul>
`ScreenOrientation`** | 文字列 | `default` | 端末の画面のオリエンテーションを設定します。次の 3 つの値を設定できます。<ul><li>`default`: システム側のデフォルトのオリエンテーションを使用します。</li><li>`landscape`: landscape ( 横向き ) のオリエンテーションを使用します。</li><li>`portrait`: portrait ( 縦向き ) のオリエンテーションを使用します。</li></ul>

**例**

{{<highlight xml>}}
...
<preference name="KeepRunning" value="false" />
<preference name="DisallowOverscroll" value="true"/>
<preference name="Fullscreen" value="true" />
<preference name="SplashScreenDelay" value="10000" />
<preference name="loglevel" value="DEBUG" />
<preference name="AndroidPersistentFileLocation" value="Internal" />
<preference name="orientation" value="default"/>
...
{{</highlight>}}

<b>*</b>: このプラグインの旧バーション ( 3.0.0 より前 )
を実装したアプリの配布をすでに行っており、加えて、なんらかのファイルシステムにファイルを保存していた場合には、preference
を `Compatibility` に設定する必要があります ( データの保存先となるファイルシステムを、`config.xml` で指定していないときも同様 )。`Compatibility` から `Internal` に変更した場合、既存のユーザーは、以前使用していたファイルへアクセスできないことがあります
( 端末により、動作は異なります )。

<b>**</b>: There are two use ways to configure `ScreenOrientation` preference: 

1. 全プラットフォーム共通の設定方法
  
    {{<highlight xml>}}
<widget>
    ....
    <preference name="orientation" value="default"/>
    ....
</widget>{{</highlight>}}

2. プラットフォーム毎の設定方法
  
    {{<highlight xml>}}
<widget>
    ...
    <platform name="android">
       <preference name="orientation" value="default"/>
    </platform>
    ...
</widget>
    {{</highlight>}}

### ターゲットAPIレベルの指定

`<preference>` タグに `android-targetSdkVersion` を指定することで任意のターゲットAPIレベルを指定できます。
{{<highlight xml>}}
<platform name="android">
    ...
    <preference name="android-targetSdkVersion" value="26" />
    ...
</platform>
{{</highlight>}}