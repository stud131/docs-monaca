---
title: Monaca Debugger for iOS
weight: 20
aliases: /en/debugger/manual/installation/debugger_ios
---

{{<figure src="/images/debugger/manual/installation/debugger_ios/1.png" title="Monaca Debugger for iOS" width="300">}}  

{{<note>}}
    Monaca Backend plugin is not included in both Monaca Debugger (store version) and Custom Monaca Debugger.
{{</note>}}

{{<note>}}
    If the Cordova version of your project is lower than 5.2, it might not work properly with Monaca Debugger 5.X.X. There are two ways to fix this issue:
    <li><a href="/en/products_guide/monaca_ide/dependencies/cordova_plugin/#changing-cordova-version">upgrade Cordova version</a> of your project</li>
    <li>use <a href="#custom-debugger-ios">Custom Monaca Debugger</a>.</li>
{{</note>}}

<table class="small">
    <tr>
        <th width="37%"></th>
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
        <td><a href="https://itunes.apple.com/us/app/monaca/id550941371?mt=8">App Store</a>
        </td>
        <td>Refer to <a href="#how-to-build-custom-monaca-debugger">Build and Install Custom Monaca Debugger</a></td>
    </tr>
        <tr>
        <td><a href="#cordova-plugins">Cordova Plugins</a></td>
        <td>Core and some third-party Cordova plugins are automatically included.</td>
        <td>In addition to the core and third-party Cordova plugins, user submitted plugins (of the current project) are included.</td>
    </tr>
    <tr>
        <td>App ID (<code>iOS:CFBundleIdentifier</code>)</td>
        <td><code>mobi.monaca.debugger</code</td>
        <td>App ID set by a user</td>
    </tr>
        <tr>
        <td>Version Name (<code>iOS:CFBundleShortVersionString</code>)</td>
        <td>Fixed (currently <code>6.0.0</code>)</td>
        <td>Display version name set by a user</td>
    </tr>
    <tr>
        <td>App Version (<code>iOS:CFBundleVersion</code>)</td>
        <td>Fixed (currently <code>6.0.0</code>)</td>
        <td>Version set by a user</td>
    </tr>
        <tr>
        <td><a href="#usb-debugging">USB Debugging</a></td>
        <td>Not Available</td>
        <td>Available (Safari’s Web Inspector)</td>
    </tr>
    <tr>
        <td><a href="#localkit-inspector-function">Localkit Inspector Function</a></td>
        <td>Not Available</td>
        <td>Available</td>
    </tr>
    <tr>
        <td><a href="#network-install">Network Install</a></td>
        <td>Not Available</td>
        <td>Available</td>
    </tr>
</table>

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
within Monaca Cloud IDE. Please refer to [Build and Install Custom Monaca Debugger](#custom-debugger-ios).

##  USB Debugging

Monaca Debugger for iOS supports USB debugging functions with Safari
browser such as:

-   console debugging: using console to diplay message.
-   DOM inspection: viewing and modifying DOM structure with live
    updates.
-   JavaScript debugging: profiling JavaScript performance, setting
    breakpoint and execution control.

For more information, please refer to [USB Debugging with Monaca Debugger for iOS Apps](../../debug/#usb-debugging-ios).

##  Localkit Inspector Function

Inspector can be used when developing either on Windows or Mac OS.

##  Network Install

Network Install is a feature provided by Custom Monaca Debugger for iOS
allowing you to install the built app (debug build only) using the
debugger. For more information, please refer to [how to use Network Install feature](../../features/#debugger-project-options).

{{<note>}}
    This feature is not available for Monaca Debugger for iOS available at App Store.
{{</note>}}

## How to Build Custom Monaca Debugger

### Preparation

You are required to have:

-   a valid private key
-   Developer certificate
-   Development provisioning profile

Please refer to [Building an iOS App](/en/products_guide/monaca_ide/build/ios/build_ios) (Step 1 and Step 2) on how to get the
above items and make necessary configurations before start building the
custom debugger. After obtaining the above necessary files, start
building with the following instruction:

### Start Building


1. From Monaca Cloud IDE menu, go to {{<menu menu1="Build" menu2="Build App for iOS">}}.

2. Select `Custom Debugger Build` and choose Development provisioning profile. Then, click on {{<guilabel name="Start Build">}}.

    {{<img src="/images/debugger/manual/installation/debugger_ios/start_build.png">}}  

3.  This may take sometimes until the build is completed. The
    following screen will appear after the build is successfully
    completed. Then, you can use the QR code to install the debugger on
    your device or download the built file to your PC.

    {{<img src="/images/debugger/manual/installation/debugger_ios/result.png">}}  

See Also:

- [Debugger Installation on Emulator](../debugger_emulator)
- [Debugger Installation on Android](../debugger_android)
- [Debugger's Functionalities](../../features)
- [Debugger's Usage](../../debug)
