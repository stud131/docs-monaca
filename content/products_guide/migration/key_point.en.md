---
title: Key Points
weight: 10
---

Before starting to migrate your projects into Monaca, there are some key points you need to pay attention to in order to have a seamless migration. 


## Build environment    

Before getting started with the migration, you may want to know about the supported Cordova version and build environment in Monaca.

All newly created projects in Monaca will be using the latest supported Cordova version (currently, <b>Cordova 7.1</b>) by default.

|Cordova |Android platform|iOS platform|Windows platform|
|:-:|:-:|:-:|:-:|
| **cordova-7.1.0** |**6.4.0** |**4.5.4** |**5.0.0**|

For more information on build environment for lower Cordova version, pleaser refer to [Build Environment](/en/environment/).


## Installed Plugins

In Monaca, Cordova plugins are managed by `package.json` file. If your plugin information is defined in `config.xml` file, you will need to import them again into Monaca. Please refer to [Import Cordova Plugins](/en/products_guide/monaca_ide/dependencies/cordova_plugin/#import-cordova-plugins).

## 3rd-party Cordova Plugins

Store-version Monaca Debugger (found in Google play or AppStore) only includes [Core Cordova plugins](/en/reference/cordova_6.5/). If your project contains any third-party Cordova plugins besides the Core Cordova plugins, you will need to build custom debugger to test this kind of project. Custom debugger will only include the plugins used in the project. Please refer to:

- [Build custom debugger for iOS]({{<ref "debugger_ios.en.md#how-to-build-custom-monaca-debugger">}})
- [Build custom debugger for Android]({{<ref "debugger_android.en.md#build-and-install-custom-monaca-debugger">}})

## JS/CSS Component

There is a GUI page for you to manage CSS/JavaScript libraries.

- For Monaca CLI, you can open the GUI page by running `monaca remote config` from the project directory.
- For Monaca Localkit, you can go there by clicking on `Settings` menu.

{{<img src="/images/migration/js_css_components.png">}}

You can then add various CSS/JavaScript libraries. However, this is only working if you include the following 2 lines into your `index.html` file:

{{<highlight html>}}
<!--Load selected JavaScript libraries-->
<script src="components/loader.js"></script>
<!--Load selected CSS libraries-->
<link rel="stylesheet" href="components/loader.css"> 
{{</highlight>}}


Please note that `loader.js` file is also loaded `cordova.js` file. Therefore, if you are going to include the above lines, you can remove this line: 

{{<highlight html>}}
<script src="cordova.js"></script>
{{</highlight>}}

## Output Directory

Lastly, please stay alert to the following points since it is neccessary for working with Monaca Debugger and Monaca Build Server.

- The output folder for building process must be `www`. You may need to change the build output to `www`.
- Make sure that opening `index.html` over `file://` works. For example, you may need to set `<base href="./"` in the `index.html`.

**See Also:**

- [Migrating from Other Platforms](/en/products_guide/migration/)
- [Sample Apps](/en/sampleapp/samples/)