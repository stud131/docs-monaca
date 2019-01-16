---
title: AppsFlyer
weight: 20
---

[AppsFlyer](https://www.appsflyer.com/overview/) is the market leader in
mobile advertising attribution and analytics, helping marketers to
pinpoint their targeting, optimize their ad spend and boost their ROI
(Return on Investment).

AppsFlyer allows users to monitor and track application installations,
downloads, and conversions. The AppsFlyer API allows developers to
access and integrate the functionality of AppsFlyer with other
applications.

## Prerequisite

In order to enable AppsFlyer to start tracking your app, you are
required to have the following two information such as:

1.  `devKey`: Your application devKey provided by AppsFlyer.
2.  `appId`: (For iOS only) Your iOS app ID in the App Store.

## Adding AppsFlyer to Monaca Project

1.  For Monaca Cloud IDE, go to {{<menu menu1="Configure" menu2="Service Integration Settings">}}.

2.  Click on {{<guilabel name="Details">}} button of *AppsFlyer* service.

3.  Then, click {{<guilabel name="Install">}} button to add it into your project.

    {{<img src="/images/reference/service_integration/apps_flyer/1.png" width="500">}}

4.  You will be asked to confirm the setup. Click {{<guilabel name="OK">}} to start the
    installation.

## Configuration

Add the following lines to your code to initialize the tracking with
your own AppsFlyer `devKey` and `appId`:

{{<highlight javascript>}}
document.addEventListener("deviceready", function(){

    var options = {
        devKey:  'xxXXXXXxXxXXXXxXXxxxx8'  // your AppsFlyer devKey
    };

    var userAgent = window.navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test(userAgent)) {
        options.appId = "123456789";       // your ios app id in app store
    }

    window.plugins.appsFlyer.initSdk(options);

}, false);
{{</highlight>}}

## Usage

### SDK Initialization

Initialize the SDK.

{{<highlight javascript>}}
initSdk(options, onSuccess, onError): void
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`options` | Object | SDK configuration (please refer to the *options object* table below)
`onSuccess` | (`message`: string) => void |	(optional) Success callback: called after a successfull SDK initialization. 
`onError` | (`message`: string) => void | (optional) Error callback: called when error occurs during initialization. 

**options object**

