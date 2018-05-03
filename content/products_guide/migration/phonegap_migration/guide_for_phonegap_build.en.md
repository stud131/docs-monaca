---
title: Guide for PhoneGap Build Users
weight: 20
---

In this page, we will demonstrate a quick and easy steps to migrate a PhoneGap project into Monaca. After finish this guide, you would be able to run, test/debug and build an app from your PhoneGap project using Monaca! Let's get started!


## Before Start Migrating

[Create Monaca Account with PhoneGap ID](https://monaca.mobi/en/oauth/phonegap/authorize)

## Importing PhoneGap project into Monaca Cloud IDE

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


## Building the app

After your app migration, let's start building it. For simplicity, we only show how to create a debug build for Android in this guide. 

1. From Monaca Cloud IDE, go to {{<menu menu1="Build" menu2="Build App for Android">}}.

2. The debug build is selected by default. Click {{<guilabel name="Start Build">}}. Then, the build window will be opened in a new tab.

    {{<img src="/images/migration/phonegap/11.png">}}

3. It may take several minutes for the build to complete. Please wait. The following screen will appear after the build is successfully completed. You can then choose various ways to install the build app into your device. 

    {{<img src="/images/migration/phonegap/12.png">}}

That's it! With just that you've succesfully built the migrated project with Monaca! That's easy, right? 


## Where to go from here

To learn more about Monaca, please refer to the following materials:

- [Monaca Cloud IDE Tutorial](/en/tutorials/monaca_ide/)
- [Monaca Cloud IDE Manual](/en/products_guide/monaca_ide/)
- [Sample Apps](/en/sampleapp/samples/)