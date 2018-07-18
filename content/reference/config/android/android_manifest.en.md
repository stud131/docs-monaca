---
title: AndroidManifest.xml
weight: 30
---

###  AndroidManifest.xml

Basic behaviour of Android applications can be configured by editing
`AndroidManifest.xml` file. It is located under `android` folder inside
your monaca project as shown below:

{{<figure src="/images/reference/config/android/1.png">}}

{{<note>}}
  For Cordova 6.2 or higher, <code>AndroidManifest.xml</code> file is removed from Monaca framework. Therefore, in order to config Android application settings, use {{<link href="../../third_party_phonegap/custom_config" title="Cordova Custom Config Plugin">}}.
{{</note>}}

#### AndroidManifest.xml (Main elements)

{{<highlight xml>}}
<?xml version="1.0" encoding="utf-8"?>
<manifest>

  <uses-permission />
  <uses-sdk />
  <uses-feature />
  <supports-screens />

  <application>
    <activity>
        <intent-filter>
            <action />
            <category />
        </intent-filter>
    </activity>
  </application>

</manifest>
{{</highlight>}}

#### &lt;manifest&gt;

Is the root element of `AndroidManifest.xml` file. The child element of
`<manifest>` is `<application>` and it must contain `xlmns:android` and
`package` attributes.

Attribute | Type | Description
----------|------|----------------
`xmlns:android`	| String | An Android namespace attribute. This attribute must always have this value: `http://schemas.android.com/apk/res/android`.
`android:versionCode` |	String | An internal version number. It is used only to determine whether one version is more recent than others. Higher number indicates a more recent version. This version number is not shown to users.
`android:versionName` | String | A version number which is visible to users.
`package` | String | Package name

**Example**

{{<highlight xml>}}
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    android:versionCode="%%%VERSION_CODE%%%"
    android:versionName="%%%VERSION_NAME%%%" package="%%%PACKAGE_NAME%%%">
</manifest>
{{</highlight>}}

#### &lt;uses-sdk&gt;

Is API level settings of the application. This element is contained in `<manifest>`.

Attribute | Type | Description
----------|------|----------------
`android:minSdkVersion` | Number | Minimum API level required for the application to run. Android uses this value to determine whether the application can be installed in a device.
`android:targetSdkVersion` | Number | API level that the application targets.

**Example**

{{<highlight xml>}}
<uses-sdk android:minSdkVersion="14" android:targetSdkVersion="22" />
{{</highlight>}}

#### &lt;uses-permission&gt;

Is permission settings. The permission is granted When the application
is installed. This element is contained in `<manifest>`.

Attribute | Type | Description
----------|------|----------------
`android:name` | String | Name of the permissions to be granted for the Android system. The name of the permission can be defined as Camera, Network and etc.

**How to Define &lt;uses-permission&gt;**

`<components/loader.js>` needs `ACCESS_NETWORK_STATE` permission to run.
You may exclude this file from `<uses-permission>` if it's not necessary
for your application.

{{<highlight xml>}}
<uses-permission android:name="%%%PERMISSION_NAME%%%"></uses-permission>
{{</highlight>}}

Permission | PERMISSION_NAME | Description
-----------|-----------------|------------------
Access Coarse Location | `android.permission.ACCESS_COARSE_LOCATION` | Allows an app to access current location of a device.
Access Fine Location | `android.permission.ACCESS_FINE_LOCATION` | Allows an app to use location-based services of a device.
Access Network State | `android.permission.ACCESS_NETWORK_STATE` | Allows an app to access the Network state.
Access Location Extra Commands | `android.permission.ACCESS_LOCATION_EXTRA_COMMANDS` | Allows an app to access extra location provider commands.
Bluetooth | `android.permission.BLUETOOTH` | Allows an app to connect to paired bluetooth devices.
Bluetooth (Admin)| `android.permission.BLUETOOTH_ADMIN` | Allows an app to discover and pair bluetooth devices.
Camera | `android.permission.CAMERA` | Allows an app to use the Camera.
Flashlight | `android.permission.FLASHLIGHT` | Allows access to the flashlight.
Internet | `android.permission.INTERNET` | Allows an app to use Internet connection.
Modify Audio Setting | `android.permission.MODIFY_AUDIO_SETTINGS` | Allows an app to change global audio settings.	
Read Phone State | `android.permission.READ_PHONE_STATE` | Allows read-only access to the phone state.	
Receive SMS | `android.permission.RECEIVE_SMS` | Allows an app to intercept SMS messages.
Record Audio | `android.permission.RECORD_AUDIO` | Allows an app to record audio.
Read Contacts	| `android.permission.READ_CONTACTS` | Allows an app to read the contacts.
Vibrate | `android.permission.VIBRATE` | Allows an app to use the Vibrator.	
Write Contacts | `android.permission.WRITE_CONTACTS` | Allows an app the write access to the contacts.
Write External Storage | `android.permission.WRITE_EXTERNAL_STORAGE` | Allows an app the write access to External Storage.

**Example**

Permissions for Camera

{{<highlight xml>}}
<uses-permission android:name="android.permission.CAMERA"></uses-permission>
{{</highlight>}}

#### &lt;uses-feature&gt;

Declares hardware or software features used by the application. For
instance. If the application requires Camera feature, the user whose
device has no camera cannot install the application. This element is
contained in `<manifest>`.

Attribute | Type | Description
----------|------|----------------
`android:name` | String | Feature name
`android:required` | Boolean | Specifies whether the application requires the feature set in `android:name`. If you set the value to `true`, you are indicating that the application cannot function without the feature. If you set it to `false`, it means that the application prefers to use the feature, but can still function without the feature.

**Example**

The code below specifies that the application needs Camera feature.

{{<highlight xml>}}
<uses-feature android:name="android.hardware.camera" android:required="true" />
{{</highlight>}}

#### &lt;application&gt;

Is an Application tag. This element is contained in `<manifest>`.

{{<highlight xml>}}
<application android:icon="@drawable/icon"
             android:label="%%%APPLICATION_NAME%%%"
             android:name="mobi.monaca.framework.MonacaApplication">
</application>
{{</highlight>}}

Attribute | Type | Description
----------|------|----------------
`android:name` | String | Defines a name of the application. It is a fully qualified name of the class that you extend from Application class.
`android:icon` | String | An icon for the entire application as well as a default icon for each of the application's components
`android:label`| String | A label for the entire application
`android:theme` | String | An Application level theme
`android:screenOrientation` | String | Application level Orientation settings

#### &lt;intent-filter&gt;

Defines the process of intent filter. This element is contained in
`<activity>`. The child `<action>` element must be defined.

{{<highlight xml>}}
<intent-filter>
    <action android:name="android.intent.action.MAIN" />
    <category android:name="android.intent.category.LAUNCHER" />
</intent-filter>
{{</highlight>}}

#### &lt;action&gt;

Specifies an action for an intent filter. The element is contained in
`<intent-filter>`.

Attribute | Type | Description
----------|------|----------------
`android:name` | String | Action name

#### &lt;category&gt;

Specifies the category of the intent filter. The element is contained in
`<intent-filter>`.

Attribute | Type | Description
----------|------|----------------
`android:name` | String | Category name
