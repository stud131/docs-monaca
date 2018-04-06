---
title: "Cordova In-app Purchase Plugin"
weight: 100
---

A Cordova/PhoneGap plugin to perform In-App Purchase for Cordova on iOS, Android and Windows.

- Repo: https://github.com/j3k0/cordova-plugin-purchase
- Plugin ID/Package Name: `cc.fovea.cordova.purchase`

## Demo 

{{<import pid="5ac6e55ee788855e368b4567" title="In-app Purchase Plugin Demo">}}

{{< figure src="/images/samples/in-app_purchase.png">}}

## Enable the Plugin in Monaca IDE

1.  From the IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.

2.  Click on {{<guilabel name="Import Cordova Plugin">}} button. Then, you can choose to import the plugin using a ZIP file or URL/Package Name. 

## Usage

After importing the plugin into the project, you can start generate a token for your device and set an event for when a user opens a notification. Please make sure to call the plugin API after the Cordova is loaded. 

{{<highlight javascript>}}
document.addEventListener("deviceready", function(){
    window.FirebasePlugin.getToken(function(token) {
        // save this server-side and use it to push notifications to this device
        console.log(token);
    }, function(error) {
        console.error(error);
    });

    // Get notified when a token is refreshed
    window.FirebasePlugin.onTokenRefresh(function(token) {
        // save this server-side and use it to push notifications to this device
        console.log("Refresh to get new token: " + token);
    }, function(error) {
        alert(error);
    });

    // Get notified when the user opens a notification
    window.FirebasePlugin.onNotificationOpen(function(notification) {
        console.log(JSON.stringify(notification));
        alert("The notification is open!");
    }, function(error) {
        console.error(error);
    });    
}, false);
{{</highlight>}}

## API References

In this page, we only describe some main APIs used in our [Demo](https://monaca.mobi/directimport?pid=5ac6e55ee788855e368b4567). For a complete API references, please refer to [here](https://github.com/danwilson/google-analytics-plugin).

### getToken()

Get the device token. The token will be null if it has not been established yet

{{<highlight javascript>}}
window.FirebasePlugin.getToken();
{{</highlight>}}

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
window.FirebasePlugin.getToken(function(token) {
    // save this server-side and use it to push notifications to this device
    console.log(token);
}, function(error) {
    console.error(error);
});
{{</highlight>}}

### onTokenRefresh()

Get notified when a token is refreshed. This is the best way to get a valid token for the device as soon as the token is established.

{{<highlight javascript>}}
window.FirebasePlugin.onTokenRefresh();
{{</highlight>}}

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
window.FirebasePlugin.onTokenRefresh(function(token) {
    // save this server-side and use it to push notifications to this device
    console.log(token);
}, function(error) {
    console.error(error);
});
{{</highlight>}}

### onNotificationOpen()

Get notified when the notification is open.

{{<highlight javascript>}}
window.FirebasePlugin.onNotificationOpen();
{{</highlight>}}

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
window.FirebasePlugin.onNotificationOpen(function(notification) {
    console.log(JSON.stringify(notification));
    alert("The notification is open!");
}, function(error) {
    console.error(error);
});    
{{</highlight>}}

### hasPermission()

Check permission to recieve push notifications.

{{<highlight javascript>}}
window.FirebasePlugin.hasPermission();
{{</highlight>}}

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
window.FirebasePlugin.hasPermission(function(data){
    if (data.isEnabled)
        alert("Permission to receive notification is granted.");
    else
        alert("Permission to receive notification is NOT granted.");
});
{{</highlight>}}

### grantPermission() (iOS only)

Grant permission to recieve push notifications for iOS (will trigger a prompt if the permission has not been granted yet).

{{<highlight javascript>}}
window.FirebasePlugin.grantPermission();
{{</highlight>}}

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
window.FirebasePlugin.grantPermission(function(){
    alert("Permission is granted for iOS");    
}, function(error){
    alert(error);
});
{{</highlight>}}

### setBadgeNumber()

Set a number on the icon badge.

{{<highlight javascript>}}
window.FirebasePlugin.setBadgeNumber(badgeNumber);
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`badgeNumber` | Number | The number on the icon badge

**Return Value**

- `Promise`

**Example**

After running setting the badge number, close the app. Then, you will see the badge number appear on your app icon. If you want to remove the number, please set it to `0`.

{{<highlight javascript>}}
window.FirebasePlugin.setBadgeNumber(5);
{{</highlight>}}


### getBadgeNumber()

Get icon badge number.

{{<highlight javascript>}}
window.FirebasePlugin.getBadgeNumber();
{{</highlight>}}

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
window.FirebasePlugin.getBadgeNumber(function(n) {
        alert("Badge Number is " + n);
    });
{{</highlight>}}


### unregister()

Unregister from firebase to stop receiving push notifications. Call this when you logout user from your app.

{{<highlight javascript>}}
window.FirebasePlugin.unregister();
{{</highlight>}}

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
window.FirebasePlugin.unregister(function(){
    alert("Stop receiving push notifications."); 
}, function(error){
    alert(error);
});
{{</highlight>}}


### setScreenName()

Set the name of the current screen in Analytics.

{{<highlight javascript>}}
window.FirebasePlugin.setScreenName(screenName);
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`screenName` | String | Screen name

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
var page="FirebaseHome";
window.FirebasePlugin.setScreenName(page);
alert(page + " screen is tracked.");
{{</highlight>}}

### setUserId()

Set a user id for use in Analytics.

{{<highlight javascript>}}
window.FirebasePlugin.setUserId(id);
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`id` | String | A unique identifier, associated with that particular user, must be sent with each hit

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
//user ID for testing purpose
var myUserId="35009a79-1a05-49d7-b876-2b884d0f825b";
window.FirebasePlugin.setUserId("user_id");
alert("UserID is set to: " + myUserId);
{{</highlight>}}
