---
title: iOS Configuration
weight: 10
---

There are 2 ways to configure your iOS apps:

1. [Configure via Monaca Cloud IDE](#configuration-via-monaca-cloud-ide)
2. [Configure via configuration files directly](#configuration-via-configuration-files)

##  Configuration via Monaca Cloud IDE

### iOS App Settings Page

The iOS App Settings page allows to set several commonly used parameter
in iOS app. Please follow the following instruction in order to access
the iOS App Setting page in Monaca Cloud IDE:

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Configure" menu2="App Settings for iOS">}}.

2.  `iOS App Configuration` page will appear as shown below. You can
    then start your configuration.

    {{<img src="/images/reference/config/ios/settings.png">}}

3.  After finishing the configuration, please click {{<guilabel name="Save">}}.

### Configurable Parameters

In the iOS App Settings page, you can configure the parameters such as
application information, icons, splash files, permissions and additional
features. The following are the list of parameters can be configured via
the page:

-   `Allowed URL`: Specify URL(s) which can be accessed from your app.
    If set to `*`, you can access all domains from your app. (Set to `*`
    by default)

-   `Disallow Overscroll`: [Enable by default] Enable this if you want
    to disable the glow when a user scrolls beyond the edge of the
    webview.

-   `Enable Viewport Scale`: [Enable by default] If you disable this
    feature, the viewport meta tag which is set inside your app will be
    ignored.
-   `Fade Splash Screen`: [Enable by default]

-   `Show Splash Screen`: Show splash screen at start of the app.

##  Configuration via Configuration Files

All the configuration parameters of an iOS app are stored in the files
as follows:

- [config.xml](../config_xml/)

{{<note>}}
  These configurations are critical to the iOS app to run. Wrong configuration can prevent the app from running properly, please edit the file carefully.
{{</note>}}
