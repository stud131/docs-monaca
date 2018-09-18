---
title: Guide for PhoneGap Build Users
weight: 20
---

In this page, we will demonstrate a quick and easy steps to migrate a PhoneGap project into Monaca Cloud IDE. After finish this guide, you would be able to run, test/debug and build an app from your PhoneGap project using Monaca! Let's get started!


## Prerequisite

1. Before starting the migration process, please make sure to read about the [Key Differences](/en/products_guide/migration/phonegap_migration/introduction/) in order to have a seamless migration.   

## Importing PhoneGap project into Monaca Cloud IDE

1. Zip your PhoneGap project.

2. From Monaca [Dashboard](https://monaca.mobi/en/dashboard), select {{<guilabel name="Import">}} and choose `Upload Project Package`

    {{<img src="/images/migration/phonegap/cloud_upload_project_package.png" width="500px">}}

3. Browse your project ZIP file. 

    {{<img src="/images/migration/phonegap/cloud_choose_file.png" width="500px">}}

4. Input `Project Name` and `Descript` then Click {{<guilabel name="Import Project">}} to import the project into Monaca.

    {{<img src="/images/migration/phonegap/cloud_import_project.png" width="500px">}}    

5. Click {{<guilabel name="Open in Cloud IDE">}} to open your project in Monaca Cloud IDE.

    {{<img src="/images/migration/phonegap/cloud_open_project.png" width="400px">}}

6. Click {{<guilabel name="Run Update">}} to update your project to the latest Monaca's structure.

    {{<img src="/images/migration/phonegap/cloud_update_dialog.png" width="400px">}}

7. When the update process is finished, you can view your app in the [Preview window](/en/products_guide/monaca_ide/overview/#previewer) by clicking on `+` button then choose {{<guilabel name="New Previewer">}}

    {{<img src="/images/migration/phonegap/cloud_new_previewer.png">}}

    {{<note>}}
        The views or operations in the Preview window might not work properly when Ajax requests or Cordova APIs are used. Read more on {{<link title="Live Preview Limitations" href="https://docs.monaca.io/en/products_guide/monaca_ide/overview/#preivewer-limitations">}}. In this case, you can test/debug your project with Monaca Debugger (we will talk about this in the next section).
    {{</note>}}


## Debugging with Monaca

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

    {{<img src="/images/migration/phonegap/debugger_ide.png" width="350px">}}

4. Your project should now be running in the debugger. Go ahead and try out the various operations of your project! After that, try making some code changes and save them. Then, you should see the changes reflected in the debugger. 

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