Name | Type | Default | Description
-----|------|---------|------------------
`devKey` | String | | [Appsflyer Dev key](https://support.appsflyer.com/hc/en-us/articles/211719806-App-Settings#sdk-dev-key)
`appId` | String | | (For iOS only) Your iOS app ID in the App Store
`isDebug` | Boolean | `false` | (optional) Debug mode 
`onInstallConversionDataListener` | Boolean | `false` | Accessing AppsFlyer Attribution/Conversion Data from the SDK (Deferred Deeplinking). AppsFlyer plugin will return attribution data in onSuccess callback. For more information, please refer to: <ul><li>[Deferred Deep Linking - Getting the Conversion Data](https://support.appsflyer.com/hc/en-us/articles/207032096-Deferred-Deep-Linking-Getting-the-Conversion-Data)</li></ul>

**Example**

The following snippet shows how to use `initSdk()` function:

{{<highlight javascript>}}
var onSuccess = function(result) {
    //handle result
};

function onError(err) {
    // handle error
}

var options = {
    devKey:  'd3Ac9qPardVYZxfWmCspwL',
    appId: '123456789',
    isDebug: false,
    onInstallConversionDataListener: true
};

window.plugins.appsFlyer.initSdk(options, onSuccess, onError);
{{</highlight>}}

### In-App Events Tracking API 

Allow you to send in-app events to AppsFlyer analytics. This method
allows you to add events dynamically by adding them directly to the
application code. These in-app events help you track how loyal users
discover your app, and attribute them to specific
campaigns/media-sources. Please take the time to define the event(s) you
want to measure to allow you to track ROI (Return on Investment) and LTV
(Lifetime Value).

{{<highlight javascript>}}
trackEvent(eventName, eventValues): void (optional)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`eventName` | String | Custom event name, is presented in your dashboard.
`eventValue` | Object | Event details

**Example**

The following snippet shows how to use `trackEvent()` function:

{{<highlight javascript>}}
var eventName = "af_add_to_cart";

var eventValues = {
    "af_content_id": "id123",
    "af_currency":"USD",
    "af_revenue": "2"
};

window.plugins.appsFlyer.trackEvent(eventName, eventValues);
{{</highlight>}}

### Currency Code Setting

Change the currency code.

{{<highlight javascript>}}
setCurrencyCode(currencyId): void
{{</highlight>}}

**Parameter**

Name | Type | Default | Description
-----|------|---------|-----------------
`currencyId` | String | `USD` | [ISO 4217 Currency Codes](http://www.xe.com/iso4217.php)

**Example**

The following snippet shows how to use `setCurrencyCode()` function:

{{<highlight javascript>}}
window.plugins.appsFlyer.setCurrencyCode("USD");
window.plugins.appsFlyer.setCurrencyCode("GBP"); // British Pound
{{</highlight>}}

### Customer User ID Setting (Advanced)

Set your own custom ID. This enables you to cross-reference your own
unique ID with AppsFlyer’s user ID and the other devices’ IDs. This ID
is available in AppsFlyer CSV reports along with postbacks APIs for
cross-referencing with you internal IDs.

{{<note>}}
The ID must be set during the first launch of the app at the SDK
initialization. The best practice is to call this API during the
deviceready event, where possible.
{{</note>}}

{{<highlight javascript>}}
setAppUserId(customerUserId): void
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`customerUserId` | String | Your custom ID

**Example**

The following snippet shows how to use `setAppUserId()` function:

{{<highlight javascript>}}
window.plugins.appsFlyer.setAppUserId(userId);
{{</highlight>}}

### GCM Project Number Setting

Set a GCM Project Number in order to enable app uninstall tracking for Android platform.

{{<highlight javascript>}}
setGCMProjectID(GCMProjectNumber): void
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`GCMProjectNumber` | String | GCM Project number. It is obtained through your google developer console. For more information, please refer to [Android Uninstall Measurement](https://support.appsflyer.com/hc/en-us/articles/210289286-Uninstall-Measurement#AndroidUninstall).

### Uninstall Tracking 

Set your iOS device token in order to enable app uninstall tracking for
iOS platform.

{{<highlight javascript>}}
registerUninstall(token): void
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`token` | String | Your iOS device token. You can get your device token from `UnityEngine.iOS.NotificationServices.deviceToken`. For more information, please refer to [Unity](https://support.appsflyer.com/hc/en-us/articles/213766183-Unity) and [iOS Uninstall Measurement](https://support.appsflyer.com/hc/en-us/articles/210289286#iOSUninstall).

### Getting AppsFlyer's Device ID

Get AppsFlyer’s proprietary Device ID. The AppsFlyer Device ID is the
main ID used by AppsFlyer in Reports and APIs.

{{<highlight javascript>}}
getAppsFlyerUID(getUserIdCallbackFn): void
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`getUserIdCallbackFn` | () =&gt; void | Success callback

**Example**

The following snippet shows how to use `getAppsFlyerUID()` function:

{{<highlight javascript>}}
var getUserIdCallbackFn = function(id) {
    alert('received id is: ' + id);
}
window.plugins.appsFlyer.getAppsFlyerUID(getUserIdCallbackFn);
{{</highlight>}}

### Deeplinks Tracking

Track deeplinks with AppsFlyer attribution data (for iOS only).

{{<note>}}
For Android version 4.2.5 and higher, the deeplinking metadata
(scheme/host) is sent automatically.
{{</note>}}

{{<highlight javascript>}}
handleOpenUrl(url): void
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`url` | String | Url

**Example**

The following snippet shows how to use `handleOpenUrl()` function:

{{<highlight javascript>}}
var handleOpenURL = function(url) {
    window.plugins.appsFlyer.handleOpenUrl(url);
}
{{</highlight>}}

