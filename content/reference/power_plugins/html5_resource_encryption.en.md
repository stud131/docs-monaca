---
title: Monaca HTML5 Resource Encryption
weight: 10
---

This plugin provides the encryption function for HTML5 assets bundled up
with the built app in Monaca and the decoding function for application
execution time.

{{<note>}}
In order to use this plugin, you are required to subscribe to a valid plan. Please refer to {{<link href="https://monaca.mobi/en/pricing" title="Monaca Subscription Plans">}}.
{{</note>}}

## Supported Platforms

-   Cordova 6.2 or higher
-   iOS 7 or higher
-   Android 4.0 or higher

## Encryption Scheme

- Encryption Method: `AES`
- Key Length: `256` bits

## Adding the Plugin in Monaca Cloud IDE

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Configure" menu2="Cordova Plugin Settings">}}.

2.  Under *Available Plugins* section, hover over the the `Encrypt` plugin and click {{<guilabel name="Enable">}} button.

    {{<img src="/images/reference/power_plugins/html5_resource_encryption/5.png">}}

3.  Find the newly added plugin under the *Enabled Plugins* section.
    Then, hover the plugin and click {{<guilabel name="Configure">}} button.

    {{<img src="/images/reference/power_plugins/html5_resource_encryption/6.png">}}

4.  Enter parameter(s) for this plugin. Then, click {{<guilabel name="OK">}} button. Available
    parameters are as follows:

    Parameter | Type | Description
    ----------|------|----------------
    `SECRET` | String | [Required] Password/secret for the encryption.
    `TARGETS` | String | [Optional] Target folder of the project files to be encrypted. <ul><li>`www` folder (default) 。</li><li>To set multiple folders, separate them with `,` (comma).<br />Example: TARGETS＝www/data,www/js</li></ul>
    `AUTO_DECRYPT` | Boolean | [Optional] Auto decryption options: <ul><li>`1`: (default) for enabling auto decryption</li><li>`0`: for disabling auto decryption</li></ul>

    {{<img src="/images/reference/power_plugins/html5_resource_encryption/7.png" width="500">}}

## Manual Decryption

You can also manually decrypt the configured target folder. The target
folder is encrypted and can't be read until the
`monaca.Encrypt.setDecryptHash()` function is executed. In other words,
it can not be read with the script tag in `index.html` file.

Please follow the steps below on how to use manual decryption:

### Step 1: Enabling the Manual Decryption Option

In order to enable manual decryption, please set `AUTO_DECRYPT` to `0`
in the plugin configuration (Step 4 in the previous section).

### Step 2: Getting the Hash Code for Decryption

A hash code is required when calling `monaca.Encrypt.setDecryptHash()`
function to decrypt the target folder(s). The hash code can be found in
the build log as follows:

1.  Build your project (either iOS or Android).
2.  Once the build is successfully completed, click on `here` (as shown in
    the screenshot below) button to see the build log.

    {{<img src="/images/reference/power_plugins/html5_resource_encryption/8.png">}}

5.  Copy the build log and paste it in any text editor and find the hash
    code which looks like this:

    {{<highlight javascript>}}
...
Hash : [4c716d***************************************************ae9f720d]
...{{</highlight>}}

### Step 3: Calling the Decryption Function

Once you have the hash code, you can start using the decryption
function. The function needs to be called inside the `deviceready`
event. For example:

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    monaca.Encrypt.setDecryptHash(
        function() {alert('SUCESS');},
        function() {alert('FAIL');},
    "4c716d***************************************************ae9f720d"); // Hash code for decryption
}
{{</highlight>}}

{{<note>}}
In the above example, the hash code is embedded directly in the
function. For security concern, you can also hide it by loading the
value from the server and use it under a parameter.
{{</note>}}

## App Store Submission

In this plugin, we use the encryption library of iOS SDK. Therefore, in
order to release the built app embedded this plugin to the AppStore, you
need to set 2 options when you submit your app for a review. Under the
Export Compliance section, please choose "Yes" for both questions as
shown in the screenshot below:

{{<figure src="/images/reference/power_plugins/html5_resource_encryption/4.png">}}

