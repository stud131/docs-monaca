---
title: PhoneGap BarcodeScanner Plugin
weight: 10
---

{{<note>}}
The PhoneGap BarcodeScanner plugin can be used from Cordova 7.1.
<br />
When using with android custom build debugger, you need to build config.xml with the following settings.
<br /><br />
&lt;reference name="monaca:ANDROID_DEBUGGER_APPCOMPAT_VERSION" value="27.+" /&gt;
{{</note>}}

{{<note>}}
When combining with the MonacaBackend plugin provided in the cordova 7.1, the following setting is required for "Install Parameters" on the plugin setting screen.
<br /><br />
ANDROID_SUPPORT_V4_VERSION=26.+
{{</note>}}

## iOS Quirks

Since iOS 10 it's mandatory to provide an usage description in the `info.plist` if trying to access privacy-sensitive data. When the system prompts the user to allow access, this usage description string will displayed as part of the permission dialog box, but if you didn't provide the usage description, the app will crash before showing the dialog. Also, Apple will reject apps that access private data but don't provide an usage description.

This plugins requires the following usage descriptions:

- `NSCameraUsageDescription` specifies the reason for your app to access the device's camera.

To add these entries into the `info.plist`, you can use the `<edit-config>` tag in the `config.xml` file like this:

{{<highlight xml>}}
<edit-config target="NSCameraUsageDescription" file="*-Info.plist" mode="merge">
    <string>To scan barcodes</string>
</edit-config>
{{</highlight>}}

## Enable Plugin in Monaca

1.  From the IDE menu, go to {{<menu menu1="Configure" menu2="Cordova Plugin Settings">}}.

2.  Under *Available Plugins* section, hover over the the `Phonegap BarcodeScanner` plugin and click {{<guilabel name="Enable">}} button.

    {{<img src="/images/reference/third_party_phonegap/phonegap_plugin_barcodescanner/1.png">}}

## PhoneGap BarcodeScanner Demo

Here is a simple example demonstrating how to use the PhoneGap BarcodeScanner Plugin with Monaca:

{{<highlight javascript>}}
<!DOCTYPE HTML>
<html>
<head>
  <title>PhoneGap BarcodeScanner Plugin DEMO</title>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta http-equiv="Content-Security-Policy" content="default-src * data: gap: https://ssl.gstatic.com; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'">
  <script src="components/loader.js"></script>
  <link rel="stylesheet" href="components/loader.css">
  <link rel="stylesheet" href="css/style.css">
  <script>
    function scanBarcode() {
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
        },
        function (error) {
          alert("Scanning failed: " + error);
        },
        {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
        }
      );
    }
  </script>
</head>
<body>
  <hr> BarcodeReader DEMO <hr><br>
  <input type="button" onClick ="scanBarcode()" value ="Scan" />
</body>
</html>
{{</highlight>}}

See Also:

- [Core Cordova Plugins](../../cordova_7.1)
- [Monaca Power Plugins](../../power_plugins)
