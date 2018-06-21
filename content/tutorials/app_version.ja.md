---
title: "Cordova AppVersion Plugin"
weight: 110
---

This Cordova/PhoneGap plugin reads the version of your app from the target build settings.

- Repo: https://github.com/whiteoctober/cordova-plugin-app-version
- Plugin ID/Package Name: `cordova-plugin-app-version`
- Tested Version: 0.1.9

## Demo 


{{<import pid="5b29c488e78885f330dba6cf" title="AppVersion Plugin Demo">}}

{{<figure src="/images/samples/app_version.png">}}

## Enable the Plugin in Monaca IDE

1.  From the IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.

2.  Click on {{<guilabel name="Import Cordova Plugin">}} button. Then, you can choose to import the plugin using a ZIP file or URL/Package Name. 

## API References

In this page, we only describe some main APIs used in our [Demo](https://monaca.mobi/directimport?pid=5b29c488e78885f330dba6cf). For a complete API references, please refer to [here](https://github.com/whiteoctober/cordova-plugin-app-version).

### getAppName()

Get the name of the app.

{{<highlight javascript>}}
cordova.getAppVersion.getAppName()
{{</highlight>}}

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
cordova.getAppVersion.getAppName(function (appName) {
    alert( appName );
});
{{</highlight>}}

### getPackageName()

Get the package name of the app.

{{<highlight javascript>}}
cordova.getAppVersion.getPackageName()
{{</highlight>}}

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
cordova.getAppVersion.getPackageName(function (packName) {
    alert( packageName );
});
{{</highlight>}}

### getVersionCode()

Get the build identifier of the app.

{{<highlight javascript>}}
cordova.getAppVersion.getVersionCode()
{{</highlight>}}

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
cordova.getAppVersion.getVersionCode(function (verCode) {
    alert( versionCode );
});
{{</highlight>}}

### alertVersionNum()

Get the version number of the app.

{{<highlight javascript>}}
cordova.getAppVersion.alertVersionNum()
{{</highlight>}}

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
cordova.getAppVersion.getVersionNumber(function (versionNum) {
    alert( versionNum );
});
{{</highlight>}}

