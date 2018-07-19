---
title: Android App Push Notification Settings
weight: 20
aliases: /en/push_notification/manual/gcm
---

Monaca sends push notifications via FCM (Firebase Cloud Messaging). FCM
is a cross-platform messaging solution that lets you reliably deliver
messages at no cost. Using FCM, you can notify a client app that new
email or other data is available to sync. You can send notification
messages to drive user reengagement and retention. For use cases such as
instant messaging, a message can transfer a payload of up to `4KB` to a
client app.

In this page, we will guide you to enable push notifications service for
Android applications with Monaca.

{{<note>}}
    You are required to have a Google account for this configuration.
{{</note>}}

## 1. Get Server Key from Firebase Console

`Server key` from Firebase console is required to
integrate FCM with Monaca. To get this key, please proceed as
follows:

1.  Go to [Firebase Console](https://console.firebase.google.com/) and sign in with a valid Google account.
2.  Click on {{<guilabel name="+ Add project">}}.

    {{<img src="/images/backend/gcm/1.png">}}

3.  Input a project's name and choose your country/region. Then, click
    on {{<guilabel name="CREATE PROJECT">}}.

    {{<img src="/images/backend/gcm/2.png">}}

4.  Once your project is created, go to `Project settings` from the left
    menu.

    {{<img src="/images/backend/gcm/3.png">}}

5.  In the Settings page, go to `CLOUD MESSAGING`. Then, you will be able
    to see the `Server Key` which will be used in Monaca
    push notification settings later. The `Server Key` is Server API key
    for the push notification.

    {{<img src="/images/backend/gcm/4.png">}}

## 2. Get FCM configuration file from Firebase Console

1. Download the configuration file `google-services.json` on the Firebase Console page.

    {{<img src="/images/backend/gcm/download_google_services_json.png">}}

## 3. Configure FCM Parameters in Monaca

1.  From Monaca Backend window, go to {{<guilabel name="Push Notification">}}.

2.  On the top-right-corner, click on `Gear` icon and select {{<guilabel name="Push Configuration">}}.
    
    {{<img src="/images/backend/gcm/settings.png">}}

3.  Click {{<guilabel name="Config">}} Button in the FCM SetUp Area.

    {{<img src="/images/backend/gcm/select_fcm_setting_en.png">}}

4.  Input `google-services.json` and the `Server Key` and
    click on {{<guilabel name="Save">}}. Now, the Android push notification is enabled and
    ready to use.

    {{<img src="/images/backend/gcm/fcm_setting_form_en.png">}}

