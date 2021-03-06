---
title: Share Plugin (Android)
weight: 40
---

Share plugin lets an app to share data with other apps like Gmail,
DropBox, etc.

{{<note>}}
This plugin is available only to Android platform.
{{</note>}}

## Enable Plugin in Monaca

1.  From the IDE menu, go to {{<menu menu1="Configure" menu2="Cordova Plugin Settings">}}.

2.  Under *Available Plugins* section, hover over the the `Share` plugin and click {{<guilabel name="Enable">}} button.

    {{<img src="/images/reference/third_party_phonegap/share/1.png">}}

## Methods

Function Name| Description
-------------|----------------------------------------------------------
show(func)   |Show a list of apps for user to choose and share the data when an app is selected.


## Share Plugin Demo

{{<highlight html>}}
<!DOCTYPE HTML>
<html>
<head>
  <title>Cordova - Share Plugin Demo</title>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta http-equiv="Content-Security-Policy" content="default-src * data: gap: content: https://ssl.gstatic.com; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'">
  <script src="components/loader.js"></script>
  <link rel="stylesheet" href="components/loader.css">

  <script type="text/javascript">

    function shareDemo() {
      window.plugins.share.show(
          {
              subject: 'Subject test',
              text: 'text http://phonegap-fan.com/'
          },
          function() {}, // Success function
          function() {alert('Share failed')} // Failure function
      );
    }
  </script>
</head>

<body bgcolor="#ffffff">
  <hr> Share Plugin Demo<hr><br>
  <input type="button" onClick ="shareDemo()" value ="shareDemo" />
</body>
</html>
{{</highlight>}}

See Also:

- [Core Cordova Plugins](../../cordova_7.1)
- [Monaca Power Plugins](../../power_plugins)
