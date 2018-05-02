---
title: Guide for PhoneGap Desktop app Users
weight: 20
---

In this page, we will demonstrate a quick and easy steps to migrate a PhoneGap project into Monaca. After finish this guide, you would be able to run, test/debug and build an app from your PhoneGap project using Monaca! Let's get started!


## Before Start Migrating

1. [Create Monaca Account with PhoneGap ID](https://monaca.mobi/en/oauth/phonegap/authorize)
2. Download the latest version of Monaca Localkit [here](https://monaca.io/localkit.html). 
3. Open Monaca Localkit and then sign in using Monaca account.

	{{<img src="/images/monaca_localkit/manual/overview/1.png" width="400">}}
    

## Importing PhoneGap project into Monaca Localkit

1. Click Plus Button in Side menu
2. Click `Import` and then select `From Local Cordova Project`
3. Enter your project Directory and Project Name 

	{{<img src="/images/migration/phonegap/localkit_import_project.png" width="400">}}


## Building the app

After your app migration, let's start building it. For simplicity, we only show how to create a debug build for Android in this guide. 

1. Select {{<guilabel name="Remote Build">}}

	{{<img src="/images/migration/phonegap/localkit_select_remote_build.png" width="400">}}

2. The debug build is selected by default. Click {{<guilabel name="Start Build">}}. 

    {{<img src="/images/migration/phonegap/localkit_debug_build.png">}}

3. It may take several minutes for the build to complete. Please wait. The following screen will appear after the build is successfully completed. You can then choose various ways to install the build app into your device. 

    {{<img src="/images/migration/phonegap/localkit_build_success.png">}}

That's it! With just that you've succesfully built the migrated project with Monaca! That's easy, right? 


## Where to go from here

To learn more about Monaca, please refer to the following materials:

- [Monaca Localkit tutorials](/en/tutorials/monaca_localkit/)
- [Monaca Localkit manual](/en/products_guide/monaca_localkit/)
- [Sample Apps](/en/sampleapp/samples/)