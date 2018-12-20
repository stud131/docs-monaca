---
title: Monaca Debugger for Android
weight: 10
aliases: /en/debugger/manual/installation/debugger_android
---

{{<figure src="/images/debugger/manual/installation/debugger_android/3.png" title="Monaca Debugger for Android" width="300">}}  

<table class="small">
    <tr>
        <th width="25%"></th>
        <th>Monaca Debugger (Store Version)</th>
        <th>Custom Monaca Debugger</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Monaca Debugger available at the store</td>
        <td>Monaca Debugger built from Monaca Cloud IDE</td>
    </tr>
    <tr>
        <td>Installation</td>
        <td>
            <ul>
                <li><a href="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en">Play Store</a></li>
                <li><a href="https://itunes.apple.com/us/app/monaca/id550941371?mt=8">App Store</a></li>
            </ul>
        </td>
        <td>Refer to <a href="#build-and-install-custom-monaca-debugger">Build and Install Custom Monaca Debugger</a></td>
    </tr>
        <tr>
        <td><a href="#cordova-plugins">Cordova Plugins</a></td>
        <td>Core and some third-party Cordova plugins are automatically included.</td>
        <td>In addition to the core and third-party Cordova plugins, user submitted plugins (of the current project) are included.</td>
    </tr>
    <tr>
        <td>App ID (<code>Android:PackageName</code>)</td>
        <td><code>mobi.monaca.debugger</code</td>
        <td>App ID set by a user</td>
    </tr>
        <tr>
        <td>Version Name (<code>Android:versionName</code>)</td>
        <td>Fixed</td>
        <td>Display version name set by a user</td>
    </tr>
    <tr>
        <td>App Version (<code>Android:versionCode</code>)</td>
        <td>Fixed</td>
        <td>Version set by a user</td>
    </tr>
        <tr>
        <td><a href="#usb-debugging">USB Debugging</a></td>
        <td>Available (Chrome Dev Tools)</td>
        <td>Available (Chrome Dev Tools)</td>
    </tr>
    <tr>
        <td><a href="#localkit-inspector-function">Localkit Inspector Function</a></td>
        <td>Available</td>
        <td>Available</td>
    </tr>
    <tr>
        <td><a href="#webview">WebView</a></td>
        <td>Stock and Crosswalk</td>
        <td>Stock and Crosswalk</td>
    </tr>
    <tr>
        <td><a href="#network-install">Network Install</a></td>
        <td>Available</td>
        <td>Available</td>
    </tr>
</table>


{{<warning>}}
    The following cordova plugin for push notification can not be used in the store version and the custom build debugger.<br>
You can use these plugins in debug build or release build.
<ul style="margin:5px;">
    <li>MonacaBackend plugin</li>
    <li>NIFCloudMB plugin</li>
    <li>Other cordova plugin for push notification Example:
        <ul>
            <li>phonegap-plugin-push</li>
            <li>onesignal-cordova-plugin</li>
            <li>cordova-plugin-firebase</li>
        </ul>
    </li>
</ul>
{{</warning>}}

{{<note>}}
    If the Cordova version of your project is lower than 5.2, it might not work properly with Monaca Debugger 5.X.X. There are two ways to fix this issue:
    <li><a href="/en/products_guide/monaca_ide/dependencies/cordova_plugin/#changing-cordova-version">upgrade Cordova version</a> of your project</li>
    <li>use <a href="#custom-debugger-and">Custom Monaca Debugger</a>.</li>
{{</note>}}

##  Cordova Plugins

In Monaca Debugger, core and third-party Cordova plugins are
automatically included.

Monaca includes Core cordova plugins which are a minimal set of APIs
such as Battery Status, Camera, Contacts, Device and so on. For a
complete list of core Cordova plugins, please refer to [Core Cordova Plugins](/en/reference/cordova_6.5).

Monaca also includes some third-party Cordova plugins such as Statusbar,
DatePicker, BarcodeScanner and so on. For a complete list of currently
included third-party Cordova plugins, please refer to [Third-party Cordova Plugins](/en/reference/third_party_phonegap).

While developing your project, you may need to add other third-party or [custom Cordova plugins](/en/products_guide/monaca_ide/dependencies/custom_cordova_plugin) to your project.
The standard Monaca Debugger (Store Version) doesn't have these newly
added plugins. For this reason, your project might not run properly in
the debugger. Therefore, you need to use Custom Monaca Debugger. Custom
Monaca Debugger is a debugger which is built from a Monaca Project
within Monaca Cloud IDE. Please refer to [Build and Install Custom Monaca Debugger](#custom-debugger-and).

##  USB Debugging

Monaca Debugger for Android supports USB debugging functions with Google
Chrome browser such as:

-   console debugging: using console to diplay message.
-   DOM inspection: viewing and modifying DOM structure with live
    updates.
-   JavaScript debugging: profiling JavaScript performance, setting
    breakpoint and execution control.

For more information, please refer to [USB Debugging with Monaca Debugger for Android Apps](../../debug/#usb-debugging-android).

##  Localkit Inspector Function

Inspector can be used when developing either on Windows or Mac OS.

##  WebView

Monaca Debugger for Android contains both stock and Crosswalk WebView
engines. The WebView is switched automatically depending on the type of
WebView is used in each application.

##  Network Install

Network Install is a feature provided by Monaca Debugger for Android
allowing you to install the built app (debug build only) using the
debugger. For more information, please refer to [how to use Network Install feature](../../features/#debugger-project-options).

##  Build and Install Custom Monaca Debugger

1. From Monaca Cloud IDE menu, go to {{<menu menu1="Build" menu2="Build App for Android">}}.

2. Select `Custom Debugger Build` and click on {{<guilabel name="Start Build">}}.

    {{<img src="/images/debugger/manual/installation/debugger_android/start_build.png">}}  

3.  This may take sometimes until the build is completed. The
    following screen will appear after the build is successfully
    completed. Then, you can use the QR code to install the debugger on
    your device or download the built file to your PC.

    {{<img src="/images/debugger/manual/installation/debugger_android/result.png">}}  

See Also:

- [Debugger Installation on Emulator](../debugger_emulator)
- [Debugger Installation on iOS](../debugger_ios)
- [Debugger's Functionalities](../../features)
- [Debugger's Usage](../../debug)
