---
title: Key Differences
weight: 10
---

Before starting to migrate your PhoneGap projects into Monaca, there are some key differences between PhoneGap and Monaca projects. Please read them through in order to have a seamless migration. 

## File/Folder structure	

File and folder structure of Monaca and PhoneGap project are quite different. Please see the following examples of PhoneGap and Monaca projects:

### PhoneGap Project Structure
{{<highlight javascript>}}
Project
├── config.xml
├── hooks
├── platforms
├── plugins
└── www
    ├── css
    ├── img
    ├── index.html
    ├── js
    ├── res
    │   ├── icon
    │   └── screen
    ├── spec
    └── spec.html
{{</highlight>}}

### Monaca Project Structure

{{<highlight javascript>}}
Project
├── config.xml
├── package.json
├── plugins
├── res
│   ├── android
│   ├── ios
│   └── winrt
└── www
    ├── components
    ├── css
    └── index.html
{{</highlight>}}

The main differences are `res` folder location and `package.json` file.   
In Monaca project, the default `res` folder is stored in the root folder. But your project's config.xml attributes `src` is set correctly, the default `res` folder is not used.   
Moreover, `package.json` file is required and used for managing Cordova plugins. 

Because of these differences, when importing a PhoneGap project into Monaca, some files and folders will be changed but don't worry. We will help you adjusting these changes as easy as possible. 

## Build environment    

Before getting started with the migration, you may want to know about the supported Cordova version and build environment in Monaca.

All newly created projects in Monaca will be using the latest supported Cordova version (currently, <b>Cordova 7.1</b>) by default. If you want to use a lower version, please [contact us](https://monaca.io/service/index.html).

|Cordova |Android platform|iOS platform|Windows platform|
|:-:|:-:|:-:|:-:|
| **cordova-7.1.0** |**6.4.0** |**4.5.4** |**5.0.0**|

For more information on build environment for lower Cordova version, pleaser refer to [Build Environment](/en/environment/).

## Remarks

When migrating a project into Monaca, there are a few things you should be aware of such as:

### When Installed Plugins are Disappeared

In Monaca, Cordova plugins are managed by `package.json` file. If your plugin information is defined in `config.xml` file, you will need to import them again into Monaca. Please refer to [Import Cordova Plugins](/en/products_guide/monaca_ide/dependencies/cordova_plugin/#import-cordova-plugins).

### When Using 3rd-party Cordova Plugins

Store-version Monaca Debugger (found in Google play or AppStore) only includes [Core Cordova plugins](/en/reference/cordova_6.5/). If your project contains any third-party Cordova plugins besides the Core Cordova plugins, you will need to build custom debugger to test this kind of project. Custom debugger will only include the plugins used in the project. Please refer to:

- [Build custom debugger for iOS]({{<ref "debugger_ios.en.md#how-to-build-custom-monaca-debugger">}})
- [Build custom debugger for Android]({{<ref "debugger_android.en.md#build-and-install-custom-monaca-debugger">}})

### When Using JS/CSS Component Page

In Monaca Cloud IDE, there is a GUI page for you to include CSS/JavaScript libraries. You can go there by going to {{<menu menu1="Configure" menu2="JS/CSS Component Settings">}}. Then, the following page will appear. 

{{<img src="/images/migration/phonegap/13.png">}}

You can then add various CSS/JavaScript libraries. However, this is only working if you include the following 2 lines into your `index.html` file:

{{<highlight html>}}
<!--Load selected JavaScript libraries-->
<script src="components/loader.js"></script>
<!--Load selected CSS libraries-->
<link rel="stylesheet" href="components/loader.css”> 
{{</highlight>}}


Please note that `loader.js` file is also loaded `cordova.js` file. Therefore, if you are going to include the above lines, you can remove this line: 

{{<highlight html>}}
<script src="cordova.js"></script>
{{</highlight>}}

**See Also:**

- [Guide for PhoneGap Build Users](/en/products_guide/migration/phonegap_migration/guide_for_phonegap_build/)
- [Guide for PhoneGap CLI Users](/en/products_guide/migration/phonegap_migration/guide_for_phonegap_cli/)
- [Guide for PhoneGap Desktop App Users](/en/products_guide/migration/phonegap_migration/guide_for_phonegap_desktop/)
- [Sample Apps](/en/sampleapp/samples/)