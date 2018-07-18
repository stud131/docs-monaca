---
title: config.xml
weight: 20
---

The `config.xml` file is a settings file controlling various settings of
Cordova.

{{<figure src="/images/reference/config/android/2.png">}}

Below are available elements and preferences you may need to configure:

#### &lt;widget&gt; element

Attribute | Type | Default Value | Description
----------|------|---------------|-------------------
`version` | String | `1.0.0` | A version number which is visible to users
`android-versionCode` | String | (Automatically set) When `version` attribute is `"1.22.33"`, it will be 102233 (=1 \* 10000 + 22 \* 100 + 33). If the project uses Crosswalk, it will be `2xxxxxx` for ARM architecture and `7xxxxxx` for x86 architecture. | An internal version code. It is used only to determine whether one version is more recent than others. Higher number indicates a more recent version. This version number is not shown to users. |

**Example**

{{<highlight xml>}}
<widget id="com.example.helloworld" version="0.0.1" android-versionCode="7">
  ...
</widget>
{{</highlight>}}

#### &lt;content&gt; element

Attribute | Type | Default Value | Description
----------|------|---------------|-------------------
`src` | String | `indext.html` | The `<content>` element defines the app's starting page in the top-level web assets directory. You can change the starting page by changing the value of the `src` attribute to your preferred URL. 

**Example**

{{<highlight xml>}}
<widget id="com.example.helloworld" version="1.0.0">
  ...
  <content src="https://monaca.io/" />
</widget>
{{</highlight>}}

#### &lt;access&gt; element

Attribute | Type | Default Value | Description
----------|------|---------------|-------------------
`origin` | String | `*` | It is used to declare access to specific network domains. If set to `*`, you can access all domains from your app. 

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
`KeepRunning` | Boolean | `true` | Determines whether Cordova will keep running in the background or not. 
`DisallowOverscroll` | Boolean | `false` | Sets to true if you don’t want the interface to display any feedback when users scroll past the beginning or end of content. 
`Fullscreen` | Boolean | `false` | Allows you to hide the status bar at the top of the screen. 
`SplashScreenDelay` | Number | `3000` | Sets the default delay of how long the splashscreen appears in milliseconds. This should be the worst-case expected start time. 
`LogLevel` | String | `ERROR` | Sets the minimum log level through which log messages from your application will be filtered. There are 5 valid values such as: `ERROR`, `DEBUG`, `WARN`, `INFO` and `VERBOSE`.
`AndroidPersistentFileLocation`* | String | `Internal` | Sets where to store Android persistent files. There are 2 valid values. <ul><li>`Internal`: will put persistent files under the user’s application internal storage directory. </li><li>`Compatibility`: will put persistent files under storage root.</li></ul>
`ScreenOrientation`** | String | `default` | (Cordova 5.2 or Higher) Sets screen orientation for devices. There are 3 valid values. <ul><li>`default`: uses system default screen orientation.</li><li>`landscape`: sets screen orientation to landscape mode. </li><li>`portrait` sets screen orientation to portrait mode.</li></ul>

**Example**

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


<b>*</b>: If your application has previously been shipped to users, using an older (pre- 3.0.0) version of this plugin, and has stored files in the persistent filesystem, then you should set the preference to Compatibility if your <code>config.xml</code> does not specify a location for the persistent filesystem. Switching the value of `AndroidPersistentFileLocation` to <code>Internal</code> would mean that existing users who upgrade their application may be unable to access their previously-stored files, depending on their device.

<b>**</b>: There are two use ways to configure `ScreenOrientation` preference: 

1. Global Settings:
  
    {{<highlight xml>}}
<widget>
    ....
    <preference name="orientation" value="default"/>
    ....
</widget>{{</highlight>}}

2. Platform Specific Settings:
  
    {{<highlight xml>}}
<widget>
    ...
    <platform name="android">
    <preference name="orientation" value="default"/>
    </platform>
    ...
</widget>{{</highlight>}}

