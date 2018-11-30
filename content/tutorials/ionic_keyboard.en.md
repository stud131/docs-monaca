---
title: "Cordova Ionic Keyboard Plugin"
weight: 120
---

Keyboard plugin for Cordova apps.

- Repo: https://github.com/ionic-team/cordova-plugin-ionic-keyboard
- Plugin ID/Package Name: `cordova-plugin-ionic-keyboard`
- Tested Version: `2.1.2`

{{<note>}}
To check third party cordova plugins, you need to create a custom build debugger ( {{<link title="Android version" href="https://docs.monaca.io/en/products_guide/debugger/installation/debugger_android/#build-and-install-custom-monaca-debugger">}} or {{<link title="iOS version" href="https://docs.monaca.io/en/products_guide/debugger/installation/debugger_ios/#how-to-build-custom-monaca-debugger">}} ).
{{</note>}}

## Demo 

{{<import pid="5b29e4e1e788857854dba6d9" title="Ionic Keyboard Demo">}}

{{<figure src="/images/samples/ionic_keyboard.png">}}

## Enable the Plugin in Monaca IDE

1.  From the IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.

2.  Click on {{<guilabel name="Import Cordova Plugin">}} button. Then, you can choose to import the plugin using a ZIP file or URL/Package Name. 

## API References

In this page, we only describe some main APIs used in our [Demo](https://monaca.mobi/directimport?pid=5b29e4e1e788857854dba6d9). For a complete API references, please refer to [here](https://github.com/ionic-team/cordova-plugin-ionic-keyboard).

### show()

Show the keyboard.

{{<highlight javascript>}}
Keyboard.show();
{{</highlight>}}

{{<note>}}
    <code>Keyboard.show()</code> is not supported in iOS due to platform limitations. Therefore, please use <code>focus()</code> of <code>input</code> element instead.
{{</note>}}    

**Example**

{{<highlight javascript>}}

//For Android
Keyboard.show();

//For iOS
inputElement.focus();
{{</highlight>}}


### hide()

Hide the keyboard.

{{<highlight javascript>}}
Keyboard.hide();
{{</highlight>}}

**Example**

{{<highlight javascript>}}
Keyboard.hide();
{{</highlight>}}

