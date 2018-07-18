---
title: Android Configuration
weight: 10
---

There are 2 ways to configure your Android apps:

1. [Configure via Monaca Cloud IDE](#configuration-via-monaca-cloud-ide)
2. [Configure via configuration files directly](#configuration-via-configuration-files)

##  Configuration via Monaca Cloud IDE

### Android App Settings Page

The Android App Settings page allows to set several commonly used
parameter in Android app. Please follow the following instruction in
order to access the Android App Setting page in Monaca Cloud IDE:

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Configure" menu2="App Settings for Android">}}.

2.  `Android App Configuration` page will appear as shown below. You can then start your configuration.

    {{<img src="/images/reference/config/android/settings.png">}}

3.  After finishing the configuration, click {{<guilabel name="Save">}}.

### Configurable Parameters

In the Android App Settings page, you can configure the parameters such
as application information, icons, splash files, permissions and
additional features. The following are the list of parameters can be
configured via the page:

-   `Allowed URL`: [Set to `*` by default] Specify URL(s) which can be
    accessed from your app. If set to `*`, you can access all domains
    from your app.

-   `Keep Running`: [Enable by default] Enable this if you want
    Cordova to keep running in the background.

-   `Disallow Overscroll`: [Enable by default] Enable this if you want
    to disable the glow when a user scrolls beyond the edge of the
    webview.

-   `WebView Engine`: Specify the WebView engine between the default one
    and Crosswalk.

-   `Display Time`: Specify the duration of showing splashscreen.

-   `Screen Orientation`: Specify the screen orientation of the app.

##  Configuration via Configuration Files

All the configuration parameters of an Android app are stored in the files as follows:

- [config.xml](../config_xml)

{{<note>}}
  These configurations are critical to the Android app to run. Wrong configuration can prevent the app from running properly, please edit the file carefully.
{{</note>}}
