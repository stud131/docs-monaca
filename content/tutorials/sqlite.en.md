---
title: "Sqlite Storage Plugin"
weight: 10
---

Native interface to sqlite in a Cordova/PhoneGap plugin for Android, iOS, macOS, and Windows 10 (UWP), with API similar to HTML5/[Web SQL (DRAFT) API](http://www.w3.org/TR/webdatabase/).

{{<note>}}
  This plugin cannot be used for Basic users. For evaluation purpose, please try the 14-days trial of any paid subscription. Please refer to {{<link href="https://monaca.mobi/en/pricing" title="Monaca Subscription Plans">}} for more details.
{{</note>}}

## Supported Platforms

-   Cordova 4.1 or later
-   iOS
-   Android

## Encryption Scheme

- Encryption Method: `AES`
- Key Length: `256` bits

# Adding the Plugin in Monaca Cloud IDE

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.

2.  Click {{<guilabel name="Enable">}} button of the `SecureStorage` to add it into
    your project.

    {{<img src="/images/reference/power_plugins/secure_storage/1.png">}}

# Methods

Method | Description
-------|-----------------
Set Data | Save data into the storage by specifying the `key` and `value`. The boolean callback will notify whether the data is successfully saved (`True`) or failed to save (`false`).{{<highlight javascript>}}
plugins.secureStorage.setItem   (key, value, function(result) {
// result: true=success, false=error
});{{</highlight>}}
Get Data | Retrieve data associated with the specified key. The callback will return the intended data if the key is found; otherwise, a null value will be return.{{<highlight javascript>}}
plugins.secureStorage.getItem(key, function(value) {
// value: null = no such a value
});{{</highlight>}}
Delete Data | Delete the data associated with a specified key. The boolean callback will notify whether the data deletion is successful (`True`) or failed (`false`).{{<highlight javascript>}}
plugins.secureStorage.removeItem(key, function(result) {
// result: true=success, false=error
});{{</highlight>}}
Delete All Data | Delete all data in the storage. The boolean callback will notify whether the data deletion is successful (`True`) or failed (`false`).{{<highlight javascript>}}
plugins.secureStorage.clear(function(result) {
// result: true=success, false=error
});{{</highlight>}}

# App Store Submission

In this plugin, we use the encryption library of iOS SDK. Therefore, in
order to release the built app embedded this plugin to the App Store,
you need to set 2 options when you submit your app for a review. Under
the Export Compliance section, please choose "Yes" for both questions as
shown in the screenshot below:

{{<figure src="/images/reference/power_plugins/secure_storage/2.png">}}
