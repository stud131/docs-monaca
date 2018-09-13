---
title: config.xml
weight: 20
---


`config.xml` 設定ファイルを使用して、Cordova
のさまざまな設定を管理します。

{{<figure src="/images/reference/config/android/2.png">}}

設定可能な要素と preference を次に記します。必要に応じて設定します。

#### &lt;widget&gt; 要素

属性 | 型  | デフォルト値 | 解説
----|-----|------------|-------------------
`version` | 文字列 | `1.0.0` | A version number which is visible to users

**例**

{{<highlight xml>}}
<widget id="com.example.helloworld" version="0.0.1">
  ...
</widget>
{{</highlight>}}

#### \<content\> 要素

属性 | 型  | デフォルト値 | 解説
----|-----|------------|-------------------
`src` | 文字列 | `indext.html` | `<content>` 要素では、アプリ起動時のページを指定します ( 通常、Web アセットを置いた、最上位のディレクトリーにこのページは置かれます )。 `src` 属性の値に、他の URL を指定すれば、起動時のページを変更できます。

**例**

{{<highlight xml>}}
<?xml version="1.0" encoding="UTF-8"?>
<widget xmlns="http://www.w3.org/ns/widgets" id="com.example.helloworld" version="1.0.0">
  ...
  <content src="https://monaca.io/" />
</widget>
{{</highlight>}}

#### &lt;access&gt; 要素

属性 | 型  | デフォルト値 | 解説
----|-----|------------|-------------------
`origin` | 文字列 | `*` | アクセスできるネットワークドメインを指定します。 `*` に指定した場合、どのドメインにも、アプリからアクセスできます。your app. 

**例**

{{<highlight xml>}}
...
<access origin="*" />
...
{{</highlight>}}

#### &lt;preference&gt; 要素

The `<preference>` tag sets various options as pairs of name/value
attributes. Each preference's name is case-insensitive. Many preferences
are unique to specific platforms, as listed at the top of this page. The
following sections detail preferences that apply to more than one
platform.

Preference Name | 型  | デフォルト値 | 解説
----------|------|---------------|-------------------
`DisallowOverScroll` | 真偽値 | `false` | `true` に指定した場合、ラバーバンド スクロール ( rubber-band scrolling ) が無効になります。
`EnableViewportScale` | 真偽値 | `false` | `true` に指定した場合、ビューポートのスケール方法を指定した `meta` タグを無視します。
`AutoHideSplashScreen` | 真偽値 | `true` | `false` に指定した場合、JavaScript API を使用して、スプラッシュ画像の制御を行えます。
`BackupWebStorage` | 文字列 | `cloud` | 次のいずれかの値を設定できます。 <ul><li>`none`: バックアップを無効にします。</li><li>`cloud`: iCloud へのバックアップを許可します。<li>`local`: ローカルへのバックアップ ( iTunes Sync 経由 ) を許可します。</li></ul>
`UIWebViewDecelerationSpeed` | 文字列 | `normal` | 慣性スクロールの減速度を指定します。2 つのオプションがあります。 <ul><li>`normal`: デフォルトでは、こちらを選択します。</li><li>`fast`: Mobile Safari の場合、こちらを選択します。</li></ul>
`Orientation`* | 文字列 | `default` | 画面のオリエンテーションを設定します。次の `4` つの値を設定できます。 <ul><li>`all`: この設定では、portrait と landscape の両方を使用できます ( プラットフォーム毎の設定時に使用 )。</li><li>`default`: システム側のデフォルトのオリエンテーションを使用します。</li><li>`landscape`: landscape ( 横向き ) のオリエンテーションを使用します。</li><li>`portrait`: portrait ( 縦向き ) のオリエンテーションを使用します。</li></ul>

**例**

{{<highlight xml>}}
...
<preference name="DisallowOverscroll" value="false" />
<preference name="EnableViewportScale" value="false" />
<preference name="AutoHideSplashScreen" value="true" />
<preference name="BackupWebStorage" value="cloud" />
<preference name="UIWebViewDecelerationSpeed" value="normal" />
<preference name="Orientation" value="portrait" />
...
{{</highlight>}}

<b>*</b>: There are two use ways to configure `Orientation` preference: 

1. 全プラットフォーム共通の設定方法
  
    {{<highlight xml>}}
<widget>
  ....
  <preference name="orientation" value="default"/>
  ....
</widget>{{</highlight>}}

    {{<note>}}
      全端末に適用される、グローバルな設定 ( Global Preference ) も使用できますが、設定できる値は、<code>default</code>、 <code>landscape</code>、 <code>portrait</code> のみです。<code>all</code> は、グローバルな設定には使用できません。
    {{</note>}}

2. プラットフォーム毎の設定方法
  
    {{<highlight xml>}}
<widget>
  ...
  <platform name="ios">
    <preference name="orientation" value="default"/>
  </platform>
  ...
</widget>{{</highlight>}}

{{<note>}}
  <code>default</code> を設定した場合、Android と Windows ではすべてのオリエンテーションが使用でき、iOS では <code>portrait</code> のみ適用されます。
{{</note>}}