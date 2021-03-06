---
title: Introduction
weight: 10
aliases: /en/push_notification/manual/overview
---

{{<note>}}
    For release and ad-hoc builds on Cordova 6.2 or higher, please select the release build option when sending push notifications.
{{</note>}}

## What is Push Notification?

Push notification is the information sent from a software application to
a computing device without a specific request from the client. There are
several types of push notification such as:

1.  **Text**: a pure text message
2.  **Badge**: a round, red, numerical icon that appears on the top right
    corner of an application icon
3.  **Sound**: a sound file played to alert the user of a new notification
4.  **JSON Data**: data in JSON format used by the application

{{<note>}}
    Currently, sound notifications are not supported in Monaca.
{{</note>}}

The behavior of an application upon receiving a push notification
differs depending on the device's platform and whether the application
is opened or closed. In other words, Android notifications are displayed
in the upper part of the screen. On the other hand, iOS notifications
are displayed as a pop-up dialogue box.

## Prerequisite

Monaca Backend is required in order to send push notifications from Monaca Cloud IDE. In order to add a Monaca Backend to your project, please refer to [Getting Started with Monaca Backend](../../backend/getting_started/).

## How to Enable Push Notification with Monaca

Before start using push notification with Monaca, it is necessary to
configure the Push Notification settings for each platform of your
application as follows:

- [iOS App Push Notification Settings](../apns)
- [Android App Push Notification Settings](../gcm)

{{<note>}}
    Monaca Debugger can’t receive push notifications. You must build your app to receive push notifications.
{{</note>}}

## How to Send Push Notification with Monaca

To send push notifications from Monaca Cloud IDE, please proceed as follows:

1.  From Monaca Backend window and select `Push Notification`.

    {{<img src="/images/backend/overview/push_notification.png">}}

3.  From the Push Status & History tab, click {{<guilabel name="Push to App">}}. Then the
    Push to App dialog will appear:

    {{<img src="/images/backend/overview/push_dialog.png" width="500">}}

4.  Choose the intended OS and fill in necessary information regarding the push notification as
    shown below:

    | Parameter | Description |
    |-----------|-------------|
    | Title | [Android only] a title of a notification |
    | Message | the text content of a notification |
    | Badge | [iOS only] If you enable this option and set its value to an Integer of 1 or greater, the number will be displayed on the top right corner of the app icon. |
    | JSON Data | [Optional] Once the user opens the notification, the application will receive the JSON data. Please refer to [How to Receive JSON Data](#how-to-receive-json-data). |

6.  Click on {{<guilabel name="Add">}} button to send the push notification. It will be queued
    first and sent afterward. The delivery might delay if there is high
    traffic at our Push Server. Please refer to the next section on how
    to monitor the status of your push notifications.

## Monitoring Push Notification Delivery

You can monitor your push notification activities in the Push Status &
History page. In this page, you can see various information related to
each push notification such as:

| Parameter | Description |
|-----------|-------------|
| Platform | the platform of the recipient |
| Status | status of the push notification |
| Date | the date and time when sending the push notification |
| Devices | the number of successfully sent notifications. It is formatted as `Successful Distribution Number/Total Number of Distribution` in which Successful Distribution represents the number of successfully sent notification while the Total Number of Distribution is the total number of sent notifications (see the screenshot below as an example). |
| Message | the text content of the notification |

{{<figure src="/images/backend/overview/3.png">}}

## How to Receive JSON Data

JSON data within a push notification can be received by
`monaca.cloud.Push.setHandler` function. The JSON data will be passed to
`data1` and `data3` variable within the callback. Here is an example of how to use
this function:

{{<highlight javascript>}}
monaca.cloud.Push.setHandler(function(data1, data2, data3) {
  // JSON data within push notification
  console.log(JSON.stringify(data1));
  console.log(JSON.stringify(data2));
  console.log(JSON.stringify(data3));
});
{{</highlight>}}

The `data2` and `data3` can get `coldstart` and `foreground` information to check the reception status of push notifications.

{{<note>}}
    The callback function will be called after the page is loaded; However, there may be some time lag. Therefore, please be cautious about this.
{{</note>}}

See Also:

- [Monaca Backend APIs for Push Notifications](/en/reference/monaca_api/cloud/push)
- [Monaca Backend Management APIs for Push Notifications](/en/reference/monaca_api/cloud_management/push)
