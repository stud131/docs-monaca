---
title: MonacaApp-Info.plist
weight: 60
---

You can configure your iOS app in MonacaApp-Info.plist file. For
information on `plist` file, please refer to [Information Property List Files (Apple)](http://developer.apple.com/library/ios/documentation/general/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html).
This file is located under `ios` folder inside your monaca project as shown below:

{{<figure src="/images/reference/config/ios/1.png">}}

{{<note>}}
  For Cordova 6.2 or higher, <code>MonacaApp-Info.plist</code> file is removed from Monaca framework. Therefore, in order to config iOS application settings, use {{<link href="/en/reference/third_party_phonegap/custom_config" title="Cordova Custom Config Plugin">}}.
{{</note>}}

{{<highlight xml>}}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">

<plist>
  <dict>
    <key>key</key>
    <value-type>value</value-type>
      ...
    <key>key</key>
    <array>
      <value-type>value</value-type>
      <value-type>value</value-type>
    </array>
    ...
  </dict>
</plist>
{{</highlight>}}

Inside `MonacaApp-Info.plist` file, there are 3 main types of elements:

- `<key>`: Defines value (plistObject) and a combination of application configuration information.
- `<array>`: You can have the array of values (plistObject).
- `<dict>`: Key and combination of value (plistObject) are defined here.

For example:

{{<highlight xml>}}
<plist>
  <dict>
    ...
    <key>XXX</key>
      <string>The value(plistObject) corresponding to key(XXX)</sting>
      ...
    <key>YYY</key>
      <array>
        <string>The 1st value(plistObject) corresponding to key(YYY)</string>
        <string>The 2nd value(plistObject) corresponding to key(YYY)</string>
        <string>The 3rd value(plistObject) corresponding to key(YYY)</string>
        <string>The 4th value(plistObject) corresponding to key(YYY)</string>
      </array>
    ...
  </dict>
</plist>
{{</highlight>}}

#### Type List of Values (plistObject)

Types | Description
------|---------------
string  |  String data type representing text.
date   |   Date data type representing date and time.
Integer |  Integer number
real   |   Floating data type representing a decimal number.
data   |   Data type
true   |  true boolean
false  |   false boolean



#### List of Keys

Key |	Type	| Description
----|-------------------|--------------------
CFBundleDevelopmentRegion	| string | Defines a native language of the developer. If the language of the user cannot be found, this value will be used as default.
CFBundleDisplayName | string | Define a name of the application. It is a fully qualified name of the class that you extend from Application class.
CFBundleExecutable | string | Defines the application executable file.
CFBundleIconFile | string | Defines application icon file name.
CFBundleIconFiles |	\<array\>string | Defines icon file names used for iOS `3.2` or later. The correct file will be chosen depending on the size of the device screen resolution.
CFBundleIdentifier | string | Specifies a unique identifier for your application. The identifier must be a Uniform Type Identifier (UTI) as `com.monaca.MyApp`.
CFBundleInfoDictionaryVersion | string | Is the current version number of `MonacaApp-Info.plist` file.
CFBundleName | string | Is a short display name of the app. It is limited to `16` characters at most.
CFBundlePackageType	| string | Is a 4-digit code used to describe application type. Set this value to `APPL` for application project.
CFBundleShortVersionString | string | Specifies the version number of your application.
CFBundleSignature | string | Is a 4-digit code used to identify the app developer.
CFBundleVersion | string | Is a build version number of the application.
LSRequiresIPhoneOS | true | Indicates whether the application can only be run on iPhone or not.
UISupportedInterfaceOrientations | \<array\>string | Specifies screen orientations for iPhone that are supported by the application. For iPad, use `UISupportedInterfaceOrientations~ipad`.
BackupWebStorage | string | Set to cloud to allow the web storage data to be backed up to iCloud, Set to none to not allow any backups of web storage. default is cloud

Here are some keys and values you may need to configure in your iOS apps:

#### UISupportedInterfaceOrientations

Is used to set the screen orientation of your app:

- Settings for iPhone

    {{<highlight xml>}}
...
  <key>UISupportedInterfaceOrientations</key>
    <array>
      <string>UIInterfaceOrientationLandscapeLeft</string>
      <string>UIInterfaceOrientationLandscapeRight</string>
      <string>UIInterfaceOrientationPortraitUpsideDown</string>
      <string>UIInterfaceOrientationPortrait</string>
    </array>
...{{</highlight>}}

- Settings for iPad

    {{<highlight xml>}}
...
  <key>UISupportedInterfaceOrientations~ipad</key>
    <array>
      <string>UIInterfaceOrientationLandscapeLeft</string>
      <string>UIInterfaceOrientationLandscapeRight</string>
      <string>UIInterfaceOrientationPortraitUpsideDown</string>
      <string>UIInterfaceOrientationPortrait</string>
    </array>
...{{</highlight>}}

#### List of Orientation Values

Value | Description
------|---------------------------
UIInterfaceOrientationLandscapeLeft      |  Landscape orientation aligned to the left side of the Home button.
UIInterfaceOrientationLandscapeRight     |  Landscape orientation aligned to the right side of the Home button.
UIInterfaceOrientationPortraitUpsideDown |  Portrait orientation
UIInterfaceOrientationPortrait           |  Portrait orientation in opposite direction from the normal portrait orientation.

You can download a sample screen orientation file below:

{{<download href="/download/UISupportedInterfaceOrientations.zip" title="Screen Orientation File">}}

#### Statusbar Setting

Value | Type | Default | Description
------|------|---------|--------------------
UIStatusBarHidden | Boolean | `false` | If set to `true`, the status bar at the top of the application will be hidden. If *UIStatusBarHidden* set to `true` and *UIViewControllerBasedStatusBarAppearance* set to `false`, the status bar at the top of the app will be hidden.
UIViewControllerBasedStatusBarAppearance | Boolean | `false` | If set to `true`, the status bar at the top of the application will be hidden. Set to `true` in order to use [StatusBar Plugin](/en/reference/cordova_6.5/statusbar/). 

