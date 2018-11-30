---
title: "Cordova Social Sharing Plugin"
weight: 130
---

This Cordova plugin is used share text, files, images, and links via social networks, sms, and email.

- Repo: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
- Plugin ID/Package Name: `cordova-plugin-x-socialsharing`
- Tested Version: `5.4.0`

{{<note>}}
To check third party cordova plugins, you need to create a custom build debugger ( {{<link title="Android version" href="https://docs.monaca.io/en/products_guide/debugger/installation/debugger_android/#build-and-install-custom-monaca-debugger">}} or {{<link title="iOS version" href="https://docs.monaca.io/en/products_guide/debugger/installation/debugger_ios/#how-to-build-custom-monaca-debugger">}} ).
{{</note>}}

## Demo 

{{<import pid="5b29ede3e788853905dba6d9" title="Social Sharing Demo">}}

{{<figure src="/images/samples/social_sharing.png">}}

## Enable the Plugin in Monaca IDE

1.  From the IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.

2.  Click on {{<guilabel name="Import Cordova Plugin">}} button. Then, you can choose to import the plugin using a ZIP file or URL/Package Name. 

## API References

In this page, we only describe some main APIs used in our [Demo](https://monaca.mobi/directimport?pid=5b29ede3e788853905dba6d9). For a complete API references, please refer to [here](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin).

### shareViaFacebook()

Share to Facebook. 

{{<highlight javascript>}}
window.plugins.socialsharing.shareViaFacebook(message, image, url)
{{</highlight>}}

{{<note>}}
    A valid authentication on Facebook app on the device is required to use this function. 
{{</note>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`message` | String | Message
`image` | String | Image's source
`url` | String | website url

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
  window.plugins.socialsharing.shareViaFacebook(
    'Sharing via Facebook', 
    img.src, 
    "www.monaca.io"
  );
{{</highlight>}}

### shareViaTwitter()

Share to Twitter. 

{{<highlight javascript>}}
window.plugins.socialsharing.shareViaTwitter(message, image, url)
{{</highlight>}}

{{<note>}}
    A valid authentication on Twitter app on the device is required to use this function. 
{{</note>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`message` | String | Message
`image` | String | Image's source
`url` | String | website url

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
  window.plugins.socialsharing.shareViaTwitter(
    'Message and link via Twitter', 
    img.src, 
    "www.monaca.io" 
  );
{{</highlight>}}

### shareViaInstagram()

Share to Instagram. 

{{<highlight javascript>}}
window.plugins.socialsharing.shareViaInstagram(message, image)
{{</highlight>}}

{{<note>}}
    A valid authentication on Instagram app on the device is required to use this function. 
{{</note>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`message` | String | Message
`image` | String | Image's source

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
  window.plugins.socialsharing.shareViaInstagram(
    'Message via Instagram', 
    img.src
  );
{{</highlight>}}

