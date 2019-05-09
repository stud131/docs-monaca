---
title: "Cordova Firebase Plugin"
weight: 90
---

This Cordova plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project.

- Repo: https://github.com/arnesson/cordova-plugin-firebase
- Plugin ID/Package Name: `cordova-plugin-firebase`
- Tested Version: 2.0.5

{{<note>}}
2019/05/09 This plugin cordova-plugin-firebase@2.0.5 has an issue about libraries version. The build for android will fail.

Please modify your project's package.json from

{{<highlight javascript>}}
        "cordova-plugin-firebase": "2.0.5"
{{</highlight>}}

to

{{<highlight javascript>}}
        "cordova-plugin-firebase": "https://github.com/monaca-plugins/cordova-plugin-firebase.git#v2.0.5-modified"
{{</highlight>}}

{{</note>}}


{{<note>}}
To check third party cordova plugins, you need to create a custom build debugger ( {{<link title="Android version" href="https://docs.monaca.io/en/products_guide/debugger/installation/debugger_android/#build-and-install-custom-monaca-debugger">}} or {{<link title="iOS version" href="https://docs.monaca.io/en/products_guide/debugger/installation/debugger_ios/#how-to-build-custom-monaca-debugger">}} ).
{{</note>}}

{{<note>}}
The custom build debugger can not check push notifications. To check push notifications, please check with debug build or release build.
{{</note>}}

## Demo 

{{<import pid="5ac5776ee788854f3a8b456a" title="Google Firebase Plugin Demo">}}

{{<figure src="/images/samples/firebase.png">}}

{{%excerpt%}}

## Preparation for iOS

When working with push notification for iOS, APNs authentication key or APNs certificate is required. For this reason, we will need to create one of them first. In this page, we will show you how to create Development APNs cerficate for testing on iOS Debug build. 

<div class="admonition note">
For release build, Production APNs Certificate is required. 
</div>

Assuming that you have already [Apple Developer Program](https://developer.apple.com/programs/), please follow the instruction below on how to create a Development APNs certificate. 

1. From [Apple Developer page](https://developer.apple.com/), go to `Account`.

2. Select `Certificates, Identifiers & Profiles`.

    <img src="/images/tutorials/11.png" width="" class="single_img">

3. An App ID with push notification enabled is required when creating an APNs certificate. Therefore, let's start creating one. Under `Identifiers` section, go to `App IDs` and click on `+` button in the upper-right corner.

    <img src="/images/tutorials/14.png" width="" class="single_img">

4. Fill in the following information for the App ID such as:

    - `App Description`: Input your app name here (e.g. Cordova Firebase Demo)
    - `Explicit ID`: Select this option because Wildcard App ID is not allowed for push notification. Input a unique identifier for your app (e.g. io.monaca.firebase).

    <img src="/images/tutorials/15.png" width="" class="single_img">

5. Scroll down to `App Services` section and tick `Push Notifications` option. Then, click <span class="guilabel">Continue</span>.

    <img src="/images/tutorials/16.png" width="" class="single_img">

6. After that, you will be redirected to a `Confirm your App ID` page. click <span class="guilabel">Register</span> to complete this process.

7. Now, you should be back to the iOS App IDs page. Select on the App ID you've just created and click <span class="guilabel">Edit</span>.

8. Scroll down to `Push Notifications` section, click on <span class="guilabel">Create Cerficate</span> under `Development SSL Certificate`. 

    <img src="/images/tutorials/17.png" width="" class="single_img">

9. Click <span class="guilabel">Continue</span>. 

10. After that, click <span class="guilabel">Choose File</span> to browse your CSR file. You can get this file from Monaca Cloud IDE by going to <span class="guilabel"><b>Config &rarr; iOS Build Settings</b></span>. Then, click on <span class="guilabel">Generate Key and CSR</span>. After creating the CRS file, download it by clicking on <span class="guilabel">Export</span> button.

11. Next, click <span class="guilabel">Continue</span> again. When the certificate is ready, you can start downloading it. Keep the file, we will need it for Firebase configuration in the upcoming section. 

## Configuring Firebase for Push Notification

1. Go to [Firebase console](https://firebase.google.com/).

2. Sign in with your Google account to enter the console.

3. Click on <span class="guilabel">Add project</span>.

    <img src="/images/tutorials/1.png" width="" class="single_img">

4. Fill in the project information and click <span class="guilabel">CREATE PROJECT</span>. Then, you will be redirected to the Project Overview page.

    <img src="/images/tutorials/2.png" width="" class="single_img">

After project creation, we can start configuring the push notification the project for specific platform. 

### For iOS

1. Go to `Project setting`.

    <img src="/images/tutorials/3.png" width="" class="single_img">

2. Under General section, click <span class="guilabel">ADD APP</span> and select `iOS`.

3. Enter your iOS Bundle ID (You can find that by going to <span class="guilabel"><b>Config &rarr; iOS App Settings</b></span>). Then, click <span class="guilabel">REGISTER APP</span>.

    <img src="/images/tutorials/4.png" width="" class="single_img">

4. Download `GoogleService-Info.plist` file and place it in the root folder of your project. After that, click <span class="guilabel">CONTINUE</span>.

    <img src="/images/tutorials/5.png" width="" class="single_img">

5. You will see instructions on how to add the Firebase SDK into our project. However, we are not developing the app natively, we can skip this step. So just click click <span class="guilabel">CONTINUE</span> to proceed. Then, click click <span class="guilabel">FINISH</span> to complete the configuration. After that, you should see your iOS app in the Firebase overview page.

    <img src="/images/tutorials/6.png" width="" class="single_img">

6. Now, it's time to add APNs certificates into this project. Go to `Project setting` and select `CLOUD MESSAGING`.

    <img src="/images/tutorials/3.png" width="" class="single_img">

7. Scroll down to **iOS app configuration** section and upload APNs authentication key or APNs certificates.

    <img src="/images/tutorials/7.png" width="" class="single_img">

That's it! Now, you are done with iOS configuration. 

### For Android

1. Go to `Project setting`.

    <img src="/images/tutorials/3.png" width="" class="single_img">

2. Under General section, click <span class="guilabel">ADD APP</span> and select `Android`.

3. Enter your package name (You can find that by going to <span class="guilabel"><b>Config &rarr; Android App Settings</b></span>). Then, click <span class="guilabel">REGISTER APP</span>.

    <img src="/images/tutorials/8.png" width="" class="single_img">

4. Download `google-services.json` file and place it in the root folder of your project. After that, click <span class="guilabel">CONTINUE</span>.

    <img src="/images/tutorials/9.png" width="" class="single_img">

5. You will see instructions on how to add the Firebase SDK into our project. However, we are not developing the app natively, we can skip this step. So just click click <span class="guilabel">FINISH</span> to complete the configuration. After that, you should see your Android app in the Firebase overview page.
    
    <img src="/images/tutorials/10.png" width="" class="single_img">

{{%/excerpt%}}

## Adding the Plugin in Monaca IDE

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

In this page, we only describe some main APIs used in our [Demo](https://monaca.mobi/directimport?pid=5ac5776ee788854f3a8b456a). For a complete API references, please refer to [here](https://github.com/arnesson/cordova-plugin-firebase).

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
