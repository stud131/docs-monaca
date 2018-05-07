---
title: Guide for PhoneGap CLI Users
weight: 30
---

In this page, we will demonstrate a quick and easy steps to migrate a PhoneGap project into Monaca using [Monaca CLI](/en/products_guide/monaca_cli/). After finish this guide, you would be able to run, test/debug and build an app from your PhoneGap project using Monaca! Let's get started!


## Prerequisite

1. Before starting the migration process, please make sure to read about the [Migration Concept](/en/products_guide/migration/phonegap_migration/introduction/) in order to have a seamless migration.   

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