---
title: Migrating from React
weight: 30
---

In this page, we will demonstrate a quick and easy steps to migrate a React project into Monaca using [Monaca CLI](/en/products_guide/monaca_cli/). After finish this guide, you would be able to run, test/debug and build an app from your React project using Monaca! Let's get started!


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
Navigate to your React project directory and eject the configuration file
{{<highlight bash>}}
$ cd <project dir>
$ npm run eject
$ npm install
{{</highlight>}}
</li>

<li>
Since there are no watch script, we need to create one. It is very easy, you can do as following:

  <ul>

  <li> Copy <b>scripts/build.js</b> as <b>scripts/watch.js</b> </li>

  <li> Change <b>build</b> function as following: </li>

  </ul>

{{<highlight javascript>}}
function build(previousFileSizes) {
  console.log('Creating an optimized production build...');
  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.watch({},(err, stats) => {
      if (err) {
        return reject(err);
      } else {
        copyPublicFolder();
      }
      console.log(stats.toString({
        chunks: false,
        colors: true
      }));
    });
  });
}
{{</highlight>}}
</li>

<li>
Then, running <b>monaca init</b> to convert your project to Monaca's project structure:
{{<highlight bash>}}
$ monaca init
$ ...
$ ? Are you sure you want to continue initializing this project? Yes
$ ? Is it a transpilable project? Yes
$ ? Which command do you use to serve the app? node scripts/start.js
$ ? Which command do you use to build the app? node scripts/build.js
$ ? Which command do you use to watch the changes from your app? node scripts/watch.js
{{</highlight>}}


After it is finished, 3 new commands should be injected to your <b>package.json</b> files as following:

{{<highlight javascript>}}
"scripts": {
    "monaca:preview": "node scripts/start.js & node scripts/watch.js",
    "monaca:transpile": "node scripts/build.js",
    "monaca:debug": "node scripts/watch.js"
}
{{</highlight>}}
</li>

<li>
Config build output directory

<ul>
<li>
Open <b>scripts/build.js</b> & <b>scripts/watch.js</b> and remove <b>fs.emptyDirSync(paths.appBuild);</b> from function <b>measureFileSizesBeforeBuild</b> so that the build directory is not deleted.
</li>
<li>
Open <b>config/paths.js</b> and change <b>appBuild</b> directory and <b>servedPath</b> as following
</li>
</ul>
{{<highlight javascript>}}
module.exports = {
    appBuild: resolveApp('www'),
    servedPath: './'
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