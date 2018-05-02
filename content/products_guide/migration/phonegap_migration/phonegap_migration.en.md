---
title: Migrating from PhoneGap Platform
weight: 20
---

In this page, we will demonstrate a quick and easy steps to migrate a PhoneGap project into Monaca. After finish this guide, you would be able to run, test/debug and build an app from your PhoneGap project using Monaca! Let's get started!

## Differences between PhoneGap & Monaca project

### File/Folder structure	

File and folder structure of Monaca and PhoneGap project are quite different. Please see the following examples of PhoneGap and Monaca projects:

#### PhoneGap

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

#### Monaca

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

The main differences are `res` folder location and `package.json` file. In Monaca project, `res` folder is stored in the root folder. Moreover, `package.json` file is required and used for managing Cordova plugins. 

Because of these differences, when importing a PhoneGap project into Monaca, some files and folders will be changed but don't worry. We will help you adjusting these changes as easy as possible. 

### Development Environment

Monaca development eco-system is quite similar to PhoneGap. For this reason, the following Monaca development tools can be used as alternatives to some PhoneGap development tools such as:

- Phonegap Build &rarr; [Monaca Cloud IDE](/en/products_guide/monaca_ide/)
- Phonegap CLI &rarr; [Monaca CLI](/en/products_guide/monaca_cli/)
- Phonegap Desktop app &rarr; [Monaca Localkit](/en/products_guide/monaca_localkit/)
- PhoneGap Developer app &rarr; [Monaca Debugger](/en/products_guide/debugger/)

### Build environment    

Before getting started with the migration, you may want to know about the supported Cordova version and build environment in Monaca.

