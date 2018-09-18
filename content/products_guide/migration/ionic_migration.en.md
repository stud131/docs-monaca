---
title: Migrating from Ionic
weight: 30
---

In this page, we will demonstrate a quick and easy steps to migrate a Ionic project into Monaca using [Monaca CLI](/en/products_guide/monaca_cli/). After finish this guide, you would be able to run, test/debug and build an app from your Ionic project using Monaca! Let's get started!


## Prerequisite

1. Before starting the migration process, please make sure to read about the [Key Points](/en/products_guide/migration/key_point/) in order to have a seamless migration.

2. Install Monaca CLI globally with npm
{{<highlight bash>}}
$ npm install -g monaca
{{</highlight>}}

## Migration Steps

<ol>

<li>
After Monaca CLI installation, login with your Monaca account. 
{{<highlight bash>}}
$ monaca login
{{</highlight>}}
</li>

<li>
Navigate to your Ionic project directory.
{{<highlight bash>}}
$ cd <project dir>
{{</highlight>}}
</li>

<li>
Then, running <b>monaca init</b> to convert your project to Monaca's project structure:
{{<highlight bash>}}
$ monaca init
$ ...
$ ? Are you sure you want to continue initializing this project? Yes
$ ? Is it a transpilable project? Yes
$ ? Which command do you use to serve the app? ionic-app-scripts serve
$ ? Which command do you use to build the app? ionic-app-scripts build
$ ? Which command do you use to watch the changes from your app? ionic-app-scripts watch
{{</highlight>}}


After it is finished, 3 new commands should be injected to your <b>package.json</b> files as following:

{{<highlight javascript>}}
"scripts": {
    "monaca:preview": "ionic-app-scripts serve & ionic-app-scripts watch",
    "monaca:transpile": "ionic-app-scripts build",
    "monaca:debug": "ionic-app-scripts watch"
}
{{</highlight>}}
</li>
</ol>

## Debugging with Monaca CLI
{{% include "parts/products_guide/migration/debug_with_cli.en.md" %}}

## Building the app
{{% include "parts/products_guide/migration/build_app.en.md" %}}

## Where to go from here

To learn more about Monaca, please refer to the following materials:

- [Monaca CLI Tutorial](/en/tutorials/monaca_cli/)
- [Monaca CLI Manual](/en/products_guide/monaca_cli/)
- [Sample Apps](/en/sampleapp/samples/)