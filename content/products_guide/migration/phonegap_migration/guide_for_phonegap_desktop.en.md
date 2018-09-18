---
title: Guide for PhoneGap Desktop App Users
weight: 40
---

In this page, we will demonstrate a quick and easy steps to migrate a PhoneGap project into Monaca using [Monaca Localkit](/en/products_guide/monaca_localkit/). After finish this guide, you would be able to run, test/debug and build an app from your PhoneGap project using Monaca! Let's get started!


## Prerequisite

1. Before starting the migration process, please make sure to read about the [Key Differences](/en/products_guide/migration/phonegap_migration/introduction/) in order to have a seamless migration.   

2. Download and install the latest version of Monaca Localkit [here](https://monaca.io/localkit.html).    

## Importing PhoneGap project into Monaca Localkit

1. Open Monaca Localkit and sign in with your Monaca account.  

	{{<img src="/images/monaca_localkit/manual/overview/1.png">}}

2. Click on the `+` button. Then, select {{<menu menu1="Import" menu2="From Local Cordova Project">}}.

	{{<img src="/images/migration/phonegap/localkit_import_project.png">}}

3. Select your project directory and enter the project name. 

	{{<img src="/images/migration/phonegap/localkit_project_info.png" width="500">}}

## Migration Steps

1. Click {{<guilabel name="OK">}} to continue.

    {{<img src="/images/migration/phonegap/localkit_migrate_dialog.png" width="500">}}

2. Backup your project and click {{<guilabel name="OK">}} to continue.

    {{<img src="/images/migration/phonegap/localkit_backup.png" width="500">}}

3. Click {{<guilabel name="No">}} since PhoneGap project is not a transpile project.

    {{<img src="/images/migration/phonegap/localkit_transpile.png" width="500">}}

4. Click {{<guilabel name="OK">}} and it's done!

    {{<img src="/images/migration/phonegap/localkit_migrate_success.png" width="500">}}

## Debugging with Monaca Localkit

[Monaca Debugger](/en/products_guide/debugger/) is an application for testing and debugging your Monaca apps on real devices in real-time. When developing Monaca apps on your local PC, assuming that your local PC is successfully paired with Monaca Debugger, all changes made to your project files will be pushed into your Monaca Debugger as soon as you save those changes.

Let's get started with Monaca Debugger as follows:

1. Install Monaca Debugger app on your device from Google Play or AppStore.

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/App_Store.jpg" width="100" link="https://itunes.apple.com/us/app/monaca/id550941371?mt=8">}}
    {{<img src="/images/monaca_ide/tutorial/testing_debugging/Google_play.png" width="100" link="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en">}}

    {{<note>}}
        If you want to install Monaca Debugger on Android emulator, please refer to {{<link href="/en/products_guide/debugger/installation/debugger_emulator/" title="Monaca Debugger for Android Emulator">}}.
    {{</note>}}

2. Launch Monaca Debugger app and sign in with your Monaca account. Make sure you are using the same account for Monaca Localkit.

    {{<img src="/images/migration/telerik/5.png" width="350px">}}

3. Once logged in, Monaca Debugger should be able to detect the local PC. Then, a popup message prompting you to pair the debugger with the local PC will appear inside Monaca Debugger.

    {{<img src="/images/monaca_cli/tutorial/testing_debugging/2.png" width="350">}}

4. If Monaca Debugger could not detect the local PC, please pay attention to the following points:

    - Monaca Debugger and the local PC have to connect to the same network connection (LAN or Wi-Fi).
    - Disable the local PC’s firewall.

5. If your pairing is successful, your local project name will appear under `Local Projects` in Monaca Debugger. However, if you fail the pairing, please refer to [Fail to Pair Monaca Debugger](/en/products_guide/debugger/troubleshooting/#fail-to-pair-monaca-debugger).

    {{<img src="/images/migration/phonegap/debugger_cli.png" width="350">}}

6. To run a project, simply tap on the project name in Monaca Debugger (as shown in the above picture) or click on {{<guilabel name="Run">}} button in Monaca Localkit.

7. Your project should now be running in the debugger. Go ahead and try out the various operations of your project! After that, try making some code changes and save them. Then, you should see the changes reflected in the debugger. 

{{<note>}}
	In order to stop debugging and unpair the debugger, please refer to {{<link title="Stop Pairing" href="http://localhost:1313/en/products_guide/monaca_localkit/pairing_debugging/#stop-pairing">}}.
{{</note>}}

## Building the app

After your app migration, let's start building it. For simplicity, we only show how to create a debug build for Android in this guide. 

1. Before starting to build, you will need to upload your project to Monaca Cloud first by clicking on {{<guilabel name="Upload">}} button.

	{{<img src="/images/migration/phonegap/localkit_upload.png">}}

2. Now, you can open the Build window by clicking on {{<guilabel name="Remote Build">}} button.

	{{<img src="/images/migration/phonegap/localkit_build.png">}}

2. The debug build is selected by default. Click {{<guilabel name="Start Build">}}. 

    {{<img src="/images/migration/phonegap/cli_build.png">}}

3. It may take several minutes for the build to complete. Please wait. The following screen will appear after the build is successfully completed. You can then choose various ways to install the build app into your device. 

    {{<img src="/images/migration/phonegap/localkit_build_success.png">}}

## Where to go from here

To learn more about Monaca, please refer to the following materials:

- [Monaca Localkit Tutorial](/en/tutorials/monaca_localkit/)
- [Monaca Localkit Manual](/en/products_guide/monaca_localkit/)
- [Sample Apps](/en/sampleapp/samples/)