All newly created projects in Monaca will be using the latest supported Cordova version (currently, <b>Cordova 7.1</b>) by default. If you want to use a lower version, please [contact us](https://monaca.io/service/index.html).

<br />
Build environment for Cordova 7.1:

- Cordova Android platform: `6.4.0` (API level 26)
- Gradle version: `4.3.1`
- Cordova iOS platform: `4.5.4` 
- Xcode: `9`

For more information on build environment for lower Cordova version, pleaser refer to [Build Environment](/en/environment/).


## Migration Guides

### Before Start Migrating

[Create Monaca Account with PhoneGap ID](https://monaca.mobi/en/oauth/phonegap/authorize)

### Step 1: Importing PhoneGap project into Monaca Cloud IDE

1. Zip your PhoneGap project. 

2. From Monaca [Dashboard](https://monaca.mobi/en/dashboard), select {{<guilabel name="Import">}}.

3. Enter a project name and choose `Upload Project Package` option. Then, browse your project ZIP file. 

    {{<img src="/images/migration/phonegap/2.png" width="500px">}}

4. Click {{<guilabel name="Import">}} to import the project into Monaca.

5. Click {{<guilabel name="Open">}} to open your project in Monaca Cloud IDE.

    {{<img src="/images/migration/phonegap/3.png" width="400px">}}

6. When the IDE appears, you can view your app in the [Preview window](https://docs.monaca.io/en/products_guide/monaca_ide/overview/#live-preview). 

    {{<img src="/images/migration/phonegap/4.png">}}

    {{<note>}}
        The views or operations in the Preview window might not work properly when Ajax requests or Cordova APIs are used. Read more on {{<link title="Live Preview Limitations" href="https://docs.monaca.io/en/products_guide/monaca_ide/overview/#live-preivew-limitations">}}. In this case, you can test/debug your project with Monaca Debugger (we will talk about this in the next section).
    {{</note>}}

### Step 2: Adjusting the Changes

As mentioned in [File/Folder structure](#file-folder-structure), your project's file/folder will be changes after importing into Monaca. In this section, we will explain you about the changes and how you can adjust them to your original configurations.

#### 1. Including `cordova.js` File with Monaca

After importing the project, a new `components` folder is added in `www` folder. This folder is used to store JS/CSS libraries which you can add using [JS/CSS Components page]({{ref "components.en.md"}}). `components/loader.js` and `components/loader.css` file are used to load the added JavaScript and CSS libraries, respectively. 

`components/loader.js` is not only used to load JavaScript libraries but also `cordova.js` file. For this reason, instead of having the following `<script>` tag:

{{<highlight html>}}
<script type="text/javascript" src="cordova.js"></script>
{{</highlight>}}

Please use this `<script>` tag instead: 

{{<highlight html>}}
<script src="components/loader.js"></script>
{{</highlight>}}

#### 2. Cordova Plugins Management

After importing the project, a `package.json` file is created in the root folder. This file is used to manage Cordova plugins in Monaca project. You will need to add them back one by one as follows:

1. From Monaca Cloud IDE menu, go to {{<menu menu1="Configure" menu2="Cordova Plugin Settings">}}.

2. The Cordova Plugins page will appear. There are some most common Cordova plugins available for you to enable directly from Monaca. If you couldn't find the plugin you need there, click on {{<guilabel name="Import Cordova Plugin">}} button to add third-party Cordova plugin. 

    {{<img src="/images/migration/phonegap/5.png">}}

3. When the Import Cordova Plugin dialog appear, you can choose to add the plugin in 3 different ways such as:

    - via ZIP package
    - Package URL
    - Package name or Plugin ID

    {{<img src="/images/migration/phonegap/6.png" width="500px">}}

4. After you are done, click {{<guilabel name="OK">}}. The plugin will be installed during build.  

5. If the plugin requires parameter(s), you can configure it by hovering the plugin and click on {{<guilabel name="Configure">}}.

    {{<img src="/images/migration/phonegap/7.png">}}

6. When the Settings dialog appear, you can input the required parameter(s). For example:

    {{<img src="/images/migration/phonegap/8.png" width="500px">}}

## Debugging with Monaca

Until this point, we assume that you have successfully adjusted your imported project with Monaca. Then, it is time to start testing the project!

[Monaca Debugger](/en/products_guide/debugger/) is an application for testing and debugging your Monaca apps on real devices in real-time. When developing Monaca apps in the Cloud IDE, all changes made to your project file(s) will be synced with your Monaca Debugger in real-time as soon as you save them. 

Let's get started with Monaca Debugger as follows:

1. Install Monaca Debugger app on your device from Google Play or AppStore.

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/App_Store.jpg" width="100" link="https://itunes.apple.com/us/app/monaca/id550941371?mt=8">}}
    {{<img src="/images/monaca_ide/tutorial/testing_debugging/Google_play.png" width="100" link="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en">}}

    {{<note>}}
        If you want to install Monaca Debugger on Android emulator, please refer to {{<link href="/en/products_guide/debugger/installation/debugger_emulator/" title="Monaca Debugger for Android Emulator">}}.
    {{</note>}}

2. Launch Monaca Debugger app and sign in with your Monaca account. Make sure you are using the same account for Monaca Cloud IDE.

    {{<img src="/images/migration/phonegap/9.png" width="300px">}}

3. To run a project, simply tap on the project name in Monaca Debugger or click on {{<menu menu1="Run" menu2="Run on Device">}} in Monaca Cloud IDE.

    {{<img src="/images/migration/phonegap/10.png" width="300px">}}

4. Your project should now be running in the debugger. Go ahead and try out the various operations of your project!

5. Let's make some code changes in your project in the Cloud IDE and save them. Then, you should see the changes reflected in the debugger. 

## Building the app

After knowing how to debug your app, let's start building it. For simplicity, we only show how to create a debug build for Android in this guide. 

1. From Monaca Cloud IDE, go to {{<menu menu1="Build" menu2="Build App for Android">}}.

2. The debug build is selected by default. Click {{<guilabel name="Start Build">}}. Then, the build window will be opened in a new tab.

    {{<img src="/images/migration/phonegap/11.png">}}

3. It may take several minutes for the build to complete. Please wait. The following screen will appear after the build is successfully completed. You can then choose various ways to install the build app into your device. 

    {{<img src="/images/migration/phonegap/12.png">}}

That's it! With just that you've succesfully built the migrated project with Monaca! That's easy, right? 

## Remarks

When migrating a project into Monaca, there are a few things you should be aware of such as:

### When using third-party Cordova plugins

Store-version Monaca Debugger (found in Google play or AppStore) only includes [Core Cordova plugins](/en/reference/cordova_6.5/). If your project contains any third-party Cordova plugins besides the Core Cordova plugins, you will need to build custom debugger to test this kind of project. Custom debugger will only include the plugins used in the project. Please refer to:

- [Build custom debugger for iOS]({{<ref "debugger_ios.en.md#how-to-build-custom-monaca-debugger">}})
- [Build custom debugger for Android]({{<ref "debugger_android.en.md#build-and-install-custom-monaca-debugger">}})

### When using JS/CSS Component page

In Monaca Cloud IDE, there is a GUI page for you to include CSS/JavaScript libraries. You can go there by going to {{<menu menu1="Config" menu2="Manage JS/CSS Components">}}. Then, the following page will appear. 

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

## Where to go from here

To learn more about Monaca, please refer to the following materials:

- [Monaca Cloud IDE tutorials](/en/tutorials/monaca_ide/)
- [Monaca Cloud IDE manual](/en/products_guide/monaca_ide/)
- [Sample Apps](/en/sampleapp/samples/)