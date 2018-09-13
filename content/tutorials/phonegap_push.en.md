---
title: "Phonegap Push Plugin"
weight: 140
---

This Cordova plugin is used to register and receive push notifications.

- Repo: https://github.com/phonegap/phonegap-plugin-push
- Plugin ID/Package Name: `phonegap-plugin-push`
- Tested Version: `2.1.3`

## Demo 

{{<import pid="5b2b3b4ce788850e4fdba6d4" title="Phonegap Push Demo">}}

{{<figure src="/images/samples/phonegap_push.png">}}

{{%excerpt-include filename="tutorials/firebase.en.md" /%}}

## Adding the Plugin in Monaca IDE

1.  From the IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.

2.  Click on {{<guilabel name="Import Cordova Plugin">}} button. Then, you can choose to import the plugin using a ZIP file or URL/Package Name. 

## Usage

After importing the plugin into the project, you can start initialize the push notification. Please make sure to call the plugin API after the Cordova is loaded. For example:

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);        
function onDeviceReady() {

    // Notification initialization
    push = PushNotification.init({
        ios: {
            badge: true
        }
    });
    
    // Checking notification permission
    $interval(checkNotifPermiss, 500);
    // Updating App Icon Badge Number
    $interval(updateAIBN, 500);  

    // When receiving a push notification
    push.on('notification', data => {
        receiveNotifCB(data);
    });
}
{{</highlight>}}

## API References

