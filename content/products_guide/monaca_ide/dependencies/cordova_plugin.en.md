---
title: Cordova Plugins
weight: 30
aliases: /en/monaca_ide/manual/dependencies/cordova_plugin
---

{{%excerpt%}}
<!-- using full HTML code for other shortcodes otherwise `excerpt` shortcode will break them -->

Usually, you need native code (Java for Android, Objective-C for iOS,
etc) to access native device functions such as Cameras, FileSystem,
Device Storage, etc. However, you can access these native functions
using JavaScript with Cordova.

Cordova is a set of device APIs that allow a mobile app developer to
access native device function such as the camera or accelerometer from
JavaScript. Therefore, Monaca uses Cordova to enable your hybrid apps to
access native device functions from JavaScript.

For more information about Cordova, please refer to
[here](https://cordova.apache.org/).

## Loading Cordova

You can't use device APIs (Cordova plugins) before Cordova is fully loaded. The `deviceready` event fires once Cordova has fully loaded. Once the event fires, you can safely make calls to Cordova APIs. Applications typically attach an event listener with `document.addEventListener` once the HTML document's DOM has loaded.

As an example, let's start up Camera functions by using Camera APIs. Please copy and paste the code below to your project in Monaca Cloud IDE then you can run it on [Monaca Debugger](/en/products_guide/debugger/).

<div class="admonition note">
    This code was written for Cordova 7.1. We apologize in advance in case the code may behave differently on various devices.
</div>

```html
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta http-equiv="Content-Security-Policy" content="default-src * data: gap: content: https://ssl.gstatic.com; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'">
  <script src="components/loader.js"></script>
  <link rel="stylesheet" href="components/loader.css">
  <link rel="stylesheet" href="css/style.css">
  <script>
    document.addEventListener ("deviceready", onDeviceReady, false);

    //these functions runs when Cordova is ready
    function onDeviceReady () {
      alert ('Cordova is ready!');
    }

    function snapPicture () {
      navigator.camera.getPicture (successCallback, FailCallback, {destinationType: Camera.DestinationType.DATA_URL});

      //Success Callback
      function successCallback (imageData) {
        //Display image
        var image = document.getElementById ('picture');
        image.src = "data:image/jpeg;base64, " + imageData;
      }

      //Error CallBack
      function FailCallback (message) {
        alert ('Error!!!: ' + message);
      }
    }
  </script>
</head>
<body>
  <h1>Camera Sample</h1>
  <input type="button" onclick="snapPicture()" value="Snap" ><br><br>
  <img id="picture" src="" width="150" height="150">
</body>
</html>
```


## Changing Cordova Version

<div class="admonition note">
    Cordova version in Monaca cannot be downgraded. 
</div>

<div class="admonition note">
    When upgrading Cordova version, a backup of the project is automatically created before conversion.
</div>

For new created projects, the latest Cordova version available in Monaca
will be automatically applied.

In order to upgrade the Cordova version of your project, please do as following:

1.  From Monaca Cloud IDE, go to <span class="guilabel"><b>
Configure → Cordova Plugin Settings</b></span>.

2.  Click the upgrade link.

    <img src="/images/monaca_ide/manual/dependencies/cordova_plugin/3.png" width="" class="single_img">

##  Built-in Cordova Plugins in Monaca

Directly from Cordova Plugins page in Monaca Cloud IDE, you can easily enable Core and some third-party Cordova plugins.

- Core Cordova plugins refer to a minimal set of Cordova APIs such as Battery, Camera, Contacts, Devices and so on. For more information, please refer to [Core Cordova Plugins](/en/reference/cordova_6.5/).

- Third-party Cordova plugins refer to other existing Cordova plugins. There are [some third-party Cordova plugins](/en/reference/third_party_phonegap/) which you can add to your project right from the Cordova Plugins page.

<figure>
    <img data-action="zoom" src="/images/monaca_ide/manual/dependencies/cordova_plugin/built-in_plugins.png" width="">
    <figcaption>
        Built-in Cordova Plugins
    </figcaption>
</figure>

##  Import Cordova Plugins

In order to import a Cordova plugin into your project, please do as follows:

1.  From Monaca Cloud IDE, go to <span class="guilabel"><b>
Configure → Cordova plugin Settings</b></span>.

2.  The Cordova Plugins page will be shown. In this page,
    core and some third-party Cordova plugins are listed.
    Mouseover a plugin and click on <span class="guilabel">Enable</span> to add the plugin. If you
    cannot find the plugin you want in the list, you can import other
    third-party Cordova plugins by using <span class="guilabel">Import Cordova Plugin</span> button. A project containing external third-party Cordova plugin(s) requires a
    custom built Monaca Debugger. Please refer to [Monaca Debugger with Custom Cordova Plugin](../custom_cordova_plugin/#monaca-debugger-with-custom-cordova-plugin).

    <img src="/images/monaca_ide/manual/dependencies/cordova_plugin/1.png" width="" class="single_img">


3.  Once a plugin is enabled/imported, you might want to configure it.
    Mouseover a plugin you want to config and click <span class="guilabel">Configure</span> to open the plugin's settig dialog where you can change the plugin's version and set plugin's parameter(s).

    <img src="/images/monaca_ide/manual/dependencies/cordova_plugin/config_plugin.png" width="" class="single_img">

    <figure>
        <img data-action="zoom" src="/images/monaca_ide/manual/dependencies/cordova_plugin/parameter.png" width="">
        <figcaption>
            Setting Dialog
        </figcaption>
    </figure>

{{%/excerpt%}}