---
title: Guide for PhoneGap CLI Users
weight: 20
---

In this page, we will demonstrate a quick and easy steps to migrate a PhoneGap project into Monaca. After finish this guide, you would be able to run, test/debug and build an app from your PhoneGap project using Monaca! Let's get started!


## Migration Guides

### Before Start Migrating

1. [Create Monaca Account with PhoneGap ID](https://monaca.mobi/en/oauth/phonegap/authorize)
2. Install Monaca CLI globally with npm
{{<highlight js>}}
  $ npm install -g monaca
{{</highlight>}}

3. Login new account
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


## Where to go from here

To learn more about Monaca, please refer to the following materials:

- [Monaca CLI Tutorial](/en/tutorials/monaca_cli/)
- [Monaca CLI Manual](/en/products_guide/monaca_cli/)
- [Sample Apps](/en/sampleapp/samples/)