In this page, we only describe some main APIs used in our [Demo](https://monaca.mobi/directimport?pid=5b2b3b4ce788850e4fdba6d4). For a complete API references, please refer to [here](https://github.com/phonegap/phonegap-plugin-push).

### init()

Initialize push notifications.

{{<highlight javascript>}}
PushNotification.init(options)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`options` | Object | An object describing relevant specific options for all target platforms.

- iOS

{{<note>}}
    All iOS <code>Boolean</code> options can also be specified as <code>String</code>.
{{</note>}}

Attribute | Type | Default | Description
----------|------|---------|------------------
`ios.voip`| Boolean| `false` | [optional] If set to `true`, the device will be set up to receive VoIP Push notifications and the other options will be ignored since VoIP notifications are silent notifications that should be handled in the `notification` event.
`ios.alert` | Boolean | `false` | [optional] If set to `true`, the device shows an alert on receipt of notification.*
`ios.badge` | Boolean | `false` | [optional] If set to `true`, the device sets the badge number on receipt of notification.*
`ios.sound` | Boolean | `false` | [optional] If set to `true`, the device plays a sound on receipt of notification.*
`ios.clearBadge` | Boolean | `false` | [optional] If set to `true`, the badge will be cleared on app startup.
`ios.categories` | Object| `{}` | [optional] The data required in order to enabled Action Buttons for iOS. See [Action Buttons on iOS](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/PAYLOAD.md#action-buttons-1) for more details.

`*`: Please note that the value you set this option to the first time you call the init method will be how the application always acts. Once this is set programmatically in the init method it can only be changed manually by the user in {{<menu menu1="Settings" menu2="Notifications" menu3="App Name">}}. This is normal iOS behaviour.

- Android

Attribute | Type | Default | Description
----------|------|---------|------------------
`android.icon` | String | |	[Optional] The name of a drawable resource to use as the small-icon. The name should not include the extension.
`android.iconColor` | String | | [Optional] Sets the background color of the small icon on Android 5.0 and greater. [Supported Formats](http://developer.android.com/reference/android/graphics/Color.html#parseColor(java.lang.String))
`android.sound` | Boolean | `true` | [Optional] If set to `true`, it plays the sound specified in the push data or the default system sound.
`android.vibrate` | Boolean | `true` | [Optional] If set to `true` the device vibrates on receipt of notification.
`android.clearBadge` | Boolean | `false` | [Optional] If set to `true` the icon badge will be cleared on init and before push messages are processed.
`android.clearNotifications` | Boolean | `true` | [Optional] If set to `true`, the app clears all pending notifications when it is closed.
`android.forceShow` | Boolean | `false` | [Optional] Controls the behavior of the notification when app is in foreground. If true and app is in foreground, it will show a notification in the notification drawer, the same way as when the app is in background (and on('notification') callback will be called only when the user clicks the notification). When false and app is in foreground, the on('notification') callback will be called immediately.
`android.topics` | Array  | `[]` | [Optional] If the array contains one or more strings each string will be used to subscribe to a FcmPubSub topic.
`android.messageKey` | String | `message` | [Optional] The key to search for text of notification
`android.titleKey` | String | `title` | [Optional] The key to search for title of notification

**Return Value**

- `pushObject`

**Example**

{{<highlight javascript>}}
const push = PushNotification.init({
  android: {},
  browser: {
    pushServiceURL: 'http://push.api.phonegap.com/v1/push'
  },
  ios: {
    alert: 'true',
    badge: true,
    sound: 'false'
  },
  windows: {}
});
{{</highlight>}}

### hasPermission()

Check whether the push notification permission has been granted on the device.

{{<highlight javascript>}}
PushNotification.hasPermission(successHandler)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`successHandler` | Function | Is called when the api successfully retrieves the details on the permission.

**Callback Parameters**

- successHandler

Name | Type	| Description
-----|------|-------------
`data.isEnabled` | Boolean | Whether the permission for push notifications has been granted.

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
PushNotification.hasPermission(data => {
  if (data.isEnabled) {
    console.log('isEnabled');
  }
});
{{</highlight>}}


### getApplicationIconBadgeNumber()

Get the current badge count visible when the app is not running

{{<highlight javascript>}}
push.getApplicationIconBadgeNumber(successHandler, errorHandler)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`successHandler` | Function | Is called when the api successfully retrieves the icon badge number.
`errorHandler` | Function | Is called when the api encounters an error while trying to retrieve the icon badge number.

**Callback Parameters**

- successHandler

Name | Type	| Description
-----|------|-------------
`n` | Number | An integer which is the current badge count

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
push.getApplicationIconBadgeNumber(
    n => {
        $scope.aibn = n;
    },
    () => {
        console.log('Error getting the number');
    }
);
{{</highlight>}}


### setApplicationIconBadgeNumber()

Set the badge count visible when the app is not running.

{{<highlight javascript>}}
push.setApplicationIconBadgeNumber(successHandler, errorHandler, count) 
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`successHandler` | Function | Is called when the api successfully retrieves the icon badge number.
`errorHandler` | Function | Is called when the api encounters an error while trying to retrieve the icon badge number.
`count` | Number | Indicates what number should show up in the badge. Passing `0` will clear the badge. Each `notification` event contains a data.count value which can be used to set the badge to correct number.

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
push.setApplicationIconBadgeNumber(
    () => {
        alert("Successfully setting the badge number!");
    },
    () => {
        alert("Fail to set the badge number. Something went wrong...");
    },
    badgeNum
);
{{</highlight>}}


### push.on()

The event `notification` will be triggered each time a push notification is received by a 3rd party push service on the device.

{{<highlight javascript>}}
push.on('notification', callback)
{{</highlight>}}

**Callback Parameters**

Name | Type | Description
-----|------|-------------
`data.message` | String | The text of the push message sent from the 3rd party service
`data.title` | String | [optional] The title of the push message sent from the 3rd party service
`data.count` | String | The number of messages to be displayed in the badge in iOS/Android or message count in the notification shade in Android. For windows, it represents the value in the badge notification which could be a number or a status glyph.
`data.sound` | String | The name of the sound file to be played upon receipt of the notification
`data.image` | String | The path of the image file to be displayed in the notification
`data.launchArgs` | String | The args to be passed to the application on launch from push notification. This works when notification is received in background. (Windows Only)
`data.additionalData` | Object | [optional] A collection of data sent by the 3rd party push service that does not fit in the above properties
`data.additionalData.foreground` | Boolean | Whether the notification was received while the app was in the foreground
`data.additionalData.coldstart` | Boolean | Will be true if the application is started by clicking on the push notification, false if the app is already started.
`data.additionalData.dismissed` | Boolean | Is set to true if the notification was dismissed by the user

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
push.on('notification', data => {
  console.log(data.message);
  console.log(data.title);
  console.log(data.count);
  console.log(data.sound);
  console.log(data.image);
  console.log(data.additionalData);
});
{{</highlight>}}

