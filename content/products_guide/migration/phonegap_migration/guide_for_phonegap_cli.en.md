---
title: Guide for PhoneGap CLI Users
weight: 30
---

In this page, we will demonstrate a quick and easy steps to migrate a PhoneGap project into Monaca using [Monaca CLI](/en/products_guide/monaca_cli/). After finish this guide, you would be able to run, test/debug and build an app from your PhoneGap project using Monaca! Let's get started!


## Prerequisite

1. Before starting the migration process, please make sure to read about the [Key Differences](/en/products_guide/migration/phonegap_migration/introduction/) in order to have a seamless migration.   

2. If you want to create a Monaca account with PhoneGap ID, please go to [sign in with PhoneGap ID](/en/oauth/phonegap/authorize)

3. Install Monaca CLI globally with npm
{{<highlight javascript>}}
$ npm install -g monaca
{{</highlight>}}

## Start using Monaca CLI with PhoneGap Project

1. After Monaca CLI installation, login with your Monaca account. 
{{<highlight javascript>}}
$ monaca login
{{</highlight>}}

2. Navigate to the PhoneGap project directory.
{{<highlight js>}}
$ cd <project dir>
{{</highlight>}}

3. Then, you can start using Monaca CLI commands. Let's try previewing your app with the following command:
{{<highlight javascript>}}
$ monaca preview
{{</highlight>}}

## Debugging with Monaca CLI

[Monaca Debugger](/en/products_guide/debugger/) is an application for testing and debugging your Monaca apps on real devices in real-time. When developing Monaca apps on your local PC, assuming that your local PC is successfully paired with Monaca Debugger, all changes made to your project files will be pushed into your Monaca Debugger as soon as you save those changes.

Let's get started with Monaca Debugger as follows:

1. Install Monaca Debugger app on your device from Google Play or AppStore.

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/App_Store.jpg" width="100" link="https://itunes.apple.com/us/app/monaca/id550941371?mt=8">}}
    {{<img src="/images/monaca_ide/tutorial/testing_debugging/Google_play.png" width="100" link="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en">}}

    {{<note>}}
        If you want to install Monaca Debugger on Android emulator, please refer to {{<link href="/en/products_guide/debugger/installation/debugger_emulator/" title="Monaca Debugger for Android Emulator">}}.
    {{</note>}}

2. Launch Monaca Debugger app and sign in with your Monaca account. Make sure you are using the same account for Monaca CLI.

    {{<img src="/images/migration/telerik/5.png" width="350px">}}

3. Before starting to debug, you need to pair Monaca Debugger with the local PC first. Prior to the pairing, please pay attention to the following points:

    - Monaca Debugger and the local PC have to connect to the same network connection (LAN or Wi-Fi).
    - Disable the local PC’s firewall.

4. After the above points are confirmed, we can now start pairing. In the terminal, navigate to the project directory and type `monaca debug`.

    {{<highlight javascript>}}
$ cd <project dir>
$ monaca debug{{</highlight>}}

5. Then, a popup message prompting you to pair the debugger with the local PC will appear inside Monaca Debugger.

    {{<img src="/images/monaca_cli/tutorial/testing_debugging/2.png" width="350">}}

6. If your pairing is successful, your local project name will appear under `Local Projects` in Monaca Debugger. However, if you fail the pairing, please refer to [Fail to Pair Monaca Debugger](/en/products_guide/debugger/troubleshooting/#fail-to-pair-monaca-debugger).

    {{<img src="/images/migration/phonegap/debugger_cli.png" width="350">}}

7. To run a project, simply tap on the project name in Monaca Debugger (as shown in the above picture).

8. Your project should now be running in the debugger. Go ahead and try out the various operations of your project! After that, try making some code changes and save them. Then, you should see the changes reflected in the debugger. 

{{<note>}}
    In order to stop debugging and unpair the debugger, press <code>Ctrl+c</code>.
{{</note>}}

## Building the app

Now that you can use Monaca CLI commands with your PhoneGap project, let's start building it with Monaca CLI. For simplicity, we only show how to create a debug build for Android in this guide. 

### Using CLI Command Only
1. Navigate to the PhoneGap project directory.
{{<highlight js>}}
$ cd <project dir>
{{</highlight>}}

2. Start Android Debug Build  
{{<highlight js>}}
$ monaca remote build android --build-type=debug
{{</highlight>}}

### Using CLI Command with GUI
1. Navigate to the PhoneGap project directory.
{{<highlight js>}}
$ cd <project dir>
{{</highlight>}}

2. Open the Build Window to start building.
{{<highlight js>}}
$ monaca remote build --browser
{{</highlight>}}

3. The Debug build is selected by default. So, just click on {{<guilabel name="Start Build">}}. 

	{{<img src="/images/migration/phonegap/cli_build.png">}}

4. It may take several minutes for the build to complete. Please wait. The following screen will appear after the build is successfully completed. You can then choose various ways to install the build app into your device. 

  {{<img src="/images/migration/phonegap/localkit_build_success.png">}}


## Where to go from here

To learn more about Monaca, please refer to the following materials:

- [Monaca CLI Tutorial](/en/tutorials/monaca_cli/)
- [Monaca CLI Manual](/en/products_guide/monaca_cli/)
- [Sample Apps](/en/sampleapp/samples/)