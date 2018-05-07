---
title: Guide for PhoneGap CLI Users
weight: 20
---

In this page, we will demonstrate a quick and easy steps to migrate a PhoneGap project into Monaca. After finish this guide, you would be able to run, test/debug and build an app from your PhoneGap project using Monaca! Let's get started!


## Migration Guides

### Before Start Migrating

1. [Differences Between PhoneGap & Monaca Project](/en/products_guide/migration/phonegap_migration/fundamentals/)  

2. [Create Monaca Account with PhoneGap ID](/en/oauth/phonegap/authorize)  
3. Install Monaca CLI globally with npm
{{<highlight js>}}
  $ npm install -g monaca
{{</highlight>}}

4. Login new Monaca account
{{<highlight js>}}
  $ monaca login
{{</highlight>}}

### Import and Build PhoneGap Project

1. Move to your PhoneGap project directory, upload it to Monaca Cloud.
{{<highlight js>}}
  $ cd <project dir>
  $ monaca upload
{{</highlight>}}

2. Start build
{{<highlight js>}}
  $ monaca remote build --browser
{{</highlight>}}

3. The debug build is selected by default. Click {{<guilabel name="Start Build">}}. 

	{{<img src="/images/migration/phonegap/cli_remote_build.png" width="400">}}


## Where to go from here

To learn more about Monaca, please refer to the following materials:

- [Monaca CLI Tutorial](/en/tutorials/monaca_cli/)
- [Monaca CLI Manual](/en/products_guide/monaca_cli/)
- [Sample Apps](/en/sampleapp/samples/)