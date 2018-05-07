---
title: Guide for PhoneGap Desktop App Users
weight: 40
---

In this page, we will demonstrate a quick and easy steps to migrate a PhoneGap project into Monaca using [Monaca Localkit](/en/products_guide/monaca_localkit/). After finish this guide, you would be able to run, test/debug and build an app from your PhoneGap project using Monaca! Let's get started!


## Prerequisite

1. Before starting the migration process, please make sure to read about the [Migration Concept](/en/products_guide/migration/phonegap_migration/introduction/) in order to have a seamless migration.   

2. If you want to create a Monaca account with PhoneGap ID, please go to [sign in with PhoneGap ID](/en/oauth/phonegap/authorize)

3. Download and install the latest version of Monaca Localkit [here](https://monaca.io/localkit.html).    

## Importing PhoneGap project into Monaca Localkit

1. Open Monaca Localkit and sign in with your Monaca account.  

	{{<img src="/images/monaca_localkit/manual/overview/1.png">}}

2. Click on the `+` button. Then, select {{<menu menu1="Import" menu2="From Local Cordova Project">}}.

	{{<img src="/images/migration/phonegap/localkit_import_project.png">}}

3. Select your project directory and enter the project name. 

	{{<img src="/images/migration/phonegap/localkit_project_info.png" width="500">}}
	

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