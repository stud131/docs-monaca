---
title: "Cordova OneSignal Plugin"
weight: 60
hidden: true
---

OneSignal is a multi-platform push notification service and it is totally FREE to use. This plugin makes it easy to integrate your Cordova or Monaca apps.

- Repo: https://github.com/OneSignal/OneSignal-Cordova-SDK
- Plugin ID/Package Name: `onesignal-cordova-plugin`

## Demo 

{{<import pid="59f6aecde78885c3758b4567" title="Push Notification Demo">}}

## Enable the Plugin in Monaca IDE

1.  From the IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.

2.  Click on {{<guilabel name="Import Cordova Plugin">}} button. Then, you can choose to import the plugin using a ZIP file or URL/Package Name. 

## Usage

After importing the plugin into the project, you can start initialize your tracking ID. Please make sure to call the plugin API after the Cordova is loaded. 

{{<highlight javascript>}}
//Replace your app tracking id here
var trackingID="YOUR_APP_TRACKING_ID";

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    console.log('Google analytics is ready now');
    window.ga.startTrackerWithId(trackingID);
}
{{</highlight>}}

## API References

In this page, we only describe some main APIs used in our [Demo](https://monaca.mobi/en/directimport?pid=59f6aecde78885c3758b4567). For a complete API references, please refer to [here](https://github.com/danwilson/google-analytics-plugin).

### startTrackerWithId()

Set up your Analytics tracker.

{{<highlight javascript>}}
window.ga.startTrackerWithId(trackingId, [interval]);
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`trackingId` | String | Your Google Analytics Mobile App property
`interval` | Number | [optional] The dispatch period in seconds (default: `30`)

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
window.ga.startTrackerWithId('UA-XXXX-YY', 30);
{{</highlight>}}

### trackView()

Track a screen.

{{<highlight javascript>}}
window.ga.trackView(title, campaignUrl, [newSession]);
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`title` | String | Screen title
`campaignUrl` | String | Campaign url for measuring referrals
`newSession` | Boolean | [optional] Set to `true` to create a new session

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
//To track a Screen (PageView):
window.ga.trackView('Screen Title')

//To track a Screen (PageView) w/ campaign details:
window.ga.trackView('Screen Title', 'my-scheme://content/1111?utm_source=google&utm_campaign=my-campaign')

//To track a Screen (PageView) and create a new session:
window.ga.trackView('Screen Title', '', true)
{{</highlight>}}

### trackEvent()

Track an event.

{{<highlight javascript>}}
window.ga.trackEvent(category, action, [label], [value], [newSession])
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`category` | String | Event category (e.g. 'Video')
`action` | String | Action type (e.g. 'play')
`label` | String | [optional] Event label (e.g. 'Fall Campaign')
`value` | Number | [optional] A numeric value associated with the event (e.g. 42)
`newSession` | Boolean | [optional] Set to `true` to create a new session

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
//To track an Event
window.ga.trackEvent('Videos', 'play', 'Fall Campaign', 42)

//To track an Event and create a new session:
window.ga.trackEvent('Videos', 'play', 'Fall Campaign', 42, true)
{{</highlight>}}

### setUserId()

Set a UserId.

{{<highlight javascript>}}
window.ga.setUserId(id);
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
window.ga.setUserId(myUserId);
{{</highlight>}}

### setAppVersion()

Set a specific app version.

{{<highlight javascript>}}
window.ga.setAppVersion(appVersion)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`appVersion` | String | App version

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
window.ga.setAppVersion('1.33.7');
{{</highlight>}}


### debugMode()

Enable verbose logging.

{{<highlight javascript>}}
window.ga.debugMode()
{{</highlight>}}

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
window.ga.debugMode();
{{</highlight>}}


