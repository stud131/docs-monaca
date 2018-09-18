---
title: Migrating from Telerik Platform
weight: 100
aliases: /en/products_guide/telerik_migration
---

In this page, we will demonstrate a quick and easy steps to migrate a Telerik AppBuilder project into Monaca. After finish this guide, you would be able to run, test/debug and build an app from your telerik project using Monaca! Let's get started!

## Cordova version & Build Environment

Before getting started with the migration, you may want to know about the supported Cordova version and build environment in Monaca.

All newly created projects in Monaca will be using the latest supported Cordova version (currently, <b>Cordova 7.1</b>) by default. If you want to use a lower version, please [contact us](https://monaca.io/service/index.html).

<br />
Build environment for Cordova 7.1:

- Cordova Android platform: `6.4.0` (API level 26)
- Gradle version: `4.3.1`
- Cordova iOS platform: `4.5.4` 
- Xcode: `9`

For more information on build environment for lower Cordova version, pleaser refer to [Build Environment](/en/environment/).

## Step 1: Preparation

Use Telerik tool to convert your project to Cordova CLI. This will convert your project into a Cordova project. Then, zip your project.

## Step 2: Importing to Monaca Cloud IDE

1. From Monaca [Dashboard](https://monaca.mobi/en/dashboard), select {{<guilabel name="Import">}}.

2. Enter a project name and choose `Upload Project Package` option. Then, browse your project ZIP file. 

    {{<img src="/images/migration/telerik/2.png" width="500px">}}

3. Click {{<guilabel name="Import">}} to import the project into Monaca.

4. Click {{<guilabel name="Open">}} to open your project in Monaca Cloud IDE.

    {{<img src="/images/migration/telerik/3.png" width="400px">}}

5. When the IDE appears, you can view your app in the [Preview window](https://docs.monaca.io/en/products_guide/monaca_ide/overview/#live-preview). 

    {{<img src="/images/migration/telerik/4.png">}}

    {{<note>}}
        The views or operations in the Preview window might not work properly when Ajax requests or Cordova APIs are used. Read more on {{<link title="Live Preview Limitations" href="https://docs.monaca.io/en/products_guide/monaca_ide/overview/#live-preivew-limitations">}}. In this case, you can test/debug your project with Monaca Debugger (we will talk about this in the next section).
    {{</note>}}

## Step 3: Debugging with Monaca

[Monaca Debugger](/en/products_guide/debugger/) is an application for testing and debugging your Monaca apps on real devices in real-time. When developing Monaca apps in the Cloud IDE, all changes made to your project file(s) will be synced with your Monaca Debugger in real-time as soon as you save them. 

Let's get started with Monaca Debugger as follows:

1. Install Monaca Debugger app on your device from Google Play or AppStore.

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/App_Store.jpg" width="100" link="https://itunes.apple.com/us/app/monaca/id550941371?mt=8">}}
    {{<img src="/images/monaca_ide/tutorial/testing_debugging/Google_play.png" width="100" link="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en">}}

    {{<note>}}
        If you want to install Monaca Debugger on Android emulator, please refer to {{<link href="/en/products_guide/debugger/installation/debugger_emulator/" title="Monaca Debugger for Android Emulator">}}.
    {{</note>}}

2. Launch Monaca Debugger app and sign in with your Monaca account. Make sure you are using the same account for Monaca Cloud IDE.

    {{<img src="/images/migration/telerik/5.png" width="350px">}}

3. To run a project, simply tap on the project name in Monaca Debugger or click on {{<guilabel name="Run on Device">}} in Monaca Cloud IDE.

    {{<img src="/images/migration/telerik/6.png" width="350px">}}

4. Your project should now be running in the debugger. Go ahead and try out the various operations of your project!

5. Let's make some code changes in your project in the Cloud IDE and save them. Then, you should see the changes reflected in the debugger. 

## Step 4: Building the app

After knowing how to debug your app, let's start building it. For simplicity, we only show how to create a debug build for Android in this guide. 

1. From Monaca Cloud IDE, go to {{<menu menu1="Build" menu2="Build App for Android">}}.

    {{<img src="/images/migration/telerik/7.png">}}

2. The debug build is selected by default. Click {{<guilabel name="Start Build">}}. Then, the build window will be opened in a new tab.

    {{<img src="/images/migration/telerik/8.png">}}

3. It may take several minutes for the build to complete. Please wait. The following screen will appear after the build is successfully completed. You can then choose various ways to install the build app into your device. 

    {{<img src="/images/migration/telerik/9.png">}}

That's it! With just that you've succesfully built the migrated project with Monaca! That's easy, right? 

## Remarks

When migrating a project into Monaca, there are a few things you should be aware of such as:

### When using third-party Cordova plugins

Store-version Monaca Debugger (found in Google play or AppStore) only includes [Core Cordova plugins](/en/reference/cordova_6.5/). If your project contains any third-party Cordova plugins besides the Core Cordova plugins, you will need to build custom debugger to test this kind of project. Custom debugger will only include the plugins used in the project. Please refer to:

- [Build custom debugger for iOS]({{<ref "debugger_ios.en.md#how-to-build-custom-monaca-debugger">}})
- [Build custom debugger for Android]({{<ref "debugger_android.en.md#build-and-install-custom-monaca-debugger">}})

### When using JS/CSS Component page

In Monaca Cloud IDE, there is a GUI page for you to include CSS/JavaScript libraries. You can go there by going to {{<menu menu1="Configure" menu2="JS/CSS Component Settings">}}. Then, the following page will appear. 

{{<img src="/images/migration/telerik/10.png">}}

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
