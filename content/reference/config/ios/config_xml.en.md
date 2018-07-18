---
title: config.xml
weight: 20
---


The `config.xml` file is a settings file controlling various settings of Cordova.

{{<figure src="/images/reference/config/android/2.png">}}

Below are available elements and preferences you may need to configure:

#### &lt;widget&gt; element

Attribute | Type | Default Value | Description
----------|------|---------------|-------------------
`version` | String | `1.0.0` | A version number which is visible to users

**Example**

{{<highlight xml>}}
<widget id="com.example.helloworld" version="0.0.1">
  ...
</widget>
{{</highlight>}}

#### &lt;content&gt; element 

Attribute | Type | Default Value | Description
----------|------|---------------|-------------------
`src` | String | `indext.html` | The `<content>` element defines the app's starting page in the top-level web assets directory. You can change the starting page by changing the value of the `src` attribute to your preferred URL. |

**Example**

{{<highlight xml>}}
<?xml version="1.0" encoding="UTF-8"?>
<widget xmlns="http://www.w3.org/ns/widgets" id="com.example.helloworld" version="1.0.0">
  ...
  <content src="https://monaca.io/" />
</widget>
{{</highlight>}}

#### &lt;access&gt; element

Attribute | Type | Default Value | Description
----------|------|---------------|-------------------
`origin` | String | `*` | Controls access to specific network domains. If set to `*`, you can access all domains from your app. 

**Example**

{{<highlight xml>}}
...
<access origin="*" />
...
{{</highlight>}}

#### &lt;preference&gt; element 

The `<preference>` tag sets various options as pairs of name/value
attributes. Each preference's name is case-insensitive. Many preferences
are unique to specific platforms, as listed at the top of this page. The
following sections detail preferences that apply to more than one
platform.

Preference Name | Type | Default Value | Description
----------|------|---------------|-------------------
`DisallowOverScroll` | Boolean | `false` | Set to `true` if you want to disable the rubber-band scrolling for WebView.
`EnableViewportScale` | Boolean | `false` | Set to `true` to prevent viewport scaling through a `<meta>` tag.
`AutoHideSplashScreen` | Boolean | `true` | Set to `false` to control the splashscreen when it’s hidden through a JavaScript API.
`BackupWebStorage` | String | `cloud` | There are 3 valid values: <ul><li>`none`: disables any backups of web storage.</li><li>`cloud`: allows the web storage data to be backed up to iCloud.<li>`local`: allows only local backups (iTunes sync).</li></ul>
`UIWebViewDecelerationSpeed` | String | `normal` | Controls the deceleration speed of momentum scrolling. There are 2 valid values: <ul><li>`normal`: is the default speed for most native apps</li><li>`fast`: is the default speed for Mobile Safari.</li></ul>
`Orientation`* | String | `default` | (Cordova 5.2 or Higher) There are 4 valid values: <ul><li>`all`: to specify both portrait & landscape mode you would use the platform specific value all</li><li>`default`: screen orientation will be applied according to system default.</li><li>`landscape`: set screen orientation to landscape mode.</li><li>`portrait`: set screen orientation to portrait mode.</li></ul>

**Example**

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

1. Global Settings: 
  
    {{<highlight xml>}}
<widget>
  ....
  <preference name="orientation" value="default"/>
  ....
</widget>{{</highlight>}}

    {{<note>}}
      It is also possible to apply the setting for all devices at once; however, you can only use <code>default</code>, <code>landscape</code> and <code>portrait</code> value. <code>all</code> is not possible for Global Settings.
    {{</note>}}

2. Platform Specific Settings:
  
    {{<highlight xml>}}
<widget>
  ...
  <platform name="ios">
    <preference name="orientation" value="default"/>
  </platform>
  ...
</widget>{{</highlight>}}

{{<note>}}
  For Android/Windows, <code>default</code> means all directions, but in iOS only portrait will be applied.
{{</note>}}